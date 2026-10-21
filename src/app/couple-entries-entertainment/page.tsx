import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { getMedia } from '@/content/media';
import { coupleEntryConcepts, artistCategories } from '@/content/entriesAndArtists';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import VideoPreview from '@/components/media/VideoPreview';
import SectionHeading from '@/components/common/SectionHeading';
import EnquiryCTA from '@/components/common/EnquiryCTA';

export const metadata: Metadata = {
  title: 'Couple Entries & Live Entertainment',
  description:
    'Theatrical couple entries, bridal walks, and live artist curation by Sajid & Joya for weddings across India.',
};

export default function CoupleEntriesEntertainmentPage() {
  const heroMedia = getMedia('entries-hero');

  // Filter only published concepts
  const publishedEntries = coupleEntryConcepts.filter((c) => c.isPublished);
  const publishedArtists = artistCategories.filter((a) => a.isPublished);

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
                and live entertainment ensembles tailored to your venue architecture across India.
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
                  Browse Entry Concepts ↓
                </a>
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

      {/* =========================================================================
          SECTION A: COUPLE & BRIDAL ENTRIES
          ========================================================================= */}
      <section id="entry-concepts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
        <SectionHeading
          eyebrow="Creative Directions"
          title="Couple & Bridal Entry Concepts"
          description="The following ideas illustrate creative themes available to explore. During our planning discussions, each concept is customized to your venue layout, aesthetic mood, and safety parameters."
          className="mb-6"
        />

        {/* Clear transparent disclosure notice */}
        <div className="mb-12 p-4 rounded-2xl bg-[#FAF6EF] border border-[#DFCBB0] max-w-3xl mx-auto flex items-start gap-3">
          <Info className="w-5 h-5 text-[#BA9248] shrink-0 mt-0.5" />
          <p className="text-xs text-[#575253] leading-relaxed">
            <span className="font-semibold text-[#4A1525]">Concept Planning Note:</span> Entry
            presentations are illustrative concepts. Final staging, lighting effects, and
            props are designed in coordination with your venue regulations and decorator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedEntries.map((concept) => (
            <div
              key={concept.id}
              className="flex flex-col justify-between bg-white rounded-3xl border border-[#E8DFD5] p-7 hover:border-[#BD954E]/60 transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/20">
                    Concept Idea
                  </span>
                  <span className="text-xs text-[#BD954E] italic font-serif">
                    {concept.mood}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C0713] mb-3 group-hover:text-[#4A1525] transition-colors leading-snug">
                  {concept.name}
                </h3>

                <p className="text-sm text-[#575253] leading-relaxed mb-5">
                  {concept.description}
                </p>

                {concept.inclusions && concept.inclusions.length > 0 && (
                  <div className="mb-4 pt-3 border-t border-[#F4ECE1]">
                    <div className="text-xs font-semibold text-[#4A1525] mb-2 uppercase tracking-wider">
                      Concept Inclusions
                    </div>
                    <ul className="space-y-1.5">
                      {concept.inclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#575253]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#BD954E] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {concept.venueRequirements && concept.venueRequirements.length > 0 && (
                  <div className="mb-6 pt-2">
                    <div className="text-[11px] font-semibold text-[#888182] uppercase tracking-wider mb-1">
                      Venue Considerations
                    </div>
                    <ul className="space-y-1 text-xs text-[#888182]">
                      {concept.venueRequirements.map((req, i) => (
                        <li key={i}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#F4ECE1]">
                <Link
                  href={`/contact?service=${encodeURIComponent(concept.queryParam)}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A1525] group-hover:text-[#641C32] transition-colors focus-visible:ring-2 focus-visible:ring-[#BD954E]"
                >
                  <span>Discuss this entry concept</span>
                  <ArrowRight className="w-4 h-4 text-[#BD954E] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION B: ARTISTS & LIVE ENTERTAINMENT
          ========================================================================= */}
      <section className="bg-[#F5EFEB] py-20 border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Stage & Procession Acts"
            title="Artists & Live Entertainment"
            description="Complement your choreography with curated live performers, percussion ensembles, and ambient artists. Selection and production riders are reviewed collaboratively during planning."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {publishedArtists.map((artist) => (
              <div
                key={artist.id}
                className="flex flex-col justify-between bg-white rounded-2xl border border-[#E8DFD5] p-6 sm:p-7 hover:border-[#BD954E]/60 transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2C0713] mb-1 group-hover:text-[#4A1525] transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs font-medium text-[#BD954E] mb-3">
                    {artist.subtitle}
                  </p>
                  <p className="text-sm text-[#575253] leading-relaxed mb-4">
                    {artist.description}
                  </p>

                  <div className="pt-3 border-t border-[#F4ECE1] space-y-2">
                    <div className="text-xs font-semibold text-[#4A1525] uppercase tracking-wider">
                      Suggested Celebration Moments
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {artist.suggestedMoments.map((moment, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-[#FAF7F2] border border-[#E8DFD5] text-[11px] text-[#575253]"
                        >
                          {moment}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-[#888182] mt-3 italic">
                    Production note: {artist.productionNotes}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#F4ECE1]">
                  <Link
                    href={`/contact?service=${encodeURIComponent(artist.queryParam)}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A1525] group-hover:text-[#641C32] transition-colors"
                  >
                    <span>Enquire about artist curation</span>
                    <ArrowRight className="w-4 h-4 text-[#BD954E] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
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
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#BD954E] block mb-2">
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
              <span className="text-[10px] font-semibold tracking-wider uppercase text-[#BD954E] block mb-2">
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
      <EnquiryCTA
        title="Ready to create a memorable wedding entry?"
        description="Share your venue style, song preferences, and guest count to brainstorm custom entry choreography and artist curation."
        buttonText="Discuss Your Entry Vision"
        serviceQuery="grand-entry-experience"
      />
    </div>
  );
}


