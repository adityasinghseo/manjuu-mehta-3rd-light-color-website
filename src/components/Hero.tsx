import StarField from "./StarField";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-40"
        >
          <source src="https://cdn.pixabay.com/video/2024/02/20/201293-915375233_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>
      <StarField />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-glow-pulse"
        style={{ background: 'var(--gradient-aura)' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl animate-rise">
        <p className="text-xs md:text-sm tracking-[0.5em] text-primary/70 font-display uppercase mb-6">
          Certified Vastu Advisor · Astrologer · Karmic Numerologist
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
          <span className="block shimmer-text">Manjuu Mehta</span>
          <span className="block text-foreground/85 text-2xl md:text-4xl mt-6 font-light tracking-[0.25em] italic font-body">
            Aligning Lives with the Cosmos
          </span>
        </h1>
        <p className="mt-8 text-lg md:text-xl font-body italic text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Over a decade of transforming lives through the ancient sciences of Vastu, Vedic Astrology
          and Karmic Numerology — guiding individuals, families and businesses to clarity, prosperity
          and aligned growth.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <Link to="/contact" className="group relative px-10 py-4 bg-gradient-gold text-primary-foreground font-display tracking-widest text-sm uppercase rounded-full shadow-glow transition-transform hover:scale-105">
            Book a Consultation
          </Link>
          <Link to="/about" className="px-10 py-4 gold-border text-primary font-display tracking-widest text-sm uppercase rounded-full hover:bg-primary/10 transition-colors">
            Discover My Journey
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs font-display tracking-[0.3em] uppercase text-primary/70">
          <span>10+ Years</span><span className="text-primary/30">✦</span>
          <span>AIFAS Elite Member</span><span className="text-primary/30">✦</span>
          <span>Global Clientele</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
