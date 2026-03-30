import './Donate.scss';

const donationOptions = [
  { amount: '₹15,000',    description: 'One cow, one year of care'    },
  { amount: '₹2,07,000',  description: 'Lifetime care of one cow'     },
  { amount: '₹1,100+',    description: 'Donate on sacred occasions'   },
];

export default function Donate() {
  return (
    <section className="donation" id="donate">
      <h2 className="donation-heading">Your Donation Becomes Their Lifeline</h2>
      <p className="donation-subtext">
        Your contribution is not just a donation &mdash; it is food for the hungry,
        medicine for the injured, and shelter for the helpless.
      </p>

      <div className="donation-cards">
        {donationOptions.map((option) => (
          <div key={option.amount} className="donation-card">
            <div className="donation-card-amount">{option.amount}</div>
            <div className="donation-card-desc">{option.description}</div>
          </div>
        ))}
      </div>

      <a href="/donate" className="btn-donate-cta">Donate Now</a>
    </section>
  );
}
