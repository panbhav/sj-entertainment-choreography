import { AspectRatio } from '@/content/media';
interface MediaPlaceholderProps {
  aspectRatio?: AspectRatio;
  label: string;
  sublabel?: string;
  className?: string;
  variant?: 'ivory' | 'wine' | 'charcoal';
  isVideoSlot?: boolean;
}
export default function MediaPlaceholder({ aspectRatio = '16/9', label, sublabel, className = '', variant = 'ivory', isVideoSlot = false }: MediaPlaceholderProps) {
  return <div className={`media-art media-art-${variant} ${className}`} style={{ aspectRatio }} role="img" aria-label={`${label}. ${sublabel || (isVideoSlot ? 'Film coming soon' : 'Photography coming soon')}`}>
    <div className="media-art-arch" aria-hidden="true" /><div className="media-art-orbit orbit-a" aria-hidden="true" /><div className="media-art-orbit orbit-b" aria-hidden="true" />
    <span className="media-art-star" aria-hidden="true">✦</span><span className="media-art-initials" aria-hidden="true">S<span>&</span>J</span>
    <div className="media-art-label"><span>{isVideoSlot ? 'FILM COMING SOON' : 'THE CELEBRATION COLLECTION'}</span><p>{label}</p></div>
  </div>;
}
