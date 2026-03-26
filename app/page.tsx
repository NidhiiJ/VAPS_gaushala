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
        <Impact />
        <OurStory />
        <EmergencyResponse />
        <Gallery />
        <Testimonials />
        <VisitorsBook />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
