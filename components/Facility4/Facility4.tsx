import Image from 'next/image';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './Facility4.scss';

const stats = [
  { num: '3', label: 'Godowns' },
  { num: '900+', label: 'Animals Fed Daily' },
  { num: '365', label: 'Days Covered' },
];

const gallery = [
  { src: '/images/facilities/facility4-1.jpg', tag: 'Exterior View', desc: 'Godown Exterior / Entrance' },
  { src: '/images/facilities/facility4-2.jpg', tag: 'Inside the Godown', desc: 'Interior / Stored Fodder' },
];

export default function Facility4() {
  return (
    <section className="facility4">
      <div className="facility4__inner">
        {/* Top row: heading + stats */}
        <div className="facility4__top">
          <Reveal variant="slide-right" className="facility4__text">
            <div className="facility4__label">Facility 04</div>
            <h2>Food Storage Godowns — The Lifeline of 900+ Lives</h2>
            {/* <p>
              Three large-capacity storage godowns keep the Panjrapole stocked with{' '}
              <strong>dry fodder, green feed, and essential supplements</strong> year-round —
              ensuring no animal ever goes hungry, even in lean seasons.
            </p> */}
          </Reveal>

          <StaggerContainer className="facility4__stats" staggerDelay={0.1}>
            {stats.map((s, i) => (
              <StaggerItem key={i} className="facility4__stat">
                <div className="facility4__stat-num">{s.num}</div>
                <div className="facility4__stat-label">{s.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Gallery */}
        <StaggerContainer className="facility4__gallery" staggerDelay={0.12}>
          {gallery.map((img, i) => (
            <StaggerItem key={i} className="facility4__img">
              <Image
                src={img.src}
                alt={img.desc}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority={i === 0}
              />
              {/* <div className="facility4__img-overlay" /> */}
              <div className="facility4__img-tag">{img.tag}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
