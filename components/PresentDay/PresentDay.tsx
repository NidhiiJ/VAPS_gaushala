import Image from 'next/image';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './PresentDay.scss';

const careItems = [
  { icon: '🏠', title: 'Safe Shelter',      desc: 'Permanent, clean, secure homes for all abandoned and injured animals' },
  { icon: '🌾', title: 'Nutritious Fodder', desc: 'Daily fresh feed and clean water for every animal in our care' },
  { icon: '🏥', title: 'Medical Care',       desc: 'On-site veterinary support with 24/7 emergency treatment' },
  { icon: '❤️', title: 'Dignity & Love',    desc: 'Compassionate, lifelong protection and respect for every being' },
];

const cities = ['Mumbai', 'Bhilwara', 'Surat', 'Ahmedabad'];

export default function PresentDay() {
  return (
    <section className="present-block">
      <div className="present-inner">
        <div className="present-top">
          <Reveal variant="slide-right" className="present-text">
            <div className="pt-label">Present Day — 2025</div>
            <h2>A Dream Fully Realised</h2>
            <p>
              Today, the dream envisioned decades ago stands fully realised. The Panjrapole shelters
              and cares for more than <strong>900 cows and other helpless animals</strong>, providing
              them with safe shelter, nutritious fodder, clean water, regular and emergency medical
              care, and above all — dignity, compassion, and lifelong protection.
            </p>
            <p>
              The organisation has grown into a strong collective of{' '}
              <strong>218 young and dedicated members</strong> residing across Mumbai, Bhilwara,
              Surat, and Ahmedabad. Despite being geographically dispersed, members remain deeply
              connected to the mission through regular visits, active participation, and continued
              social and religious activities.
            </p>
          </Reveal>

          <Reveal variant="slide-left" delay={0.15} className="present-visual">
            <div className="present-img">
              <Image
                src="https://placehold.co/800x600/D4C0A8/7A5C40?text=Panjrapole+Today"
                alt="Panjrapole Today"
                width={800}
                height={600}
                unoptimized
              />
            </div>
          </Reveal>
        </div>

        <StaggerContainer className="care-grid">
          {careItems.map((item, i) => (
            <StaggerItem key={item.title} className="care-card">
              <div className="care-card__icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="members-row">
          {cities.map((city, i) => (
            <StaggerItem key={city} className="member-city">
              <div className="member-city__name">{city}</div>
              <div className="member-city__status">
                <span className="member-city__dot" aria-hidden="true" />
                Active Members
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
