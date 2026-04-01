import { Reveal } from '@/components/Reveal';
import './PageHero.scss';

interface PageHeroProps {
  eyebrow?: string;
  heading: string;
  subtext?: string;
}

export default function PageHero({ eyebrow, heading, subtext }: PageHeroProps) {
  return (
    <section className="pg-hero">
      <div className="pg-hero__pattern" aria-hidden="true" />
      <Reveal variant="fade-up" className="pg-hero__content">
        {eyebrow && <div className="pg-hero__pre">{eyebrow}</div>}
        <h1>{heading}</h1>
        {subtext && <p className="pg-hero__sub">{subtext}</p>}
      </Reveal>
    </section>
  );
}
