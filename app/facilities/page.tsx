import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero/PageHero';
import Facility1 from '@/components/Facility1/Facility1';
import Facility2 from '@/components/Facility2/Facility2';
import Facility3 from '@/components/Facility3/Facility3';
import Facility4 from '@/components/Facility4/Facility4';
import Facility5 from '@/components/Facility5/Facility5';
import OperationsSupport from '@/components/OperationsSupport/OperationsSupport';
import Facility6 from '@/components/Facility6/Facility6';
import Facility7 from '@/components/Facility7/Facility7';
import FinalCTA from '@/components/FinalCTA/FinalCTA';

export const metadata = {
  title: 'Our Facilities — Suri Prem Jeevraksha Kendra Sansthan',
  description:
    'From spacious shelters to a fully equipped medical centre, every structure here exists to give voiceless beings a life of safety, dignity, and care.',
};

export default function FacilitiesRoute() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Infrastructure Built with Love & Purpose"
        heading="Our Facilities"
        subtext="From spacious shelters to a fully equipped medical centre, every structure here exists for one reason."
      />
      <Facility1 />
      <Facility2 />
      <Facility3 />
      <Facility4 />
      <Facility5 />
      <OperationsSupport />
      <Facility6 />
      <Facility7 />
      {/* <FinalCTA
        heading="Help Us Maintain These Facilities"
        subtext="Every donation helps us keep our shelters clean, our medical wing stocked, and our animals safe. Your support makes it possible."
        buttons={[
          { label: 'Donate Now', href: '/donate' },
          { label: 'Become a Volunteer', href: '/volunteers', variant: 'secondary' },
        ]}
      /> */}
      <Footer />
    </>
  );
}
