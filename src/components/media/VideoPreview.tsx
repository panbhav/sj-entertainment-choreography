'use client';
import { useState } from 'react';
import { Play } from 'lucide-react';
import { MediaItem } from '@/content/media';
import MediaPlaceholder from './MediaPlaceholder';
import ResponsiveImage from './ResponsiveImage';
import VideoModal from './VideoModal';
interface VideoPreviewProps { media: MediaItem; className?: string; variant?: 'ivory' | 'wine' | 'charcoal'; }
export default function VideoPreview({ media, className = '', variant = 'wine' }: VideoPreviewProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const hasVideo = Boolean(media.sourceUrl && media.published);
  return <>
    <div className={`relative group ${className}`}>
      {!hasVideo ? <MediaPlaceholder aspectRatio={media.aspectRatio} label={media.title} sublabel={media.caption || 'Film coming soon'} variant={variant} isVideoSlot /> : <button type="button" className="relative block w-full overflow-hidden rounded-2xl text-left" style={{ aspectRatio: media.aspectRatio }} onClick={() => setModalOpen(true)} aria-label={`Play video: ${media.title}`}>
        <ResponsiveImage media={{ ...media, sourceUrl: media.posterUrl, caption: undefined }} variant={variant} />
        <span className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center"><span className="w-16 h-16 rounded-full bg-[#BD954E] text-[#2C0713] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"><Play className="w-6 h-6 fill-current translate-x-0.5" /></span></span>
        {media.caption && <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 text-white text-xs">{media.caption}</span>}
      </button>}
    </div>
    {hasVideo && modalOpen && <VideoModal isOpen onClose={() => setModalOpen(false)} videoUrl={media.sourceUrl} posterUrl={media.posterUrl} title={media.title} />}
  </>;
}
