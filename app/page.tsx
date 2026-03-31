'use client';

import Navbar       from '@/components/Navbar/Navbar';
import Hero         from '@/components/Hero/Hero';
import Donate       from '@/components/Donate/Donate';
import Quote        from '@/components/Quote/Quote';
import Services     from '@/components/Services/Services';
import Impact       from '@/components/Impact/Impact';
import OurStory    from '@/components/OurStory/OurStory';
import Gallery      from '@/components/Gallery/Gallery';
import Testimonials from '@/components/Testimonials/Testimonials';
import VisitorsBook from '@/components/VisitorsBook/VisitorsBook';
import FinalCTA     from '@/components/FinalCTA/FinalCTA';
import Footer       from '@/components/Footer/Footer';
import EmergencyResponse from '@/components/EmergencyResponse/EmergencyResponse';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Donate />
        <Quote />
        <Services />
        <OurStory />
        <Impact />
        <EmergencyResponse />
        <Gallery />
        <Testimonials />
        <VisitorsBook />
        <FinalCTA
          heading="Be the Reason an Animal Survives Today"
          subtext="Your donation — however small — provides shelter, food, and medicine to animals who have no one else."
          buttons={[{ label: 'Donate Now', href: '/donate' }]}
        />
      </main>
      <Footer />
    </>
  );
}
