import SiteNavbar from './components/layout/SiteNavbar';
import Footer from './components/layout/Footer';
import Headline from './components/sections/Headline';
import Bahan from './components/sections/Bahan';
import Manfaat from './components/sections/Manfaat';
import CardSwapSection from './components/sections/CardSwapSection';
import HasilPenggunaan from './components/sections/HasilPenggunaan';
import Testimoni from './components/sections/Testimoni';

export const metadata = {
  title: 'HEARTCALM Acne Water Gel',
  description: 'Gel ringan dengan cooling sensation, membantu menenangkan jerawat dan mengontrol minyak',
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7] text-[#161816]">
      <SiteNavbar />

      <main className="flex-1">
        {/* Headline / Hero */}
        <Headline />

        {/* Bahan Section with React Bits FlipCard */}
        <Bahan />

        {/* Manfaat Section */}
        <Manfaat />

        {/* Permasalahan Section with React Bits CardSwap */}
        <CardSwapSection />

        {/* Hasil Penggunaan */}
        <HasilPenggunaan />

        {/* Testimoni with React Bits ReflectiveCard */}
        <Testimoni />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
