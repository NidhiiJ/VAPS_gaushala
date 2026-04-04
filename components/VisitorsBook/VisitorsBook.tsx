'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import './VisitorsBook.scss';

const PAGES: { src: string; width: number; height: number }[] = [
  { src: '/images/visitors-book/page-01.jpg', width: 1200, height: 899 },
  { src: '/images/visitors-book/page-02.jpg', width: 1200, height: 911 },
  { src: '/images/visitors-book/page-03.jpg', width: 1200, height: 898 },
  { src: '/images/visitors-book/page-04.jpg', width: 1200, height: 884 },
  { src: '/images/visitors-book/page-05.jpg', width: 1200, height: 874 },
  { src: '/images/visitors-book/page-06.jpg', width: 1200, height: 918 },
  { src: '/images/visitors-book/page-07.jpg', width: 1200, height: 922 },
  { src: '/images/visitors-book/page-08.jpg', width: 1200, height: 893 },
  { src: '/images/visitors-book/page-09.jpg', width: 1200, height: 1004 },
  { src: '/images/visitors-book/page-10.jpg', width: 1200, height: 992 },
  { src: '/images/visitors-book/page-11.jpg', width: 1200, height: 982 },
  { src: '/images/visitors-book/page-12.jpg', width: 1200, height: 973 },
  { src: '/images/visitors-book/page-13.jpg', width: 1200, height: 1003 },
  { src: '/images/visitors-book/page-14.jpg', width: 1200, height: 965 },
  { src: '/images/visitors-book/page-15.jpg', width: 1200, height: 991 },
];

const TOTAL_PAGES = PAGES.length;

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
            <a href="/images/testimonials/visitors-book.pdf" download className="btn-cta-primary">
              Download Complete PDF
            </a>
          </div>
        </Reveal>
      )}

      <Reveal variant="fade-up" delay={0.15}>
      <div className="pdf-viewer">
        <div className="pdf-viewer-wrap">
          <div className="pdf-display">
            {PAGES.map((page, i) => (
              <div key={i} className={`pdf-page${i === current ? ' active' : ''}`}>
                <Image
                  src={page.src}
                  alt={`Visitor's book page ${i + 1}`}
                  width={page.width}
                  height={page.height}
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
