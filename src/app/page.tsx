import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreAMarca from "@/components/SobreAMarca";
import LinksUteis from "@/components/LinksUteis";
import NossasLojas from "@/components/NossasLojas";
import GaleriaProdutos from "@/components/GaleriaProdutos";
import ProvaSocial from "@/components/ProvaSocial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <HeroSection />
        <SobreAMarca />
        <LinksUteis />
        <NossasLojas />
        <GaleriaProdutos />
        <ProvaSocial />
      </main>
      <Footer />
    </div>
  );
}
