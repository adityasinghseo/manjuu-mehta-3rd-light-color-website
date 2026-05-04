import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Awards from "@/components/Awards";
import Wisdom from "@/components/Wisdom";
import Consult from "@/components/Consult";
import Footer from "@/components/Footer";

const Index = () => (
  <main className="relative min-h-screen">
    <SiteNav />
    <Hero />
    <About />
    <Services />
    <Awards />
    <Wisdom />
    <Consult />
    <Footer />
  </main>
);

export default Index;
