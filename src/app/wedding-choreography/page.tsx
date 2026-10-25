import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, CheckCircle2, Plane } from 'lucide-react';
import { getMedia } from '@/content/media';
import {
  signaturePerformances,
  rehearsalOptions,
  choreographyPlanningSteps,
} from '@/content/services';
import { weddingChoreographyFaqs } from '@/content/faqs';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import VideoPreview from '@/components/media/VideoPreview';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import Accordion from '@/components/ui/Accordion';
import EnquiryCTA from '@/components/common/EnquiryCTA';
import CelebrationCard from '@/components/celebrations/CelebrationCard';
import { celebrationChapters } from '@/content/celebrations';
import BackgroundArtists from '@/components/celebrations/BackgroundArtists';

export const metadata: Metadata = {
  alternates: { canonical: '/wedding-choreography' },
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
                <a href="#background-artists" className="text-sm font-semibold text-[#4A1525] underline underline-offset-4">Add supporting artists</a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-2 bg-gradient-to-b from-[#DFCBB0]/40 to-transparent shadow-xl">
                <VideoPreview
                  media={heroMedia}
                  variant="ivory"
                  className="rounded-2xl overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DESTINATION WEDDING SPOTLIGHT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-6">
        <div className="rounded-3xl bg-[#2C0713] text-[#FAF7F2] p-8 sm:p-12 lg:p-16 border border-[#4A1525] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BD954E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4A1525]/80 text-[#D4B272] border border-[#BD954E]/40 text-xs font-semibold tracking-wider uppercase">
                <Plane className="w-3.5 h-3.5 text-[#D4B272]" />
                <span>Specialized Destination Service</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                Destination Wedding Choreography Across India & Worldwide
              </h2>
              <p className="text-sm sm:text-base text-[#EAD9B7]/90 leading-relaxed">
                Planning a royal palace wedding in Rajasthan, a beachside mandap in Goa, or an overseas celebration? Sajid & Joya bring over 15 years of on-ground destination choreography experience — harmonizing virtual pre-wedding rehearsals across timezones with high-energy on-site tech dry runs, sound-light cues, and multi-ceremony dance direction.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Udaipur & Jaipur Palaces', 'Goa Beachfront Resorts', 'Kerala Backwaters', 'Jim Corbett & Hills', 'NRI & Multi-City Relatives'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[#4A1525] border border-[#BD954E]/30 text-[#FAF7F2]/90">
                    ✦ {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact?service=destination-weddings"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#BD954E] hover:bg-[#D4B272] text-[#2C0713] transition-all shadow-md hover:scale-105"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Plan Your Destination Wedding</span>
                </Link>
                <a
                  href="#celebrations"
                  className="text-xs sm:text-sm font-medium text-[#D4B272] hover:text-white transition-colors"
                >
                  Explore Ceremony Breakdown ↓
                </a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#BD954E]/30 shadow-lg">
                <ResponsiveImage
                  media={getMedia('choreography-hero')}
                  variant="ivory"
                  className="rounded-2xl"
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
          eyebrow="Dance & Entry Formats"
          title="Wedding Celebrations"
          description="Choose your function, then explore its dance routines and entry types. Click any subtype to see what the choreography includes and who it suits."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {celebrationChapters.map((chapter, index) => (
            <CelebrationCard key={chapter.slug} chapter={chapter} index={index} />
          ))}
        </div>
        <p className="celebration-index-note">These are choreography and entry formats for each function. You can combine them and personalise the music, performers and rehearsal plan.</p>
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
                <span className="font-serif text-3xl font-bold text-[#8C6A2E] block mb-2">
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
                <div className="text-[11px] text-[#70656A] font-medium pt-1">
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
          OTHER DEDICATED CELEBRATION PAGES
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-[#E8DFD5] pt-16">
        <SectionHeading
          eyebrow="Explore More"
          title="Other Celebration Categories"
          description="Explore our dedicated pages for theatrical entrances and tailored multi-day packages."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/couple-entries-entertainment"
            className="group flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#BD954E]/60 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8C6A2E] block mb-2">
                Dedicated Page 02
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2C0713] group-hover:text-[#4A1525] transition-colors mb-2">
                Couple Entries & Live Entertainment
              </h3>
              <p className="text-sm text-[#575253] leading-relaxed">
                Theatrical arrival concepts, live dhol ensembles, folk troupes, and spectacular ceremony reveals across India.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#F4ECE1] flex items-center justify-between text-xs font-semibold text-[#4A1525]">
              <span>Open Entries & Entertainment page</span>
              <ArrowRight className="w-4 h-4 text-[#BD954E] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/packages"
            className="group flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#BD954E]/60 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8C6A2E] block mb-2">
                Dedicated Page 03
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2C0713] group-hover:text-[#4A1525] transition-colors mb-2">
                Experiences & Packages
              </h3>
              <p className="text-sm text-[#575253] leading-relaxed">
                Thoughtfully curated service combinations, planning frameworks, and transparent quotation factors.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#F4ECE1] flex items-center justify-between text-xs font-semibold text-[#4A1525]">
              <span>Open Packages & Quotes page</span>
              <ArrowRight className="w-4 h-4 text-[#BD954E] group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FINAL ENQUIRY CTA
          ========================================================================= */}
      <BackgroundArtists />

      <EnquiryCTA
        title="Ready to choreograph your sangeet or couple dance?"
        description="Connect with Sajid & Joya to discuss your song list, ceremony timeline, and rehearsal availability across India."
        buttonText="Plan Your Choreography"
        serviceQuery="sangeet-spectacular"
      />
    </div>
  );
}


