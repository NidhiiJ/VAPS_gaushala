import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import './PresentDay.scss';

export default function PresentDay() {
  return (
    <section className="present-block">
      <div className="present-inner">
        <div className="present-top">
          <Reveal variant="slide-right" className="present-visual">
            <div className="present-img">
              <Image
                src="https://placehold.co/800x600/D4C0A8/7A5C40?text=Panjrapole+Today"
                alt="Panjrapole Today"
                width={800}
                height={600}
                unoptimized
              />
            </div>
          </Reveal>

          <Reveal variant="slide-left" delay={0.15} className="present-text">
            <div className="pt-label">Present Day — 2025</div>
            <h2>A Dream Fully Realised</h2>
            <p>
              Today, the dream envisioned decades ago stands fully realised. The Panjrapole shelters
              and cares for more than <strong>900 cows and other helpless animals</strong>, providing
              them with safe shelter, nutritious fodder, clean water, regular and emergency medical
              care, and above all — dignity, compassion, and lifelong protection.
            </p>
            <p>
              The organisation has grown into a strong collective of{' '}
              <strong>218 young and dedicated members</strong> residing across Mumbai, Bhilwara,
              Surat, and Ahmedabad. Despite being geographically dispersed, members remain deeply
              connected to the mission through regular visits, active participation, and continued
              social and religious activities.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
