import HeroSection from "@/sections/home/HeroSection";
import TrustSection from "@/sections/home/TrustSection";
import FeaturedWorkSection from "@/sections/home/FeaturedWorkSection";
import PhilosophySection from "@/sections/home/PhilosophySection";
import ServicesSection from "@/sections/home/ServicesSection";
import ProcessSection from "@/sections/home/ProcessSection";
import ContactCTASection from "@/sections/home/ContactCTASection";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <HeroSection />
      <TrustSection />
      <FeaturedWorkSection />
      <PhilosophySection />
      <ServicesSection />
      <ProcessSection />
      <ContactCTASection />
    </div>
  );
}
