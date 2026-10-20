'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  className = '',
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        const buttonId = `accordion-button-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#BD954E]/60 shadow-md'
                : 'bg-[#FAF7F2] hover:bg-white border-[#E8DFD5]'
            }`}
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between text-left p-5 sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BD954E]"
              >
                <span
                  className={`font-serif text-base sm:text-lg font-semibold pr-4 leading-snug ${
                    isOpen ? 'text-[#4A1525]' : 'text-[#292526]'
                  }`}
                >
                  {item.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? 'bg-[#4A1525] text-white rotate-180'
                      : 'bg-[#F4ECE1] text-[#4A1525]'
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#575253] leading-relaxed border-t border-[#F4ECE1] pt-4"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
