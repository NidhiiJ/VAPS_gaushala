import { Reveal } from '@/components/Reveal';
import './Facility7.scss';

export default function Facility7() {
  return (
    <section className="facility7">
      <div className="facility7__inner">
        {/* Text column */}
        <Reveal variant="slide-right" className="facility7__text">
          <div className="facility7__label">Facility 07</div>
          <h2>The Organic Farm</h2>
          <p>
            Beyond animal care, the Panjrapole nurtures the earth itself. Our organic farm grows
            fresh fruits and vegetables using{' '}
            <strong>natural, chemical-free methods</strong> — embodying the Jain principle of
            living in harmony with all life.
          </p>
          <p>
            Cow-dung compost is used as <strong>natural manure</strong>, creating a beautiful
            cycle — the animals nourish the soil, and the soil nourishes them back. The farm
            produces seasonal fruits and vegetables for campus use, reducing external dependence
            and promoting self-sufficiency.
          </p>
        </Reveal>

        {/* Visual column — 3-photo gallery */}
        <Reveal variant="slide-left" className="facility7__visual">
          <div className="facility7__gallery">
            <div className="facility7__gallery-main">
              <div className="facility7__photo facility7__photo--hero">
                <div className="facility7__photo-overlay" />
              </div>
            </div>
            <div className="facility7__gallery-stack">
              <div className="facility7__photo facility7__photo--sm">
                <div className="facility7__photo-overlay" />
              </div>
              <div className="facility7__photo facility7__photo--sm">
                <div className="facility7__photo-overlay" />
              </div>
            </div>
          </div>
          <div className="facility7__badge">
            <span className="facility7__badge-icon">🌾</span>
            <span className="facility7__badge-text">Organic Farm</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
