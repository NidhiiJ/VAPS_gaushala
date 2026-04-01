import { Reveal } from '@/components/Reveal';
import './OverviewHero.scss';

interface OverviewHeroProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
}

export default function OverviewHero({ eyebrow, heading, subtext }: OverviewHeroProps) {
  return (
    <section className="ov-hero">
      <div className="ov-hero__pattern" aria-hidden="true" />
      <Reveal variant="fade-up" className="ov-hero__content">
        {eyebrow && <div className="ov-hero__pre">{eyebrow}</div>}
        <h1>{heading}</h1>
        {subtext && <p className="ov-hero__sub">{subtext}</p>}
      </Reveal>
    </section>
  );
}
