'use client';

import { useCallback, useState } from 'react';
import { StaggerContainer, StaggerItem } from '@/components/Reveal';
import Lightbox from '@/components/Lightbox/Lightbox';
import './Publications.scss';

const PLACEHOLDER_CARDS = [
  { source: 'Newspaper', title: 'Add Publication Title Here', date: 'Date of Publication', image: '/images/publications/1.jpeg' },
  { source: 'Newspaper', title: 'Add Publication Title Here', date: 'Date of Publication', image: '/images/publications/2.jpeg' },
  { source: 'Newspaper', title: 'Add Publication Title Here', date: 'Date of Publication', image: '/images/publications/3.jpeg' },
  { source: 'Newspaper', title: 'Add Publication Title Here', date: 'Date of Publication', image: '/images/publications/4.jpeg' },
  { source: 'Newspaper', title: 'Add Publication Title Here', date: 'Date of Publication', image: '/images/publications/5.jpeg' },
  { source: 'Newspaper', title: 'Add Publication Title Here', date: 'Date of Publication', image: '/images/publications/6.jpeg' },
];

const lightboxItems = PLACEHOLDER_CARDS.map(c => ({
  src: c.image,
  alt: c.title,
  // caption: c.title,
  // meta: c.source,
}));

function ZoomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  );
}

export default function Publications() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setActiveIndex(null), []);
  const handlePrev = useCallback(() =>
    setActiveIndex(i => i !== null ? (i - 1 + PLACEHOLDER_CARDS.length) % PLACEHOLDER_CARDS.length : null), []);
  const handleNext = useCallback(() =>
    setActiveIndex(i => i !== null ? (i + 1) % PLACEHOLDER_CARDS.length : null), []);

  return (
    <section className="pub-section">
      <StaggerContainer className="pub-grid">
        {PLACEHOLDER_CARDS.map((card, i) => (
          <StaggerItem key={i}>
            <div className="pub-card" onClick={() => setActiveIndex(i)} role="button" tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setActiveIndex(i)}>
              <div className="pub-card__image">
                <img src={card.image} alt={card.title} />
                <div className="pub-card__zoom" aria-hidden="true">
                  <ZoomIcon />
                </div>
              </div>
              <div className="pub-card__body">
                <div className="pub-card__source">{card.source}</div>
                {/* <div className="pub-card__title">{card.title}</div> */}
                {/* <div className="pub-card__date">{card.date}</div> */}
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {activeIndex !== null && (
        <Lightbox
          items={lightboxItems}
          index={activeIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
