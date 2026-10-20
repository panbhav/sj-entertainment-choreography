import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Check, Heart, Music2, Sparkles } from 'lucide-react';
import { getMedia } from '@/content/media';
import { getPublishedTestimonials } from '@/content/testimonials';
import VideoPreview from '@/components/media/VideoPreview';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import CelebrationSculpture from '@/components/common/CelebrationSculpture';
import EnquiryCTA from '@/components/common/EnquiryCTA';

const experiences = [
  { number: '01', title: 'Made for your main-character moment.', name: 'Wedding choreography', description: 'Your first dance. Your favourite people. A Sangeet that feels like you. Personal choreography for every kind of dancer.', href: '/wedding-choreography', media: 'home-signature-choreography', tags: 'COUPLE DANCES / SANGEET / FAMILY PERFORMANCES' },
  { number: '02', title: 'An entrance they’ll never forget.', name: 'Entries & entertainment', description: 'From a beautifully understated arrival to a spectacular celebration. Thoughtful entry concepts, live artists, and a little theatre.', href: '/couple-entries-entertainment', media: 'home-signature-entries', tags: 'GRAND ENTRIES / LIVE ARTISTS / IMMERSIVE MOMENTS' },
];
const steps = [
  ['01', 'It starts with you.', 'Tell us your story, your songs, and the kind of celebration you’re dreaming of.'],
  ['02', 'We find your rhythm.', 'Together, we shape the music, movement, and moments around your personality.'],
  ['03', 'A little practice. A lot of joy.', 'Relaxed rehearsals, in person or online, at a pace that feels comfortable.'],
  ['04', 'Your moment to shine.', 'Step into your celebration feeling prepared, present, and completely yourself.'],
];

export default function HomePage() {
  const hero = getMedia('hero-main');
  const testimonials = getPublishedTestimonials();
  return (
    <div className="home-page">
      <section className="editorial-hero site-container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="tiny-star">✦</span> SAJID & JOYA · WEDDING CHOREOGRAPHY</p>
          <h1>Some moments<br />deserve a little<br /><em>choreography.</em></h1>
          <p className="hero-description">Your love, your people, your kind of magic. We turn the music you love into wedding moments you’ll feel forever.</p>
          <div className="hero-actions">
            <Link href="/contact" className="button-wine">Let’s create your moment <ArrowUpRight size={17} /></Link>
            <Link href="#experiences" className="text-link">Explore the experience <ArrowDown size={16} /></Link>
          </div>
          <div className="hero-footnote"><span className="small-rule" /> MADE WITH HEART. CELEBRATED ACROSS INDIA.</div>
        </div>
        <div className="hero-art">
          {hero.published && hero.sourceUrl ? <VideoPreview media={hero} /> : <CelebrationSculpture />}
          <div className="art-caption"><span>THE ART OF CELEBRATING YOU</span><span>EST. IN LOVE <Heart size={12} /></span></div>
        </div>
        <div className="hero-bottom"><span>GOOD MUSIC. GREAT MEMORIES. ALL YOUR PEOPLE.</span><a href="#experiences" aria-label="Scroll to our experiences"><ArrowDown size={17} /></a><span>YOUR STORY, BEAUTIFULLY IN MOTION.</span></div>
      </section>
      <div className="celebration-strip" aria-label="Our specialities"><span>First dances</span><i>✦</i><span>Sangeet nights</span><i>✦</i><span>Grand entrances</span><i>✦</i><span>Family moments</span><i>✦</i><span>Unforgettable celebrations</span></div>
      <section id="experiences" className="editorial-section site-container">
        <div className="section-intro"><div><p className="eyebrow">01 / THE EXPERIENCES</p><h2>Not just steps.<br /><em>Something you feel.</em></h2></div><p>From the first rehearsal to the final applause, we bring care, creativity, and your personality to every moment.</p></div>
        <div className="experience-grid">{experiences.map((item) => (
          <article className="experience-card" key={item.number}>
            <Link href={item.href} className={`experience-visual visual-${item.number}`} aria-label={`Explore ${item.name}`}><ResponsiveImage media={getMedia(item.media)} variant={item.number === '01' ? 'wine' : 'ivory'} /><span className="visual-number">{item.number}</span><span className="visual-category">{item.name}</span><span className="round-arrow"><ArrowUpRight size={22} /></span></Link>
            <p className="micro-label">{item.tags}</p><h3><Link href={item.href}>{item.title}</Link></h3><p className="experience-description">{item.description}</p>
          </article>
        ))}</div>
      </section>
      <section className="founder-section"><div className="site-container founder-grid"><div className="founder-art"><ResponsiveImage media={getMedia('portrait-sajid-joya')} variant="wine" /><span className="founder-signature">Sajid & Joya</span></div><div className="founder-copy"><p className="eyebrow">02 / THE PEOPLE BEHIND THE MOMENTS</p><h2>Two creative hearts.<br /><em>One shared rhythm.</em></h2><p>We’re Sajid & Joya. Choreographers, celebration enthusiasts, and your biggest cheerleaders on the dance floor.</p><p>We believe the best performances don’t come from perfect dancers. They come from people who feel comfortable, connected, and happy. That’s where we begin.</p><div className="founder-values"><span><Check size={15} /> Beginner friendly</span><span><Check size={15} /> Completely personal</span><span><Check size={15} /> In person & online</span></div><Link href="/about" className="text-link">A little more about us <ArrowUpRight size={17} /></Link></div></div></section>
      <section className="editorial-section site-container"><div className="section-intro"><div><p className="eyebrow">03 / A GLIMPSE OF THE MAGIC</p><h2>Moments in <em>motion.</em></h2></div><Link href="/our-work" className="text-link">Explore our showcase <ArrowUpRight size={17} /></Link></div><div className="film-grid">{[
        ['home-slot-couple', 'Just the two of you', 'THE COUPLE DANCE'],
        ['home-slot-family', 'Everyone, together', 'THE FAMILY CELEBRATION'],
        ['home-slot-entry', 'Your grand arrival', 'THE COUPLE ENTRY'],
      ].map(([id, title, category]) => <article className="film-card" key={id}><VideoPreview media={getMedia(id)} variant="wine" /><div className="film-title"><div><p className="micro-label">{category}</p><h3>{title}</h3></div><Music2 size={19} /></div></article>)}</div><p className="showcase-note"><Sparkles size={13} /> A little anticipation. Our celebration films are coming soon.</p></section>
      <section className="journey-section"><div className="site-container"><p className="eyebrow">04 / FROM “WHAT IF” TO “WE DID THAT”</p><h2>Enjoy the journey.<br /><em>We’ll take care of the steps.</em></h2><div className="journey-grid">{steps.map(([number, title, description]) => <div key={number} className="journey-step"><span>{number}</span><h3>{title}</h3><p>{description}</p></div>)}</div><Link href="/packages" className="text-link">Find your celebration experience <ArrowUpRight size={17} /></Link></div></section>
      {testimonials.length > 0 && <section className="editorial-section site-container"><p className="eyebrow">LOVE NOTES</p><h2>Kind words, <em>beautiful memories.</em></h2><div className="experience-grid">{testimonials.map(t => <blockquote className="testimonial" key={t.id}><p>“{t.quote}”</p><cite>{t.clientNames}</cite></blockquote>)}</div></section>}
      <EnquiryCTA title="Let’s make it a moment." description="A song you love. A story only you can tell. Let’s create something that feels beautifully yours." buttonText="Start your celebration" className="home-enquiry" />
    </div>
  );
}

