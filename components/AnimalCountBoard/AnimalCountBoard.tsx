import { Reveal } from '@/components/Reveal';
import AnimalCountWidget from '@/components/AnimalCountWidget/AnimalCountWidget';
import './AnimalCountBoard.scss';

export default function AnimalCountBoard() {
  return (
    <section className="acb">
      <div className="acb__inner">
        {/* Left: context text + image */}
        <Reveal variant="slide-right" className="acb__left">
          <div className="acb__text">
            <p className="acb__overline">Trust &amp; Transparency</p>
            <h2 className="acb__heading">Daily Animal Count Board</h2>
            <p className="acb__body">
              Every single day, a dedicated caretaker manually updates a physical chalkboard
              at the Gaushala entrance displaying the exact count of all animals currently in
              our care. This simple, honest practice is a cornerstone of our commitment to
              transparency.
            </p>
            <p className="acb__body acb__body--desktop-only">
              Visitors, donors, and community members can verify the numbers with their own
              eyes — because trust is built not through words, but through visible, consistent
              action.
            </p>
          </div>

          <div className="acb__img-wrap">
            <img
              src="/images/activity/count.jpg"
              alt="Daily Animal Count Board at Suri Prem Jeevraksha Kendra"
              className="acb__img"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Right: sticky count board widget */}
        <Reveal variant="slide-left" delay={0.15} className="acb__right">
          <AnimalCountWidget />
        </Reveal>
      </div>
    </section>
  );
}
