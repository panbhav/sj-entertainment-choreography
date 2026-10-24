import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { celebrationChapters, celebrationConceptHref, getCelebrationChapter, getCelebrationService } from '@/content/celebrations';
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
    title: `${chapter.shortName} Choreography & Entry Types`,
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
        <nav className="celebration-breadcrumb" aria-label="Breadcrumb">
          <Link href="/wedding-choreography#celebrations"><ArrowLeft size={15} aria-hidden="true" />Wedding Celebrations</Link>
          <span aria-hidden="true">/</span><span aria-current="page">{chapter.shortName}</span>
        </nav>

        <header className="celebration-intro">
          <p className="celebration-eyebrow">CHOREOGRAPHY & ENTRY GUIDE</p>
          <h1>{chapter.shortName}<br /><em>choreography & entries.</em></h1>
          <p className="celebration-intro-copy">{chapter.introduction}</p>
          <a className="celebration-primary-link" href="#types">Explore the {chapter.concepts.length} types<ArrowRight size={17} aria-hidden="true" /></a>
        </header>

        <section id="types" className="celebration-types-section" aria-labelledby="types-title">
          <div className="celebration-section-heading"><div><p className="celebration-eyebrow">CHOOSE A PERFORMANCE FORMAT</p><h2 id="types-title">Which type feels right for you?</h2></div><p>Click a type to read what it involves. You can combine ideas into your own performance.</p></div>
          <nav className="celebration-type-nav" aria-label={`${chapter.shortName} types`}>
            {chapter.concepts.map((item, i) => <a href={`#${item.id}`} key={item.id}><span>{String(i + 1).padStart(2, '0')}</span>{item.title}<ArrowRight size={16} aria-hidden="true" /></a>)}
          </nav>

          <div className="celebration-definition-grid">
            {chapter.concepts.map((item, i) => (
              <article id={item.id} key={item.id} className="celebration-definition" aria-labelledby={`${item.id}-title`}>
                <div className="celebration-definition-top"><span className="celebration-number">{String(i + 1).padStart(2, '0')}</span><span className="celebration-mood">{item.mood}</span></div>
                <h3 id={`${item.id}-title`}>{item.title}</h3>
                <p className="celebration-definition-copy">{item.description}</p>
                <dl><div><dt>What the choreography includes</dt><dd>{item.choreography}</dd></div><div><dt>Best suited to</dt><dd>{item.bestFor}</dd></div></dl>
                <Link href={celebrationConceptHref(chapter, item)} className="celebration-concept-cta" aria-label={`Enquire about ${item.title}`}>Plan this type<ArrowUpRight size={17} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </section>

        <aside className="celebration-planning-note"><p className="celebration-eyebrow">TAILORED TO YOUR FAMILY</p><h2>Your songs. Your people. Your comfort.</h2><p>{chapter.guidance}</p><p>These are starting points for choreography and entries. The final songs, performers, rehearsal plan and event arrangements are agreed during planning.</p></aside>

        <section className="celebration-related" aria-labelledby="related-title"><p className="celebration-eyebrow">KEEP EXPLORING</p><h2 id="related-title">Choreography for your other functions.</h2><div>{celebrationChapters.filter((item) => item.slug !== chapter.slug).map((item) => <Link key={item.slug} href={`/wedding-choreography/${item.slug}`}>{item.shortName}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}</div></section>

        <section className="celebration-final-cta"><p className="celebration-eyebrow">LET’S PLAN YOUR PERFORMANCE</p><h2>Make your {chapter.shortName.toLowerCase()}<br /><em>feel like you.</em></h2><Link href={`/contact?service=${encodeURIComponent(service.queryParam)}`} className="celebration-primary-link">Discuss your choreography<ArrowRight size={17} aria-hidden="true" /></Link><Link href="/wedding-choreography#celebrations" className="celebration-back-link">Back to all Wedding Celebrations</Link></section>
      </div>
    </div>
  );
}
