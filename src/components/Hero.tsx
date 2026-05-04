import mandala from "@/assets/cosmic-mandala.jpg";
import yantra from "@/assets/yantra.png";
import StarField from "./StarField";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={mandala}
          alt="Cosmic mandala of Vedic zodiac"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      </div>
      <StarField />

      {/* Aura glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-glow-pulse"
        style={{ background: 'var(--gradient-aura)' }} />

      {/* Rotating yantra */}
      <img
        src={yantra}
        alt=""
        aria-hidden
        width={1024}
        height={1024}
        loading="lazy"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-30 animate-spin-slow mix-blend-screen"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl animate-rise">
        <p className="font-sanskrit text-2xl md:text-3xl text-primary/80 mb-4 tracking-widest animate-fade-in">
          ॐ ज्योतिषं वेद चक्षुः
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="block shimmer-text">Jyotisha</span>
          <span className="block text-foreground/90 text-3xl md:text-5xl mt-4 font-light tracking-[0.3em]">
            THE EYE OF THE VEDAS
          </span>
        </h1>
        <p className="mt-8 text-xl md:text-2xl font-body italic text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Discover the ancient wisdom of the stars — your Rashi, your Nakshatra,
          and the cosmic dance of the Navagraha that shape your destiny.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <button className="group relative px-10 py-4 bg-gradient-gold text-primary-foreground font-display tracking-widest text-sm uppercase rounded-full shadow-glow transition-transform hover:scale-105">
            Reveal My Kundli
          </button>
          <button className="px-10 py-4 gold-border text-primary font-display tracking-widest text-sm uppercase rounded-full hover:bg-primary/10 transition-colors">
            Daily Horoscope
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 text-xs tracking-[0.4em] font-display animate-twinkle">
        ↓ SCROLL THROUGH THE COSMOS
      </div>
    </section>
  );
};

export default Hero;
