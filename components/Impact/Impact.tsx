import Image from 'next/image';
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './Impact.scss';

const stats = [
  { num: '900+', label: 'Animals Rescued' },
  { num: '24/7', label: 'Veterinary Care' },
  { num: '100 km', label: 'Rescue Radius' },
  { num: '₹0', label: 'Cost to Animals' },
];

const impactImages = [
  { src: '/images/our-impact/impact1.jpeg', alt: 'Rescued Animals', tag: 'Rescue & Rehab' },
  { src: '/images/our-impact/impact2.jpg', alt: 'Medical Care', tag: 'Medical Care' },
];

export default function Impact() {
  return (
    <section className="impact-block">
      <div className="impact-top">
        <Reveal variant="slide-right" className="i-left">
          <div className="i-label">Our Impact</div>
          <h2>Thousands of Lives Saved,<br />One by One</h2>
        </Reveal>
        <Reveal variant="slide-left" delay={0.15} className="i-right">
          <p>Every month, we rescue, treat, and rehabilitate scores of animals that have been hit by vehicles, abandoned, or left malnourished. Your donation directly funds the medicine, food, and staff that make this possible.</p>
        </Reveal>
      </div>

      <StaggerContainer className="impact-row" staggerDelay={0.1} initialDelay={0.1}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="impact-card">
            <div className="ic-num">{stat.num}</div>
            <div className="ic-label">{stat.label}</div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <StaggerContainer className="impact-img-row" staggerDelay={0.15} initialDelay={0.1}>
        {impactImages.map((img) => (
          <StaggerItem key={img.tag} className="impact-img-card">
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
            {/* <span className="imc-tag">{img.tag}</span> */}
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
