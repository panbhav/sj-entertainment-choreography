import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Calendar, MapPin } from 'lucide-react';
import { getMedia } from '@/content/media';
import { ownersData } from '@/content/about';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import VideoPreview from '@/components/media/VideoPreview';
import SectionHeading from '@/components/common/SectionHeading';
import EnquiryCTA from '@/components/common/EnquiryCTA';
import AwardRecognitionSection from '@/components/about/AwardRecognitionSection';

export const metadata: Metadata = {
  title: 'About Sajid & Joya',
  description:
    'Learn about Sajid & Joya, the choreographers and creative partners behind SJ Entertainment Choreography, creating elegant wedding moments across India.',
};

export default function AboutPage() {
  const jointMedia = getMedia(ownersData.jointMediaId);
  const btsRehearsalMedia = getMedia('about-bts-rehearsal');
  const btsStageMedia = getMedia('about-stage-production');

  const publishedOwners = ownersData.owners.filter((o) => o.isPublished);

  return (
    <div className="interior-page flex flex-col space-y-24 md:space-y-32">
      {/* =========================================================================
          HERO & JOINT INTRO
          ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
                <span>The Choreographers</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2C0713] leading-tight">
                About Sajid & Joya
              </h1>

              <p className="text-base sm:text-lg text-[#575253] leading-relaxed">
                {ownersData.jointIntro}
              </p>

              <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#DFCBB0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4A1525] uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#BD954E]" />
                  <span>Coverage Across India</span>
                </div>
                <p className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                  {ownersData.coverageStatement}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-colors shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#D4B272]" />
                  <span>Plan Your Celebration With Us</span>
                </Link>
              </div>
            </div>

            {/* Joint Portrait */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl p-3 bg-[#FAF7F2] border border-[#DFCBB0] shadow-xl">
                <div className="absolute top-6 left-6 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2C0713]/85 backdrop-blur-md text-[#D4B272] border border-[#BD954E]/40 text-xs font-semibold tracking-wider uppercase shadow-lg">
                  <Sparkles className="w-3 h-3 text-[#D4B272]" />
                  <span>15+ Years of Craft</span>
                </div>
                <ResponsiveImage
                  media={jointMedia}
                  variant="wine"
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestone Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-8 sm:-mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ownersData.stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-[#E8DFD5] shadow-sm text-center space-y-1 hover:border-[#BD954E]/60 transition-colors"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#4A1525]">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#BD954E]">
                {stat.label}
              </div>
              <p className="text-[11px] sm:text-xs text-[#575253] leading-relaxed pt-1">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          NATIONAL AWARD RECOGNITION FEATURE
          ========================================================================= */}
      <AwardRecognitionSection />

      {/* =========================================================================
          INDIVIDUAL OWNER PROFILES
          ========================================================================= */}
      {publishedOwners.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <SectionHeading
            eyebrow="Creative Direction"
            title="Complementary Artistry"
            description="Working together as choreographic partners to balance energy, precision, musical storytelling, and bridal grace."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {publishedOwners.map((owner) => {
              const ownerMedia = getMedia(owner.portraitMediaId);
              return (
                <div
                  key={owner.name}
                  className="bg-white rounded-3xl p-8 border border-[#E8DFD5] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-6 rounded-2xl overflow-hidden">
                      <ResponsiveImage
                        media={ownerMedia}
                        variant="ivory"
                        className="rounded-2xl"
                      />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-[#BD954E]">
                      {owner.role}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C0713] mt-1 mb-4">
                      {owner.name}
                    </h3>

                    <div className="space-y-3 text-sm text-[#575253] leading-relaxed mb-6">
                      {owner.bioParagraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#F4ECE1]">
                      <span className="text-xs font-semibold text-[#4A1525] uppercase tracking-wider block mb-2">
                        Artistic Focus
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {owner.focusAreas.map((area, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#FAF7F2] border border-[#E8DFD5] text-[#575253]"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* =========================================================================
          PHILOSOPHY & BRAND APPROACH
          ========================================================================= */}
      <section className="bg-[#F5EFEB] py-20 border-y border-[#E8DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title={ownersData.philosophyTitle}
            className="mb-8"
          />

          <div className="max-w-3xl mx-auto text-center space-y-4 text-base sm:text-lg text-[#575253] leading-relaxed mb-16">
            {ownersData.philosophyParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ownersData.approachPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DFD5] shadow-xs space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-[#F7EDF1] text-[#641C32] flex items-center justify-center font-serif font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2C0713]">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BEHIND THE SCENES MEDIA PLACEHOLDERS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          eyebrow="Rehearsals & Cues"
          title="Behind The Scenes"
          description="A glimpse into the rehearsal process and stage-day coordination that makes wedding dances feel effortless."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <VideoPreview
              media={btsRehearsalMedia}
              variant="ivory"
              className="rounded-2xl shadow-sm overflow-hidden"
            />
            <div className="px-2">
              <h4 className="font-serif text-lg font-bold text-[#2C0713]">
                {btsRehearsalMedia.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#575253]">
                {btsRehearsalMedia.caption}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <VideoPreview
              media={btsStageMedia}
              variant="ivory"
              className="rounded-2xl shadow-sm overflow-hidden"
            />
            <div className="px-2">
              <h4 className="font-serif text-lg font-bold text-[#2C0713]">
                {btsStageMedia.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#575253]">
                {btsStageMedia.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL ENQUIRY CTA
          ========================================================================= */}
      <EnquiryCTA
        title="We would love to choreograph your wedding"
        description="Share your celebration vision with Sajid & Joya. Let's create beautiful memories together across India."
        buttonText="Get in Touch with Sajid & Joya"
      />
    </div>
  );
}


