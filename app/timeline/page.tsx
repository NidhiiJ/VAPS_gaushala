import Navbar from '@/components/Navbar/Navbar';
import Timeline from '@/components/Timeline/Timeline';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Our Journey | Suri Prem Jiv Raksha Kendra Sansthan',
  description:
    'Trace the milestones of Suri Prem Jiv Raksha Kendra Sansthan — from 7 founding members in 1986 to 218 volunteers and 900+ lives saved today.',
};

export default function TimelinePage() {
  return (
    <>
      <Navbar />
      <Timeline />
      <Footer />
    </>
  );
}
