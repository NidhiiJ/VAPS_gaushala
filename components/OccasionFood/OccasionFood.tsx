import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './OccasionFood.scss';

const occasions = [
  {
    icon: '🪔',
    name: 'Diwali & Paryushan',
    sub: 'Sweets, gud & chana mix',
  },
  {
    icon: '🎂',
    name: 'Birthdays & Anniversaries',
    sub: 'Donor-sponsored feasts',
  },
  {
    icon: '🙏',
    name: 'Punyatithi & Shraddha',
    sub: 'In loving memory donations',
  },
  {
    icon: '🌿',
    name: 'Makar Sankranti',
    sub: 'Seasonal til-gud treats',
  },
];

export default function OccasionFood() {
  return (
    <section className="occ-food">
      {/* Decorative blobs */}
      <div className="occ-food__blob occ-food__blob--tl" aria-hidden="true" />
      <div className="occ-food__blob occ-food__blob--br" aria-hidden="true" />

      <div className="occ-food__inner">
        {/* Header */}
        <Reveal variant="fade-up" className="occ-food__header">
          <p className="occ-food__overline">Celebrations of Care</p>
          <h2 className="occ-food__heading">
            Special Food on Occasions &amp; Donations
          </h2>
          <p className="occ-food__sub">
            On auspicious days, festivals, and through generous donations from well-wishers,
            our cows are treated to specially prepared nutritious meals — a celebration of
            compassion and devotion.
          </p>
        </Reveal>

        {/* Image grid */}
        <div className="occ-food__gallery">
          {/* Hero image */}
          <Reveal variant="zoom-in" className="occ-food__hero-wrap">
            <div className="occ-food__hero-img">
              <img
                src="/images/activity/special-event-1.jpg"
                alt="Special food being prepared for cows on a festive occasion"
                loading="lazy"
              />
              <div className="occ-food__hero-caption">
                <h4>Festive Feast Preparation</h4>
                {/* <span>Specially prepared nutritious meals with gud, chana, and seasonal treats</span> */}
              </div>
            </div>
          </Reveal>

          {/* Side images */}
          <div className="occ-food__sides">
            <Reveal variant="fade-up" delay={0.1} className="occ-food__side-wrap">
              <div className="occ-food__side-img">
                <img
                  src="/images/activity/special-event-2.jpg"
                  alt="Cows enjoying special meal on donation day"
                  loading="lazy"
                />
                {/* <span className="occ-food__side-tag">Donor Visit</span> */}
              </div>
            </Reveal>
            {/* <Reveal variant="fade-up" delay={0.2} className="occ-food__side-wrap">
              <div className="occ-food__side-img">
                <img
                  src="https://placehold.co/800x400/DECCB5/7A5C40"
                  alt="Festival celebration and special feeding at gaushala"
                  loading="lazy"
                />
                <span className="occ-food__side-tag">Festival Day</span>
              </div>
            </Reveal> */}
          </div>
        </div>

        {/* Occasion chips */}
        <StaggerContainer className="occ-food__chips" staggerDelay={0.08} initialDelay={0.1}>
          {occasions.map((occ) => (
            <StaggerItem key={occ.name} className="occ-food__chip">
              <span className="occ-food__chip-icon" aria-hidden="true">{occ.icon}</span>
              <span className="occ-food__chip-text">{occ.name}</span>
              {/* <span className="occ-food__chip-sub">{occ.sub}</span> */}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
