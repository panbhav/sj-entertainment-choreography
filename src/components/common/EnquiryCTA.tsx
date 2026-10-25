import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, MapPin, ArrowRight } from 'lucide-react';

interface EnquiryCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  serviceQuery?: string;
  buttonHref?: string;
  className?: string;
}

export default function EnquiryCTA({
  title = 'Ready to choreograph your celebration?',
  description = 'Share your wedding dates, envisioned songs, or entry concepts. Sajid & Joya work closely with you to craft an unforgettable musical celebration.',
  buttonText = 'Plan Your Celebration',
  serviceQuery,
  buttonHref,
  className = '',
}: EnquiryCTAProps) {
  const enquiryHref = buttonHref || (serviceQuery
    ? `/contact?service=${encodeURIComponent(serviceQuery)}`
    : '/contact');

  return (
    <section className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#380E1B] via-[#4A1525] to-[#2C0713] p-8 sm:p-12 md:p-16 text-center text-[#FAF7F2] shadow-2xl border border-[#BD954E]/30 overflow-hidden">
          {/* Subtle decorative gold motif in background */}
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-[#BD954E]/15 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-[#BD954E]/15 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2]/10 border border-[#D4B272]/30 text-xs text-[#EAD9B7] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4B272]" />
              <span>Sajid & Joya • Wedding Choreography</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#EAD9B7]/90 leading-relaxed max-w-xl mx-auto">
              {description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={enquiryHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide bg-[#BD954E] hover:bg-[#D4B272] text-[#2C0713] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-[#2C0713]" />
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 text-[#2C0713]" />
              </Link>
            </div>

            <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#EAD9B7]/80">
              <MapPin className="w-3.5 h-3.5 text-[#D4B272]" />
              <span>Available for destination and local celebrations across India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
