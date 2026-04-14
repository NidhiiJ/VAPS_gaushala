import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './CleaningSection.scss';

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const pills = [
  'Sheds washed daily',
  'Troughs scrubbed',
  'Waste removed',
  'Pest control active',
];

const galleryCards = [
  {
    step: '1',
    heading: 'Shed Cleaning',
    sub: 'Every morning before first feed',
    imgSrc: '/images/activity/cleaning-1.jpg',
    imgAlt: 'Staff cleaning animal sheds',
  },
  {
    step: '2',
    heading: 'Solar Washing',
    sub: 'Fresh water refilled daily',
    imgSrc: '/images/activity/cleaning-2.jpg',
    imgAlt: 'Washing and scrubbing the feeding area',
  },
  {
    step: '3',
    heading: 'Premise Cleaning',
    sub: 'Sanitised & refilled regularly',
    imgSrc: '/images/activity/cleaning-3.jpg',
    imgAlt: 'Clean water tank maintenance',
  },
  {
    step: '4',
    heading: 'Cleaning Kit',
    sub: 'Gobbar collected systematically',
    imgSrc: '/images/activity/cleaning-4.jpg',
    imgAlt: 'Systematic gobbar collection and waste removal',
  },
];

export default function CleaningSection() {
  return (
    <section className="cleaning">
      <div className="cleaning__inner">
        {/* Header: text left + pills right */}
        <Reveal variant="fade-up" className="cleaning__header">
          <div className="cleaning__text">
            <p className="cleaning__overline">Hygiene &amp; Discipline</p>
            <h2 className="cleaning__heading">
              Everyday Cleaning by Our Dedicated Staff
            </h2>
            <p className="cleaning__body">
              A clean gaushala is a healthy gaushala. Our committed staff ensure every shed,
              trough, and common area is thoroughly cleaned and sanitised — without exception,
              every single day.
            </p>
          </div>

          <div className="cleaning__pills">
            {pills.map((pill) => (
              <span key={pill} className="cleaning__pill">
                <CheckIcon />
                {pill}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Staggered gallery */}
        <StaggerContainer className="cleaning__gallery" staggerDelay={0.09} initialDelay={0.05}>
          {galleryCards.map((card, i) => (
            <StaggerItem key={card.step} className={`cleaning__card${i % 2 !== 0 ? ' cleaning__card--offset' : ''}`}>
              <img src={card.imgSrc} alt={card.imgAlt} loading="lazy" />
              <div className="cleaning__overlay">
                {/* <span className="cleaning__step">{card.step}</span> */}
                <h4>{card.heading}</h4>
                {/* <span className="cleaning__overlay-sub">{card.sub}</span> */}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
