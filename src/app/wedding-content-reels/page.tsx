import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Camera, Check, Clapperboard, Smartphone, Video } from 'lucide-react';
import { weddingContentFormats, weddingContentFaqs } from '@/content/weddingContent';
import './WeddingContentPage.css';

export const metadata: Metadata = {
  title: 'Wedding Content Creators & Reels',
  description: 'Explore wedding reels, function coverage, candid moments and cinematic social edits with SJ. Based in Alwar and Mumbai, available for celebrations across India.',
  alternates: { canonical: '/wedding-content-reels' },
};

const icons = [Smartphone, Video, Camera, Clapperboard];

export default function WeddingContentPage() {
  return (
    <div className="interior-page creator-page">
      <div className="creator-container">
        <nav className="creator-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Wedding Content &amp; Reels</span></nav>
        <section className="creator-hero" aria-labelledby="creator-title">
          <div>
            <p className="creator-eyebrow">Wedding content &amp; reels</p>
            <h1 id="creator-title">Live the moment.<br /><em>Keep the story.</em></h1>
            <p className="creator-lead">Your entry. Their reactions. The dance-floor chaos you never want to forget. Content creators capture your celebration in stories made for your own social pages.</p>
            <div className="creator-actions"><Link className="creator-primary" href="/contact?service=wedding-content">Plan your content <ArrowUpRight size={17} aria-hidden="true" /></Link><a href="#formats" className="creator-text-link">Find your format ↓</a></div>
            <p className="creator-base">Alwar, Rajasthan &amp; Mumbai · Celebrations across India</p>
          </div>
          <aside className="creator-storyboard" aria-label="Your content story">
            <p className="creator-eyebrow">The moments in between</p>
            {[
              ['01', 'Before the music.', 'Getting ready, rehearsals and the excitement building backstage.'],
              ['02', 'In the moment.', 'The entrance, the performance and everyone cheering you on.'],
              ['03', 'Ready to share.', 'A personal collection of reels, clips or a short cinematic story.'],
            ].map(([number, title, copy]) => <div key={number}><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></div>)}
            <p className="creator-storyboard-note">Your people. Your perspective. Your feed.</p>
          </aside>
        </section>

        <section id="formats" className="creator-section" aria-labelledby="creator-formats-title">
          <div className="creator-section-heading"><div><p className="creator-eyebrow">Four ways to tell it</p><h2 id="creator-formats-title">Choose the feeling.<br /><em>We’ll shape the format.</em></h2></div><p>Pick one style or combine a few. The coverage, edit count and final deliverables are tailored to your plans.</p></div>
          <nav className="creator-format-nav" aria-label="Content formats">{weddingContentFormats.map(format => <a key={format.id} href={`#${format.id}`}>{format.title}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</nav>
          <div className="creator-format-grid">{weddingContentFormats.map((format, index) => {
            const Icon = icons[index];
            return <article key={format.id} id={format.id} className="creator-format-card" aria-labelledby={`format-${format.id}-title`}>
              <div className="creator-card-top"><span>0{index + 1} / {format.id === 'functions' ? 'Coverage' : format.id}</span><Icon size={25} strokeWidth={1.4} aria-hidden="true" /></div>
              <h3 id={`format-${format.id}-title`}>{format.title}</h3><p>{format.description}</p>
              <p className="creator-best"><strong>Best suited to</strong>{format.bestFor}</p>
              <h4>Your brief can include</h4><ul>{format.moments.map(moment => <li key={moment}><Check size={14} aria-hidden="true" />{moment}</li>)}</ul>
              <div className="creator-output"><h4>Made for sharing</h4><p>{format.output}</p></div>
              <Link href={`/contact?service=${format.service}`} aria-label={`Enquire about ${format.title}`} className="creator-card-link">Discuss this format <ArrowUpRight size={17} aria-hidden="true" /></Link>
            </article>;
          })}</div>
        </section>

        <section className="creator-section creator-planning" aria-labelledby="creator-planning-title">
          <div className="creator-section-heading"><div><p className="creator-eyebrow">A little planning. A natural story.</p><h2 id="creator-planning-title">From your brief<br /><em>to your camera roll.</em></h2></div><p>A clear plan leaves more room for you to enjoy the celebration.</p></div>
          <ol>{[
            ['Share your moments.', 'Tell us your functions, timings, city and favourite references. Choose a reel-led, candid or cinematic approach.'],
            ['Agree the coverage.', 'Confirm creator availability, shooting hours, priority moments, edit count, formats, review rounds and delivery timing.'],
            ['Capture, review, share.', 'The agreed moments are captured and edited for your review. You choose what to share on your own pages.'],
          ].map(([title, copy], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
        </section>

        <section className="creator-delivery" aria-labelledby="creator-delivery-title"><div><p className="creator-eyebrow">Made around your plans</p><h2 id="creator-delivery-title">A clear brief.<br /><em>Content that feels like you.</em></h2></div><dl>
          <div><dt>Format &amp; platform</dt><dd>Vertical 9:16 for reels and stories, or an alternative orientation agreed for your short highlight.</dd></div>
          <div><dt>Scope &amp; delivery</dt><dd>Coverage hours, video lengths, edit count, file handover, review rounds and turnaround are confirmed in your quote.</dd></div>
          <div><dt>Your creative direction</dt><dd>Share music, references and must-capture moments. Posting, collaborations and sharing by SJ or creators are discussed with you first.</dd></div>
        </dl></section>

        <section className="creator-section creator-faq" aria-labelledby="creator-faq-title"><p className="creator-eyebrow">Before you book</p><h2 id="creator-faq-title">A few useful details.</h2>{weddingContentFaqs.map(faq => <details key={faq.question} name="creator-faq"><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</section>

        <section className="creator-final" aria-labelledby="creator-final-title"><p className="creator-eyebrow">Let’s tell your story</p><h2 id="creator-final-title">A celebration to live.<br /><em>A story to share.</em></h2><p>Tell us your dates, functions and the kind of content you love.</p><Link className="creator-primary" href="/contact?service=wedding-content">Discuss your content plan <ArrowUpRight size={17} aria-hidden="true" /></Link><Link className="creator-text-link" href="/wedding-choreography">Combine with wedding choreography <ArrowUpRight size={15} aria-hidden="true" /></Link></section>
      </div>
    </div>
  );
}
