import Navbar          from '@/components/Navbar/Navbar';
import Footer          from '@/components/Footer/Footer';
import VolunteersHero  from '@/components/VolunteersHero/VolunteersHero';
import VolunteersTable from '@/components/VolunteersTable/VolunteersTable';
import PastMembers     from '@/components/PastMembers/PastMembers';

export const metadata = {
  title: 'Volunteers — Suri Prem Jeevraksha Kendra Sansthan',
  description:
    'For over three decades, dedicated volunteers from across India have selflessly served Gau Mata. Meet our 217+ active volunteers.',
};

export default function VolunteersPage() {
  return (
    <>
      <Navbar />
      <main>
        <VolunteersHero />
        <VolunteersTable />
        <PastMembers />
      </main>
      <Footer />
    </>
  );
}
