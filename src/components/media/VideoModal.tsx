'use client';
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
interface VideoModalProps { isOpen: boolean; onClose: () => void; videoUrl?: string; title: string; }
function youtubeEmbed(source: string): string | null {
  try {
    const url = new URL(source);
    const host = url.hostname.replace(/^www\./, '').replace(/^m\./, '');
    let id: string | null = null;
    if (host === 'youtu.be') id = url.pathname.split('/')[1];
    else if (host === 'youtube.com' || host === 'youtube-nocookie.com') id = url.searchParams.get('v') || url.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]+)/)?.[1] || null;
    return id && /^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` : null;
  } catch { return null; }
}
export default function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog?.close(); document.body.style.overflow = previousOverflow; };
  }, [isOpen]);
  if (!isOpen || !videoUrl) return null;
  const embed = youtubeEmbed(videoUrl);
  return <dialog ref={dialogRef} className="video-dialog" aria-labelledby="video-modal-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="video-dialog-content">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#292526]"><h2 id="video-modal-title" className="font-serif text-lg font-semibold text-white truncate pr-4">{title}</h2><button type="button" onClick={onClose} className="p-2 rounded-lg text-white hover:bg-white/10" aria-label="Close video player"><X className="w-5 h-5" /></button></div>
      <div className="relative aspect-video w-full bg-black">{embed ? <iframe src={embed} title={title} className="w-full h-full border-0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : failed ? <div role="alert" className="flex h-full items-center justify-center p-8 text-center text-white text-sm">This film is unavailable right now. Please try again later.</div> : <video src={videoUrl} controls autoPlay className="w-full h-full object-contain" onError={() => setFailed(true)}>Your browser does not support the video player.</video>}</div>
    </div>
  </dialog>;
}
