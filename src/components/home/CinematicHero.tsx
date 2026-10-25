'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import './CinematicHero.css';

const desktopFilm = '/media/hero-display-desktop.mp4';
const mobileFilm = '/media/hero-display-mobile.mp4';

function chooseFilm(mobile: boolean) {
  return mobile ? mobileFilm : desktopFilm;
}

export default function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [needsPlayback, setNeedsPlayback] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mobile = window.matchMedia('(max-width: 800px)');

    function synchronize() {
      if (!video) return;
      const source = withBasePath(chooseFilm(mobile.matches));
      if (video.getAttribute('src') !== source) {
        video.src = source;
        video.load();
      }
      if (!document.hidden) {
        void video.play().catch(() => setNeedsPlayback(true));
      }
    }

    mobile.addEventListener('change', synchronize);
    document.addEventListener('visibilitychange', synchronize);
    synchronize();
    return () => {
      mobile.removeEventListener('change', synchronize);
      document.removeEventListener('visibilitychange', synchronize);
      video.pause();
    };
  }, []);

  async function resumePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.error) video.load();
    try { await video.play(); } catch { setNeedsPlayback(true); }
  }

  return (
    <section className="cinema-hero" aria-labelledby="opening-title">
      <div className="cinema-background" aria-hidden="true">
        <picture>
          <source media="(max-width: 800px)" srcSet={withBasePath('/media/hero-display-mobile-poster.jpg')} />
          <Image src={withBasePath('/media/hero-display-desktop-poster.jpg')} alt="" width={1920} height={1080} unoptimized loading="eager" fetchPriority="high" sizes="100vw" className="cinema-poster" />
        </picture>
        <video ref={videoRef} className={`cinema-video ${isReady ? 'cinema-ready' : ''}`} autoPlay muted loop playsInline preload="auto" tabIndex={-1}
          onPlaying={() => { setNeedsPlayback(false); setIsReady(true); }}
          onEmptied={() => setIsReady(false)}
          onError={() => { setIsReady(false); setNeedsPlayback(true); }}
        />
        <div className="cinema-shade" />
      </div>
      <div className="site-container cinema-content">
        <p className="cinema-kicker"><span /> WEDDING CHOREOGRAPHY BY SAJID & JOYA</p>
        <h1 id="opening-title" className="cinema-headline">Wedding dances.<br />Beautifully<br /><span>choreographed.</span></h1>
        <p className="cinema-description">Wedding dances, unforgettable entries, and celebrations that feel completely yours.</p>
        <div className="cinema-actions">
          <Link href="/contact" className="cinema-primary">Plan your celebration <ArrowUpRight size={17} /></Link>
          <Link href="/our-work" className="cinema-secondary">Explore our work <ArrowUpRight size={17} /></Link>
        </div>
      </div>
      <div className="site-container cinema-bottom">
        <p className="cinema-footnote">REAL STORIES. REAL CELEBRATIONS.<span>CHOREOGRAPHED ACROSS INDIA.</span></p>
        <Link href="#experiences" className="cinema-scroll">Discover the experience <ArrowDown size={15} /></Link>
        {needsPlayback && <button type="button" className="cinema-playback" onClick={resumePlayback} aria-label="Play background video"><Play size={15} /><span>Play film</span></button>}
      </div>
    </section>
  );
}
