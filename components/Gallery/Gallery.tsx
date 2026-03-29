import Image from 'next/image';
import './Gallery.scss';

const galleryImages = [
  { src: '/images/home-gallery/home-gallery-1.jpg', alt: 'Gallery 1' },
  { src: '/images/home-gallery/home-gallery-2.jpg', alt: 'Gallery 2' },
  { src: '/images/home-gallery/home-gallery-3.jpeg', alt: 'Gallery 3' },
  { src: '/images/home-gallery/home-gallery-4.jpeg', alt: 'Gallery 4' },
  { src: '/images/home-gallery/home-gallery-5.jpg', alt: 'Gallery 5' },
  { src: '/images/home-gallery/home-gallery-6.jpg', alt: 'Gallery 6' },
  { src: '/images/home-gallery/home-gallery-7.jpg', alt: 'Gallery 7' },
  { src: '/images/home-gallery/home-gallery-8.jpg', alt: 'Gallery 8' },
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
