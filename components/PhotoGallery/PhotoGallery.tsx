'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { /*Reveal,*/ StaggerContainer, StaggerItem } from '@/components/Reveal';
import Lightbox, { LightboxItem } from '@/components/Lightbox/Lightbox';
import galleryData from './galleryData.json';
import './PhotoGallery.scss';

type Category = 'all' | 'rescue' | 'medical' | 'daily' | 'shelter' | 'community';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, 'all'>;
}

const galleryItems: GalleryItem[] = galleryData as GalleryItem[];

const PAGE_SIZE = 12;

// const filters: { label: string; value: Category }[] = [
//   { label: 'All Photos', value: 'all' },
//   { label: 'Rescues', value: 'rescue' },
//   { label: 'Medical Care', value: 'medical' },
//   { label: 'Daily Life', value: 'daily' },
//   { label: 'Shelter', value: 'shelter' },
//   { label: 'Community', value: 'community' },
// ];

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

  const lightboxItems: LightboxItem[] = filtered.map(item => ({
    src: item.src,
    alt: item.alt,
    // caption: item.caption,
    // meta: item.category,
  }));

  const handleFilterChange = (value: Category) => {
    setActiveFilter(value);
    setVisibleCount(PAGE_SIZE);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
  }, [filtered.length]);
  const goNext = useCallback(() => {
    setLightboxIndex(i => i !== null ? (i + 1) % filtered.length : null);
  }, [filtered.length]);

  return (
    <section className="photo-gallery" id="gallery">
      {/* <Reveal variant="fade-up" delay={0.1}>
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
      </Reveal> */}

      <StaggerContainer
        // key={activeFilter}
        className="photo-gallery__grid"
        staggerDelay={0.06}
        initialDelay={0.05}
      >
        {visible.map((item, idx) => (
          <StaggerItem
            key={item.alt + idx}
            variant="zoom-in"
            className="photo-gallery__item"
          >
            <button
              className="photo-gallery__item-inner"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`View: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
              {/* <div className="photo-gallery__overlay">
                <span className="photo-gallery__caption">{item.caption}</span>
              </div> */}
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {hasMore && (
        <div className="photo-gallery__load-more">
          <button
            className="photo-gallery__load-more-btn"
            onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
          >
            View More
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
