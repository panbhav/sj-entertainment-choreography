'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MediaItem } from '@/content/media';
import MediaPlaceholder from './MediaPlaceholder';
interface ResponsiveImageProps {
  media: MediaItem;
  className?: string;
  variant?: 'ivory' | 'wine' | 'charcoal';
  priority?: boolean;
}
export default function ResponsiveImage({ media, className = '', variant = 'ivory', priority = false }: ResponsiveImageProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  if (!media.sourceUrl || !media.published || failedSource === media.sourceUrl) {
    return <MediaPlaceholder aspectRatio={media.aspectRatio} label={media.title} sublabel={media.caption} className={className} variant={variant} />;
  }
  return <div className={`relative w-full overflow-hidden rounded-2xl ${className}`} style={{ aspectRatio: media.aspectRatio }}>
    <Image src={media.sourceUrl} alt={media.alt || media.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px" preload={priority} unoptimized={/^https?:\/\//.test(media.sourceUrl)} onError={() => setFailedSource(media.sourceUrl || null)} className="object-cover transition-transform duration-500 hover:scale-105" />
    {media.caption && <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white text-xs font-medium">{media.caption}</div>}
  </div>;
}
