import Navbar           from '@/components/Navbar/Navbar';
import Footer           from '@/components/Footer/Footer';
import PageHero         from '@/components/PageHero/PageHero';
import OurJourney       from '@/components/OurJourney/OurJourney';
import OurPurpose       from '@/components/OurPurpose/OurPurpose';
import GrowthService    from '@/components/GrowthService/GrowthService';
import PanjrapolDream   from '@/components/PanjrapolDream/PanjrapolDream';
import Employment       from '@/components/Employment/Employment';
import PresentDay       from '@/components/PresentDay/PresentDay';
import FinalCTA         from '@/components/FinalCTA/FinalCTA';

export const metadata = {
  title: 'About Us — Suri Prem Jeevraksha Kendra Sansthan',
  description:
    'From seven visionary members in 1986 to a vibrant movement sheltering over 900 animals — discover our legacy of service, faith, and compassion.',
};

export default function OverviewPage() {
  return (
    <>
      <Navbar />
        <PageHero
          eyebrow="Since 1986 — Four Decades of Seva"
          heading="About Us"
          subtext="From seven visionary members to a vibrant movement sheltering over 900 animals — guided by the timeless principle of Ahimsa."
        />
        <OurJourney />
        <OurPurpose />
        <GrowthService />
        <PanjrapolDream />
        <Employment />
        <PresentDay />
        <FinalCTA
          heading="Be Part of This Journey"
          subtext="The mission continues — to protect lives, serve humanity, and uphold Ahimsa in action. Your support makes every rescue possible."
          buttons={[
            { label: 'Donate Now',          href: '/donate' },
            { label: 'Visit the Panjrapole', href: '/contact', variant: 'secondary' },
          ]}
        />
      <Footer />
    </>
  );
}
