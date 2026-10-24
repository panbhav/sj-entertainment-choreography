import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Users,
  Calendar,
} from 'lucide-react';
import {
  celebrationChapters,
  celebrationConceptHref,
  getCelebrationChapter,
  getCelebrationService,
} from '@/content/celebrations';
import { withBasePath } from '@/lib/basePath';
import '@/components/celebrations/Celebrations.css';

type PageProps = { params: Promise<{ celebration: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return celebrationChapters.map((chapter) => ({ celebration: chapter.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { celebration } = await params;
  const chapter = getCelebrationChapter(celebration);
  if (!chapter) notFound();
  return {
    title: `${chapter.shortName} Choreography & Entry Types | Sajid & Joya`,
    description: chapter.introduction,
    alternates: { canonical: `/wedding-choreography/${chapter.slug}` },
  };
}

export default async function CelebrationPage({ params }: PageProps) {
  const { celebration } = await params;
  const chapter = getCelebrationChapter(celebration);
  if (!chapter) notFound();
  const service = getCelebrationService(chapter);

  return (
    <div className="interior-page celebration-detail">
      <div className="celebration-container">
        {/* Breadcrumb Navigation */}
        <nav className="celebration-breadcrumb" aria-label="Breadcrumb">
          <Link href="/wedding-choreography#celebrations">
            <ArrowLeft size={15} aria-hidden="true" />
            <span>Wedding Celebrations</span>
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{chapter.shortName}</span>
        </nav>

        {/* Hero Presentation Header with Visual Showcase */}
        <header className="celebration-intro-grid">
          <div className="celebration-intro">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
              <span>Choreography & Entry Guide</span>
            </div>

            <h1>
              {chapter.shortName}
              <br />
              <em>choreography & entries.</em>
            </h1>

            <p className="celebration-intro-copy">{chapter.introduction}</p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a className="celebration-primary-link" href="#types">
                <span>Explore the {chapter.concepts.length} formats</span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>

              <Link
                href={`/contact?service=${encodeURIComponent(service.queryParam)}`}
                className="celebration-secondary-link"
              >
                <Calendar className="w-4 h-4 text-[#BD954E]" />
                <span>Enquire for {chapter.shortName}</span>
              </Link>
            </div>
          </div>

          <div className="celebration-hero-media relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-[#BD954E]/30 bg-[#2C0713] group">
            <Image
              src={withBasePath(chapter.imageUrl)}
              alt={`${chapter.shortName} Choreography by Sajid & Joya`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C0713]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20">
                Signature Chapter
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-serif italic text-[#E5D7B7]">
                Authentic Celebration Curation
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#D4B272] tracking-wider">
                Sajid & Joya
              </span>
            </div>
          </div>
        </header>

        {/* Performance Formats Section */}
        <section id="types" className="celebration-types-section" aria-labelledby="types-title">
          <div className="celebration-section-heading">
            <div>
              <p className="celebration-eyebrow">CHOOSE A PERFORMANCE FORMAT</p>
              <h2 id="types-title">Which format feels right for you?</h2>
            </div>
            <p>
              Explore each performance type below with visual examples. You can combine elements
              into your own custom celebration timeline.
            </p>
          </div>

          {/* Quick Jump Navigation */}
          <nav className="celebration-type-nav" aria-label={`${chapter.shortName} types`}>
            {chapter.concepts.map((item, i) => (
              <a href={`#${item.id}`} key={item.id}>
                <span>0{i + 1}</span>
                <span>{item.title}</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            ))}
          </nav>

          {/* Formats Showcase: Clean, Full-Width Editorial Split Rows */}
          <div className="celebration-formats-showcase space-y-12 sm:space-y-16">
            {chapter.concepts.map((item, i) => (
              <article
                id={item.id}
                key={item.id}
                className="celebration-format-card grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-[#E8DFD5] p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 scroll-mt-28"
                aria-labelledby={`${item.id}-title`}
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#2C0713] shadow-md group ${
                    i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Image
                    src={withBasePath(`/images/celebrations/subtypes/${item.id}.webp`)}
                    alt={`${item.title} — ${chapter.shortName}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20">
                      Format 0{i + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs font-serif italic text-[#E5D7B7] line-clamp-1">
                      Mood: {item.mood}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 border-b border-[#F4ECE1] pb-3">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#BD954E]">
                      Choreography Concept 0{i + 1}
                    </span>
                    <span className="text-xs font-serif italic text-[#888182]">
                      {item.mood}
                    </span>
                  </div>

                  <h3
                    id={`${item.id}-title`}
                    className="font-serif text-2xl sm:text-3xl font-bold text-[#2C0713] leading-snug"
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#575253] leading-relaxed">
                    {item.description}
                  </p>

                  <dl className="space-y-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5]">
                      <dt className="text-[11px] font-semibold text-[#4A1525] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BD954E]" />
                        <span>What the choreography includes</span>
                      </dt>
                      <dd className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                        {item.choreography}
                      </dd>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5]">
                      <dt className="text-[11px] font-semibold text-[#4A1525] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                        <Users className="w-3.5 h-3.5 text-[#BD954E]" />
                        <span>Best suited to</span>
                      </dt>
                      <dd className="text-xs sm:text-sm text-[#575253] leading-relaxed">
                        {item.bestFor}
                      </dd>
                    </div>
                  </dl>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      href={celebrationConceptHref(chapter, item)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#4A1525] hover:bg-[#641C32] text-[#FAF7F2] transition-colors shadow-sm"
                      aria-label={`Enquire about ${item.title}`}
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#D4B272]" />
                      <span>Plan this type</span>
                      <ArrowRight size={14} className="text-[#D4B272]" />
                    </Link>

                    <a
                      href="#types"
                      className="text-xs text-[#888182] hover:text-[#4A1525] transition-colors"
                    >
                      ↑ All formats
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Planning Note */}
        <aside className="celebration-planning-note">
          <p className="celebration-eyebrow">TAILORED TO YOUR FAMILY</p>
          <h2>Your songs. Your people. Your comfort.</h2>
          <p>{chapter.guidance}</p>
          <p>
            These are starting points for choreography and entries. The final songs, performers,
            rehearsal plan, and event arrangements are agreed collaboratively during planning.
          </p>
        </aside>

        {/* Keep Exploring Other Celebrations */}
        <section className="celebration-related" aria-labelledby="related-title">
          <p className="celebration-eyebrow">KEEP EXPLORING</p>
          <h2 id="related-title">Choreography for your other functions.</h2>
          <div>
            {celebrationChapters
              .filter((item) => item.slug !== chapter.slug)
              .map((item) => (
                <Link key={item.slug} href={`/wedding-choreography/${item.slug}`}>
                  <span>{item.shortName}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="celebration-final-cta">
          <p className="celebration-eyebrow">LET’S PLAN YOUR PERFORMANCE</p>
          <h2>
            Make your {chapter.shortName.toLowerCase()}
            <br />
            <em>feel like you.</em>
          </h2>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?service=${encodeURIComponent(service.queryParam)}`}
              className="celebration-primary-link"
            >
              <span>Discuss your choreography</span>
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/wedding-choreography#celebrations" className="celebration-back-link">
              Back to all Wedding Celebrations
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
