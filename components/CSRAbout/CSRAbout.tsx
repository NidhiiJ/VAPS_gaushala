import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './CSRAbout.scss';

const trustCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Registered Trust',
    sub: 'Full legal standing & recognition',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M7 8V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
        <path d="M12 12v4" />
        <path d="M10 14h4" />
      </svg>
    ),
    title: 'CSR Eligible',
    sub: 'Section 135 compliant',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
    title: 'Transparent Reports',
    sub: 'Open-book audited accounts',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z" />
      </svg>
    ),
    title: 'Animal Welfare Focus',
    sub: 'Lifelong care & protection',
  },
];

export default function CSRAbout() {
  return (
    <section className="csr-about">
      <div className="csr-about__inner">
        <Reveal variant="fade-up" className="csr-about__lead">
          <div className="csr-about__label">About Us</div>
          <h2>Compassion in Action, Rooted in Seva</h2>
          <p>
            Suri Prem Jeev Raksha Kendra Sansthan is a dedicated gaushala committed to the
            protection, care, and well-being of cows and other animals. With a mission rooted in
            compassion and service, we provide shelter, food, and medical support to hundreds of{' '}
            <strong>गौमाता</strong>.
          </p>
          <p>
            We are proud to be a <strong>CSR-compliant organization</strong>, enabling corporates to
            contribute towards meaningful social impact through animal welfare initiatives — with
            full transparency and measurable outcomes.
          </p>
        </Reveal>

        <StaggerContainer className="csr-about__trust-band">
          {trustCards.map((card) => (
            <StaggerItem key={card.title} className="csr-trust-card">
              <div className="csr-trust-card__icon">{card.icon}</div>
              <div className="csr-trust-card__title">{card.title}</div>
              <div className="csr-trust-card__sub">{card.sub}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
