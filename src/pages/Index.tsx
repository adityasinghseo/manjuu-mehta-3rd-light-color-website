import Hero from "@/components/Hero";
import FeaturedRecognitions from "@/components/FeaturedRecognitions";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Wisdom from "@/components/Wisdom";
import Consult from "@/components/Consult";
import HomeGallery from "@/components/HomeGallery";

const Index = () => (
  <main className="relative min-h-screen">
    <Hero />
    <FeaturedRecognitions />
    <About />
    <WhyChooseUs />
    <HowItWorks />
    <Testimonials />
    <Awards />
    <Wisdom />
    <HomeGallery />
    <Consult />
  </main>
);

export default Index;
