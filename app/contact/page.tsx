import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import ContactHeader from '@/components/ContactHeader/ContactHeader';
import ContactForm from '@/components/ContactForm/ContactForm';
import ContactMap from '@/components/ContactMap/ContactMap';
import FinalCTA from '@/components/FinalCTA/FinalCTA';

export const metadata = {
  title: 'Contact Us — Suri Prem Jeevraksha Kendra Sansthan',
  description:
    'Get in touch with us to volunteer, donate, or learn more about our mission to protect and care for animals.',
};

export default function ContactRoute() {
  return (
    <>
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <ContactMap />
      <FinalCTA
      heading="Every Act of Compassion Counts"
      subtext="Join hands with us to provide shelter, food, and medical care to animals who need it most."
      buttons={[
        { label: 'Donate Now', href: '/donate' },
        { label: 'Become a Volunteer', href: '/volunteer', variant: 'secondary' },
      ]}
    />
      <Footer />
    </>
  );
}
