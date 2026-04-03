import { Reveal } from '@/components/Reveal';
import './OurPurpose.scss';

const missionItems = [
  'Shelter and protect abandoned, injured, and aged animals with lifelong care',
  'Provide timely medical treatment, nutritious food, and clean water to every animal',
  'Promote Ahimsa, compassion, and kindness through community outreach',
  'Encourage active community participation in animal welfare and seva',
];

export default function OurPurpose() {
  return (
    <section className="purpose-block">
      <div className="purpose-inner">
        <Reveal variant="fade-up" className="purpose-header">
          <div className="ph-overline">Our Purpose</div>
          <h2>Vision &amp; Mission</h2>
          <p>The principles that guide every decision, every rescue, and every act of compassion.</p>
        </Reveal>

        <div className="purpose-grid">
          <Reveal variant="slide-right" className="purpose-card purpose-card--vision">
            <div className="pc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8951A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div className="pc-label">Our Vision</div>
            <h3>A Compassionate World for Every Living Being</h3>
            <p>
              To create a compassionate society where every living being is respected, protected,
              and treated with the dignity they deserve — a world where Ahimsa is not just a
              principle but a way of life.
            </p>
          </Reveal>

          <Reveal variant="slide-left" delay={0.15} className="purpose-card purpose-card--mission">
            <div className="pc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B1010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="pc-label">Our Mission</div>
            <h3>Actionable Compassion, Every Single Day</h3>
            <ul>
              {missionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
