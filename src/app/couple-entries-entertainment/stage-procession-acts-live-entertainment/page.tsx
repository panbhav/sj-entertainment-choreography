import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  ChevronRight,
  Music,
  Settings,
} from 'lucide-react';
import { artistCategories } from '@/content/entriesAndArtists';
import { withBasePath } from '@/lib/basePath';
import EnquiryCTA from '@/components/common/EnquiryCTA';

export const metadata: Metadata = {
  title: 'Stage & Procession Acts, Artists & Live Entertainment | Sajid & Joya',
  description:
    'Curated live wedding entertainment by Sajid & Joya across India: symphonic dhol ensembles, professional dance troupes, folk performers, live vocalists, classical instrumentalists, celebrity emcees, and visual spectacles.',
};

export default function StageProcessionActsPage() {
  const publishedArtists = artistCategories.filter((a) => a.isPublished);

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
            className="flex items-center gap-2 text-xs text-[#888182] mb-6 flex-wrap"
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
            <span className="text-[#4A1525] font-semibold">
              Stage & Procession Acts, Artists & Live Entertainment
            </span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
              <span>Live Performance Ensembles</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C0713] leading-tight">
              Stage & Procession Acts, Artists & Live Entertainment
            </h1>

            <p className="text-base sm:text-lg text-[#575253] leading-relaxed mt-5">
              Live artistry transforms a wedding from an event into an immersive theatrical experience.
              Sajid & Joya curate, direct, and integrate world-class performance troupes, percussionists,
              soulful vocalists, and visual spectacles directly into your celebration timeline.
            </p>

            {/* Quick jump pills */}
            <div className="pt-6 flex flex-wrap gap-2">
              {publishedArtists.map((a) => (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFD5] text-xs font-medium text-[#4A1525] hover:border-[#BD954E] hover:bg-[#FAF6EF] transition-all"
                >
                  {a.name}
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
            <Music className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-[#575253] leading-relaxed">
            <span className="font-semibold text-[#4A1525]">Curated Integration:</span> Every live act is synchronized with your wedding choreography and event schedule. Sajid & Joya manage the technical riders, artist cues, sound checks, and stage direction so your celebration unfolds flawlessly.
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED ARTISTS SHOWCASE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16 sm:space-y-24">
        {publishedArtists.map((artist, idx) => (
          <div
            id={artist.id}
            key={artist.id}
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
                src={withBasePath(artist.imageUrl)}
                alt={artist.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C0713]/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20">
                  Act 0{idx + 1}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-serif italic text-[#E5D7B7]">
                  {artist.subtitle}
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
                  Live Artist Ensemble
                </span>
                <span className="text-xs text-[#BD954E] font-medium">
                  Curated & Directed
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C0713] leading-snug">
                {artist.name}
              </h2>

              <p className="text-xs font-medium text-[#BD954E]">
                {artist.subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#575253] leading-relaxed">
                {artist.description}
              </p>

              {/* Suggested Celebration Moments */}
              {artist.suggestedMoments && artist.suggestedMoments.length > 0 && (
                <div className="pt-3 border-t border-[#F4ECE1]">
                  <h3 className="text-xs font-semibold text-[#4A1525] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
                    <span>Ideal Celebration Moments</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {artist.suggestedMoments.map((moment, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-[#FAF7F2] border border-[#E8DFD5] text-xs font-medium text-[#4A1525]"
                      >
                        {moment}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Production & Rider Notes */}
              {artist.productionNotes && (
                <div className="pt-2">
                  <h3 className="text-[11px] font-semibold text-[#888182] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Settings className="w-3.5 h-3.5 text-[#888182]" />
                    <span>Technical & Rider Coordination</span>
                  </h3>
                  <p className="text-xs text-[#888182] leading-relaxed">
                    {artist.productionNotes}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-[#F4ECE1] flex flex-wrap items-center gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(artist.queryParam)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4B272]" />
                  <span>Enquire for this Performance Act</span>
                </Link>

                <a
                  href="#top"
                  className="text-xs text-[#888182] hover:text-[#4A1525] transition-colors"
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
              Part 01 of Live Entertainment
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
              Couple & Bridal Entry Concepts
            </h3>
            <p className="text-xs sm:text-sm text-[#DFCBB0] leading-relaxed">
              Explore 7 tailored entrance themes, from royal palace processions and lyrical slow-walks to Phoolon Ki Chaadar botanical pathways and cinematic reveals.
            </p>
          </div>

          <Link
            href="/couple-entries-entertainment/couple-bridal-entries"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#D4B272] hover:bg-[#E5C78B] text-[#2C0713] transition-colors shadow-md shrink-0"
          >
            <span>Explore Entry Concepts</span>
            <ArrowRight className="w-4 h-4 text-[#2C0713]" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FINAL ENQUIRY CTA
          ========================================================================= */}
      <EnquiryCTA
        title="Looking to curate memorable live acts for your wedding?"
        description="Connect with Sajid & Joya to discuss artist availability, technical setups, and customized stage integrations for your dates."
        buttonText="Discuss Live Entertainment"
        serviceQuery="artists-live-entertainment"
      />
    </div>
  );
}
