import { Reveal } from '@/components/Reveal';
import './GudBucketDonation.scss';

const highlights = [
  {
    icon: '🪣',
    heading: 'Ready to Donate',
    body: 'Pre-prepared 10 kg buckets available for easy donation during visits',
  },
  {
    icon: '🐄',
    heading: 'Direct Impact',
    body: 'Each bucket feeds multiple animals and supports their daily nutritional needs',
  },
];

export default function GudBucketDonation() {
  return (
    <section className="gud">
      <div className="gud__inner">
        {/* Left: image + badge */}
        <Reveal variant="slide-right" className="gud__media">
          <div className="gud__img-wrap">
            <img
              src="/images/activity/gud-daan.JPG"
              alt="Gud Bucket Donation at the Gaushala"
              className="gud__img"
              loading="lazy"
            />
          </div>
          <div className="gud__badge">
            <span className="gud__badge-num">10 kg</span>
            <span className="gud__badge-text">Per Bucket</span>
          </div>
        </Reveal>

        {/* Right: text content */}
        <Reveal variant="slide-left" delay={0.15} className="gud__content">
          <p className="gud__overline">Community Participation</p>
          <h2 className="gud__heading">Gud Bucket Donations</h2>
          <p className="gud__body">
            Gud (jaggery) is a vital part of our animals&apos; nutrition — rich in iron and energy,
            it keeps them healthy and strong, especially during harsh winters and recovery periods.
          </p>
          <p className="gud__body">
            Visitors and well-wishers can contribute by donating prepared{' '}
            <strong className="gud__strong">10 kg Gud Buckets</strong> during their visit to the
            Gaushala. Each bucket is a tangible act of compassion that directly nourishes the
            animals in our care.
          </p>

          {/* Highlights */}
          <div className="gud__highlights">
            {highlights.map((h) => (
              <div key={h.heading} className="gud__hl">
                <span className="gud__hl-icon" aria-hidden="true">{h.icon}</span>
                <h4 className="gud__hl-heading">{h.heading}</h4>
                <p className="gud__hl-body">{h.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
