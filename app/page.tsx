import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LenisProvider } from "@/components/animations/LenisProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { GlobeLoader } from "@/components/ui/GlobeLoader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ValuesSection from "@/components/sections/ValuesSection";
import WorkSection from "@/components/sections/WorkSection";
import ClientsSection from "@/components/sections/ClientsSection";
import CtaBand from "@/components/sections/CtaBand";
import ContactSection from "@/components/sections/ContactSection";


// ─── Home Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <LenisProvider>
      <GlobeLoader />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ValuesSection />
        <WorkSection />
        <ClientsSection />
        <CtaBand />
        <ContactSection />
      </main>
      <Footer />
    </LenisProvider>
  );
}
