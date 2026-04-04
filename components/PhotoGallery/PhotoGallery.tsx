'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './PhotoGallery.scss';

type Category = 'all' | 'rescue' | 'medical' | 'daily' | 'shelter' | 'community';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, 'all'>;
}

const galleryItems: GalleryItem[] = [
  {
    src: 'https://placehold.co/400x300/D4C4A8/7A5C40?text=Rescue+Mission',
    alt: 'Rescue Mission',
    caption: 'Injured cow rescued from highway — March 2025',
    category: 'rescue',
  },
  {
    src: 'https://placehold.co/400x300/C8B99A/7A5C40?text=Vet+Treatment',
    alt: 'Medical Treatment',
    caption: 'Veterinary treatment for fracture recovery',
    category: 'medical',
  },
  {
    src: 'https://placehold.co/400x300/DECBB5/7A5C40?text=Morning+Feeding',
    alt: 'Morning Feeding',
    caption: 'Morning feeding time — 900+ cows fed daily',
    category: 'daily',
  },
  {
    src: 'https://placehold.co/400x300/E0D0B8/7A5C40?text=Cow+Shelter',
    alt: 'Shelter',
    caption: 'New shelter wing inaugurated — accommodating 200+ cows',
    category: 'shelter',
  },
  {
    src: 'https://placehold.co/400x300/D0C0A5/7A5C40?text=Community+Event',
    alt: 'Community Event',
    caption: 'Gau Seva Camp — Community volunteers at work',
    category: 'community',
  },
  {
    src: 'https://placehold.co/400x300/CCBC9E/7A5C40?text=Night+Rescue',
    alt: 'Night Rescue',
    caption: 'Late night rescue operation — abandoned calf found',
    category: 'rescue',
  },
  {
    src: 'https://placehold.co/400x300/D8C8B0/7A5C40?text=Surgery+Room',
    alt: 'Surgery',
    caption: 'Fully equipped surgery room — life-saving operations daily',
    category: 'medical',
  },
  {
    src: 'https://placehold.co/400x300/E2D4BC/7A5C40?text=Calves+Playing',
    alt: 'Calves',
    caption: 'Happy calves playing in the morning sun',
    category: 'daily',
  },
  {
    src: 'https://placehold.co/400x300/C5B598/7A5C40?text=Donor+Visit',
    alt: 'Donor Visit',
    caption: 'Donor visit — Seeing the impact of your contribution',
    category: 'community',
  },
];

const PAGE_SIZE = 8;

const filters: { label: string; value: Category }[] = [
  { label: 'All Photos', value: 'all' },
  { label: 'Rescues', value: 'rescue' },
  { label: 'Medical Care', value: 'medical' },
  { label: 'Daily Life', value: 'daily' },
  { label: 'Shelter', value: 'shelter' },
  { label: 'Community', value: 'community' },
];

export default function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilterChange = (value: Category) => {
    setActiveFilter(value);
    setVisibleCount(PAGE_SIZE);
  };

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, goPrev, goNext]);

  const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section className="photo-gallery" id="gallery">
      {/* <Reveal variant="fade-up">
        <div className="section-header">
          <div className="section-overline">Photo Gallery</div>
          <h2>Moments of Love &amp; Seva</h2>
          <p>
            Browse through our collection capturing daily life, rescues, medical care, and the
            beautiful souls we serve.
          </p>
          <div className="section-divider" />
        </div>
      </Reveal> */}

      <Reveal variant="fade-up" delay={0.1}>
        <div className="photo-gallery__filters" role="group" aria-label="Filter gallery by category">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`photo-gallery__filter-btn${activeFilter === f.value ? ' photo-gallery__filter-btn--active' : ''}`}
              onClick={() => handleFilterChange(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <StaggerContainer
        key={activeFilter}
        className="photo-gallery__grid"
        staggerDelay={0.06}
        initialDelay={0.05}
      >
        {visible.map((item, idx) => (
          <StaggerItem
            key={item.alt + item.category}
            variant="zoom-in"
            className="photo-gallery__item"
          >
            <button
              className="photo-gallery__item-inner"
              onClick={() => openLightbox(idx)}
              aria-label={`View: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover' }}
                              />
              <div className="photo-gallery__overlay">
                <span className="photo-gallery__caption">{item.caption}</span>
              </div>
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {hasMore && (
        <div className="photo-gallery__load-more">
          <button
            className="photo-gallery__load-more-btn"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
          >
            Load More
          </button>
        </div>
      )}

      {lightboxItem && lightboxIndex !== null && (
        <div
          className="photo-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.alt}
          onClick={closeLightbox}
        >
          <button
            className="photo-gallery__lightbox-close"
            aria-label="Close lightbox"
            onClick={closeLightbox}
          >
            ✕
          </button>

          <button
            className="photo-gallery__lightbox-nav photo-gallery__lightbox-nav--prev"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            ‹
          </button>

          <div
            className="photo-gallery__lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="photo-gallery__lightbox-img">
              <Image
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                fill
                style={{ objectFit: 'cover' }}
                              />
            </div>
            <p className="photo-gallery__lightbox-caption">{lightboxItem.caption}</p>
          </div>

          <button
            className="photo-gallery__lightbox-nav photo-gallery__lightbox-nav--next"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
