import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './CSRHospital.scss';

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
        <circle cx="20" cy="10" r="2" />
      </svg>
    ),
    title: 'Advanced Treatment',
    desc: 'Modern facilities designed for cows and other animals in distress, with equipment suited to large-animal veterinary care.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M12 11v5" />
        <path d="M9.5 13.5h5" />
      </svg>
    ),
    title: 'Emergency Care',
    desc: 'Round-the-clock medical support with critical intervention capability for life-threatening animal injuries and illness.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M4 22v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
        <path d="M12 16v4" />
        <path d="M10 18h4" />
      </svg>
    ),
    title: 'Qualified Doctors',
    desc: 'Experienced veterinarians and dedicated support staff committed to providing the highest standard of animal healthcare.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="6" width="15" height="13" rx="2" />
        <path d="M16 10h4l3 3v6h-7" />
        <circle cx="5.5" cy="19.5" r="2.5" />
        <circle cx="18.5" cy="19.5" r="2.5" />
        <path d="M8 10v5" />
        <path d="M5.5 12.5h5" />
      </svg>
    ),
    title: 'Rescue Services',
    desc: 'On-call rescue and rehabilitation services for injured animals across the region, with dedicated ambulance support.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6" />
      </svg>
    ),
    title: 'Sustainable Design',
    desc: 'Built with hygienic, eco-conscious infrastructure that respects both animal welfare and environmental responsibility.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        <polyline points="7 13 9.5 13 11 10.5 13 15.5 14.5 13 17 13" />
      </svg>
    ),
    title: 'Rehabilitation',
    desc: 'Dedicated recovery spaces for animals needing long-term care, ensuring every animal has a path back to health.',
  },
];

export default function CSRHospital() {
  return (
    <section className="csr-hosp">
      <div className="csr-hosp__inner">
        <Reveal variant="fade-up" className="section-header">
          <div className="section-overline">Flagship Project</div>
          <h2>A Modern Veterinary Hospital</h2>
          <p>
            Under this CSR partnership, a fully-equipped veterinary hospital is being developed at
            our gaushala premises — ensuring timely medical attention and a better quality of life
            for countless animals.
          </p>
          <div className="section-divider" />
        </Reveal>

        <Reveal variant="fade-up" delay={0.1} className="csr-hosp__callout">
          <div className="csr-hosp__callout-grid">
            <div className="csr-hosp__symbol">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 22V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
                <path d="M4 22h16" />
                <path d="M9 22v-6h6v6" />
                <path d="M12 9v4" />
                <path d="M10 11h4" />
              </svg>
            </div>
            <div className="csr-hosp__callout-text">
              <div className="csr-hosp__callout-label">Under Development · 2026</div>
              <h2>Healing, Dignity &amp; Compassionate Care</h2>
              <p>
                From routine treatment to emergency intervention, the hospital will house advanced
                facilities, trained veterinary staff, and rescue capabilities to respond to animal
                distress across the region.
              </p>
            </div>
            <div className="csr-hosp__status">
              <div className="csr-hosp__status-pulse" />
              <div className="csr-hosp__status-txt">Project In Progress</div>
            </div>
          </div>
        </Reveal>

        <StaggerContainer className="csr-hosp__features">
          {features.map((f) => (
            <StaggerItem key={f.title} className="csr-hf-card">
              <div className="csr-hf-card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
