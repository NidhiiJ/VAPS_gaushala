import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './Employment.scss';

const images = [
  { src: '/images/about/local-1.jpeg', alt: 'Local staff caring for cows' },
  { src: '/images/about/local-2.jpg', alt: 'Community members at work' },
  { src: '/images/about/local-3.jpeg', alt: 'Volunteers in the Gaushala' },
  { src: '/images/about/local-4.jpeg', alt: 'Youth engaged in seva' },
];

export default function Employment() {
  return (
    <section className="emp-block">
      <div className="emp-inner">
        <Reveal variant="fade-up" className="emp-header">
          <div className="emp-label">Community &amp; Livelihoods</div>
          <h2>Empowering Locals</h2>
          <p>
            We provide meaningful jobs that support the local economy, help communities grow, and create stable opportunities for the future.
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
