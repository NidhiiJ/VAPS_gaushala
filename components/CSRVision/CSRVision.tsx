import { Reveal } from '@/components/Reveal';
import './CSRVision.scss';

export default function CSRVision() {
  return (
    <section className="csr-vision">
      <Reveal variant="fade-up" className="csr-vision__inner">
        <div className="csr-vision__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        </div>
        <div className="csr-vision__label">Our Vision</div>
        <h2>A World Without Animal Suffering</h2>
        <p>
          "To create a compassionate ecosystem where no animal suffers due to lack of care, and to
          build a model gaushala with world-class veterinary support."
        </p>
      </Reveal>
    </section>
  );
}
