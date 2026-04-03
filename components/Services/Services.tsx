import Image from 'next/image';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './Services.scss';

const services = [
  {
    accent: '#8B1A1A',
    accentBg: 'rgba(139,26,26,.08)',
    label: 'Shelter',
    title: 'Safe Shelter',
    description: 'We provide a permanent, clean, and safe home for abandoned, injured, and elderly cows who have nowhere to go.',
    imgSrc: '/images/shelter.jpeg',
    imgAlt: 'Safe Shelter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    accent: '#2E7D32',
    accentBg: 'rgba(46,125,50,.08)',
    label: 'Healthcare',
    title: 'Medical Care',
    description: 'Our in-house veterinary team provides round-the-clock treatment, surgery, and rehabilitation for all animals.',
    imgSrc: '/images/medical-care2.jpeg',
    imgAlt: 'Medical Care',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
        <circle cx="20" cy="10" r="2"/>
      </svg>
    ),
  },
  {
    accent: '#C25E00',
    accentBg: 'rgba(194,94,0,.08)',
    label: 'Nourishment',
    title: 'Daily Nourishment',
    description: 'Every animal receives freshly prepared nutritious feed and clean water — because no creature should go hungry.',
    imgSrc: '/images/nourishment.jpeg',
    imgAlt: 'Daily Nourishment',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22 16 8"/>
        <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/>
        <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/>
        <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"/>
        <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"/>
      </svg>
    ),
  },
  {
    accent: '#9C7A00',
    accentBg: 'rgba(156,122,0,.08)',
    label: 'Spiritual',
    title: 'Gau-Seva & Yagna',
    description: 'Regular religious ceremonies, gau-poojan rituals, and community service events rooted in our ancient values.',
    imgSrc: '/images/gau-seva.jpg',
    imgAlt: 'Gau-Seva & Yagna',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h1l1-1"/>
        <path d="M17 11v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a2 2 0 0 0-2-2h-1l-1-1"/>
        <path d="M12 2C9.8 2 8 3.8 8 6v1l4 4 4-4V6c0-2.2-1.8-4-4-4Z"/>
      </svg>
    ),
  },
  {
    accent: '#4C7A2E',
    accentBg: 'rgba(76,122,46,.08)',
    label: 'Sustainability',
    title: 'Organic Farming',
    description: 'Cow dung and urine are transformed into natural compost and bio-fertilisers, enabling chemical-free farming for local communities.',
    imgSrc: '/images/medical-care.jpeg',
    imgAlt: 'Organic Farming',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
  },
  {
    accent: '#B06000',
    accentBg: 'rgba(176,96,0,.08)',
    label: 'Green Energy',
    title: 'Electricity Generation',
    description: 'Biogas produced from cow waste is harnessed to generate clean electricity, powering the gaushala and reducing dependency on fossil fuels.',
    imgSrc: '/images/ambulance.jpg',
    imgAlt: 'Biogas Electricity Generation',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="services">
      <Reveal variant="fade-up">
        <div className="section-header">
          <div className="section-overline">What We Do</div>
          <h2>Comprehensive Care for Every Animal</h2>
          <p>
            From the moment an animal arrives, we commit to their complete wellbeing &mdash; body,
            spirit, and soul.
          </p>
          <div className="section-divider" />
        </div>
      </Reveal>

      <StaggerContainer className="srv-grid" staggerDelay={0.1}>
        {services.map((srv) => (
          <StaggerItem key={srv.title}>
            <div
              className="srv-card"
              style={
                { '--sc-accent': srv.accent, '--sc-bg': srv.accentBg } as React.CSSProperties
              }
            >
              <div className="sc-img">
                <Image src={srv.imgSrc} alt={srv.imgAlt} width={400} height={225} unoptimized />
              </div>
              <div className="sc-body">
                <div className="sc-icon">{srv.icon}</div>
                <div className="sc-label">{srv.label}</div>
                <h3>{srv.title}</h3>
                <p>{srv.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
