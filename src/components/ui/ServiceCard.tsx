import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  highlights?: string[];
  queryParam: string;
  badge?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  highlights = [],
  queryParam,
  badge,
  className = '',
}: ServiceCardProps) {
  return (
    <div
      className={`group relative flex flex-col justify-between bg-white rounded-2xl border border-[#E8DFD5] p-6 sm:p-7 hover:border-[#BD954E]/60 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${className}`}
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C0713] group-hover:text-[#4A1525] transition-colors leading-snug">
            {title}
          </h3>
          {badge && (
            <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/20">
              {badge}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm font-medium text-[#BD954E] mb-3">
          {subtitle}
        </p>

        <p className="text-sm text-[#575253] leading-relaxed mb-5">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="space-y-2 mb-6 pt-2 border-t border-[#F4ECE1]">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#575253]">
                <CheckCircle2 className="w-4 h-4 text-[#BD954E] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-4 border-t border-[#F4ECE1]">
        <Link
          href={`/contact?service=${encodeURIComponent(queryParam)}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A1525] group-hover:text-[#641C32] transition-colors focus-visible:ring-2 focus-visible:ring-[#BD954E] rounded"
        >
          <span>Enquire about this celebration</span>
          <ArrowRight className="w-4 h-4 text-[#BD954E] group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
