import Image from 'next/image';
import './Impact.scss';

const stats = [
  { num: '900+', label: 'Animals Rescued' },
  { num: '24/7', label: 'Veterinary Care' },
  { num: '100 km', label: 'Rescue Radius' },
  { num: '₹0', label: 'Cost to Animals' },
];

const impactImages = [
  { src: '/images/medical-care.jpeg', alt: 'Rescued Animals', tag: 'Rescue & Rehab' },
  { src: '/images/medical-care2.jpeg', alt: 'Medical Care', tag: 'Medical Care' },
];

export default function Impact() {
  return (
    <section className="impact-block">
      <div className="impact-top">
        <div className="i-left">
          <div className="i-label">Our Impact</div>
          <h2>Thousands of Lives Saved,<br />One by One</h2>
        </div>
        <div className="i-right">
          <p>Every month, we rescue, treat, and rehabilitate scores of animals that have been hit by vehicles, abandoned, or left malnourished. Your donation directly funds the medicine, food, and staff that make this possible.</p>
        </div>
      </div>

      <div className="impact-row">
        {stats.map((stat) => (
          <div key={stat.label} className="impact-card">
            <div className="ic-num">{stat.num}</div>
            <div className="ic-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="impact-img-row">
        {impactImages.map((img) => (
          <div key={img.tag} className="impact-img-card">
            <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} unoptimized />
            <span className="imc-tag">{img.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
