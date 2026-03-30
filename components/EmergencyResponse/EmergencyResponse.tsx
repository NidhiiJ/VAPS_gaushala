import Image from 'next/image';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './EmergencyResponse.scss';

const stats = [
  { value: '100 km', label: 'Rescue Radius' },
  { value: '24/7', label: 'Active Response' },
  { value: 'Sirohi', label: 'District Coverage' },
];

export default function EmergencyResponse() {
  return (
    <section className="emr-section">
      <div className="emr-inner">
        <Reveal variant="slide-right" className="emr-content">
          <div className="emr-badge">
            <div className="emr-pulse" />
            Emergency Response Active
          </div>

          <h2>
            When Accidents Happen… <em>We Respond</em>
          </h2>

          <p>
            With the rapid expansion of four-lane roads and highways in nearby areas, animal
            accidents are increasing every day. In such critical moments, our{' '}
            <strong>Panjrapole Ambulance Service</strong> operates actively, providing immediate
            rescue, emergency medical aid, and life-saving care to injured animals.
          </p>

          <div className="emr-callout">
            <p>
              Very often,{' '}
              <strong>your donation becomes the difference between life and death</strong> for a
              voiceless being.
            </p>
          </div>

          <StaggerContainer className="emr-stats" staggerDelay={0.1} initialDelay={0.2}>
            {stats.map((s) => (
              <StaggerItem key={s.label} className="emr-stat">
                <div className="emr-stat-value">{s.value}</div>
                <div className="emr-stat-label">{s.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Reveal>

        <Reveal variant="slide-left" delay={0.1} className="emr-image">
          <Image
            src="/images/ambulance.jpg"
            alt="Emergency medical care for animals"
            width={800}
            height={600}
            unoptimized
          />
          {/* <div className="emr-image-overlay" /> */}
        </Reveal>
      </div>
    </section>
  );
}
