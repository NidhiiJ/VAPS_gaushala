import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './PanjrapolDream.scss';

const milestones = [
  {
    year: '2008',
    title: 'Land Purchased',
    desc: 'After years of planning, sacrifice, and collective effort, land was formally purchased for the Gaushala — transforming a long-cherished dream into a tangible mission.',
  },
  {
    year: '2011',
    title: 'Khad Muhurat',
    desc: 'The auspicious Khad Muhurat ceremony marked the formal commencement of construction and development of the Gaushala premises.',
  },
  {
    year: '2018',
    title: 'Shilalekh Anavaran',
    desc: 'The Stone Inscription Inauguration ceremony symbolised dedication, continuity, and the sanctity of the mission for generations to come.',
  },
];

export default function PanjrapolDream() {
  return (
    <section className="dream-block">
      <div className="dream-inner">
        <Reveal variant="fade-up" className="dream-header">
          <div className="dh-label">The Dream Realised</div>
          <h2>From Vision to a Living Sanctuary</h2>
          <p>
            From as early as 1990, VAPS Mandal nurtured a profound dream — to establish a Gaushala
            and Panjrapole dedicated to the lifelong care and protection of cows and helpless animals.
          </p>
        </Reveal>

        <StaggerContainer className="dream-milestones">
          {milestones.map((m, i) => (
            <StaggerItem key={m.year} className="dm-card">
              <div className="dm-card__year">{m.year}</div>
              <div className="dm-card__title">{m.title}</div>
              <div className="dm-card__desc">{m.desc}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* <Reveal variant="fade-up" delay={0.3} className="dream-quote">
          <p>
            &ldquo;This vision was driven not by resources, but by faith, perseverance, and an
            unshakable belief in service to living beings.&rdquo;
          </p>
        </Reveal> */}
      </div>
    </section>
  );
}
