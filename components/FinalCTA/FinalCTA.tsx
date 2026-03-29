import './FinalCTA.scss';

export default function FinalCTA() {
  return (
    <section className="final-cta">
      {/* <div className="final-cta-icon">🙏</div> */}
      <h2>
        Be the Reason an Animal Survives Today
      </h2>
      <p>
        Your donation &mdash; however small &mdash; provides shelter, food, and medicine to animals
        who have no one else.
      </p>
      <div className="final-cta-buttons">
        <a href="#donate" className="btn-cta-primary">Donate Now</a>
        {/* <a href="#"       className="btn-cta-secondary">Volunteer With Us</a> */}
      </div>
      {/* <div className="final-cta-note">
        Registered u/f/80G &middot; Donations eligible for 50% tax exemption
      </div> */}
    </section>
  );
}
