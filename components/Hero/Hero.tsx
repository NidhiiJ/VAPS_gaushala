'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import './Hero.scss';

const slides = [
  {
    src: '/images/nourishment.jpeg',
    alt: 'Nourishment at Suri Prem Jeevraksha Kendra',
  },
  {
    src: '/images/animals-rescued.jpg',
    alt: 'Animals rescued at Suri Prem Jeevraksha Kendra',
  },
  {
    src: '/images/gau-seva.jpg',
    alt: 'Gau Seva at Suri Prem Jeevraksha Kendra',
  },
];

const stats = [
  { icon: '🐄', number: '900+',    label: 'Cows Sheltered'   },
  { icon: '📅', number: '39+',     label: 'Years of Service' },
  { icon: '🏥', number: '10,000+', label: 'Animals Treated'  },
  { icon: '🤝', number: '218+',    label: 'Active Members'   },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero — split layout */}
      <section className="hero">
        {/* Left: text + controls */}
        <div className="hero-l">
          <div className="hbadge">
            <span className="hbadge-dot" />
            Rajasthan, India
          </div>

          <h1 className="hero-heading">
            Protecting &amp; Nurturing <em>Every Life</em> with Compassion
          </h1>

          <p className="hero-desc">
            A registered charitable Panjrapole in Sirohi, Rajasthan — devoted to the
            lifelong protection, care, and service of 900+ abandoned and helpless animals.
          </p>

          <div className="hero-btns">
            <a href="/donate" className="btn-primary">Donate &amp; Support</a>
            <a href="#about"  className="btn-secondary">Learn More</a>
          </div>

          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right: image slider + floating stat */}
        <div className="hero-r">
          <div className="hero-img-wrap">
            {slides.map((slide, i) => (
              <div key={i} className={`hero-slide${i === current ? ' on' : ''}`}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>

          {/* Floating stat card */}
          {/* <div className="hero-float-card">
            <div className="hfc-number">900+</div>
            <div className="hfc-label">Animals sheltered with love &amp; care</div>
          </div> */}
        </div>
      </section>

      {/* Stats bar */}
      <div className="stats-bar">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
