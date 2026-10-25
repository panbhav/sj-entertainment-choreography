import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Compass,
  ShieldCheck,
} from 'lucide-react';
import { coupleEntryConcepts } from '@/content/entriesAndArtists';
import { withBasePath } from '@/lib/basePath';
import EnquiryCTA from '@/components/common/EnquiryCTA';
import BackgroundArtists from '@/components/celebrations/BackgroundArtists';

export const metadata: Metadata = {
  alternates: { canonical: '/couple-entries-entertainment/couple-bridal-entries' },
  title: 'Couple & Bridal Entry Concepts | Sajid & Joya Choreography',
  description:
    'Explore 7 curated luxury couple and bridal entry concepts by Sajid & Joya, from royal palace processions and lyrical slow-walks to cinematic Bollywood reveals with photorealistic visuals.',
};

export default function CoupleBridalEntriesPage() {
  const publishedEntries = coupleEntryConcepts.filter((c) => c.isPublished);

  return (
    <div id="top" className="interior-page flex flex-col space-y-20 md:space-y-28">
      {/* =========================================================================
          BREADCRUMB & HERO
          ========================================================================= */}
      <section className="pt-6 sm:pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-[#70656A] mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-[#4A1525] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#BD954E]" />
            <Link
              href="/couple-entries-entertainment"
              className="hover:text-[#4A1525] transition-colors"
            >
              Entries & Live Entertainment
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#BD954E]" />
            <span className="text-[#4A1525] font-semibold">Couple & Bridal Entry Concepts</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
              <span>Curated Theatrical Arrivals</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C0713] leading-tight">
              Couple & Bridal Entry Concepts
            </h1>

            <p className="text-base sm:text-lg text-[#575253] leading-relaxed mt-5">
              The wedding entrance is the single most photographed, filmed, and emotionally charged
              crescendo of your celebration. Sajid & Joya design custom entry concepts tailored to
              your venue architecture, attire aesthetics, music preferences, and production parameters.
            </p>

            {/* Quick jump pills */}
            <div className="pt-6 flex flex-wrap gap-2">
              {publishedEntries.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFD5] text-xs font-medium text-[#4A1525] hover:border-[#BD954E] hover:bg-[#FAF6EF] transition-all"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PLANNING GUIDANCE NOTICE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -my-8">
        <div className="p-5 sm:p-6 rounded-3xl bg-[#FAF6EF] border border-[#DFCBB0] flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-2xl bg-[#4A1525] text-[#D4B272] flex items-center justify-center shrink-0 shadow-sm">
            <Compass className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-[#575253] leading-relaxed">
            <span className="font-semibold text-[#4A1525]">Visualizing Your Entrance:</span> Each concept below features realistic high-end editorial styling to help you visualize the atmosphere, lighting, and pacing. During creative consultations, Sajid & Joya customize the choreography, audio prelude, and stage cues to your exact venue floorplan.
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED CONCEPTS SHOWCASE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16 sm:space-y-24">
        {publishedEntries.map((concept, idx) => (
          <div
            id={concept.id}
            key={concept.id}
            className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Column */}
            <div
              className={`lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#2C0713] group ${
                idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              <Image
                src={withBasePath(concept.imageUrl)}
                alt={concept.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C0713]/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20">
                  Concept 0{idx + 1}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-serif italic text-[#E5D7B7]">
                  Mood: {concept.mood}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div
              className={`lg:col-span-6 space-y-5 ${
                idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/20">
                  Theatrical Concept
                </span>
                <span className="text-xs text-[#8C6A2E] font-medium">
                  Tailored Production
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C0713] leading-snug">
                {concept.name}
              </h2>

              <p className="text-sm sm:text-base text-[#575253] leading-relaxed">
                {concept.description}
              </p>

              {/* Inclusions */}
              {concept.inclusions && concept.inclusions.length > 0 && (
                <div className="pt-3 border-t border-[#F4ECE1]">
                  <h3 className="text-xs font-semibold text-[#4A1525] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
                    <span>Creative Elements & Inclusions</span>
                  </h3>
                  <ul className="space-y-2">
                    {concept.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#575253]">
                        <CheckCircle2 className="w-4 h-4 text-[#BD954E] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Venue Considerations */}
              {concept.venueRequirements && concept.venueRequirements.length > 0 && (
                <div className="pt-2">
                  <h3 className="text-[11px] font-semibold text-[#70656A] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#70656A]" />
                    <span>Production & Venue Considerations</span>
                  </h3>
                  <ul className="space-y-1 text-xs text-[#70656A]">
                    {concept.venueRequirements.map((req, i) => (
                      <li key={i}>• {req}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-[#F4ECE1] flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(concept.queryParam)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4B272]" />
                  <span>Enquire for this Entry Concept</span>
                </Link>

                <a
                  href="#top"
                  className="text-xs text-[#70656A] hover:text-[#4A1525] transition-colors"
                >
                  ↑ Back to top
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================================
          CROSS-NAVIGATION SWITCHER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-[#E8DFD5] pt-16">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#2C0713] to-[#4A1525] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] uppercase tracking-widest text-[#D4B272] font-semibold">
              Part 02 of Live Entertainment
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              Stage & Procession Acts, Artists & Live Entertainment
            </h3>
            <p className="text-xs sm:text-sm text-[#DFCBB0] leading-relaxed">
              Complement your entrance and choreography with live bands, regional folk dancers, and visual spectacle acts.
            </p>
          </div>

          <Link
            href="/couple-entries-entertainment/stage-procession-acts-live-entertainment"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#D4B272] hover:bg-[#E5C78B] text-[#2C0713] transition-colors shadow-md shrink-0"
          >
            <span>Explore Live Artists & Acts</span>
            <ArrowRight className="w-4 h-4 text-[#2C0713]" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FINAL ENQUIRY CTA
          ========================================================================= */}
      <BackgroundArtists chapter="wedding-day" />

      <EnquiryCTA
        title="Ready to design your signature grand entrance?"
        description="Share your wedding date, venue style, and theme preferences. Sajid & Joya will conceptualize a breathtaking arrival customized to your story."
        buttonText="Discuss Your Entry Vision"
        serviceQuery="grand-entry-experience"
      />
    </div>
  );
}
