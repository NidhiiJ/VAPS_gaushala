import Image from 'next/image';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
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
      <Reveal variant="fade-up">
        <div className="section-header">
          <div className="section-overline">Our Gallery</div>
          <h2>Moments of Care &amp; Compassion</h2>
          <div className="section-divider" />
        </div>
      </Reveal>

      <StaggerContainer className="gallery-grid" staggerDelay={0.07} initialDelay={0.1}>
        {galleryImages.map((img) => (
          <StaggerItem key={img.alt} variant="zoom-in" className="gallery-item">
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} unoptimized />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
