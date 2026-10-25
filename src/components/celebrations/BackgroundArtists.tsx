import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Users } from 'lucide-react';
import { backgroundArtistFormats } from '@/content/backgroundArtists';
import { withBasePath } from '@/lib/basePath';
import './BackgroundArtists.css';

export default function BackgroundArtists({ chapter }: { chapter?: string }) {
  const formats = chapter
    ? backgroundArtistFormats.filter(format => format.chapters.includes(chapter))
    : backgroundArtistFormats;
  if (!formats.length) return null;

  return (
    <section id="background-artists" className="background-artists" aria-labelledby="background-artists-title">
      <div className="background-artists-intro">
        <div>
          <p className="background-artists-eyebrow"><Users size={16} aria-hidden="true" /> Professional supporting artists</p>
          <h2 id="background-artists-title">Your moment.<br /><em>A whole ensemble behind it.</em></h2>
        </div>
        <p>Sajid &amp; Joya also provide background artists and supporting dancers for wedding entries and functions. Add an ensemble to your own performance or choose a complete artist-led act.</p>
      </div>
      <div className={`background-artists-grid ${formats.length === 1 ? 'background-artists-grid-single' : ''}`}>
        {formats.map(format => (
          <article key={format.id} id={`background-${format.id}`} className="background-artist-card">
            <div className="background-artist-image">
              <Image src={withBasePath(format.image)} alt={format.alt} fill sizes={formats.length === 1 ? '(max-width: 700px) 100vw, 45vw' : '(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw'} unoptimized />
              <span>AI concept visual</span>
            </div>
            <div className="background-artist-copy">
              <h3>{format.name}</h3>
              <p>{format.description}</p>
              <p className="background-artist-includes"><strong>Plan with us</strong>{format.includes}</p>
              <Link href={`/contact?service=${format.service}`} aria-label={`Enquire about ${format.name}`}>Discuss this ensemble <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>
      <div className="background-artists-footer">
        <p>Also available for welcome nights, Bhaat / Mayra and multi-day celebrations. Artist numbers, costumes, music, rehearsals and venue arrangements are agreed for your event. Images are AI-generated planning concepts, not photographs of the SJ team or past events.</p>
        {chapter ? <Link href="/wedding-choreography#background-artists">Explore all supporting artist options <ArrowUpRight size={17} aria-hidden="true" /></Link> : <Link href="/contact?service=background-artists">Build your artist lineup <ArrowUpRight size={17} aria-hidden="true" /></Link>}
      </div>
    </section>
  );
}
