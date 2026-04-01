'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './BeforeAfter.scss';

interface BeforeAfterItem {
  beforeSrc: string;
  afterSrc: string;
  heading: string;
  description: string;
  tag: string;
}

const stories: BeforeAfterItem[] = [
  {
    beforeSrc: 'https://placehold.co/600x400/BDA98A/7A5C40?text=Before',
    afterSrc: 'https://placehold.co/600x400/C4D4A0/5A6B30?text=After',
    heading: 'Lakshmi — Road Accident Survivor',
    description:
      'Found on NH-27 with multiple fractures and severe malnutrition. After 4 months of intensive care, surgery, and rehabilitation, she made a full recovery.',
    tag: '✓ Fully Recovered',
  },
  {
    beforeSrc: 'https://placehold.co/600x400/C0A888/7A5C40?text=Before',
    afterSrc: 'https://placehold.co/600x400/B8D098/5A6B30?text=After',
    heading: 'Nandi — Abandoned Calf',
    description:
      'Abandoned at just 2 weeks old, severely dehydrated. Hand-raised with love and now thriving at 8 months, one of the liveliest in the herd.',
    tag: '✓ Thriving',
  },
  {
    beforeSrc: 'https://placehold.co/600x400/B8A080/7A5C40?text=Before',
    afterSrc: 'https://placehold.co/600x400/A8C890/5A6B30?text=After',
    heading: 'Gauri — Skin Disease Recovery',
    description:
      'Rescued with severe dermatitis covering 60% of her body. Six months of veterinary treatment and nutritional support brought complete healing.',
    tag: '✓ Healthy & Happy',
  },
];

function SliderCard({ item }: { item: BeforeAfterItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percentage
  const isDragging = useRef(false);

  const updatePosition = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="ba-card">
      <div
        ref={containerRef}
        className="ba-slider"
        aria-label="Before and after image slider"
      >
        {/* Before image — full width base */}
        <div className="ba-slider__before">
          <Image src={item.beforeSrc} alt={`Before: ${item.heading}`} fill style={{ objectFit: 'cover' }} unoptimized />
        </div>

        {/* After image — clipped by slider position */}
        <div
          className="ba-slider__after"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image src={item.afterSrc} alt={`After: ${item.heading}`} fill style={{ objectFit: 'cover' }} unoptimized />
        </div>

        {/* Labels — outside clip context so they're always visible */}
        <span className="ba-slider__label ba-slider__label--after">Before</span>
        <span className="ba-slider__label ba-slider__label--before">After</span>

        {/* Divider line + handle */}
        <div className="ba-slider__divider" style={{ left: `${position}%` }}>
          <button
            className="ba-slider__handle"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            aria-label="Drag to compare before and after"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            role="slider"
          >
            <span className="ba-slider__arrow ba-slider__arrow--left">‹</span>
            <span className="ba-slider__arrow ba-slider__arrow--right">›</span>
          </button>
        </div>
      </div>

      <div className="ba-card__body">
        <h3>{item.heading}</h3>
        <p>{item.description}</p>
        <span className="ba-card__tag">{item.tag}</span>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="before-after" id="before-after">
      <Reveal variant="fade-up">
        <div className="section-header">
          <div className="section-overline">Transformation Stories</div>
          <h2>Before &amp; After Rescue</h2>
          <p>
            Every animal has a story. See the incredible transformations made possible by your
            generous support.
          </p>
          <div className="section-divider" />
        </div>
      </Reveal>

      <StaggerContainer className="ba-grid" staggerDelay={0.1} initialDelay={0.15}>
        {stories.map((item) => (
          <StaggerItem key={item.heading} variant="fade-up">
            <SliderCard item={item} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
