import Navbar from "@/components/layout/Navbar";
import { HomeHashScroll } from "@/components/layout/HomeHashScroll";
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
import { WhatsAppIcon } from "@/lib/svg";


// ─── Home Page ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <LenisProvider>
      <HomeHashScroll />
      <GlobeLoader />
      <CustomCursor />
      <Navbar />
      <a
        className="fixed bottom-10 right-10 z-50 cursor-pointer  rounded-full p-2   hover:shadow-[0_12px_40px_rgb(0,0,0,0.25)]   hover:-translate-y-1 transition-all duration-300 ease-out  text-red-800"
        href="https://wa.me/919871900780?text=Hello%2C%20I%27d%20like%20to%20know%20more!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
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
