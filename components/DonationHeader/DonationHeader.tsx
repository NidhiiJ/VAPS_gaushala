import './DonationHeader.scss';

export default function DonationHeader() {
  return (
    <section className="don-hero">
      <div className="don-hero__pre">🙏 Every Contribution Counts</div>
      <h1 className="don-hero__heading">
        Make a <em>Donation</em>
      </h1>
      <p className="don-hero__desc">
        Your generous support helps us provide food, shelter, and medical care to thousands
        of rescued animals. Every rupee brings hope to a life in need.
      </p>
    </section>
  );
}
