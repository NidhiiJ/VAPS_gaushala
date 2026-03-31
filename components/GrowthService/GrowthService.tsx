import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import './GrowthService.scss';

const stats = [
  { num: '50',   label: 'Members by 1993' },
  { num: '1993', label: 'Ambulance Began' },
  { num: '8+',   label: 'Yatras Organised' },
];

export default function GrowthService() {
  return (
    <section className="growth-block">
      <div className="growth-inner">
        <Reveal variant="slide-right" className="growth-text">
          <div className="gt-label">Growth &amp; Service</div>
          <h2>A Movement That Grew With Purpose</h2>
          <p>
            By 1993, the strength of the Mandal grew significantly, with membership expanding to
            50 dedicated members. This growth reflected a deepening commitment among young members
            to actively participate in service-oriented initiatives.
          </p>
          <p>
            Recognising the urgent need to support injured and helpless animals, especially in
            accident-prone areas, <strong>Ambulance Services were formally initiated in 1993</strong>{' '}
            — enabling timely rescue and emergency medical assistance to animals in distress.
          </p>
          <p>
            Between 1995 and 2001, the Mandal actively organised Pilgrimage Tours, providing
            spiritual enrichment and fostering unity. In 2003, the revered Shikharji Pilgrimage
            Tour further reinforced the Mandal&apos;s commitment to religious values and collective
            spiritual growth.
          </p>

          <div className="growth-stats">
            {stats.map((s) => (
              <div key={s.label} className="gs-card">
                <div className="gs-card__num">{s.num}</div>
                <div className="gs-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="slide-left" delay={0.15} className="growth-visual">
          <div className="growth-img">
            <Image
              src="https://placehold.co/800x600/DECCB5/7A5C40?text=Ambulance+Service"
              alt="Ambulance Service"
              width={800}
              height={600}
              unoptimized
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
