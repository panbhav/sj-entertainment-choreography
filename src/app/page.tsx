import Link from 'next/link';
import { ArrowUpRight, Check, Music2, Sparkles } from 'lucide-react';
import { getMedia } from '@/content/media';
import { getPublishedTestimonials } from '@/content/testimonials';
import VideoPreview from '@/components/media/VideoPreview';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import CinematicHero from '@/components/home/CinematicHero';

import EnquiryCTA from '@/components/common/EnquiryCTA';

const experiences = [
  {
    number: '01',
    title: 'Made for your main-character moment.',
    name: 'Wedding choreography',
    description: 'Your first dance. Your favourite people. A Sangeet that feels like you. Personal choreography for every kind of dancer.',
    href: '/wedding-choreography',
    media: 'home-signature-choreography',
    tags: 'COUPLE DANCES / SANGEET / FAMILY PERFORMANCES'
  },
  {
    number: '02',
    title: 'An entrance they’ll never forget.',
    name: 'Entries & entertainment',
    description: 'From a beautifully understated arrival to a spectacular celebration. Thoughtful entry concepts, live artists, and a little theatre.',
    href: '/couple-entries-entertainment',
    media: 'home-signature-entries',
    tags: 'GRAND ENTRIES / LIVE ARTISTS / IMMERSIVE MOMENTS'
  },
  {
    number: '03',
    title: 'Thoughtfully combined for your celebration.',
    name: 'Experiences & packages',
    description: 'Suggested celebration combinations, transparent quote factors, and personalized planning for your multi-day wedding.',
    href: '/packages',
    media: 'packages-hero',
    tags: 'CURATED COMBINATIONS / TAILORED QUOTES / MULTI-DAY'
  },
];

const steps = [
  ['01', 'It starts with you.', 'Tell us your story, your songs, and the kind of celebration you’re dreaming of.'],
  ['02', 'We find your rhythm.', 'Together, we shape the music, movement, and moments around your personality.'],
  ['03', 'A little practice. A lot of joy.', 'Relaxed rehearsals, in person or online, at a pace that feels comfortable.'],
  ['04', 'Your moment to shine.', 'Step into your celebration feeling prepared, present, and completely yourself.'],
];

export default function HomePage() {

  const testimonials = getPublishedTestimonials();

  return (
    <div className="home-page">
      <CinematicHero />

      <div className="celebration-strip" aria-label="Our specialities"><span>First dances</span><i>✦</i><span>Sangeet nights</span><i>✦</i><span>Grand entrances</span><i>✦</i><span>Family moments</span><i>✦</i><span>Unforgettable celebrations</span></div>

      <section id="experiences" className="editorial-section site-container">
        <div className="section-intro">
          <div>
            <p className="eyebrow">01 / THREE DEDICATED CELEBRATION PAGES</p>
            <h2>Not just steps.<br /><em>Something you feel.</em></h2>
          </div>
          <p>Explore our three distinct celebration categories — each with its own dedicated page, details, and planning options.</p>
        </div>
        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={item.number}>
              <Link href={item.href} className={`experience-visual visual-${item.number}`} aria-label={`Explore ${item.name}`}>
                <ResponsiveImage media={getMedia(item.media)} variant={item.number === '01' ? 'wine' : item.number === '02' ? 'ivory' : 'wine'} />
                <span className="visual-number">{item.number} / SEPARATE PAGE</span>
                <span className="visual-category">{item.name}</span>
                <span className="round-arrow"><ArrowUpRight size={22} /></span>
              </Link>
              <p className="micro-label">{item.tags}</p>
              <h3><Link href={item.href}>{item.title}</Link></h3>
              <p className="experience-description">{item.description}</p>
              <div style={{ marginTop: '16px' }}>
                <Link href={item.href} className="text-link">Open dedicated page <ArrowUpRight size={14} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="founder-section">
        <div className="site-container founder-grid">
          <div className="founder-art relative">
            <ResponsiveImage media={getMedia('portrait-sajid-joya')} variant="wine" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2C0713]/85 backdrop-blur-md text-[#D4B272] border border-[#BD954E]/40 text-xs font-semibold tracking-wider uppercase shadow-lg">
              <Sparkles size={12} className="text-[#D4B272]" />
              <span>10+ Years of Experience</span>
            </div>
            <span className="founder-signature">Sajid & Joya</span>
          </div>
          <div className="founder-copy">
            <p className="eyebrow">02 / THE PEOPLE BEHIND THE MOMENTS</p>
            <h2>Over a decade of craft.<br /><em>Two creative hearts.</em></h2>
            <p>We’re Sajid & Joya. With more than 10 years of wedding choreography experience and hundreds of celebrations across India, we turn the songs you love into dance moments that feel effortless, celebratory, and completely yours.</p>
            <p>From palace destination weddings in Rajasthan to coastal sunset sangeets in Goa, our passion is making every non-dancer feel poised, confident, and joyful in the spotlight.</p>
            <div className="founder-values">
              <span><Check size={15} /> 10+ Years Experience</span>
              <span><Check size={15} /> 500+ Celebrations</span>
              <span><Check size={15} /> Destination Wedding Specialists</span>
              <span><Check size={15} /> 100% Non-Dancer Friendly</span>
            </div>
            <Link href="/about" className="text-link">Explore our story & philosophy <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="editorial-section site-container">
        <div className="section-intro">
          <div>
            <p className="eyebrow">03 / A GLIMPSE OF THE MAGIC</p>
            <h2>Moments in <em>motion.</em></h2>
          </div>
          <Link href="/our-work" className="text-link">Explore our showcase <ArrowUpRight size={17} /></Link>
        </div>
        <div className="film-grid">
          {[
            ['home-slot-couple', 'Just the two of you', 'THE COUPLE DANCE'],
            ['home-slot-family', 'Everyone, together', 'THE FAMILY CELEBRATION'],
            ['home-slot-entry', 'Your grand arrival', 'THE COUPLE ENTRY'],
          ].map(([id, title, category]) => (
            <article className="film-card" key={id}>
              <VideoPreview media={getMedia(id)} variant="wine" />
              <div className="film-title">
                <div>
                  <p className="micro-label">{category}</p>
                  <h3>{title}</h3>
                </div>
                <Music2 size={19} />
              </div>
            </article>
          ))}
        </div>
        <p className="showcase-note"><Sparkles size={13} /> Tap any film to watch wedding choreography highlights by Sajid & Joya.</p>
      </section>

      <section className="journey-section">
        <div className="site-container">
          <p className="eyebrow">04 / FROM “WHAT IF” TO “WE DID THAT”</p>
          <h2>Enjoy the journey.<br /><em>We’ll take care of the steps.</em></h2>
          <div className="journey-grid">
            {steps.map(([number, title, description]) => (
              <div key={number} className="journey-step">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
          <Link href="/packages" className="text-link">Find your celebration experience <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="editorial-section site-container">
          <p className="eyebrow">LOVE NOTES</p>
          <h2>Kind words, <em>beautiful memories.</em></h2>
          <div className="experience-grid">
            {testimonials.map((t) => (
              <blockquote className="testimonial" key={t.id}>
                <p>“{t.quote}”</p>
                <cite>{t.clientNames}</cite>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      <EnquiryCTA
        title="Let’s make it a moment."
        description="A song you love. A story only you can tell. Let’s create something that feels beautifully yours."
        buttonText="Start your celebration"
        className="home-enquiry"
      />
    </div>
  );
}

