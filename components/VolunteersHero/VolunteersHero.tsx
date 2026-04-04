import { Reveal } from '@/components/Reveal';
import './VolunteersHero.scss';

const stats = [
  { num: '217+', label: 'Active Volunteers' },
  { num: '39+',  label: 'Years of Service' },
  { num: '10+',  label: 'Cities Represented' },
];

export default function VolunteersHero() {
  return (
    <section className="vol-hero">
      <div className="vol-hero__glow vol-hero__glow--top" aria-hidden="true" />
      <div className="vol-hero__glow vol-hero__glow--bottom" aria-hidden="true" />
      <div className="vol-hero__pattern" aria-hidden="true" />

      <Reveal variant="fade-up" className="vol-hero__content">
        <div className="vol-hero__eyebrow">
          <span className="vol-hero__eyebrow-line" />
          सेवा · Seva · Service
          <span className="vol-hero__eyebrow-line" />
        </div>

        <h1 className="vol-hero__heading">Our Volunteers</h1>

        <p className="vol-hero__subtext">
          For over three decades, dedicated volunteers from across India have selflessly served
          Gau Mata. Their devotion is the backbone of this mission.
        </p>

        <div className="vol-hero__stats">
          {stats.map(({ num, label }) => (
            <div key={label} className="vol-hero__stat">
              <span className="vol-hero__stat-num">{num}</span>
              <span className="vol-hero__stat-label">{label}</span>
            </div>
          ))}
        </div>

        <a
          href="/volunteer_list.pdf"
          download
          className="vol-hero__download"
          aria-label="Download full volunteer list PDF"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download Full Volunteer List
        </a>
      </Reveal>

      {/* <div className="vol-hero__scroll" aria-hidden="true">
        <div className="vol-hero__scroll-dot" />
      </div> */}
    </section>
  );
}
