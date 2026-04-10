import Image from 'next/image';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './Facility1.scss';

const featureStrip = [
  { icon: '🏠', label: 'Ventilated Design' },
  { icon: '💧', label: 'Proper Drainage' },
  { icon: '🧹', label: 'Daily Cleaning' },
  { icon: '🐄', label: 'Free Movement' },
];

const bentoItems = [
  {
    className: 'fb-hero',
    tag: null,
    heading: 'Spacious & Ventilated',
    // desc: 'Designed for free movement, natural airflow, and stress-free living',
    image: '/images/facilities/facility1-1.jpg',
  },
  {
    className: 'fb-mid',
    tag: null,
    heading: 'Clean & Hygienic',
    // desc: 'Daily cleaning, fresh bedding, proper drainage',
    image: '/images/facilities/facility1-2.jpg',
  },
  {
    className: 'fb-mid',
    tag: null,
    heading: 'Dignity & Care',
    // desc: 'Every cow treated with the respect she deserves',
    image: '/images/facilities/facility1-3.jpg',
  },
];

export default function Facility1() {
  return (
    <section className="facility1">
      <div className="facility1__inner">
        <Reveal variant="fade-up" className="facility1__header">
          <div className="facility1__label-row">
            <span className="facility1__label-pill">Facility 01</span>
          </div>
          <h2>Cow Shelters — A Home, Not Just a Roof</h2>
          <p>
            Our spacious cow shelters provide{' '}
            <strong>safe, clean, and comfortable living spaces</strong> for hundreds of cows
            — including abandoned, aged, injured, and rescued cattle.
          </p>
        </Reveal>

        <StaggerContainer className="facility1__bento" staggerDelay={0.1}>
          {bentoItems.map((item, i) => (
            <StaggerItem key={i} className={`facility1__bento-item ${item.className}`}>
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.heading}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="facility1__bento-img"
                  priority={i === 0}
                />
              )}
              <div className="facility1__bento-overlay" />
              <div className="facility1__bento-content">
                {item.tag && <div className="facility1__bento-tag">{item.tag}</div>}
                <h3>{item.heading}</h3>
                {/* {item.desc && <p>{item.desc}</p>} */}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="facility1__strip">
          {featureStrip.map((item, i) => (
            <div key={i} className="facility1__strip-item">
              <span className="facility1__strip-icon">{item.icon}</span>
              <strong>{item.label}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
