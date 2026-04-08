import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero/PageHero';
import Testimonials from '@/components/Testimonials/Testimonials';
import VisitorsBook from '@/components/VisitorsBook/VisitorsBook';
import FavouriteCompliments from '@/components/FavouriteCompliments/FavouriteCompliments';
import FinalCTA from '@/components/FinalCTA/FinalCTA';

export const metadata = {
  title: 'Testimonials — Suri Prem Jeevraksha Kendra Sansthan',
  description:
    'Read heartfelt words from donors, visitors, and supporters who have witnessed our mission of compassionate animal care firsthand.',
};

export default function TestimonialsRoute() {
  return (
    <>
      <Navbar />
      {/* <PageHero
        eyebrow="Stories of Seva"
        heading="Voices That Inspire Us"
        subtext="From handwritten notes to heartfelt words — hear from those who have witnessed our mission of compassionate care firsthand."
      /> */}
      {/* <Testimonials /> */}
      <VisitorsBook />
      {/* <FavouriteCompliments /> */}
      <FinalCTA
        heading="Come Be a Part of Our Seva"
        subtext="Our doors are open to all who wish to witness the care and compassion we offer every day. "
        buttons={[{ label: 'Visit Us', href: '/contact', variant: 'primary' }]}
      />
      <Footer />
    </>
  );
}
