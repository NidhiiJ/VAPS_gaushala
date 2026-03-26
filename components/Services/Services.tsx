import Image from 'next/image';
import './Services.scss';

const services = [
  {
    icon: '🏠',
    iconClass: 'icon-red',
    title: 'Safe Shelter',
    description: 'We provide a permanent, clean, and safe home for abandoned, injured, and elderly cows who have nowhere to go.',
    imgSrc: '/images/shelter.jpeg',
    imgAlt: 'Safe Shelter',
  },
  {
    icon: '🩺',
    iconClass: 'icon-green',
    title: 'Medical Care',
    description: 'Our in-house veterinary team provides round-the-clock treatment, surgery, and rehabilitation for all animals.',
    imgSrc: '/images/medical-care2.jpeg',
    imgAlt: 'Medical Care',
  },
  {
    icon: '🌾',
    iconClass: 'icon-amber',
    title: 'Daily Nourishment',
    description: 'Every animal receives freshly prepared nutritious feed and clean water — because no creature should go hungry.',
    imgSrc: '/images/nourishment.jpeg',
    imgAlt: 'Daily Nourishment',
  },
  {
    icon: '🙏',
    iconClass: 'icon-gold',
    title: 'Gau-Seva & Yagna',
    description: 'Regular religious ceremonies, gau-poojan rituals, and community service events rooted in our ancient values.',
    imgSrc: '/images/gau-seva.jpg',
    imgAlt: 'Gau-Seva & Yagna',
  },
];

export default function Services() {
  const rows = [services.slice(0, 2), services.slice(2, 4)];

  return (
    <section className="services">
      <div className="section-header">
        <div className="section-overline">What We Do</div>
        <h2>Comprehensive Care for Every Animal</h2>
        <p>
          From the moment an animal arrives, we commit to their complete wellbeing &mdash; body,
          spirit, and soul.
        </p>
        <div className="section-divider" />
      </div>

      <div className="srv-rows">
        {rows.map((row, ri) => (
          <div key={ri} className="srv-row">
            {row.map((srv) => (
              <div key={srv.title} className="srv-card">
                <div className="srv-card-img">
                  <Image src={srv.imgSrc} alt={srv.imgAlt} width={240} height={180} unoptimized />
                </div>
                <div className="srv-card-body">
                  <div className={`srv-icon ${srv.iconClass}`}>{srv.icon}</div>
                  <h3>{srv.title}</h3>
                  <p>{srv.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
