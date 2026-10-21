'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MediaItem } from '@/content/media';
import { withBasePath } from '@/lib/basePath';
import MediaPlaceholder from './MediaPlaceholder';

interface ResponsiveImageProps {
  media: MediaItem;
  className?: string;
  variant?: 'ivory' | 'wine' | 'charcoal';
  priority?: boolean;
}

export default function ResponsiveImage({ media, className = '', variant = 'ivory', priority = false }: ResponsiveImageProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  
  // Prefer image URLs (not video files) for <img> rendering
  const isVideo = (url?: string) => Boolean(url && /\.(mp4|mov|webm|m4v)$/i.test(url));
  const candidateUrl = (!isVideo(media.sourceUrl) && media.sourceUrl)
    ? media.sourceUrl
    : (media.posterUrl && !isVideo(media.posterUrl) ? media.posterUrl : null);

  if (!candidateUrl || !media.published || failedSource === candidateUrl) {
    return <MediaPlaceholder aspectRatio={media.aspectRatio} label={media.title} sublabel={media.caption} className={className} variant={variant} />;
  }

  const resolvedUrl = withBasePath(candidateUrl);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl ${className}`} style={{ aspectRatio: media.aspectRatio }}>
      <Image
        src={resolvedUrl}
        alt={media.alt || media.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
        preload={priority}
        unoptimized
        onError={() => setFailedSource(candidateUrl)}
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
      {media.caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs font-medium">
          {media.caption}
        </div>
      )}
    </div>
  );
}
