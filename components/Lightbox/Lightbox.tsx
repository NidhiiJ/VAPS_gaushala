'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import './Lightbox.scss';

export interface LightboxItem {
  src: string;
  alt: string;
  /** Caption shown below the image */
  caption?: string;
  /** Overline label (e.g. "Newspaper", "Rescue") */
  meta?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[index];
  const total = items.length;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.alt}>
      <button className="lb__close" onClick={onClose} aria-label="Close">
        <CloseIcon />
      </button>

      <button
        className="lb__nav lb__nav--prev"
        onClick={e => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous image"
      >
        <ChevronLeft />
      </button>

      <div className="lb__inner" onClick={e => e.stopPropagation()}>
        <div className="lb__image-wrap">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 90vw, 900px"
          />
        </div>

        {(item.meta || item.caption) && (
          <div className="lb__caption">
            {item.meta && <span className="lb__meta">{item.meta}</span>}
            {item.caption && <span className="lb__text">{item.caption}</span>}
            <span className="lb__counter">{index + 1} / {total}</span>
          </div>
        )}

        {!item.meta && !item.caption && (
          <div className="lb__caption lb__caption--counter-only">
            <span className="lb__counter">{index + 1} / {total}</span>
          </div>
        )}
      </div>

      <button
        className="lb__nav lb__nav--next"
        onClick={e => { e.stopPropagation(); onNext(); }}
        aria-label="Next image"
      >
        <ChevronRight />
      </button>
    </div>
  );
}
