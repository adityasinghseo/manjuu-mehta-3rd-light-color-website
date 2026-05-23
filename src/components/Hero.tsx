import StarField from "./StarField";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="https://cdn.pixabay.com/video/2024/02/20/201293-915375233_large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
      </div>
      <StarField />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full animate-glow-pulse"
        style={{ background: 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />

      <div className="relative z-10 text-center px-6 max-w-4xl animate-rise">
        <p className="text-xs md:text-sm tracking-[0.5em] text-white/80 font-bold font-display uppercase mb-6 drop-shadow-md">
          Certified Vastu Advisor · Astrologer · Karmic Numerologist
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
          <span className="block text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">Manjuu Mehta</span>
          <span className="block text-white/90 text-2xl md:text-4xl mt-6 font-semibold tracking-[0.25em] italic font-body drop-shadow-md">
            Aligning Lives with the Cosmos
          </span>
        </h1>
        <p className="mt-8 text-lg md:text-xl font-body italic text-white/80 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Over a decade of transforming lives through the ancient sciences of Vastu, Vedic Astrology
          and Karmic Numerology — guiding individuals, families and businesses to clarity, prosperity
          and aligned growth.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <Link to="/contact" className="group relative px-10 py-4 border border-white/50 text-white rounded-full transition-transform hover:scale-105 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 group-hover:text-black font-bold tracking-widest text-sm uppercase transition-colors duration-300">
              Book a Consultation
            </span>
          </Link>
          <Link to="/about" className="px-10 py-4 border border-white/30 bg-black/20 backdrop-blur-sm text-white font-bold tracking-widest text-sm uppercase rounded-full hover:bg-white/10 transition-colors">
            Discover My Journey
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs font-display tracking-[0.3em] uppercase text-white/80 font-bold drop-shadow-md">
          <span>10+ Years</span><span className="text-white/40">✦</span>
          <span>AIFAS Elite Member</span><span className="text-white/40">✦</span>
          <span>Global Clientele</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
