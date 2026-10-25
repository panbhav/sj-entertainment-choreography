import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy (Draft for Owner Review)',
  description: 'Draft privacy policy for review prior to production enquiry collection.',
};

export default function PrivacyPolicyPage() {
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
              It outlines prospective information handling for website celebration enquiries.
              Final legal terms and retention periods should be confirmed with legal counsel prior
              to active production data collection.
            </p>
          </div>
        </div>

        <header className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C0713]">
            Privacy Policy (Draft)
          </h1>
          <p className="text-xs text-[#888182]">
            Last Updated: October 2026 • Prepared for SJ Entertainment Choreography
          </p>
        </header>

        <div className="prose prose-stone max-w-none text-sm leading-relaxed text-[#575253] space-y-6">
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2C0713]">Contact form delivery</h2>
            <p>Contact enquiries are submitted over HTTPS to FormSubmit, which processes the information you enter and emails it to sjentertainmentch@gmail.com. Its security check may use reCAPTCHA. FormSubmit states that form submissions are retained in its archive for 30 days. Only include details needed to plan your celebration.</p>
            <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-[#4A1525] underline underline-offset-4">FormSubmit privacy information</a>
          </section>
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2C0713]">Team introductions</h2>
            <p>The Join Our Team introduction is prepared locally in your browser. Choosing WhatsApp or email opens your selected app with the details you entered; you review and send the message there. The website does not automatically deliver or store this introduction. WhatsApp and your email provider handle messages under their own privacy policies.</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2C0713]">
              1. Purpose of Enquiry Collection
            </h2>
            <p>
              When prospective clients submit celebration enquiry forms on {siteConfig.name},
              we request basic contact information (such as your name, phone or WhatsApp number,
              email address, celebration city, and tentative event dates) solely to respond to
              your enquiry, check choreographer availability, and prepare personalized celebration proposals.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2C0713]">
              2. Data Confidentiality & Sharing
            </h2>
            <p>
              We treat wedding celebration details with strict privacy. Information submitted
              through our website is never sold, leased, or broadcast to unauthorized third parties.
              Sajid & Joya and necessary event planning coordinators review enquiries. The form delivery provider processes contact submissions as described above.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2C0713]">
              3. Media & Rehearsal Footage
            </h2>
            <p>
              Any future photography or performance reels featured on this website are published
              strictly with client knowledge and consent. Rehearsal recordings provided to families
              for personal practice remain confidential to the rehearsing parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-[#2C0713]">
              4. Review & Updates
            </h2>
            <p>
              This draft policy will be updated as digital enquiry delivery mechanisms and formal
              business policies are finalized by Sajid & Joya.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
