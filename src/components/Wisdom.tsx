import yantra from "@/assets/yantra.png";

const Wisdom = () => (
  <section id="wisdom" className="relative py-32 px-6 overflow-hidden">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative flex justify-center">
        <div className="absolute inset-0 animate-glow-pulse" style={{ background: 'var(--gradient-aura)' }} />
        <img
          src={yantra}
          alt="Sri Yantra sacred geometry"
          width={1024}
          height={1024}
          loading="lazy"
          className="relative w-full max-w-md animate-spin-slow"
        />
        <img
          src={yantra}
          alt=""
          aria-hidden
          width={1024}
          height={1024}
          loading="lazy"
          className="absolute inset-0 m-auto w-2/3 max-w-xs animate-spin-reverse opacity-70 mix-blend-screen"
        />
      </div>
      <div className="animate-rise">
        <p className="font-sanskrit text-primary/80 text-xl mb-4">वेद वाणी</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold mb-8 leading-tight">
          The Stars Whisper, <br />the Wise Listen.
        </h2>
        <blockquote className="border-l-2 border-primary/60 pl-6 italic text-xl text-foreground/85 leading-relaxed mb-6">
          "यथा पिण्डे तथा ब्रह्माण्डे" <br />
          <span className="text-base not-italic text-muted-foreground">
            As is the microcosm, so is the macrocosm. The same cosmic rhythm pulses within you and within the heavens.
          </span>
        </blockquote>
        <p className="text-foreground/75 text-lg leading-relaxed mb-8">
          For five thousand years, the Rishis have read the language of light. Through Vedic Jyotisha,
          the ancient seers mapped karma, dharma and destiny across the wheel of stars — a living
          science of self, time, and the divine.
        </p>
        <button className="px-10 py-4 bg-gradient-gold text-primary-foreground font-display tracking-widest text-sm uppercase rounded-full shadow-glow transition-transform hover:scale-105">
          Begin Your Reading
        </button>
      </div>
    </div>
  </section>
);

export default Wisdom;
