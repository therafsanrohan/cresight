import HeroSection from "@/sections/home/HeroSection";
import TrustSection from "@/sections/home/TrustSection";
import PhilosophySection from "@/sections/home/PhilosophySection";
import StrategicGrowthSection from "@/sections/home/StrategicGrowthSection";
import ServicesSection from "@/sections/home/ServicesSection";
import ContactCTASection from "@/sections/home/ContactCTASection";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <HeroSection />
      <PhilosophySection />
      <TrustSection />
      <StrategicGrowthSection />
      <ServicesSection />
      <ContactCTASection />
    </div>
  );
}
