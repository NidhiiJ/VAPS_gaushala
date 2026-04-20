import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './CSROpportunities.scss';

const opportunities = [
  {
    num: '01',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-7 9 7v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
        <path d="M3 10h18" />
        <path d="M9 22v-6a3 3 0 0 1 6 0v6" />
        <path d="M12 16v6" />
      </svg>
    ),
    title: 'Gaushala Infrastructure Development',
    desc: 'Expand and strengthen shelter facilities, sheds, and essential amenities for hundreds of animals under our care.',
    featured: false,
  },
  {
    num: '02',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M4 12a8 8 0 0 0 16 0" />
        <path d="M2 20h20" />
        <path d="M8 8c0-1 .5-2 1.5-2" />
        <path d="M12 6c0-1 .5-2 1.5-2" />
        <path d="M16 8c0-1 .5-2 1.5-2" />
      </svg>
    ),
    title: 'Animal Feeding Programs',
    desc: 'Sponsor daily fodder, fresh water, and nutritional supplements that keep our गौमाता healthy year-round.',
    featured: false,
  },
  {
    num: '03',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
    title: 'Medical Camps & Rescue Operations',
    desc: 'Fund on-ground medical camps, ambulance rescues, and emergency treatments that save animal lives every day.',
    featured: false,
  },
  {
    num: '04',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21L9 3" />
        <path d="M20 21L15 3" />
        <path d="M12 6v2" />
        <path d="M12 11v2" />
        <path d="M12 16v2" />
      </svg>
    ),
    title: 'Gaushala Road Development',
    desc: 'Help build all-weather access roads for ambulances, supply vehicles, and safe movement within the premises.',
    featured: false,
  },
  {
    num: '05',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-6 9 6" />
        <path d="M3 9h18" />
        <path d="M5 9v10" />
        <path d="M9 9v10" />
        <path d="M15 9v10" />
        <path d="M19 9v10" />
        <path d="M3 19h18" />
        <path d="M2 22h20" />
      </svg>
    ),
    title: 'Ahimsa Museum Development',
    desc: 'Support the creation of an educational museum celebrating the principle of Ahimsa and compassion for all beings.',
    featured: false,
  },
  {
    num: '✦',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#F5DEB3" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Custom CSR Partnership',
    desc: "Have a specific vision? Let's design a bespoke CSR project tailored to your company's goals and values.",
    featured: true,
  },
];

export default function CSROpportunities() {
  return (
    <section className="csr-opp">
      <div className="csr-opp__inner">
        <Reveal variant="fade-up" className="section-header">
          <div className="section-overline">Partner With Us</div>
          <h2>CSR Opportunities</h2>
          <p>
            We invite corporates and donors to join hands with us under CSR initiatives. Choose a
            cause that aligns with your values — and together, let&apos;s make a lasting impact.
          </p>
          <div className="section-divider" />
        </Reveal>

        <StaggerContainer className="csr-opp__grid">
          {opportunities.map((opp) => (
            <StaggerItem
              key={opp.title}
              className={`csr-opp-card${opp.featured ? ' csr-opp-card--featured' : ''}`}
            >
              <div className={`csr-opp-card__num${opp.featured ? ' csr-opp-card__num--featured' : ''}`}>
                {opp.num}
              </div>
              <div className={`csr-opp-card__icon${opp.featured ? ' csr-opp-card__icon--featured' : ''}`}>
                {opp.icon}
              </div>
              <h3>{opp.title}</h3>
              <p>{opp.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
