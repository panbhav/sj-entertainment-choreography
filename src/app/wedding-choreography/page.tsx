import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getMedia } from '@/content/media';
import {
  weddingCelebrations,
  signaturePerformances,
  rehearsalOptions,
  choreographyPlanningSteps,
} from '@/content/services';
import { weddingChoreographyFaqs } from '@/content/faqs';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import Accordion from '@/components/ui/Accordion';
import EnquiryCTA from '@/components/common/EnquiryCTA';

export const metadata: Metadata = {
  title: 'Wedding Choreography & Celebrations',
  description:
    'Sangeet, Haldi, Mehendi, Couple dance, and Dance Along with SJ interactive sessions choreographed by Sajid & Joya across India.',
};

export default function WeddingChoreographyPage() {
  const heroMedia = getMedia('choreography-hero');
  const danceAlongMedia = getMedia('dance-along-session');

  return (
    <div className="interior-page flex flex-col space-y-24 md:space-y-32">
      {/* =========================================================================
          HERO & INTRODUCTION
          ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
                <span>Celebration Choreography</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C0713] leading-tight">
                Choreography crafted for every wedding chapter
              </h1>

              <p className="text-base sm:text-lg text-[#575253] leading-relaxed">
                From vibrant daytime Haldi rhythms and graceful Mehendi circles to high-octane
                Sangeet night showcases. Sajid & Joya curate routines designed around your family’s
                comfort, chosen songs, and natural stage presence.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-colors shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#D4B272]" />
                  <span>Plan Your Choreography</span>
                </Link>

                <a
                  href="#celebrations"
                  className="text-sm font-semibold text-[#4A1525] hover:text-[#641C32] transition-colors underline-offset-4 hover:underline"
                >
                  Explore Ceremonies ↓
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-2 bg-gradient-to-b from-[#DFCBB0]/40 to-transparent shadow-xl">
                <ResponsiveImage
                  media={heroMedia}
                  variant="ivory"
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION A: WEDDING CELEBRATIONS
          ========================================================================= */}
      <section id="celebrations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
        <SectionHeading
          eyebrow="Ceremonies & Traditions"
          title="Wedding Celebrations"
          description="Every ritual carries its own emotion and energy. We tailor dance concepts to harmonize with each occasion's unique spirit."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {weddingCelebrations.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.name}
              subtitle={service.subtitle}
              description={service.description}
              highlights={service.highlights}
              queryParam={service.queryParam}
              badge="Celebration"
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION B: SIGNATURE PERFORMANCES & SESSIONS
          ========================================================================= */}
      <section className="bg-[#F5EFEB] py-20 border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Stage & Floor Highlights"
            title="Signature Performances & Sessions"
            description="Dedicated spotlights for the couple, solo stars, family chapters, and an interactive dance session where every guest participates."
            className="mb-14"
          />

          {/* Featured Spotlight: Dance Along with SJ */}
          <div id="dance-along" className="mb-14 rounded-3xl bg-white border border-[#BD954E]/50 p-6 sm:p-10 shadow-lg scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
                  <span>Signature Guest Highlight</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2C0713]">
                  Dance Along with SJ
                </h3>

                <p className="text-sm sm:text-base text-[#575253] leading-relaxed">
                  A live, instructor-led wedding day floor session where Sajid & Joya take the floor
                  to guide all your guests through effortless, catchy steps in real time.
                </p>

                <p className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                  No rehearsals needed for guests. Perfect for breaking the ice after formal performances,
                  energizing the dance floor, and getting every aunt, uncle, cousin, and friend dancing together.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact?service=dance-along-with-sj"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#4A1525] hover:bg-[#641C32] text-white transition-colors"
                  >
                    <span>Enquire About Dance Along with SJ</span>
                    <ArrowRight className="w-4 h-4 text-[#BD954E]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <ResponsiveImage
                  media={danceAlongMedia}
                  variant="ivory"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Performance Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {signaturePerformances
              .filter((p) => p.id !== 'dance-along-sj')
              .map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.name}
                  subtitle={service.subtitle}
                  description={service.description}
                  highlights={service.highlights}
                  queryParam={service.queryParam}
                  badge="Performance"
                />
              ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PLANNING PROCESS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          eyebrow="Structured & Calm"
          title="The Choreography Planning Process"
          description="How we guide you from song selection to your confident stage performance."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {choreographyPlanningSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFD5] shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-bold text-[#BD954E] block mb-2">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2C0713] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          REHEARSAL OPTIONS (Driven by configuration)
          ========================================================================= */}
      <section className="bg-white py-16 sm:py-20 border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Flexible Formats"
            title="Rehearsal & Production Options"
            description="Rehearsal options are tailored to each wedding’s schedule and location. The following formats are discussed and customized during planning."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rehearsalOptions.map((opt) => (
              <div
                key={opt.id}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] space-y-3"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BD954E] shrink-0" />
                  <h4 className="font-serif text-base font-bold text-[#2C0713]">
                    {opt.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                  {opt.description}
                </p>
                <div className="text-[11px] text-[#888182] font-medium pt-1">
                  {opt.availabilityNote}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-[#FAF6EF] border border-[#DFCBB0] text-center text-xs text-[#575253] max-w-2xl mx-auto">
            <span className="font-semibold text-[#4A1525]">Note:</span> Rehearsal session counts, studio locations, and event-day management are confirmed collaboratively during date scheduling.
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          eyebrow="Helpful Clarity"
          title="Frequently Asked Questions"
          description="Practical answers to common questions about preparing for your wedding choreography."
          className="mb-12"
        />

        <Accordion items={weddingChoreographyFaqs} />
      </section>

      {/* =========================================================================
          FINAL ENQUIRY CTA
          ========================================================================= */}
      <EnquiryCTA
        title="Ready to choreograph your sangeet or couple dance?"
        description="Connect with Sajid & Joya to discuss your song list, ceremony timeline, and rehearsal availability across India."
        buttonText="Plan Your Choreography"
        serviceQuery="sangeet-spectacular"
      />
    </div>
  );
}


