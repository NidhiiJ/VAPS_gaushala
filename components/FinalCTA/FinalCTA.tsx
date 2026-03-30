import { Reveal } from '@/components/Reveal';
import './FinalCTA.scss';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      {/* <div className="final-cta-icon">🙏</div> */}
      <Reveal variant="fade-up">
        <h2>
          Be the Reason an Animal Survives Today
        </h2>
        <p>
          Your donation &mdash; however small &mdash; provides shelter, food, and medicine to animals
          who have no one else.
        </p>
        <div className="final-cta-buttons">
          <a href="/donate" className="btn-cta-primary">Donate Now</a>
        </div>
      </Reveal>
    </section>
  );
}
