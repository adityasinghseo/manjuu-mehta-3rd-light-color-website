import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Wisdom from "@/components/Wisdom";
import Consult from "@/components/Consult";

const Index = () => (
  <main className="relative min-h-screen">
    <Hero />
    <About />
    <Services limit={3} />
    <HowItWorks />
    <WhyChooseUs />
    <Testimonials />
    <Awards />
    <Wisdom />
    <Consult />
  </main>
);

export default Index;
