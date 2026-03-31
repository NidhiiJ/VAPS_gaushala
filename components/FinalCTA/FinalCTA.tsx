import { Reveal } from '@/components/Reveal';
import './FinalCTA.scss';

interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

interface FinalCTAProps {
  heading: string;
  subtext: string;
  buttons: CTAButton[];
  note?: string;
}

export default function FinalCTA({ heading, subtext, buttons, note }: FinalCTAProps) {
  return (
    <section className="final-cta">
      <Reveal variant="fade-up">
        <h2>{heading}</h2>
        <p>{subtext}</p>
        <div className="final-cta-buttons">
          {buttons.map((btn) => (
            <a
              key={btn.href}
              href={btn.href}
              className={btn.variant === 'secondary' ? 'btn-cta-secondary' : 'btn-cta-primary'}
            >
              {btn.label}
            </a>
          ))}
        </div>
        {note && <p className="final-cta-note">{note}</p>}
      </Reveal>
    </section>
  );
}
