import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import ServicesSection from '../components/sections/ServicesSection';
import TeamSection from '../components/sections/TeamSection';
import DriverSection from '../components/sections/DriverSection';
import QuoteFormSection from '../components/sections/QuoteFormSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <TeamSection />
      <DriverSection />
      <QuoteFormSection />
      <ContactSection />
      <Footer />
    </div>
  );
}