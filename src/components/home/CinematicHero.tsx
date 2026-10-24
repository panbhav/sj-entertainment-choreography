'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import './CinematicHero.css';

const desktopFilm = '/media/hero-film-desktop.mp4';
const mobileFilm = '/media/hero-film-mobile.mp4';

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedByVisitor = useRef(false);
  const manualPlayback = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    const mobile = window.matchMedia('(max-width: 700px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let inView = true;

    function synchronize() {
      if (!video) return;
      const automaticPlayback = !reducedMotion.matches && !connection?.saveData;
      if (!automaticPlayback && !manualPlayback.current) {
        video.pause();
        // Keep the responsive poster and avoid downloading the film in this mode.
        if (video.hasAttribute('src')) { video.removeAttribute('src'); video.load(); }
        return;
      }
      const source = withBasePath(mobile.matches ? mobileFilm : desktopFilm);
      if (video.getAttribute('src') !== source) { video.src = source; video.load(); }
      if (inView && !document.hidden && !pausedByVisitor.current) {
        void video.play().catch(() => { /* The visible play control handles autoplay restrictions. */ });
      } else { video.pause(); }
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      synchronize();
    }, { threshold: 0.05 });
    observer.observe(section);
    mobile.addEventListener('change', synchronize);
    reducedMotion.addEventListener('change', synchronize);
    document.addEventListener('visibilitychange', synchronize);
    synchronize();
    return () => {
      observer.disconnect();
      mobile.removeEventListener('change', synchronize);
      reducedMotion.removeEventListener('change', synchronize);
      document.removeEventListener('visibilitychange', synchronize);
      video.pause();
    };
  }, []);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video || hasError) return;
    if (!video.paused) { pausedByVisitor.current = true; video.pause(); return; }
    pausedByVisitor.current = false;
    manualPlayback.current = true;
    if (!video.getAttribute('src')) {
      video.src = withBasePath(window.matchMedia('(max-width: 700px)').matches ? mobileFilm : desktopFilm);
      video.load();
    }
    try { await video.play(); } catch { setIsPlaying(false); }
  }

  return (
    <section ref={sectionRef} className={'cinema-hero'} aria-labelledby="opening-title">
      <div className={'cinema-background'} aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet={withBasePath('/media/hero-film-mobile-poster.jpg')} />
          <Image src={withBasePath('/media/hero-film-desktop-poster.jpg')} alt="" fill unoptimized loading="eager" fetchPriority="high" sizes="100vw" className={'cinema-poster'} />
        </picture>
        <video ref={videoRef} className={`${'cinema-video'} ${isReady ? 'cinema-ready' : ''}`} muted loop playsInline preload="none" tabIndex={-1}
          onPlaying={() => { setHasError(false); setIsPlaying(true); setIsReady(true); }}
          onPause={() => setIsPlaying(false)}
          onEmptied={() => { setIsReady(false); setIsPlaying(false); }}
          onError={() => { setHasError(true); setIsReady(false); setIsPlaying(false); }}
        />
        <div className={'cinema-shade'} />
      </div>
      <div className={`site-container ${'cinema-content'}`}>
        <p className={'cinema-kicker'}><span /> WEDDING CHOREOGRAPHY BY SAJID & JOYA</p>
        <h1 id="opening-title" className={'cinema-headline'}>Your people.<br />Your music.<br /><span>Your moment.</span></h1>
        <p className={'cinema-description'}>Wedding dances, unforgettable entries, and celebrations that feel completely yours.</p>
        <div className={'cinema-actions'}>
          <Link href="/contact" className={'cinema-primary'}>Plan your celebration <ArrowUpRight size={17} /></Link>
          <Link href="/our-work" className={'cinema-secondary'}>Explore our work <ArrowUpRight size={17} /></Link>
        </div>
      </div>
      <div className={`site-container ${'cinema-bottom'}`}>
        <p className={'cinema-footnote'}>REAL STORIES. REAL CELEBRATIONS.<span>CHOREOGRAPHED ACROSS INDIA.</span></p>
        <Link href="#experiences" className={'cinema-scroll'}>Discover the experience <ArrowDown size={15} /></Link>
        <button type="button" className={'cinema-playback'} onClick={togglePlayback} disabled={hasError} aria-label={hasError ? 'Background film unavailable' : isPlaying ? 'Pause background video' : 'Play background video'}>
          {isPlaying ? <Pause size={15} /> : <Play size={15} />}<span>{hasError ? 'Film unavailable' : isPlaying ? 'Pause film' : 'Play film'}</span>
        </button>
      </div>
    </section>
  );
}

