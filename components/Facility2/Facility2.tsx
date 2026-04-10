import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import './Facility2.scss';

const pills = [
  'Peacocks',
  'Dogs',
  'Rabbits',
  'Tortoises',
  'Species-Specific Zones',
];

export default function Facility2() {
  return (
    <section className="facility2">
      <div className="facility2__inner">
        {/* Visual column */}
        <Reveal variant="slide-right" className="facility2__visual">
          <div className="facility2__img">
            <Image
              src="/images/facilities/animal-blg.jpg"
              alt="All Animals Building"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="facility2__img-photo"
              priority
            />
            {/* <div className="facility2__img-overlay" /> */}
          </div>
          <div className="facility2__badge">
            <span className="facility2__badge-icon">🦚</span>
            <span className="facility2__badge-text">Multi-Species Care</span>
          </div>
        </Reveal>

        {/* Text column */}
        <Reveal variant="slide-left" className="facility2__text">
          <div className="facility2__label">Facility 02</div>
          <h2>All Animals Building — Every Being Matters</h2>
          <p>
            Our compassion extends beyond cows. The dedicated{' '}
            <strong>All Animals Building</strong> provides specialised shelter for injured and
            rescued animals of all kinds — including peacocks, dogs, rabbits, tortoises, and
            other creatures in need.
          </p>
          <p>
            Each species is housed in an appropriately designed enclosure that respects their
            natural habits and requirements, with separate zones for recovery, rest, and daily
            care. The building reflects our core belief that{' '}
            <strong>every living being deserves protection</strong>.
          </p>
          <div className="facility2__pills">
            {pills.map((pill) => (
              <span key={pill} className="facility2__pill">
                <span className="facility2__pill-dot" />
                {pill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
