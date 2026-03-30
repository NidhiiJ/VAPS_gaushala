import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PaymentMethods from '@/components/PaymentMethods/PaymentMethods';
import DonationPlans from '@/components/DonationPlans/DonationPlans';
import DonationHeader from '@/components/DonationHeader/DonationHeader';

export const metadata = {
  title: 'Donate — Suri Prem Jiv Raksha Kendra Sansthan',
  description:
    'Support the care and welfare of rescued cows. Every contribution provides food, shelter, and medical aid.',
};

export default function DonateRoute() {
  return (
    <>
      <Navbar />
      <DonationHeader />
      <DonationPlans/>
      <PaymentMethods/>
      <Footer />
    </>
  );
}
