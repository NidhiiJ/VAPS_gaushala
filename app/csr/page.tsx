import Navbar            from '@/components/Navbar/Navbar';
import Footer            from '@/components/Footer/Footer';
import PageHero          from '@/components/PageHero/PageHero';
import CSRAbout          from '@/components/CSRAbout/CSRAbout';
import CSRMOU            from '@/components/CSRMOU/CSRMOU';
import CSRHospital       from '@/components/CSRHospital/CSRHospital';
import CSRVision         from '@/components/CSRVision/CSRVision';
import CSROpportunities  from '@/components/CSROpportunities/CSROpportunities';
import CSRCompliance     from '@/components/CSRCompliance/CSRCompliance';
import FinalCTA          from '@/components/FinalCTA/FinalCTA';

export const metadata = {
  title: 'CSR Initiative — Suri Prem Jeevraksha Kendra Sansthan',
  description:
    'Partner with us under CSR. A Section 135 compliant gaushala building a veterinary hospital and supporting animal welfare through transparent, impactful initiatives.',
};

export default function CSRPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Serving Gau Mata with Care, Compassion & Commitment"
        heading="CSR Partnership & Veterinary Hospital Initiative"
        subtext="A CSR-compliant gaushala dedicated to animal welfare — partnering with responsible corporates to build a future of dignity and healing for every animal."
      />
      <CSRAbout />
      <CSRMOU />
      <CSRHospital />
      <CSRVision />
      <CSROpportunities />
      <CSRCompliance />
      <FinalCTA
        heading="Together, We Can Make a Lasting Impact"
        subtext="Whether you're a corporate looking for a CSR partner, a donor, or a visitor — every contribution brings us closer to a world where every animal is cared for."
        buttons={[
          { label: 'Donate Now',          href: '/donate' },
          // { label: 'Partner Under CSR',   href: '/contact', variant: 'secondary' },
        ]}
      />
      <Footer />
    </>
  );
}
