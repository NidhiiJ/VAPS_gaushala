'use client';

import { useState } from 'react';
import './Testimonials.scss';

const testimonials = [
  {
    initials: 'RS',
    name: 'Rajesh Shah',
    role: 'Regular Donor, Mumbai',
    quote:
      'The work being done at Suri Prem Jiv Raksha Kendra is truly inspiring. Every animal is treated with dignity and love. It gives me immense peace to know my contributions are making a real difference in these innocent lives.',
  },
  {
    initials: 'PJ',
    name: 'Priya Jain',
    role: 'Visitor & Donor, Ahmedabad',
    quote:
      'I visited the Panjrapole with my family and was deeply moved by the level of care and dedication. The volunteers treat every cow like their own. This is what true seva looks like. We will continue to support this noble cause.',
  },
  {
    initials: 'DM',
    name: 'Deepak Mehta',
    role: 'Founding Member, VAPS Mandal',
    quote:
      'As a member of VAPS Mandal since the early days, watching this dream grow from 7 members to 218 and sheltering over 900 animals fills my heart with gratitude. This is what faith and collective service can achieve.',
  },
  {
    initials: 'SK',
    name: 'Suresh Kumar',
    role: 'Monthly Donor, Sirohi',
    quote:
      'The ambulance service is a lifesaver — literally. When a cow was hit on the highway near our village, the team arrived within the hour. That kind of dedication is rare. I donate monthly and encourage everyone to do the same.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const move = (dir: number) => {
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="section-header">
        <div className="section-overline">Testimonials</div>
        <h2>What People Say About Us</h2>
        <p>Hear from our donors, visitors, and supporters who have witnessed our mission firsthand.</p>
        <div className="section-divider" />
      </div>

      <div className="tst-slider">
        <div className="tst-track-wrapper">
          <div
            className="tst-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="tst-slide">
                <div className="tst-card">
                  <p className="tst-quote">{t.quote}</p>
                  <div className="tst-author">
                    <div className="tst-avatar">{t.initials}</div>
                    <div className="tst-author-info">
                      <div className="tst-author-name">{t.name}</div>
                      <div className="tst-author-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tst-nav">
          <button className="tst-nav-btn" onClick={() => move(-1)} aria-label="Previous">&#8592;</button>
          <button className="tst-nav-btn" onClick={() => move(1)}  aria-label="Next">&#8594;</button>
        </div>
      </div>
    </section>
  );
}
