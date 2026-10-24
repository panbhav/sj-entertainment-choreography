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
  Compass,
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7EDF1] text-[#641C32] border border-[#BD954E]/30 text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#BD954E]" />
              <span>Choreography & Entry Guide</span>
            </div>

            <h1>
              {chapter.shortName}
              <br />
              <em>choreography & entries.</em>
            </h1>

            <p className="celebration-intro-copy">{chapter.introduction}</p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
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

          <div className="celebration-hero-media relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-[#BD954E]/30 bg-[#2C0713] group">
            <Image
              src={withBasePath(chapter.imageUrl)}
              alt={`${chapter.shortName} Choreography by Sajid & Joya`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C0713]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20">
                SJ Signature Chapter
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
              <h2 id="types-title">Which type feels right for you?</h2>
            </div>
            <p>
              Click a type to read what it involves. You can combine ideas into your own custom
              celebration performance.
            </p>
          </div>

          {/* Type Jump Navigation */}
          <nav className="celebration-type-nav" aria-label={`${chapter.shortName} types`}>
            {chapter.concepts.map((item, i) => (
              <a href={`#${item.id}`} key={item.id}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{item.title}</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            ))}
          </nav>

          {/* Formats Definition Grid */}
          <div className="celebration-definition-grid">
            {chapter.concepts.map((item, i) => (
              <article
                id={item.id}
                key={item.id}
                className="celebration-definition group"
                aria-labelledby={`${item.id}-title`}
              >
                {/* Visual Concept Media */}
                <div className="celebration-concept-media relative aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-[#2C0713]">
                  <Image
                    src={withBasePath(`/images/celebrations/subtypes/${item.id}.jpg`)}
                    alt={`${item.title} — ${chapter.shortName}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[10px] font-semibold text-white tracking-wider uppercase border border-white/20">
                    Format 0{i + 1}
                  </span>
                  <span className="absolute bottom-3 left-3 right-3 text-[11px] text-[#E5D7B7] font-serif italic line-clamp-1">
                    {item.mood}
                  </span>
                </div>

                <div className="celebration-definition-top">
                  <span className="celebration-number">0{i + 1}</span>
                  <span className="celebration-mood font-medium text-[#BD954E]">
                    {item.mood}
                  </span>
                </div>

                <h3 id={`${item.id}-title`}>{item.title}</h3>

                <p className="celebration-definition-copy">{item.description}</p>

                <dl>
                  <div>
                    <dt className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#BD954E]" />
                      <span>What the choreography includes</span>
                    </dt>
                    <dd>{item.choreography}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#BD954E]" />
                      <span>Best suited to</span>
                    </dt>
                    <dd>{item.bestFor}</dd>
                  </div>
                </dl>

                <Link
                  href={celebrationConceptHref(chapter, item)}
                  className="celebration-concept-cta"
                  aria-label={`Enquire about ${item.title}`}
                >
                  <span>Plan this type</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
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
