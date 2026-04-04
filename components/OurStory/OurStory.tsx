import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import './OurStory.scss';

const tags = [
  'Free medical treatment & surgery',
  'Permanent shelter for abandoned cattle',
  'Community-driven gau seva programs',
];

export default function OurStory() {
  return (
    <section className="story-block">
      <div className="story-inner">
        <Reveal variant="slide-right" className="story-visual">
          <div className="story-img">
            <Image
              src="/images/3D.jpeg"
              alt="Mission"
              width={800}
              height={700}
              unoptimized
            />
          </div>
          <div className="story-year">
            1993<span>Established</span>
          </div>
        </Reveal>

        <Reveal variant="slide-left" delay={0.15} className="story-text">
          <div className="s-label">Our Story</div>
          <h2>A Sanctuary Built on Faith &amp; Seva</h2>
          <p>
            Founded over three decades ago in the spirit of Ahimsa, Suri Prem Jiv Raksha Kendra
            Sansthan has grown into one of the region&apos;s most trusted gaushalas — a place where
            every cow, calf, and injured animal finds refuge.
          </p>
          <p>
            We operate on the belief that caring for animals — especially the sacred cow — is a
            divine act. Through your support, we continue this timeless mission every single day.
          </p>
          <div className="story-tags">
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
