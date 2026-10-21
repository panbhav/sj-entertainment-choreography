'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Info, ArrowRight, Play } from 'lucide-react';
import { portfolioPreviewSlots, getPublishedProjects, PortfolioCategory } from '@/content/portfolio';
import { withBasePath } from '@/lib/basePath';
import MediaPlaceholder from '@/components/media/MediaPlaceholder';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import SectionHeading from '@/components/common/SectionHeading';
import EnquiryCTA from '@/components/common/EnquiryCTA';
import VideoModal from '@/components/media/VideoModal';

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all');
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const publishedProjects = getPublishedProjects();

  const filterOptions: { id: PortfolioCategory; label: string }[] = [
    { id: 'all', label: 'All Showcases' },
    { id: 'choreography', label: 'Choreography' },
    { id: 'couple-entry', label: 'Couple Entries' },
    { id: 'artists', label: 'Artists & Entertainment' },
  ];

  // Filter preview slots based on active tab
  const filteredSlots = portfolioPreviewSlots.filter((slot) => {
    if (activeFilter === 'all') return true;
    return slot.category === activeFilter;
  });

  return (
    <div className="interior-page flex flex-col space-y-20 md:space-y-28">
      {/* =========================================================================
          HERO & GALLERY INTRODUCTION
          ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
            <span>Showcase & Portfolio</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C0713] leading-tight">
            Our Work
          </h1>

          <p className="text-base sm:text-lg text-[#575253] leading-relaxed mt-4 max-w-2xl mx-auto">
            Celebration films, stage highlights, and grand entry captures by Sajid & Joya.
          </p>

          {/* Portfolio Note */}
          <div className="mt-8 p-4 rounded-2xl bg-[#FAF6EF] border border-[#DFCBB0] max-w-2xl mx-auto flex items-start gap-3 text-left">
            <Sparkles className="w-5 h-5 text-[#BA9248] shrink-0 mt-0.5" />
            <div className="text-xs text-[#575253] leading-relaxed">
              <span className="font-semibold text-[#4A1525]">Celebration Films:</span> Tap any
              showcase card below to watch actual wedding choreography routines, grand couple
              entries, and behind-the-scenes rehearsals crafted by Sajid & Joya.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GALLERY FILTERS & PREVIEW GRID
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#BD954E] ${
                  isActive
                    ? 'bg-[#4A1525] text-white shadow-md'
                    : 'bg-white hover:bg-[#FAF7F2] text-[#575253] border border-[#E8DFD5]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSlots.map((slot) => (
            <div
              key={slot.id}
              className="bg-white rounded-3xl border border-[#E8DFD5] p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4 overflow-hidden rounded-2xl">
                  {slot.isAvailable && slot.sourceUrl ? (
                    <button
                      type="button"
                      onClick={() => setSelectedVideo({ url: slot.sourceUrl!, title: slot.title })}
                      className="relative block w-full overflow-hidden rounded-2xl group/btn text-left aspect-video bg-[#2C0713]"
                      aria-label={`Play film: ${slot.title}`}
                    >
                      <Image
                        src={withBasePath(slot.posterUrl)}
                        alt={slot.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover/btn:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover/btn:bg-black/15 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#BD954E] text-[#2C0713] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/btn:scale-110">
                          <Play className="w-6 h-6 fill-current translate-x-0.5" />
                        </div>
                      </div>
                    </button>
                  ) : (
                    <MediaPlaceholder
                      aspectRatio={slot.aspectRatio}
                      label={slot.label}
                      sublabel={slot.note}
                      variant="ivory"
                      isVideoSlot={slot.mediaType === 'video'}
                    />
                  )}
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#BD954E]">
                    {slot.categoryLabel}
                  </span>
                  <span className="text-[10px] text-[#BD954E] uppercase tracking-wider font-semibold">
                    {slot.isAvailable ? 'Celebration Film' : 'Coming Soon'}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2C0713] mb-1.5 group-hover:text-[#4A1525] transition-colors">
                  {slot.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                  {slot.caption}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F4ECE1] flex items-center justify-between text-xs">
                <span className="text-[#888182]">Showcase Film</span>
                <Link
                  href={`/contact?service=${encodeURIComponent(slot.category)}`}
                  className="font-semibold text-[#4A1525] hover:text-[#641C32] inline-flex items-center gap-1"
                >
                  <span>Enquire for similar routine</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#BD954E]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Published Projects (Populated when real approved client projects are added) */}
        {publishedProjects.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E8DFD5]">
            <SectionHeading
              eyebrow="Published Celebrations"
              title="Featured Wedding Stories"
              className="mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl border border-[#E8DFD5] overflow-hidden shadow-sm"
                >
                  <div className="relative aspect-video">
                    {project.coverImageUrl ? (
                      <ResponsiveImage media={{ id: project.id, title: project.title, sourceUrl: project.coverImageUrl, alt: project.title, aspectRatio: "16/9", mediaType: "image", category: "celebration", published: true }} />
                    ) : (
                      <MediaPlaceholder
                        aspectRatio="16/9"
                        label={project.title}
                        variant="wine"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-[#BD954E] uppercase font-semibold">
                      {project.categoryLabel}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#2C0713] mt-1 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#575253] mb-4">
                      {project.shortDescription}
                    </p>
                    <Link
                      href={`/our-work/${project.slug}`}
                      className="text-xs font-semibold text-[#4A1525] inline-flex items-center gap-1"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#BD954E]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Video Modal trigger if genuine video exists */}
      {selectedVideo && (
        <VideoModal
          isOpen={Boolean(selectedVideo)}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}

      {/* =========================================================================
          FINAL ENQUIRY CTA
          ========================================================================= */}
      <EnquiryCTA
        title="Envision your wedding on stage"
        description="Connect with Sajid & Joya to create bespoke dance sequences and unforgettable couple entries."
        buttonText="Plan Your Celebration"
      />
    </div>
  );
}




