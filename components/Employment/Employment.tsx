import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './Employment.scss';

const images = [
  { src: '/images/employment/emp-1.jpg', alt: 'Local staff caring for cows' },
  { src: '/images/employment/emp-2.jpg', alt: 'Community members at work' },
  { src: '/images/employment/emp-3.jpg', alt: 'Volunteers in the Gaushala' },
  { src: '/images/employment/emp-4.jpg', alt: 'Youth engaged in seva' },
];

export default function Employment() {
  return (
    <section className="emp-block">
      <div className="emp-inner">
        <Reveal variant="fade-up" className="emp-header">
          <div className="emp-label">Community &amp; Livelihoods</div>
          <h2>Empowering Locals</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
            vestibulum hendrerit. Donec in efficitur leo, in commodo lorem.
          </p>
        </Reveal>

        <StaggerContainer className="emp-grid">
          {images.map((img, i) => (
            <StaggerItem key={i} className="emp-card">
              <div className="emp-card__img-wrap">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="emp-card__overlay" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
