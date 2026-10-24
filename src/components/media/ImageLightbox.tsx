'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';

export default function ImageLightbox({ src, alt, title, onClose }: { src: string; alt: string; title: string; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previous = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog?.close(); document.body.style.overflow = previous; if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true }); };
  }, []);
  return (
    <dialog ref={dialogRef} className="video-dialog" aria-labelledby="image-lightbox-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="video-dialog-content bg-[#1F040C]">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <h2 id="image-lightbox-title" className="text-sm text-[#D4B272] leading-relaxed">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close image viewer" className="shrink-0 p-3 text-white rounded-lg hover:bg-white/10"><X size={20} /></button>
        </div>
        <div className="relative w-full" style={{ height: 'min(70dvh, 680px)' }}>
          <Image src={withBasePath(src)} alt={alt} fill sizes="(max-width: 900px) 100vw, 896px" className="object-contain" />
        </div>
      </div>
    </dialog>
  );
}
