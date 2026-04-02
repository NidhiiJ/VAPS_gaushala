import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero/PageHero';
import Publications from '@/components/Publications/Publications';
import FinalCTA from '@/components/FinalCTA/FinalCTA';

export const metadata = {
  title: 'Publications — Suri Prem Jeevraksha Kendra Sansthan',
  description:
    'Our work in Gau Seva has been recognised and featured in leading newspapers, magazines, and media outlets. Here are some highlights from our press coverage over the years.',
};

export default function PublicationsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Media & Recognition"
        heading="In the Publications"
        subtext="Our work in Gau Seva has been recognised and featured in leading newspapers, magazines, and media outlets. Here are some highlights from our press coverage over the years."
      />
      <Publications />
      <FinalCTA
        heading="Want to Feature Our Mission?"
        subtext="If you are a journalist, blogger, or media professional interested in covering our Gaushala's work, we would love to connect with you."
        buttons={[
          { label: 'Contact Us', href: '/contact', variant: 'primary' },
          { label: 'Donate Now', href: '/donate', variant: 'secondary' },
        ]}
      />
      <Footer />
    </>
  );
}
