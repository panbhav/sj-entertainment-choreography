import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/content/siteConfig';

export const metadata: Metadata = { title: 'Thank You for Reaching Out', robots: { index: false, follow: false } };

export default function EnquiryThankYouPage() {
  return <div className="interior-page py-20 px-5"><div className="max-w-xl mx-auto text-center rounded-3xl border border-[#DFCBB0] bg-white p-8 sm:p-12">
    <CheckCircle2 size={42} className="mx-auto text-[#967443] mb-6" aria-hidden="true" />
    <p className="text-xs uppercase tracking-widest text-[#967443]">YOUR CELEBRATION STARTS WITH A CONVERSATION</p>
    <h1 className="font-serif text-4xl text-[#4A1525] my-5">Thank you for<br /><em>reaching out.</em></h1>
    <p className="text-sm text-[#70656A] leading-relaxed">Sajid & Joya look forward to discussing your plans. For a direct conversation or if you had trouble submitting, you can also connect on WhatsApp.</p>
    <p className="text-xs text-[#70656A] leading-relaxed mt-4">An enquiry does not confirm a booking. Dates and arrangements are agreed personally.</p>
    <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#4A1525] text-white px-6 py-4 rounded-full text-sm mt-7">Talk to Sajid <ArrowUpRight size={16} /></a>
    <div className="mt-6"><Link href="/" className="text-sm text-[#4A1525] underline underline-offset-4">Back to Home</Link></div>
  </div></div>;
}
