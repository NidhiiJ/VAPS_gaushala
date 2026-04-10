'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import './Facility3.scss';

const panels = [
  {
    num: '01',
    heading: 'Treatment Wing',
    desc: 'Daily check-ups, wound dressing, IV fluids, fever management, and round-the-clock monitoring by trained veterinary professionals.',
    image: '/images/facilities/medical-1.jpg',
  },
  {
    num: '02',
    heading: 'Medical Equipments Room',
    desc: 'Diagnostic tools, blood testing kits, and specialised equipment that enable accurate diagnosis and swift response to illness or outbreak.',
    image: '/images/facilities/medical-2.jpg',
  },
  {
    num: '03',
    heading: 'Operation Theatre',
    desc: 'A sterile, fully equipped surgical space for fracture repairs, emergency procedures, and critical interventions.',
    image: '/images/facilities/medical-3.jpg',
  },
];

export default function Facility3() {
  const navItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = panelRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) {
              navItemsRef.current.forEach((item, i) => {
                item?.classList.toggle('is-active', i === idx);
              });
              (entry.target as HTMLElement).querySelector('.f3-card')?.classList.add('in-view');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    panelRefs.current.forEach((panel) => {
      if (panel) observer.observe(panel);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="facility3">
      <div className="facility3__inner">
        {/* Sticky text column */}
        <div className="facility3__text-col">
          <div className="facility3__sticky">
            <Reveal variant="fade-up">
              <div className="facility3__label">Facility 03</div>
              <h2>Medical Building — Where Healing Happens</h2>
              <p>
                Our comprehensive medical facility is the lifeline of the Panjrapole. Equipped to
                handle everything from routine check-ups to critical emergencies, it houses{' '}
                <strong>three distinct divisions</strong> under one roof.
              </p>
            </Reveal>

            <nav className="facility3__nav" aria-label="Medical sections">
              {panels.map((panel, i) => (
                <div
                  key={i}
                  className={`facility3__nav-item${i === 0 ? ' is-active' : ''}`}
                  ref={(el) => { navItemsRef.current[i] = el; }}
                >
                  <div className="facility3__nav-dot">
                    <span>{panel.num}</span>
                  </div>
                  <div className="facility3__nav-info">
                    <div className="facility3__nav-title">{panel.heading}</div>
                    <div className="facility3__nav-desc">{panel.desc}</div>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Scrolling image column */}
        <div className="facility3__panels-col">
          {panels.map((panel, i) => (
            <div
              key={i}
              className="facility3__panel"
              ref={(el) => { panelRefs.current[i] = el; }}
            >
              <div className={`f3-card${i === 0 ? ' in-view' : ''}`}>
                <div className="f3-card__img">
                  <Image
                    src={panel.image}
                    alt={panel.heading}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    priority={i === 0}
                  />
                  <div className="f3-card__overlay" />
                  <div className="f3-card__num">{panel.num}</div>
                </div>
                <div className="f3-card__body">
                  <h3>{panel.heading}</h3>
                  <p>{panel.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
