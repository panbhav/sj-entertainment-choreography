import Link from 'next/link';
import { ArrowUpRight, Camera, Clapperboard, Plus, Smartphone, Video } from 'lucide-react';
import { weddingContentFormats } from '@/content/weddingContent';
import './WeddingContent.css';

const formatIcons = [Smartphone, Video, Camera, Clapperboard];

export default function WeddingContent() {
  return (
    <section id="wedding-content" className="wedding-content-section" aria-labelledby="wedding-content-title">
      <div className="wedding-content-panel">
        <div className="wedding-content-intro">
          <p className="wedding-content-eyebrow"><Smartphone size={16} aria-hidden="true" /> Wedding content creators</p>
          <h2 id="wedding-content-title">Your celebration.<br /><em>Ready for your feed.</em></h2>
          <p>Reels, candid moments and cinematic stories, created around your wedding. For couples, families and guests who want something beautiful to share on their own social pages.</p>
          <Link href="/contact?service=wedding-content" className="wedding-content-cta">Plan your wedding content <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <p className="wedding-content-note">Choose one function or a multi-day story. Coverage hours, edit count, music, delivery format and turnaround are agreed during planning.</p>
        </div>
        <div className="wedding-content-formats">
          <p className="wedding-content-hint">Find your format <span>Tap to explore</span></p>
          {weddingContentFormats.map((format, index) => {
            const Icon = formatIcons[index];
            return (
              <details key={format.id} name="wedding-content-formats" className="wedding-content-format">
                <summary><Icon size={19} strokeWidth={1.5} aria-hidden="true" /><h3>{format.title}</h3><Plus size={17} className="wedding-content-plus" aria-hidden="true" /></summary>
                <div className="wedding-content-format-body">
                  <p>{format.description}</p>
                  <p><strong>Made for sharing</strong>{format.output}</p>
                  <Link href={`/contact?service=${format.service}`} aria-label={`Enquire about ${format.title}`}>Discuss this format <ArrowUpRight size={15} aria-hidden="true" /></Link>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
