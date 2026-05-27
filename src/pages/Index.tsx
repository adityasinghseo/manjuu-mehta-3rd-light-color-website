import Hero from "@/components/Hero";
import About from "@/components/About";
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
    <WhyChooseUs />
    <HowItWorks />
    <Testimonials />
    <Awards />
    <Wisdom />
    <Consult />
  </main>
);

export default Index;
