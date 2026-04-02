import './DonationPlans.scss';
import { Reveal } from '@/components/Reveal';

const CowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 9V6a2 2 0 0 1 2-2h2l1.5-2h5L14 4h2a2 2 0 0 1 2 2v3" />
    <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1" />
    <path d="M22 9a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
    <circle cx="8" cy="10" r="1.5" />
    <circle cx="16" cy="10" r="1.5" />
    <path d="M9 16c0 1 .8 2 3 2s3-1 3-2" />
    <path d="M3 14v3a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-3" />
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const BirthdayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
    <path d="M2 21h20" />
    <path d="M7 8v3" /><path d="M12 8v3" /><path d="M17 8v3" />
    <path d="M7 4h0.01" /><path d="M12 4h0.01" /><path d="M17 4h0.01" />
  </svg>
);

const AnniversaryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="13" r="5" />
    <circle cx="15" cy="13" r="5" />
    <path d="M12 8c1.4.7 2.4 2 2.8 3.5" />
    <path d="M12 8c-1.4.7-2.4 2-2.8 3.5" />
  </svg>
);

const PunyatithiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2h1l1-1" />
    <path d="M17 11v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a2 2 0 0 0-2-2h-1l-1-1" />
    <path d="M12 2C9.8 2 8 3.8 8 6v1l4 4 4-4V6c0-2.2-1.8-4-4-4Z" />
  </svg>
);

const MemorialIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c.5 2-2 4-2 6a2 2 0 1 0 4 0c0-2-2.5-4-2-6Z" />
    <path d="M10 10v8a2 2 0 0 0 4 0v-8" />
    <rect x="8" y="18" width="8" height="4" rx="1" />
  </svg>
);

const FestivalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.8 11.3 2 22l10.7-3.79" />
    <path d="M4 3h.01" /><path d="M22 8h.01" /><path d="M15 2h.01" /><path d="M22 20h.01" />
    <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
    <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
    <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.91 9 5.52 9 6.23V7" />
  </svg>
);

const occasions = [
  { icon: <BirthdayIcon />, label: 'Birthdays' },
  { icon: <AnniversaryIcon />, label: 'Anniversaries' },
  { icon: <PunyatithiIcon />, label: 'Punyatithi' },
  { icon: <MemorialIcon />, label: 'Memorial Days' },
  { icon: <FestivalIcon />, label: 'Festivals' },
];

const occasionAmounts = ['₹1,100', '₹2,100', '₹3,100', '₹4,100'];

export default function DonationPlans() {
  return (
    <Reveal variant="fade-up">
    <section className="donation-plans" id="donate">
      <div className="dp-inner">

        {/* <div className="dp-header">
          <h2>How You Can Save Lives</h2>
          <p>
            Your contribution is not just a donation — it is{' '}
            <strong>food for the hungry, medicine for the injured, and shelter for the helpless.</strong>
          </p>
        </div> */}

        {/* Sponsor a Cow */}
        <div className="dp-sponsor">
          <div className="dp-section-label">Sponsor a Cow</div>
          <div className="dp-sponsor-cards">

            <div className="dp-sp-card">
              <div className="dp-sp-icon dp-sp-icon--cow"><CowIcon /></div>
              <div className="dp-sp-amount">₹15,000</div>
              <div className="dp-sp-period">Per Year</div>
              <p className="dp-sp-desc">
                Provide complete care of <strong>one cow for one full year</strong> — daily
                nutrition, clean shelter, regular medical checkups, and round-the-clock attention
                from our dedicated caretakers.
              </p>
              <a href="/contact" className="dp-sp-btn">Contact Us</a>
            </div>

            <div className="dp-sp-card">
              <div className="dp-sp-icon dp-sp-icon--heart"><HeartIcon /></div>
              <div className="dp-sp-amount">₹2,07,000</div>
              <div className="dp-sp-period">Lifetime Care</div>
              <p className="dp-sp-desc">
                Make a <strong>permanent commitment to a life</strong> — your donation covers the
                entire lifetime care of one cow including food, shelter, medical treatment, and
                end-of-life care.
              </p>
              <a href="/contact" className="dp-sp-btn">Contact Us</a>
            </div>

          </div>
        </div>

        {/* Donate on Occasions */}
        <div className="dp-occasions">
          <div className="dp-occ-top">
            <div className="dp-section-label">Donate on Occasions</div>
            <h3>Transform Your Special Moments Into Acts of Compassion</h3>
            <p>Celebrate birthdays, anniversaries, memorials and festivals by giving the gift of life to a voiceless being.</p>
          </div>

          <div className="dp-occ-tags">
            {occasions.map((occ) => (
              <span key={occ.label} className="dp-occ-tag">
                {occ.icon} {occ.label}
              </span>
            ))}
          </div>
          <a href="/contact" className="dp-sp-btn">Contact Us</a>

          {/* <div className="dp-occ-amounts">
            {occasionAmounts.map((amt) => (
              <div key={amt} className="dp-occ-amt">
                <div className="dp-oa-val">{amt}</div>
              </div>
            ))}
            <div className="dp-occ-amt">
              <div className="dp-oa-val">₹Any</div>
              <div className="dp-oa-sub">as per devotion</div>
            </div>
            
          </div> */}
        </div>

        <div className="dp-quote">
          <p>
            <em>"Every rupee you give becomes hope for a voiceless being. No amount is too small, no gesture too humble."</em>
          </p>
        </div>

      </div>
    </section>
    </Reveal> 
  );
}
