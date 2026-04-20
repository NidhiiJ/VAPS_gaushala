import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './CSRCompliance.scss';

const cards = [
  {
    title: 'Registered Trust',
    sub: 'Formally registered with full legal standing',
  },
  {
    title: 'CSR Eligible Organization',
    sub: 'Fully compliant with Section 135 CSR norms',
  },
  {
    title: 'Proper Fund Utilization',
    sub: 'Complete reporting on every contribution received',
  },
  {
    title: '100% Transparency',
    sub: 'Open-book operations and regular audits',
  },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function CSRCompliance() {
  return (
    <section className="csr-comp">
      <div className="csr-comp__inner">
        <Reveal variant="fade-up" className="section-header">
          <div className="section-overline">Trust &amp; Accountability</div>
          <h2>Compliance &amp; Transparency</h2>
          <p>
            Every rupee contributed is tracked, reported, and put to purposeful use — because trust
            is the foundation of every meaningful partnership.
          </p>
          <div className="section-divider" />
        </Reveal>

        <StaggerContainer className="csr-comp__grid">
          {cards.map((card) => (
            <StaggerItem key={card.title} className="csr-comp-card">
              <div className="csr-comp-card__check">
                <CheckIcon />
              </div>
              <div className="csr-comp-card__title">{card.title}</div>
              <div className="csr-comp-card__sub">{card.sub}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
