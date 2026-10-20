import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Service (Draft for Owner Review)',
  description: 'Draft terms of service for review prior to production booking agreements.',
};

export default function TermsOfServicePage() {
  return (
    <div className="py-12 sm:py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4A1525] hover:text-[#641C32]"
        >
          <ArrowLeft className="w-4 h-4 text-[#BD954E]" />
          <span>Return to Home</span>
        </Link>

        {/* Clear draft review notice banner */}
        <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-[#BD954E] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#8C6A2E] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#2C0713]">
            <p className="font-semibold text-[#4A1525]">Draft for Owner Review</p>
            <p className="mt-1 leading-relaxed text-[#575253]">
              This document is an initial draft prepared for {siteConfig.name} owner review.
              It does not constitute final legal advice or finalized terms. Genuine booking contracts,
              cancellation schedules, and payment terms will be provided directly in written
              client engagement agreements.
            </p>
          </div>
        </div>

        <header className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C0713]">
            Terms of Service (Draft)
          </h1>
          <p className="text-xs text-[#888182]">
            Last Updated: October 2026 • Prepared for SJ Entertainment Choreography
          </p>
        </header>

        <div className="prose prose-stone max-w-none text-sm leading-relaxed text-[#575253] space-y-6">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2C0713]">
              1. Website Presentation & Enquiries
            </h2>
            <p>
              The content published on this website provides general illustrative descriptions of
              wedding choreography, couple entry concepts, and live artist entertainment services
              offered by {siteConfig.name} across India.
            </p>
            <p>
              Submitting an enquiry via this website initiates availability discussions and does not
              constitute a confirmed booking, date reservation, or legal contract until formal agreements
              are mutually signed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2C0713]">
              2. Intellectual Property & Choreography
            </h2>
            <p>
              All website text, branding, and proprietary choreography frameworks displayed or shared
              remain the intellectual property of Sajid & Joya. Concepts presented for discussion
              may not be commercially duplicated without written authorization.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2C0713]">
              3. Service Customization & Bookings
            </h2>
            <p>
              Each wedding celebration is distinct. Final schedules, rehearsal session counts, travel
              arrangements, and production technical riders are confirmed in formal written proposals
              tailored to each event.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
