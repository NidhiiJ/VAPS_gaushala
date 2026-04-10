import { Reveal } from '@/components/Reveal';
import './Facility6.scss';

const pills = [
  { icon: '🌾', label: 'Open Pastures' },
  { icon: '🌱', label: 'Natural Fodder' },
  { icon: '☀️', label: 'Sunlight & Air' },
  { icon: '📅', label: 'Year-Round Grazing' },
];

export default function Facility6() {
  return (
    <section className="facility6">
      <div className="facility6__img-full">
        <div className="facility6__overlay" />
      </div>
      {/* <div className="facility6__watermark" aria-hidden>06</div> */}

      <div className="facility6__content">
        <Reveal variant="fade-up" className="facility6__inner">
          <div className="facility6__label">
            Facility 06
          </div>
          <h2>Where Cows Roam Free</h2>
          <p>
            Open green pastures where cows walk freely, graze naturally, and simply be themselves.
            More than a feeding ground — it&apos;s a space for{' '}
            <strong>movement, sunlight, and peaceful existence</strong>.
          </p>
          <p>
            The farm grows natural fodder and grass, providing{' '}
            <strong>fresh, nutritious grazing</strong> year-round while reducing dependence on
            external feed.
          </p>
          <div className="facility6__pills">
            {pills.map((pill, i) => (
              <span key={i} className="facility6__pill">
                <span className="facility6__pill-icon">{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
