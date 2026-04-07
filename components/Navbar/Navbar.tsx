'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import './Navbar.scss';

type NavLink = {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  // { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '#',
    submenu: [
      { label: 'Overview', href: '/overview' },
      { label: 'Timeline', href: '/timeline' },
    ],
  },
  // {
  //   label: 'What We Do',
  //   href: '#',
  //   submenu: [
  //     { label: 'Facilities', href: '/facilities' },
  //     { label: 'Our Activities', href: '/activities' },
  //   ],
  // },
  // { label: 'Facilities', href: '#' },
  { label: 'Volunteers', href: '/volunteers' },
  { label: 'Publications', href: '/publications' },
  // {
  //   label: 'Media Room',
  //   href: '#',
  //   submenu: [
  //     { label: 'Certifications', href: '/certifications' },
  //     { label: 'Publications', href: '/publications' },
  //   ],
  // },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const normalizePath = (path: string) => {
    const out = path.replace(/\/+$/, '');
    return out === '' ? '/' : out;
  };

  const normalizedPathname = normalizePath(pathname ?? '/');

  const isPathActive = (href: string) => {
    if (!href?.startsWith('/')) return false;
    const normalizedHref = normalizePath(href);
    if (normalizedHref === '/') return normalizedPathname === '/';
    return normalizedPathname === normalizedHref || normalizedPathname.startsWith(`${normalizedHref}/`);
  };

  const isNavItemActive = (href: string, submenu?: NavLink['submenu']) => {
    if (submenu?.length) return submenu.some(sub => isPathActive(sub.href));
    return isPathActive(href);
  };

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1200) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileSubmenu(prev => (prev === label ? null : label));
  };

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="topbar-left">
          <div className="topbar-dot" />
          <span>Since 1993</span>
        </div>
        <div className="topbar-center">Suri Prem Jiv Raksha Kendra Sansthan | सूरि प्रेम जीव रक्षा केंद्र संस्थान</div>
        <span className="topbar-sanskrit">अहिंसा परमो धर्मः</span>
      </div>

      {/* Navbar */}
      <nav className={`navbar${isOpen ? ' navbar--menu-open' : ''}`}>
        <a href="/" className="nav-logo">
          <Image
            src="/logo/logo.png"
            alt="Suri Prem Jeevraksha Kendra Sansthan logo"
            className="nav-logo-img"
            width={160}
            height={60}
            priority
          />
        </a>

        {/* Desktop nav links */}
        <div className="nav-links">
          {navLinks.map(({ label, href, submenu }) => {
            const isActive = isNavItemActive(href, submenu);

            return submenu ? (
              <div key={label} className="nav-item nav-item--has-dropdown">
                <a
                  href={href}
                  className={`nav-item-trigger${isActive ? ' nav-link--active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  <svg className="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <div className="nav-dropdown">
                  <div className="nav-dropdown-inner">
                    {submenu.map(sub => (
                      <a key={sub.label} href={sub.href} className="nav-dropdown-item">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={label} href={href} className={isActive ? 'nav-link--active' : undefined} aria-current={isActive ? 'page' : undefined}>
                {label}
              </a>
            );
          })}
          <a href="/donate" className="btn-donate">
            Donate Now
          </a>
        </div>

        {/* Right decorative image — desktop only */}
        <div className="nav-right-img-wrap">
          <Image
            src="/logo/prem-suri-dada.jpg"
            alt="Gau seva"
            className="nav-right-img"
            width={120}
            height={160}
            priority
          />
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
        role="dialog"
        aria-modal={isOpen}
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="mobile-menu-header">
          <a href="#" className="mobile-menu-logo" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo/logo.png"
              alt="Suri Prem Jiv Raksha Kendra Sansthan logo"
              className="mobile-menu-logo-img"
              width={160}
              height={60}
            />
          </a>
          <span className="mobile-menu-org-name">Suri Prem Jiv Raksha Kendra Sansthan</span>
          <button
            className="mobile-menu-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-nav">
          {navLinks.map(({ label, href, submenu }, i) => {
            const isActive = isNavItemActive(href, submenu);

            return submenu ? (
              <div
                key={label}
                className={`mobile-nav-item mobile-nav-item--has-sub${openMobileSubmenu === label ? ' mobile-nav-item--open' : ''}`}
                style={{ '--i': i } as React.CSSProperties}
              >
                <button
                  className={`mobile-nav-link mobile-nav-link--trigger${isActive ? ' mobile-nav-link--trigger--active' : ''}`}
                  onClick={() => toggleMobileSubmenu(label)}
                  aria-expanded={openMobileSubmenu === label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="mobile-nav-num">0{i + 1}</span>
                  <span className="mobile-nav-link-label">{label}</span>
                  <svg className="mobile-nav-chevron" width="16" height="16" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="mobile-subnav">
                  <div className="mobile-subnav-inner">
                    {submenu.map(sub => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="mobile-subnav-link"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={label}
                href={href}
                className={`mobile-nav-link${isActive ? ' mobile-nav-link--active' : ''}`}
                style={{ '--i': i } as React.CSSProperties}
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-nav-num">0{i + 1}</span>
                {label}
              </a>
            );
          })}
        </nav>
        <div className="mobile-menu-footer">
          <a
            href="/donate"
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
