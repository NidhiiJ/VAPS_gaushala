'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './VideoGallery.scss';

interface VideoItem {
  youtubeId: string;
  title: string;
  type: string;
  duration: string;
  /** Optional: override the auto-generated YouTube thumbnail */
  customThumb?: string;
}

const videoItems: VideoItem[] = [
  {
    youtubeId: 'a4-8CYspAc0',
    title: 'Documentary on Suri Prem Jeev Raksha Kendra, Pralai',
    type: 'Documentary',
    duration: '10 min',
  },
  {
    youtubeId: '0ploylea2zI',
    title: 'देवनगरी के देवदर्शन पार्ट',
    type: 'Vlog',
    duration: '11 min',
  },
  {
    youtubeId: '7_5fa4NhX4M',
    title: 'सूरि प्रेम जीव रक्षा केंद्र, परलाई, पिंडवाड़ा, राजस्थान।',
    type: 'Shorts',
    duration: '< 1 min',
  },
];

function getThumbUrl(item: VideoItem): string {
  if (item.customThumb) return item.customThumb;
  return `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
}

function getEmbedUrl(youtubeId: string): string {
  return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
}

export default function VideoGallery() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const close = useCallback(() => setActiveId(null), []);

  // Close on Escape
  useEffect(() => {
    if (!activeId) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeId, close]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = activeId ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeId]);

  return (
    <section className="video-gallery" id="videos">
      <Reveal variant="fade-up">
        <div className="section-header">
          <div className="section-overline">Watch &amp; Share</div>
          <h2>Videos from the Gaushala</h2>
          <p>
            Watch our rescue stories, daily operations, and community events. Subscribe to stay
            connected.
          </p>
          <div className="section-divider video-gallery__divider" />
        </div>
      </Reveal>

      <StaggerContainer
        className="video-gallery__grid"
        staggerDelay={0.1}
        initialDelay={0.05}
      >
        {videoItems.map((item) => (
          <StaggerItem key={item.youtubeId} variant="zoom-in" className="video-gallery__card">
            <div className="video-gallery__thumb">
              <Image
                src={getThumbUrl(item)}
                alt={item.title}
                width={500}
                height={280}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                unoptimized
              />
              <div className="video-gallery__overlay" />
              <button
                className="video-gallery__play"
                aria-label={`Play: ${item.title}`}
                onClick={() => setActiveId(item.youtubeId)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              </button>
            </div>
            <div className="video-gallery__body">
              <h3 className="video-gallery__title">{item.title}</h3>
              <p className="video-gallery__meta">
                <span className="video-gallery__tag">{item.type}</span>
                <span className="video-gallery__dot">·</span>
                {item.duration}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* ── Lightbox modal ───────────────────────────────────── */}
      {activeId && (
        <div
          className="video-gallery__modal-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div
            className="video-gallery__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-gallery__modal-close"
              onClick={close}
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
            <div className="video-gallery__iframe-wrap">
              <iframe
                src={getEmbedUrl(activeId)}
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
