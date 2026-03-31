import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import './OverviewHero.scss';

export default function OverviewHero() {
  return (
    <section className="ov-hero">
      <div className="ov-hero__pattern" aria-hidden="true" />
      <Reveal variant="fade-up" className="ov-hero__content">
        {/* <nav className="ov-hero__breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
          <span>About Us</span>
        </nav> */}
        <div className="ov-hero__pre">Since 1986 — Four Decades of Seva</div>
        {/* <h1>A Legacy of Service, Faith &amp; Compassion</h1> */}
        <h1>About Us</h1>
        <p className="ov-hero__sub">
          From seven visionary members to a vibrant movement sheltering over 900 animals —
          guided by the timeless principle of Ahimsa.
        </p>
      </Reveal>
      {/* <div className="ov-hero__scroll" aria-hidden="true">
        <div className="ov-hero__scroll-dot" />
      </div> */}
    </section>
  );
}
