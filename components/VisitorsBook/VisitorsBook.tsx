'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import './VisitorsBook.scss';

const TOTAL_PAGES = 15;

interface VisitorsBookProps {
  showDownloadButton?: boolean;
}

export default function VisitorsBook({ showDownloadButton }: VisitorsBookProps) {
  const [current, setCurrent] = useState(0);

  const navigate = (dir: number) => {
    setCurrent((prev) => (prev + dir + TOTAL_PAGES) % TOTAL_PAGES);
  };

  return (
    <section className="visitors-book">
      <Reveal variant="fade-up">
        <div className="section-header">
          <div className="section-overline">Visitor&rsquo;s Book</div>
          <h2>Words From Our Visitors</h2>
          <p>Heartfelt testimonials handwritten by visitors who witnessed our seva firsthand.</p>
          <div className="section-divider" />
        </div>
      </Reveal>
      {showDownloadButton && (
        <Reveal variant="fade-up">
          <div className="visitors-book-download">
            <a href="/visitors-book.pdf" download className="btn-cta-primary">
              Download Complete PDF
            </a>
          </div>
        </Reveal>
      )}

      <Reveal variant="fade-up" delay={0.15}>
      <div className="pdf-viewer">
        <div className="pdf-viewer-wrap">
          <div className="pdf-display">
            {Array.from({ length: TOTAL_PAGES }, (_, i) => (
              <div key={i} className={`pdf-page${i === current ? ' active' : ''}`}>
                <Image
                  src={`https://placehold.co/960x680/FFF9F2/999080?text=Page+${i + 1}`}
                  alt={`Visitor's book page ${i + 1}`}
                  width={960}
                  height={680}
                  unoptimized
                />
              </div>
            ))}
          </div>

          <div className="pdf-controls">
            <button className="pdf-btn" onClick={() => navigate(-1)} aria-label="Previous page">
              &#8592;
            </button>
            <span className="pdf-counter">
              {current + 1} / {TOTAL_PAGES}
            </span>
            <button className="pdf-btn" onClick={() => navigate(1)} aria-label="Next page">
              &#8594;
            </button>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
