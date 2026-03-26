import Image from 'next/image';
import './Gallery.scss';

const galleryImages = [
  { src: 'https://placehold.co/400x400/2A0A0A/F5DEB3?text=G1', alt: 'Gallery 1' },
  { src: 'https://placehold.co/400x400/3D0C0C/F5DEB3?text=G2', alt: 'Gallery 2' },
  { src: 'https://placehold.co/400x400/6B1010/F5DEB3?text=G3', alt: 'Gallery 3' },
  { src: 'https://placehold.co/400x400/8B1A1A/F5DEB3?text=G4', alt: 'Gallery 4' },
  { src: 'https://placehold.co/400x400/2A0A0A/EDE0CC?text=G5', alt: 'Gallery 5' },
  { src: 'https://placehold.co/400x400/3D0C0C/EDE0CC?text=G6', alt: 'Gallery 6' },
  { src: 'https://placehold.co/400x400/6B1010/EDE0CC?text=G7', alt: 'Gallery 7' },
  { src: 'https://placehold.co/400x400/8B1A1A/EDE0CC?text=G8', alt: 'Gallery 8' },
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="section-header">
        <div className="section-overline">Our Gallery</div>
        <h2>Moments of Care &amp; Compassion</h2>
        <div className="section-divider" />
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img) => (
          <div key={img.alt} className="gallery-item">
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} unoptimized />
          </div>
        ))}
      </div>
    </section>
  );
}
