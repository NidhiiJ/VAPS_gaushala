import { Reveal } from '@/components/Reveal';
import './FavouriteCompliments.scss';

const compliments = [
  {
    quote: 'A true sanctuary of peace.',
    author: 'Ramesh Gupta',
    location: 'Jaipur',
  },
  {
    quote: 'Seva in its purest form.',
    author: 'Sunita Sharma',
    location: 'Delhi',
  },
  {
    quote: 'Every cow cared with love.',
    author: 'Priya Mehta',
    location: 'Mumbai',
  },
  {
    quote: 'Moved us beyond all words.',
    author: 'Arjun Verma',
    location: 'Lucknow',
  },
];

export default function FavouriteCompliments() {
  return (
    <section className="favourite-compliments">
      <div className="favourite-compliments-inner">
        <Reveal variant="fade-up">
          <div className="section-header">
            <h2>Our Favourite Compliments</h2>
            <div className="section-divider" />
          </div>
        </Reveal>

        <div className="compliments-grid">
          {compliments.map((item, i) => (
            <Reveal key={i} variant="fade-up" delay={i * 0.1}>
              <div className="compliment-card">
                <span className="compliment-mark">&ldquo;</span>
                <p className="compliment-quote">{item.quote}</p>
                <div className="compliment-author">
                  <span className="compliment-name">{item.author}</span>
                  <span className="compliment-location">{item.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
