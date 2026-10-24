'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, CheckCircle2, Play, Pause, Sparkles, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { getMedia } from '@/content/media';
import { ownersData } from '@/content/about';
import ImageLightbox from '@/components/media/ImageLightbox';
import { withBasePath } from '@/lib/basePath';

export default function AwardRecognitionSection() {
  const [activeTab, setActiveTab] = useState<'video' | 'stage' | 'certificate'>('video');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showFullCert, setShowFullCert] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const award = ownersData.award;
  const stageMedia = getMedia('award-stage');
  const certMedia = getMedia('award-certificate');
  const videoMedia = getMedia('award-reel');

  function togglePlay() {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  }

  return (
    <section id="award-recognition" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-24">
      {/* Container with luxury warm gold & wine aesthetic */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2C0713] via-[#3D101E] to-[#1F040C] text-[#FAF7F2] p-8 sm:p-12 lg:p-16 border border-[#BD954E]/40 shadow-2xl">
        {/* Subtle decorative gold background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#BD954E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#641C32]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Accolade Narrative & Verifiable Facts */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#BD954E]/20 text-[#D4B272] border border-[#BD954E]/40 text-xs font-semibold tracking-wider uppercase">
              <Award className="w-4 h-4 text-[#D4B272]" />
              <span>National Industry Recognition</span>
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2] leading-tight">
                {award.awardTitle}
              </h2>
              <p className="mt-2 text-base sm:text-lg text-[#D4B272] font-serif italic">
                {award.category} • Conferred to {award.honouree}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#E5DDD0] leading-relaxed">
              {award.summary}
            </p>

            {/* Credential Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-[#FAF7F2]/5 border border-[#BD954E]/25 backdrop-blur-sm">
              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-[#D4B272] uppercase tracking-wider block">
                  Conferred By
                </span>
                <p className="text-sm font-semibold text-white">
                  {award.conferredBy}
                </p>
                <p className="text-xs text-[#C5BDB2]">
                  {award.conferredByTitle}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-semibold text-[#D4B272] uppercase tracking-wider block">
                  Venue & Event
                </span>
                <p className="text-sm font-semibold text-white">
                  {award.location}
                </p>
                <p className="text-xs text-[#C5BDB2]">
                  {award.event} • {award.date}
                </p>
              </div>
            </div>

            {/* Key highlights checklist */}
            <ul className="space-y-2.5 pt-1">
              {award.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FAF7F2]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4B272] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Media Selector Tabs */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4B272] block mb-3">
                Explore Award Documentation:
              </span>
              <div className="inline-flex p-1.5 rounded-2xl bg-black/40 border border-[#BD954E]/30 gap-1.5 flex-wrap">
                <button
                  type="button"
                  onClick={() => { setActiveTab('video'); setIsPlaying(false); }}
                  aria-pressed={activeTab === 'video'}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === 'video'
                      ? 'bg-[#BD954E] text-[#2C0713] shadow-md'
                      : 'text-[#FAF7F2] hover:bg-white/10'
                  }`}
                >
                  Ceremony Reel
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab('stage'); setIsPlaying(false); }}
                  aria-pressed={activeTab === 'stage'}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === 'stage'
                      ? 'bg-[#BD954E] text-[#2C0713] shadow-md'
                      : 'text-[#FAF7F2] hover:bg-white/10'
                  }`}
                >
                  Stage Felicitation
                </button>
                <button
                  type="button"
                  onClick={() => { setActiveTab('certificate'); setIsPlaying(false); }}
                  aria-pressed={activeTab === 'certificate'}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === 'certificate'
                      ? 'bg-[#BD954E] text-[#2C0713] shadow-md'
                      : 'text-[#FAF7F2] hover:bg-white/10'
                  }`}
                >
                  Certificate of Excellence
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Media Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden bg-black/60 border border-[#BD954E]/40 shadow-2xl relative aspect-[4/5] flex items-center justify-center">
              {/* VIDEO TAB */}
              {activeTab === 'video' && (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <video
                    ref={videoRef}
                    src={withBasePath(videoMedia.sourceUrl || '')}
                    poster={withBasePath(videoMedia.posterUrl || '')}
                    preload="none"
                    playsInline
                    loop
                    muted={isMuted}
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Play/Pause Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors pointer-events-none">
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label={isPlaying ? 'Pause award reel' : 'Play award reel'}
                      className="pointer-events-auto p-4 rounded-full bg-[#BD954E] text-[#2C0713] shadow-xl hover:scale-110 active:scale-95 transition-all"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 translate-x-0.5" />}
                    </button>
                  </div>

                  {/* Sound Toggle */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/70 text-[#FAF7F2] hover:bg-black border border-white/20 transition-all z-20"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D4B272]" />}
                  </button>

                  <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#D4B272] border border-[#BD954E]/40 text-[11px] font-semibold uppercase">
                    <Sparkles className="w-3 h-3 text-[#D4B272]" />
                    <span>Ceremony Live Reel</span>
                  </div>
                </div>
              )}

              {/* STAGE TAB */}
              {activeTab === 'stage' && (
                <div className="relative w-full h-full flex flex-col items-center justify-center bg-black">
                  <Image
                    src={withBasePath(stageMedia.sourceUrl || '')}
                    alt={stageMedia.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-xs text-[#FAF7F2] bg-black/60 p-3 rounded-xl border border-white/10 backdrop-blur-md">
                    <p className="font-semibold text-[#D4B272]">Sajid Ali receiving the Trophy & Certificate</p>
                    <p className="text-[11px] text-[#C5BDB2] mt-0.5">Presented by Bollywood actress Vaishnavi Macdonald on stage in Jaipur.</p>
                  </div>
                </div>
              )}

              {/* CERTIFICATE TAB */}
              {activeTab === 'certificate' && (
                <div className="relative w-full h-full flex flex-col items-center justify-center bg-[#1F040C] p-3">
                  <button type="button" aria-label="View award certificate fullscreen" className="relative block w-full h-full rounded-xl overflow-hidden border border-[#BD954E]/50 shadow-lg cursor-pointer group" onClick={() => setShowFullCert(true)}>
                    <Image
                      src={withBasePath(certMedia.sourceUrl || '')}
                      alt={certMedia.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-contain bg-black/40 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-3 right-3 z-10 p-2 rounded-full bg-black/70 text-[#D4B272] border border-[#BD954E]/40 group-hover:bg-[#BD954E] group-hover:text-[#2C0713] transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </button>
                  <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#D4B272] border border-[#BD954E]/40 text-[11px] font-semibold uppercase">
                    <span>Certificate of Excellence</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showFullCert && <ImageLightbox src={certMedia.sourceUrl!} alt={certMedia.alt} title="National Star Achievers Award 2026 — Certificate of Excellence" onClose={() => setShowFullCert(false)} />}
    </section>
  );
}
