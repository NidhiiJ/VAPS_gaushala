import './DonationPlans.scss';
import { Reveal } from '@/components/Reveal';

const CowIcon = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" width="1em" height="1em" xmlSpace="preserve">
    <path fill="#7f1d1d" d="M508.814,298.717c0,0-3.011-45.186-3.011-66.266c0-18.84-7.226-38.239-18.435-44.31c-14.85-32.44-67.54-30.799-89.424-30.799c-25.605,0-82.032-1.538-106.88-1.538s-79.107-7.13-107.716-15.407c-28.616-8.286-47.066-23.717-50.826-19.207c-3.761,4.524-11.297,9.798-21.836,8.285c21.836-8.285,20.33-31.619,17.32-34.63c-3.012-3.012-15.065-3.768-26.354,9.783c6.772-12.802-6.031-30.113-12.802-33.881c-6.78-3.768-13.552-2.263-8.286,1.505c5.274,3.769,8.286,20.331,0.757,27.111c0,0-23.342,14.3-27.858,17.319c-4.517,3.012-33.134,39.904-38.407,42.916C9.79,162.608,0,167.874,0,170.894c0,3.012,11.296,25.971,17.319,25.971c6.023,0,53.081,5.648,82.446,7.911c0,0,18.833,30.52,28.242,57.598c5.09,14.667,10.539,45.457,17.319,57.582c14.3,25.596,33.133,47.432,33.133,60.984c0,13.559,0,43.672,0,43.672l-8.285,14.308c0,0,6.023,3.768,17.319,3.768c11.297,0,12.795-8.285,12.795-12.053c0-3.761,0-56.467,0-56.467s-3.011-14.308-3.011-23.35c0-9.034,12.053-57.224,12.802-63.995c0,0,1.506,16.562,1.506,21.08c0,0,35.1,12.165,53.089,13.957c30.114,3.011,51.201,9.042,94.874,4.517c35.323-3.649,63.294-24.497,63.294-24.497s-3.02-14.308,0.749-21.836c6.022,42.167,40.661,71.532,40.661,73.786c0,2.263-5.313,70.058-5.313,70.058l-6.78,15.814c0,0,2.302,3.736,13.599,3.736s15.057-6.779,15.057-15.057c0-8.285,15.057-79.068,15.814-84.334c0.757-5.274-4.517-42.924-6.023-46.684c-1.179-2.956-0.048-51.895,0.502-76.407c6.509,21.884,7.282,57.756,5.665,68.719c-3.386,22.959,6.022,45.178,6.022,45.178s3.012,7.528,7.529-9.034C514.837,309.257,508.814,298.717,508.814,298.717z"/>
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
