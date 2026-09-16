import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SmartCoachShowcase from "@/components/SmartCoachShowcase";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import SystemArchitecture from "@/components/SystemArchitecture";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <SmartCoachShowcase />
        <FeaturedProjects />
        <Experience />
        <SystemArchitecture />
        <Services />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
