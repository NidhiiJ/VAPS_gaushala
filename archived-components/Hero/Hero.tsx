'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import './Hero.scss';

const slides = [
  {
    src: '/hero-placeholder.jpg',
    alt: 'Cows at the Gaushala',
    pre: 'संरक्षण \u2022 सेवा \u2022 करुणा',
    title: 'Protecting Lives, Serving Humanity, Preserving Compassion',
    sub: 'A registered charitable Panjrapole in Sirohi, Rajasthan — devoted to the lifelong protection, care, and service of 900+ abandoned and helpless animals.',
    primaryBtn: { label: 'Donate Now', href: '#donate' },
    secondaryBtn: { label: 'Learn More', href: '#about' },
  },
  {
    src: '/hero-placeholder.jpg',
    alt: 'Gau Seva in progress',
    pre: 'गौ सेवा \u2022 गौ रक्षा',
    title: 'Gau Seva — A Sacred Duty Fulfilled Every Day',
    sub: 'Our dedicated team provides round-the-clock care, nourishment, and love to every cow in our shelter, honouring the ancient tradition of Gau Seva.',
    primaryBtn: { label: 'Support Gau Seva', href: '#donate' },
    secondaryBtn: { label: 'Our Story', href: '#about' },
  },
  {
    src: '/hero-placeholder.jpg',
    alt: 'Medical care for animals',
    pre: 'स्वास्थ्य \u2022 उपचार \u2022 देखभाल',
    title: 'Expert Veterinary Care for Every Animal',
    sub: 'With an in-house veterinary team and modern facilities, we have treated over 10,000 animals — ensuring every creature receives the medical attention it deserves.',
    primaryBtn: { label: 'Sponsor a Treatment', href: '#donate' },
    secondaryBtn: { label: 'Our Facilities', href: '#facilities' },
  },
  {
    src: '/hero-placeholder.jpg',
    alt: 'Animal shelter',
    pre: '39+ वर्षों की सेवा',
    title: 'A Safe Haven for Abandoned & Injured Animals',
    sub: 'Since 1985, our shelter has provided a permanent home to stray, injured, and helpless animals across Sirohi district — no animal is turned away.',
    primaryBtn: { label: 'Adopt or Foster', href: '#contact' },
    secondaryBtn: { label: 'Visit Us', href: '#contact' },
  },
  {
    src: '/hero-placeholder.jpg',
    alt: 'Compassion in action',
    pre: 'समुदाय \u2022 सहयोग \u2022 विश्वास',
    title: 'Join 218+ Members Changing Lives Together',
    sub: 'Become part of a compassionate community that believes every life matters. Volunteer, donate, or spread the word — every act of kindness counts.',
    primaryBtn: { label: 'Join Us', href: '#contact' },
    secondaryBtn: { label: 'Donate Now', href: '#donate' },
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
      {/* Hero Slideshow */}
      <section className="hero">
        <div className="hero-slides">
          {slides.map((slide, i) => (
            <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
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

        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-pre">{slides[current].pre}</p>
          <h1 className="hero-title">{slides[current].title}</h1>
          <p className="hero-sub">{slides[current].sub}</p>
          <div className="hero-buttons">
            <a href={slides[current].primaryBtn.href} className="btn-hero-primary">
              {slides[current].primaryBtn.label}
            </a>
            <a href={slides[current].secondaryBtn.href} className="btn-hero-secondary">
              {slides[current].secondaryBtn.label}
            </a>
          </div>
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
      </section>

      {/* Stats Bar */}
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
