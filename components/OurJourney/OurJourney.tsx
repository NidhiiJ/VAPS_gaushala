import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import './OurJourney.scss';

const cities = [
  { name: 'Mumbai', members: 72 },
  { name: 'Bhilwara', members: 48 },
  { name: 'Surat', members: 56 },
  { name: 'Ahmedabad', members: 42 },
];

export default function OurJourney() {
  return (
    <section className="journey-block">
      <div className="journey-inner">
        <Reveal variant="slide-right" className="journey-visual">
          <div className="journey-img">
            <Image
              src="/images/about/about-journey.jpeg"
              alt="VAPS Mandal Founders"
              width={600}
              height={750}
              unoptimized
            />
          </div>
          <div className="journey-badge">
            <div className="jb-year">1986</div>
            <div className="jb-label">Established</div>
          </div>
          {/* <div className="journey-float">
            <div className="jf-num">7</div>
            <div className="jf-text">Founding<br />Members</div>
          </div> */}
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

          <div className="journey-members">
            {cities.map((city) => (
              <div key={city.name} className="jm-card">
                <div className="jm-pin">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="jm-city">{city.name}</div>
                  <div className="jm-badge">{city.members} Active Members</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
