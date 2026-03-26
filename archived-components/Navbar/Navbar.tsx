'use client';

import { useState, useEffect } from 'react';
import './Navbar.scss';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Our Work', href: '#' },
  { label: 'Gallery', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-left">
          <div className="topbar-dot" />
          <span>Serving since 1993 &middot; Sirohi, Rajasthan</span>
        </div>
        <span className="topbar-sanskrit">अहिंसा परमो धर्मः</span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="nav-logo">
          <img
            src="/logo/logo.png"
            alt="Suri Prem Jeevraksha Kendra Sansthan logo"
            className="nav-logo-img"
          />
          <div className="nav-logo-text">
            <span className="nav-logo-name">Suri Prem Jeevraksha Kendra Sansthan</span>
            <span className="nav-logo-tagline">प्रेम सूरी जीव रक्षा केंद्र</span>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="nav-links">
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
          <a href="#donate" className="btn-donate">
            Donate Now
          </a>
        </div>

        {/* Burger button — mobile/tablet only */}
        <button
          className={`burger-btn${isOpen ? ' burger-btn--open' : ''}`}
          onClick={() => setIsOpen(prev => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span className="burger-line burger-line--top" />
          <span className="burger-line burger-line--mid" />
          <span className="burger-line burger-line--bot" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mobile-menu${isOpen ? ' mobile-menu--open' : ''}`}
        aria-hidden={!isOpen}
      >
        <nav className="mobile-nav">
          {navLinks.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className="mobile-nav-link"
              style={{ '--i': i } as React.CSSProperties}
              onClick={() => setIsOpen(false)}
            >
              <span className="mobile-nav-num">0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a
            href="#donate"
            className="btn-donate-mobile"
            onClick={() => setIsOpen(false)}
          >
            Donate Now
          </a>
          <span className="mobile-menu-sanskrit">अहिंसा परमो धर्मः</span>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="mobile-backdrop" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
