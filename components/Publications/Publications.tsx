import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './Publications.scss';

const PLACEHOLDER_CARDS = [
  { source: 'Newspaper',     title: 'Add Publication Title Here', date: 'Date of Publication' },
  { source: 'Magazine',      title: 'Add Publication Title Here', date: 'Date of Publication' },
  { source: 'Online Feature',title: 'Add Publication Title Here', date: 'Date of Publication' },
  { source: 'Regional Daily',title: 'Add Publication Title Here', date: 'Date of Publication' },
  { source: 'TV Coverage',   title: 'Add Publication Title Here', date: 'Date of Publication' },
  { source: 'National Press', title: 'Add Publication Title Here', date: 'Date of Publication' },
];

function ImagePlaceholderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  );
}

export default function Publications() {
  return (
    <section className="pub-section">
      {/* <Reveal variant="fade-up" className="pub-section__header">
        <div className="pub-section__overline">Press Coverage</div>
        <h2>Featured In Leading Publications</h2>
        <p>Snapshots from newspapers, magazines, and media features that have covered our mission and impact in the community.</p>
        <div className="pub-section__divider" />
      </Reveal> */}

      <StaggerContainer className="pub-grid">
        {PLACEHOLDER_CARDS.map((card, i) => (
          <StaggerItem key={i}>
            <div className="pub-card pub-card--placeholder">
              <div className="pub-card__image">
                <ImagePlaceholderIcon />
                <div className="pub-card__zoom" aria-hidden="true">
                  <ZoomIcon />
                </div>
              </div>
              <div className="pub-card__body">
                <div className="pub-card__source">{card.source}</div>
                <div className="pub-card__title">{card.title}</div>
                <div className="pub-card__date">{card.date}</div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
