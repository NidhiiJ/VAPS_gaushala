import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './DailyRoutine.scss';

interface RoutineCard {
  time: string;
  period: string;
  title: string;
  description: string;
  tag: string;
  tagVariant?: 'rescue';
  cardVariant?: 'rescue';
  iconVariant?: 'rescue';
  imgSrc: string;
  imgAlt: string;
  icon: React.ReactNode;
}

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const FeedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const PulseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const DropletIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const FlagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const routineCards: RoutineCard[] = [
  {
    time: '6:30', period: 'AM',
    title: 'Feeding & Nutrition',
    description: 'Fresh fodder, nutritious feed, and clean water are distributed to every animal. Special dietary provisions are arranged for injured and aged animals.',
    tag: '800+ Animals Fed Daily',
    imgSrc: '/images/activity/activity-1.jpg',
    imgAlt: 'Feeding animals at the Gaushala',
    icon: <FeedIcon />,
  },
  {
    time: '9:00', period: 'AM',
    title: 'Veterinary Rounds',
    description: 'Qualified veterinarians conduct daily rounds — examining animals, administering treatments, dressing wounds, and monitoring ongoing recovery cases.',
    tag: 'Professional Medical Care',
    imgSrc: '/images/activity/activity-2.jpg',
    imgAlt: 'Veterinary care at the Gaushala',
    icon: <PulseIcon />,
  },
  {
    time: '24/7', period: 'Always',
    title: 'Rescue Operations',
    description: 'Our ambulance and rescue team operates around the clock. Calls for injured, abandoned, or distressed animals are responded to immediately — day or night.',
    tag: '24/7 Active Response',
    tagVariant: 'rescue',
    cardVariant: 'rescue',
    iconVariant: 'rescue',
    imgSrc: '/images/activity/activity-3.jpeg',
    imgAlt: 'Animal rescue operations',
    icon: <FlagIcon />,
  },
];

export default function DailyRoutine() {
  return (
    <section className="daily-routine">
      <Reveal variant="fade-up" className="daily-routine__intro">
        <p className="daily-routine__overline">Daily Routine</p>
        <h2 className="daily-routine__heading">A Day in the Life of Our Gaushala</h2>
        <p className="daily-routine__sub">
          From the first prayer at dawn to the final check at night, every hour is dedicated
          to the wellbeing of the animals in our care. Here is how a typical day unfolds.
        </p>
      </Reveal>

      <StaggerContainer className="daily-routine__grid" staggerDelay={0.1}>
        {routineCards.map((card) => (
          <StaggerItem key={card.title}>
            <article className={`r-card${card.cardVariant ? ` r-card--${card.cardVariant}` : ''}`}>
              {/* Media */}
              <div className="r-card__media">
                <img src={card.imgSrc} alt={card.imgAlt} loading="lazy" />
                {/* <div className="r-card__time">
                  <span className="r-card__time-hour">{card.time}</span>
                  <span className="r-card__time-period">{card.period}</span>
                </div> */}
              </div>

              <div className={`r-card__icon${card.iconVariant ? ` r-card__icon--${card.iconVariant}` : ''}`}>
                {card.icon}
              </div>

              {/* Body */}
              <div className="r-card__body">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className={`r-card__tag${card.tagVariant ? ` r-card__tag--${card.tagVariant}` : ''}`}>
                  {card.tag}
                </span>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
