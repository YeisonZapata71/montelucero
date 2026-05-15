import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import ProductCardList from '@/components/ProductCard';
import TastingProfile from '@/components/TastingProfile';
import HowToBuy from '@/components/HowToBuy';
import OriginStory from '@/components/OriginStory';
import GalleryMosaic from '@/components/GalleryMosaic';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans selection:bg-gold-500 selection:text-background">
      <AnnouncementBar />
      <Hero />
      <ProductCardList />
      <TastingProfile />
      <HowToBuy />
      <OriginStory />
      <GalleryMosaic />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
