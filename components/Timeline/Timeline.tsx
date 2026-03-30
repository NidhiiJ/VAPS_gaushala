'use client';

import { useRef, useEffect } from 'react';
import './Timeline.scss';

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  milestone?: boolean;
};

const events: TimelineEvent[] = [
  {
    year: '1986',
    title: 'Foundation',
    description:
      'Founded by 7 visionary members with a mission to serve society through social and religious activities — a seed of compassion planted in the soil of Ahimsa.',
    milestone: true,
  },
  {
    year: '1990',
    title: 'Vision Takes Shape',
    description:
      'Members envisioned creating a large Gaushala & Panjrapole dedicated to the protection of cows and all living beings — transforming purpose into a collective dream.',
  },
  {
    year: '1993',
    title: 'Growth & Service',
    description:
      'The Sansthan grew in membership and resolve, deepening its roots in the community and strengthening the bonds of gau seva across the region.',
    milestone: true,
  },
  {
    year: '2003',
    title: 'Spiritual Outreach',
    description:
      'Multiple pilgrimage tours conducted, strengthening spiritual values, unity, and discipline among members — faith carried forward on every journey.',
  },
  {
    year: '2008',
    title: 'Sacred Milestone',
    description:
      'Successfully organised the revered Shikharji Yatra, reinforcing commitment to faith, discipline, and the timeless ideals of Jain tradition.',
  },
  {
    year: '2011',
    title: 'Dream Becomes Reality',
    description:
      'A historic achievement — land acquired for the Gaushala, turning decades of vision into a physical sanctuary where every life would find refuge.',
    milestone: true,
  },
  {
    year: '2018',
    title: 'Foundation Laid',
    description:
      'Auspicious commencement of construction and development of the Gaushala premises — brick by brick, the dream took its rightful form on sacred ground.',
    milestone: true,
  },
  {
    year: '2025',
    title: 'Legacy Inscribed',
    description:
      'Stone inscription inauguration symbolising dedication, continuity, and permanence of the mission. From 7 members to 218, from a dream to 900+ lives saved — our journey continues.',
    milestone: true,
  },
];

export default function Timeline() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('tl-item--visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      {/* Background grain */}
      <svg className="tl-grain" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
        <filter id="tl-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#tl-noise)" opacity="0.04" />
      </svg>

      <div className="tl-inner">
        {/* Header */}
        <div className="tl-header">
          <span className="tl-eyebrow">Since 1986</span>
          <h2 className="tl-heading">Our Journey</h2>
          <p className="tl-sub">
            From 7 founding members to 218 dedicated volunteers — trace the milestones
            that shaped a sanctuary built on faith and Ahimsa.
          </p>
        </div>

        {/* Timeline track */}
        <div className="tl-track">
          <div className="tl-spine" />

          {events.map((ev, i) => (
            <div
              key={ev.year}
              ref={(el) => { itemsRef.current[i] = el; }}
              className={`tl-item${i % 2 === 0 ? ' tl-item--left' : ' tl-item--right'}${ev.milestone ? ' tl-item--milestone' : ''}`}
              style={{ '--delay': `${i * 0.07}s` } as React.CSSProperties}
            >
              {/* Card side */}
              <div className="tl-card-wrap">
                <div className="tl-card">
                  <span className="tl-year">{ev.year}</span>
                  <h3>{ev.title}</h3>
                  <p>{ev.description}</p>
                  {ev.milestone && <div className="tl-milestone-badge">Milestone</div>}
                </div>
              </div>

              {/* Center dot */}
              <div className="tl-dot-wrap">
                <div className="tl-dot" />
              </div>

              {/* Empty side */}
              <div className="tl-empty" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="tl-cta">
          <p className="tl-cta-label">Be part of the next chapter</p>
          <a href="/donate" className="tl-cta-btn">
            Support the Mission
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
