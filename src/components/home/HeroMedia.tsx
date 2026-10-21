'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Maximize2, Sparkles } from 'lucide-react';
import { MediaItem } from '@/content/media';
import { withBasePath } from '@/lib/basePath';
import VideoModal from '@/components/media/VideoModal';
import CelebrationSculpture from '@/components/common/CelebrationSculpture';

interface HeroMediaProps {
  media: MediaItem;
}

export default function HeroMedia({ media }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const hasVideo = Boolean(media.published && media.sourceUrl && !hasError);

  if (!hasVideo) {
    return <CelebrationSculpture />;
  }

  const videoSrc = withBasePath(media.sourceUrl);
  const posterSrc = withBasePath(media.posterUrl);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-[#DFCBB0]/50 bg-[#2C0713] group">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc || undefined}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => setHasError(true)}
        />

        {/* Subtle cinematic gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Badge in top left */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[#FAF7F2] text-[11px] font-medium tracking-wider uppercase border border-white/10 pointer-events-none">
          <Sparkles className="w-3 h-3 text-[#D4B272]" />
          <span>Real Wedding Highlight</span>
        </div>

        {/* Interactive Controls Overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex items-center justify-between text-white">
          <div className="max-w-[70%]">
            <p className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#D4B272]">
              Sangeet Showcase
            </p>
            <p className="text-xs sm:text-sm font-serif font-medium text-[#FAF7F2] truncate">
              {media.title}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Play/Pause loop toggle */}
            <button
              type="button"
              onClick={togglePlay}
              className="p-2 sm:p-2.5 rounded-full bg-black/60 hover:bg-[#641C32] text-white border border-white/20 transition-all duration-200 hover:scale-110"
              aria-label={isPlaying ? 'Pause preview loop' : 'Play preview loop'}
              title={isPlaying ? 'Pause loop' : 'Play loop'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>

            {/* Watch with Audio / Expand modal button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#BD954E] hover:bg-[#D4B272] text-[#2C0713] text-xs font-semibold shadow-lg transition-all duration-200 hover:scale-105"
              aria-label="Watch full wedding film with audio"
            >
              <Maximize2 className="w-3 h-3" />
              <span className="hidden sm:inline">Watch Full Film</span>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <VideoModal
          isOpen
          onClose={() => setIsModalOpen(false)}
          videoUrl={media.sourceUrl}
          title={media.title}
        />
      )}
    </>
  );
}
