import StarField from "./StarField";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20 bg-cosmic">
      {/* Soft warm aura glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.25), transparent 65%)' }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full animate-glow-pulse"
        style={{ background: 'radial-gradient(circle, hsl(var(--maroon) / 0.18), transparent 65%)', animationDelay: '2s' }} />

      <StarField />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'radial-gradient(circle at center, hsl(var(--peach) / 0.5) 0%, transparent 65%)' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-rise">
        <p className="text-xs md:text-sm tracking-[0.5em] text-primary font-bold font-display uppercase mb-6">
          Certified Vastu Advisor · Astrologer · Karmic Numerologist
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
          <span className="block text-gold drop-shadow-sm">Manjuu Mehta</span>
          <span className="block text-primary/90 text-2xl md:text-4xl mt-6 font-semibold tracking-[0.25em] italic font-body">
            Aligning Lives with the Cosmos
          </span>
        </h1>
        <p className="mt-8 text-lg md:text-xl font-body italic text-foreground/80 font-medium max-w-2xl mx-auto leading-relaxed">
          Over a decade of transforming lives through the ancient sciences of Vastu, Vedic Astrology
          and Karmic Numerology — guiding individuals, families and businesses to clarity, prosperity
          and aligned growth.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <Link to="/contact" className="group relative px-10 py-4 rounded-full overflow-hidden flex items-center justify-center bg-gradient-gold text-primary-foreground shadow-glow transition-transform hover:scale-105">
            <span className="relative z-10 font-bold tracking-widest text-sm uppercase">
              Book a Consultation
            </span>
          </Link>
          <Link to="/about" className="px-10 py-4 border border-primary/40 bg-card/60 backdrop-blur text-primary font-bold tracking-widest text-sm uppercase rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
            Discover My Journey
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs font-display tracking-[0.3em] uppercase text-primary/80 font-bold">
          <span>10+ Years</span><span className="text-gold">✦</span>
          <span>AIFAS Elite Member</span><span className="text-gold">✦</span>
          <span>Global Clientele</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
