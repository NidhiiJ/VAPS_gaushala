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
    imgSrc: '/images/home-services/shelter.jpeg',
    imgAlt: 'Safe Shelter',
  },
  {
    accent: '#2E7D32',
    accentBg: 'rgba(46,125,50,.08)',
    label: 'Healthcare',
    title: 'Medical Care',
    description: 'Our in-house veterinary team provides round-the-clock treatment, surgery, and rehabilitation for all animals.',
    imgSrc: '/images/home-services/medical-care.jpeg',
    imgAlt: 'Medical Care',
  },
  {
    accent: '#C25E00',
    accentBg: 'rgba(194,94,0,.08)',
    label: 'Nourishment',
    title: 'Daily Nourishment',
    description: 'Every animal receives freshly prepared nutritious feed and clean water — because no creature should go hungry.',
    imgSrc: '/images/home-services/nourishment.jpeg',
    imgAlt: 'Daily Nourishment',
  },
  {
    accent: '#9C7A00',
    accentBg: 'rgba(156,122,0,.08)',
    label: 'Spiritual',
    title: 'Gau-Seva & Yagna',
    description: 'Regular religious ceremonies, gau-poojan rituals, and community service events rooted in our ancient values.',
    imgSrc: '/images/home-services/gau-seva.jpg',
    imgAlt: 'Gau-Seva & Yagna',
  },
  {
    accent: '#4C7A2E',
    accentBg: 'rgba(76,122,46,.08)',
    label: 'Sustainability',
    title: 'Organic Farming',
    description: 'Cow dung and urine are transformed into natural compost and bio-fertilisers, enabling chemical-free farming for local communities.',
    imgSrc: '/images/home-services/sustainability.jpeg',
    imgAlt: 'Organic Farming',
  },
  {
    accent: '#B06000',
    accentBg: 'rgba(176,96,0,.08)',
    label: 'Green Energy',
    title: 'Solar Power Generation',
    description: 'olar panels at the gaushala generate clean electricity to power daily operations, reducing costs and dependence on conventional energy.',
    imgSrc: '/images/home-services/green-energy.jpg',
    imgAlt: 'Solar Power Generation',
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
                <Image src={srv.imgSrc} alt={srv.imgAlt} width={400} height={225} />
              </div>
              <div className="sc-body">
                {/* <div className="sc-icon">{srv.icon}</div> */}
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
