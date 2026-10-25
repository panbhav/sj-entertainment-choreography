import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Music,
  Crown,
} from 'lucide-react';
import { getMedia } from '@/content/media';
import { coupleEntryConcepts, artistCategories } from '@/content/entriesAndArtists';
import { withBasePath } from '@/lib/basePath';
import VideoPreview from '@/components/media/VideoPreview';
import SectionHeading from '@/components/common/SectionHeading';
import EnquiryCTA from '@/components/common/EnquiryCTA';
import BackgroundArtists from '@/components/celebrations/BackgroundArtists';

export const metadata: Metadata = {
  alternates: { canonical: '/couple-entries-entertainment' },
  title: 'Grand Couple Entries & Live Entertainment | Sajid & Joya',
  description:
    'Theatrical couple arrivals, bridal walks, symphonic dhol ensembles, and live artist curation by Sajid & Joya for luxury weddings across India.',
};

export default function CoupleEntriesEntertainmentPage() {
  const heroMedia = getMedia('entries-hero');

  // Preview entries for the showcase cards
  const previewEntries = coupleEntryConcepts.filter((c) => c.isPublished).slice(0, 4);
  const previewArtists = artistCategories.filter((a) => a.isPublished).slice(0, 4);

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
                <span>Theatrical Spectacles</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C0713] leading-tight">
                Grand Couple Entries & Live Entertainment
              </h1>

              <p className="text-base sm:text-lg text-[#575253] leading-relaxed">
                Make your wedding entrance an unforgettable visual and musical crescendo.
                Sajid & Joya curate theatrical entry concepts, synchronized procession music,
                and world-class live entertainment ensembles tailored to your venue architecture across India.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact?service=grand-entry-experience"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-colors shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#D4B272]" />
                  <span>Enquire for Your Wedding</span>
                </Link>

                <a
                  href="#entry-concepts"
                  className="text-sm font-semibold text-[#4A1525] hover:text-[#641C32] transition-colors underline-offset-4 hover:underline"
                >
                  Explore The Two Categories ↓
                </a>
                <a href="#background-artists" className="text-sm font-semibold text-[#4A1525] underline underline-offset-4">Background artists &amp; dancers</a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl p-2 bg-gradient-to-b from-[#DFCBB0]/40 to-transparent shadow-xl">
                <VideoPreview
                  media={heroMedia}
                  variant="wine"
                  className="rounded-2xl overflow-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-[#70656A] leading-relaxed">Entry and artist images are visual references for planning. Visit Our Work for real event films.</p>

      {/* =========================================================================
          SUBHEADING 01: COUPLE & BRIDAL ENTRY CONCEPTS
          ========================================================================= */}
      <section id="entry-concepts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
        <div className="bg-gradient-to-b from-[#FAF7F2] to-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#E8DFD5]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7EDF1] text-[#641C32] text-[11px] font-semibold tracking-wider uppercase mb-3">
                <Crown className="w-3.5 h-3.5 text-[#BD954E]" />
                <span>Primary Pillar 01</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C0713] leading-tight">
                Couple & Bridal Entry Concepts
              </h2>
              <p className="text-sm sm:text-base text-[#575253] leading-relaxed mt-3">
                A grand arrival sets the emotional tone of the entire night. We craft custom entrance
                choreography, audio preludes, pacing, and visual staging tailored to your attire and venue layout.
              </p>
            </div>

            <Link
              href="/couple-entries-entertainment/couple-bridal-entries"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-colors shadow-md shrink-0 group"
            >
              <span>Explore all entry concepts</span>
              <ArrowRight className="w-4 h-4 text-[#D4B272] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4 Visual Concept Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {previewEntries.map((concept, idx) => (
              <Link
                key={concept.id}
                href={`/couple-entries-entertainment/couple-bridal-entries#${concept.id}`}
                className="group flex flex-col bg-white rounded-2xl border border-[#E8DFD5] overflow-hidden hover:border-[#BD954E] hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-[#2C0713] overflow-hidden">
                  <Image
                    src={withBasePath(concept.imageUrl)}
                    alt={concept.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] text-white/90 font-medium px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm">
                    {concept.mood}
                  </span>
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6A2E]">
                      Concept 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#2C0713] group-hover:text-[#4A1525] transition-colors mt-0.5 line-clamp-1">
                      {concept.name}
                    </h3>
                    <p className="text-xs text-[#575253] mt-1.5 line-clamp-2 leading-relaxed">
                      {concept.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#F4ECE1] flex items-center justify-between text-xs font-semibold text-[#4A1525]">
                    <span>View details & photos</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#BD954E] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Key Framework Highlights */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BD954E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#2C0713] uppercase tracking-wider">
                  Posture, Gait & Pacing
                </h4>
                <p className="text-xs text-[#575253] mt-1">
                  Rehearsed walk-throughs accounting for heavy bridal lehengas, long trains, and ceremonial lighting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BD954E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#2C0713] uppercase tracking-wider">
                  Audio & Voiceover Prelude
                </h4>
                <p className="text-xs text-[#575253] mt-1">
                  Bespoke audio editing with personal voiceover preludes, dialogue cues, and theatrical musical drops.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BD954E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#2C0713] uppercase tracking-wider">
                  Technical Venue Direction
                </h4>
                <p className="text-xs text-[#575253] mt-1">
                  Coordination with venue decorators, stage engineers, spotlights, and cold pyrotechnics where permitted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SUBHEADING 02: STAGE & PROCESSION ACTS ARTISTS & LIVE ENTERTAINMENT
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-b from-[#F5EFEB] to-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#E8DFD5]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7EDF1] text-[#641C32] text-[11px] font-semibold tracking-wider uppercase mb-3">
                <Music className="w-3.5 h-3.5 text-[#BD954E]" />
                <span>Primary Pillar 02</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C0713] leading-tight">
                Stage & Procession Acts Artists & Live Entertainment
              </h2>
              <p className="text-sm sm:text-base text-[#575253] leading-relaxed mt-3">
                Complement your wedding choreography with live performers, symphonic dhol ensembles,
                authentic regional folk artists, soulful vocalists, and breathtaking visual spectacles.
              </p>
            </div>

            <Link
              href="/couple-entries-entertainment/stage-procession-acts-live-entertainment"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-colors shadow-md shrink-0 group"
            >
              <span>Explore live acts & artists</span>
              <ArrowRight className="w-4 h-4 text-[#D4B272] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4 Visual Artist Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {previewArtists.map((artist, idx) => (
              <Link
                key={artist.id}
                href={`/couple-entries-entertainment/stage-procession-acts-live-entertainment#${artist.id}`}
                className="group flex flex-col bg-white rounded-2xl border border-[#E8DFD5] overflow-hidden hover:border-[#BD954E] hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-[#2C0713] overflow-hidden">
                  {artist.imageUrl ? (<Image
                    src={withBasePath(artist.imageUrl)}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />) : (<div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center text-[#EAD9B7]"><span className="font-serif text-2xl">Wedding hosts & emcees</span><span className="text-xs">Hosting · Introductions · Audience interaction</span></div>)}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-[10px] text-white/90 font-medium px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm line-clamp-1">
                    {artist.subtitle}
                  </span>
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C6A2E]">
                      Act 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base font-bold text-[#2C0713] group-hover:text-[#4A1525] transition-colors mt-0.5 line-clamp-1">
                      {artist.name}
                    </h3>
                    <p className="text-xs text-[#575253] mt-1.5 line-clamp-2 leading-relaxed">
                      {artist.description}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#F4ECE1] flex items-center justify-between text-xs font-semibold text-[#4A1525]">
                    <span>View act & rider details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#BD954E] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Key Artist Framework Highlights */}
          <div className="p-6 rounded-2xl bg-white border border-[#E8DFD5] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BD954E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#2C0713] uppercase tracking-wider">
                  Choreography Synchronized
                </h4>
                <p className="text-xs text-[#575253] mt-1">
                  Performers rehearse and integrate directly with family dances, couple reveals, and finale sequences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BD954E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#2C0713] uppercase tracking-wider">
                  Rider & Technical Management
                </h4>
                <p className="text-xs text-[#575253] mt-1">
                  We handle sound checks, monitor mixes, stage plots, and green room coordination with the production crew.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BD954E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#2C0713] uppercase tracking-wider">
                  Verified Pan-India Artists
                </h4>
                <p className="text-xs text-[#575253] mt-1">
                  Experienced, reputable performers with proven live discipline for both city hotels and destination venues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OTHER DEDICATED CELEBRATION PAGES
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-[#E8DFD5] pt-16">
        <SectionHeading
          eyebrow="Explore More"
          title="Other Celebration Categories"
          description="Explore our dedicated pages for wedding choreography and curated service packages."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/wedding-choreography"
            className="group flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#E8DFD5] hover:border-[#BD954E]/60 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div>
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#8C6A2E] block mb-2">
                Dedicated Page 01
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2C0713] group-hover:text-[#4A1525] transition-colors mb-2">
                Wedding Choreography
              </h3>
              <p className="text-sm text-[#575253] leading-relaxed">
                Sangeet routines, couple dance, bride & groom solos, and our signature “Dance Along with SJ” guest session.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#F4ECE1] flex items-center justify-between text-xs font-semibold text-[#4A1525]">
              <span>Open Wedding Choreography page</span>
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

      <aside className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-sm text-[#575253] leading-relaxed">
        <p>Capture the arrival and everything around it. <Link href="/wedding-content-reels" className="font-semibold text-[#4A1525] underline underline-offset-4">Explore wedding content creators, reels &amp; candid coverage →</Link></p>
      </aside>

      <EnquiryCTA
        title="Ready to create a memorable wedding entry?"
        description="Share your venue style, song preferences, and guest count to brainstorm custom entry choreography and artist curation."
        buttonText="Discuss Your Entry Vision"
        serviceQuery="grand-entry-experience"
      />
    </div>
  );
}
