import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PowerfulSolutions from "@/components/PowerfulSolutions";
import FeatureCards from "@/components/FeatureCards";
import AnalyticsSection from "@/components/AnalyticsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import PromoPopup from "@/components/PromoPopup";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Navbar />
      <main>
        <HeroSection />
        <PowerfulSolutions />
        <FeatureCards />
        <TestimonialsCarousel />
        <AnalyticsSection />
        <PricingSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <PromoPopup />
    </ScrollRevealProvider>
  );
}
