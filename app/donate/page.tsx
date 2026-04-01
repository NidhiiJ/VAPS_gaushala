import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PaymentMethods from '@/components/PaymentMethods/PaymentMethods';
import DonationPlans from '@/components/DonationPlans/DonationPlans';
import PageHero from '@/components/PageHero/PageHero';

export const metadata = {
  title: 'Donate — Suri Prem Jiv Raksha Kendra Sansthan',
  description:
    'Support the care and welfare of rescued cows. Every contribution provides food, shelter, and medical aid.',
};

export default function DonateRoute() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Every Contribution Counts"
        heading="Make a Donation"
        subtext="Your generous support helps us provide food, shelter, and medical care to thousands of rescued animals. Every rupee brings hope to a life in need."
      />
      <DonationPlans/>
      <PaymentMethods/>
      <Footer />
    </>
  );
}
