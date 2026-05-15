import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import ProductCardList from '@/components/ProductCard';
import TastingProfile from '@/components/TastingProfile';
import HowToBuy from '@/components/HowToBuy';
import OriginStory from '@/components/OriginStory';
import GalleryMosaic from '@/components/GalleryMosaic';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans selection:bg-gold-500 selection:text-background relative">
      <Navbar />
      <AnnouncementBar />
      <div id="inicio">
        <Hero />
      </div>
      <div id="productos">
        <ProductCardList />
      </div>
      <div id="perfil">
        <TastingProfile />
      </div>
      <HowToBuy />
      <div id="origen">
        <OriginStory />
      </div>
      <div id="galeria">
        <GalleryMosaic />
      </div>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </main>
  );
}
