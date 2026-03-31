import { Reveal } from '@/components/Reveal';
import './ContactImage.scss';

function ImagePlaceholderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

export default function ContactImage() {
  return (
    <section className="cimg-section">
      <Reveal variant="fade-up">
        <div className="cimg-banner">
          {/* REPLACE: swap this placeholder with a real <img> tag pointing to your gaushala photo */}
          {/* Example: <img src="/your-photo.jpg" alt="Our Gaushala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
          <div className="cimg-banner__placeholder">
            <span className="cimg-banner__icon">
              <ImagePlaceholderIcon />
            </span>
            <span className="cimg-banner__label">Place your Gaushala image here</span>
            <span className="cimg-banner__hint">Recommended size: 1200 × 500px</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
