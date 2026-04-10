import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './Facility5.scss';

const features = [
  {
    heading: 'Solar Panels',
    desc: 'High-capacity panels installed across rooftops and open areas',
  },
  {
    heading: 'Battery Storage',
    desc: 'Energy stored for uninterrupted supply through nights and cloudy days',
  },
  {
    heading: 'Powers Operations',
    desc: 'Runs lighting, pumps, fans, and medical equipment campus-wide',
  },
  {
    heading: 'Eco Sustainable',
    desc: "Zero-emission energy reducing the sanctuary's carbon footprint",
  },
];

export default function Facility5() {
  return (
    <section className="facility5">
      {/* <div className="facility5__panel-bg" /> */}
      <div className="facility5__overlay" />
      <div className="facility5__num" aria-hidden>05</div>

      <div className="facility5__content">
        <Reveal variant="slide-right" className="facility5__text">
          <div className="facility5__label">
            Facility 05
          </div>
          <h2>Solar Energy System</h2>
          <p>
            A fully installed solar energy infrastructure powers the entire sanctuary. In
            Rajasthan&apos;s sun-drenched landscape, <strong>clean, renewable energy</strong> is
            not just sustainable — it is the most natural choice.
          </p>
          <p>
            The solar setup supports lighting, water pumps, medical equipment, and daily
            operations serving all <strong>900+ animals</strong> without reliance on the grid.
          </p>
        </Reveal>

        <StaggerContainer className="facility5__features" staggerDelay={0.1}>
          {features.map((f, i) => (
            <StaggerItem key={i} className="facility5__feature-card">
              <h4>{f.heading}</h4>
              <p>{f.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
