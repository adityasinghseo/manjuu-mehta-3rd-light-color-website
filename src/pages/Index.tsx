import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Rashis from "@/components/Rashis";
import Navagraha from "@/components/Navagraha";
import Services from "@/components/Services";
import Wisdom from "@/components/Wisdom";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="relative min-h-screen">
    <SiteNav />
    <Hero />
    <Rashis />
    <Navagraha />
    <Services />
    <Wisdom />
    <Footer />
  </main>
);

export default Index;
