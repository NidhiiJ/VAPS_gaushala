import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import './OurJourney.scss';

const highlights = [
  {
    title: 'Rooted in Ahimsa',
    desc: 'Guided by the sacred Jain principle of non-violence toward all living beings.',
  },
  {
    title: 'Community-Driven',
    desc: 'Built through collective effort, sacrifice, and unwavering faith in seva.',
  },
  {
    title: 'Social Responsibility',
    desc: 'True religion expressed through active service to society and all creatures.',
  },
  {
    title: 'Ever Growing',
    desc: 'From 7 founders to 218 dedicated members across four cities in India.',
  },
];

export default function OurJourney() {
  return (
    <section className="journey-block">
      <div className="journey-inner">
        <Reveal variant="slide-right" className="journey-visual">
          <div className="journey-img">
            <Image
              src="https://placehold.co/600x750/E8D5C0/7A5C40?text=Founders+Photo"
              alt="VAPS Mandal Founders"
              width={600}
              height={750}
              unoptimized
            />
          </div>
          <div className="journey-badge">
            <div className="journey-badge__year">1986</div>
            <div className="journey-badge__label">Established</div>
          </div>
          <div className="journey-float">
            <div className="journey-float__num">7</div>
            <div className="journey-float__text">Founding<br />Members</div>
          </div>
        </Reveal>

        <Reveal variant="slide-left" delay={0.15} className="journey-text">
          <div className="jt-label">Our Journey</div>
          <h2>Where Faith Met Purpose</h2>
          <p>
            VAPS Mandal was established in 1986 by seven committed individuals who shared a common
            vision — to serve society through social, religious, and humanitarian activities for the
            benefit of the public at large.
          </p>
          <p>
            What began as a modest initiative rooted in faith, unity, and service gradually evolved
            into a structured movement guided by discipline, dedication, and the timeless Jain
            principle of <strong>Ahimsa</strong> (Non-Violence).
          </p>
          <p>
            From its inception, VAPS Mandal believed that true religious practice must translate
            into active social responsibility.
          </p>

          <div className="journey-highlights">
            {highlights.map((h) => (
              <div key={h.title} className="jh-card">
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
