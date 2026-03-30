import { Reveal } from '@/components/Reveal';
import './Quote.scss';

export default function Quote() {
  return (
    <div className="quote">
      <Reveal variant="fade-in" duration={0.8}>
        <blockquote>
          &ldquo;Compassion towards living beings is the highest form of religion and humanity.&rdquo;
        </blockquote>
        <div className="quote-attr">&mdash; Our Guiding Principle</div>
      </Reveal>
    </div>
  );
}
