import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CelebrationChapter, getCelebrationService } from '@/content/celebrations';
import { withBasePath } from '@/lib/basePath';
import './Celebrations.css';

export default function CelebrationCard({
  chapter,
  index,
}: {
  chapter: CelebrationChapter;
  index: number;
}) {
  const service = getCelebrationService(chapter);
  const href = `/wedding-choreography/${chapter.slug}`;

  return (
    <article className="celebration-card group">
      {/* Visual Image Banner */}
      <Link href={href} className="celebration-card-image-wrap block relative aspect-[16/10] overflow-hidden rounded-xl mb-5 bg-[#2C0713]">
        <Image
          src={withBasePath(chapter.imageUrl)}
          alt={service.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase border border-white/20">
            Chapter 0{index + 1}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
          <span className="text-xs font-serif italic text-[#E5D7B7]">
            {chapter.concepts.length} Performance Formats
          </span>
          <span className="text-[10px] uppercase font-semibold text-[#D4B272] tracking-wider">
            View Details →
          </span>
        </div>
      </Link>

      <div className="celebration-card-top">
        <span>CELEBRATION 0{index + 1}</span>
        <span>{chapter.concepts.length} TYPES</span>
      </div>

      <h3>
        <Link href={href}>
          {service.name}
          <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </h3>

      <p>{chapter.introduction}</p>

      <ul
        className="celebration-type-links"
        aria-label={`${chapter.shortName} choreography and entry types`}
      >
        {chapter.concepts.map((item) => (
          <li key={item.id}>
            <Link href={`${href}#${item.id}`}>
              <span>{item.title}</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>

      <Link className="celebration-all-link" href={href}>
        <span>Explore all {chapter.shortName} types</span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </article>
  );
}
