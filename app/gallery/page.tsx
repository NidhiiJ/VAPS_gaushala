import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import PageHero from '@/components/PageHero/PageHero';
import PhotoGallery from '@/components/PhotoGallery/PhotoGallery';
import VideoGallery from '@/components/VideoGallery/VideoGallery';
import BeforeAfter from '@/components/BeforeAfter/BeforeAfter';
import FinalCTA from '@/components/FinalCTA/FinalCTA';

export const metadata = {
  title: 'Gallery — Suri Prem Jeevraksha Kendra Sansthan',
  description:
    'Witness the compassion, care, and transformation that takes place every day at our gaushala through photos and videos.',
};

export default function GalleryRoute() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Visual Stories"
        heading="Gallery & Videos"
        subtext="Witness the compassion, care, and transformation that takes place every day at our gaushala through photos and videos."
      />
      <PhotoGallery />
      <VideoGallery />
      {/* <BeforeAfter /> */}
      {/* <FinalCTA
        heading="Your Photos Can Help Too"
        subtext="Visited our gaushala? Share your photos and experience with the world. Tag us on social media or send us your pictures."
        buttons={[{ label: 'Share Your Photos →', href: '/contact', variant: 'primary' }]}
      /> */}
      <Footer />
    </>
  );
}
