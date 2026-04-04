import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal';
import './PastMembers.scss';

interface PastMember {
  type: string;
  name: string;
}

const PAST_MEMBERS: PastMember[] = [
  { type: 'Diksharthi Member', name: 'Sandesh Champalalji' },
  { type: 'Diksharthi Member', name: 'Jimmy Bhupendra Kumarji' },
  { type: 'Sw',                name: 'Dhawal Ashok Kumarji' },
];

export default function PastMembers() {
  return (
    <section className="past-members">
      <div className="past-members__inner">
        <Reveal variant="fade-up" className="past-members__header">
          <div className="past-members__eyebrow">In Memoriam</div>
          <h2 className="past-members__heading">Past Members &amp; Diksharthi</h2>
          <p className="past-members__sub">
            Honoring those who have served and continue to inspire through their selfless devotion.
          </p>
        </Reveal>

        <StaggerContainer
          className="past-members__grid"
          staggerDelay={0.1}
          initialDelay={0.05}
        >
          {PAST_MEMBERS.map((member) => (
            <StaggerItem key={member.name} className="past-card">
              <div className="past-card__type">{member.type}</div>
              <div className="past-card__name">{member.name}</div>
              <div className="past-card__divider" aria-hidden="true" />
              <div className="past-card__tribute">In loving service</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
