import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CelebrationChapter, getCelebrationService } from '@/content/celebrations';
import './Celebrations.css';

export default function CelebrationCard({ chapter, index }: { chapter: CelebrationChapter; index: number }) {
  const service = getCelebrationService(chapter);
  const href = `/wedding-choreography/${chapter.slug}`;

  return (
    <article className="celebration-card">
      <div className="celebration-card-top"><span>CELEBRATION {String(index + 1).padStart(2, '0')}</span><span>{chapter.concepts.length} TYPES</span></div>
      <h3><Link href={href}>{service.name}<ArrowUpRight size={19} aria-hidden="true" /></Link></h3>
      <p>{chapter.introduction}</p>
      <ul className="celebration-type-links" aria-label={`${chapter.shortName} choreography and entry types`}>
        {chapter.concepts.map((item) => (
          <li key={item.id}><Link href={`${href}#${item.id}`}><span>{item.title}</span><ArrowRight size={15} aria-hidden="true" /></Link></li>
        ))}
      </ul>
      <Link className="celebration-all-link" href={href}>Explore all {chapter.shortName} types<ArrowUpRight size={16} aria-hidden="true" /></Link>
    </article>
  );
}
