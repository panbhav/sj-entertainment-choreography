import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-heading max-w-3xl ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            light
              ? 'bg-[#4A1525]/40 text-[#D4B272] border border-[#BD954E]/30'
              : 'bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/20'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#BD954E]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={`font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-[#FAF7F2]' : 'text-[#2C0713]'
        }`}
      >
        {title}
      </h2>

      {/* Subtle gold separator line */}
      <div
        className={`flex items-center gap-2 my-4 ${
          isCenter ? 'justify-center' : 'justify-start'
        }`}
        aria-hidden="true"
      >
        <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#BD954E]" />
        <span className="w-1.5 h-1.5 rotate-45 bg-[#BD954E]" />
        <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#BD954E]" />
      </div>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-[#EAD9B7]/90' : 'text-[#575253]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

