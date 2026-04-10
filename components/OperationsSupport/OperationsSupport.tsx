import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './OperationsSupport.scss';

const cards = [
  {
    icon: '🏠',
    heading: 'Staff & Doctor Housing',
    desc: 'Multiple on-site residences for caretakers, veterinary staff, and doctors ensure round-the-clock availability.',
    img: '/images/facilities/operations-2.jpg',
  },
  {
    icon: '🏢',
    heading: 'Gaushala Office',
    desc: 'Handles donor coordination, volunteer management, visitor reception, and all organisational activities that keep the mission on track.',
    img: '/images/facilities/operations-1.jpg',
  },
  {
    icon: '💧',
    heading: 'Water Drinking Area',
    desc: 'A dedicated water area ensures continuous access to clean, fresh water for all animals across the campus.',
    img: '/images/facilities/operations-3.jpg',
  },
];

export default function OperationsSupport() {
  return (
    <section className="ops-support">
      <div className="ops-support__inner">
        <Reveal variant="fade-up" className="ops-support__header">
          <div className="ops-support__overline">Operations &amp; Support</div>
          <h2>The Backbone of Daily Care</h2>
          {/* <p>
            Behind every healthy animal is an unseen web of infrastructure — housing for
            dedicated staff, coordinated administration, and fresh water flowing around the clock.
          </p> */}
        </Reveal>

        <StaggerContainer className="ops-support__grid" staggerDelay={0.1}>
          {cards.map((card, i) => (
            <StaggerItem key={i} className="ops-support__card">
              <div className="ops-support__card-img">
                <img src={card.img} alt={card.heading} />
                {/* <div className="ops-support__card-overlay" /> */}
              </div>
              <div className="ops-support__card-body">
                <div className="ops-support__card-icon">{card.icon}</div>
                <h3>{card.heading}</h3>
                <p>{card.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
