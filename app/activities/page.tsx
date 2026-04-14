import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero/PageHero';
import DailyRoutine from '@/components/DailyRoutine/DailyRoutine';
import AnimalCountBoard from '@/components/AnimalCountBoard/AnimalCountBoard';
import GudBucketDonation from '@/components/GudBucketDonation/GudBucketDonation';
import OccasionFood from '@/components/OccasionFood/OccasionFood';
import CleaningSection from '@/components/CleaningSection/CleaningSection';
import FinalCTA from '@/components/FinalCTA/FinalCTA';

export const metadata = {
  title: 'Our Activities — Suri Prem Jeevraksha Kendra Sansthan',
  description:
    'Every hour at our Gaushala is dedicated to the wellbeing of 800+ animals through prayer, feeding, veterinary care, rescue, and more.',
};

export default function ActivitiesRoute() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="From Day to Night — A Day of Compassion"
        heading="Our Activities"
        subtext="Every day at the Panjrapole follows a rhythm of prayer, care, and service — ensuring each of our 800+ animals receives the attention, nutrition, and love they deserve."
      />
      <DailyRoutine />
      <AnimalCountBoard />
      <GudBucketDonation />
      <OccasionFood />
      <CleaningSection />
      <FinalCTA
        heading="Witness Compassion in Action"
        subtext="Visit our Gaushala to see the daily care, meet the animals, and become a part of this sacred mission."
        buttons={[
          { label: 'Donate Now', href: '/donate' },
          { label: 'Plan Your Visit', href: '/contact', variant: 'secondary' },
        ]}
      />
      <Footer />
    </>
  );
}
