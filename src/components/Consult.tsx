const Consult = () => (
  <section id="consult" className="relative py-32 px-6">
    <div className="max-w-4xl mx-auto text-center relative">
      <div className="absolute inset-0 -z-10 animate-glow-pulse" style={{ background: 'var(--gradient-aura)' }} />
      <p className="font-sanskrit text-primary/80 text-xl mb-3">परामर्श</p>
      <h2 className="font-display text-4xl md:text-6xl text-gold mb-6 leading-tight">
        Begin Your Journey
      </h2>
      <div className="mx-auto h-px w-32 bg-gradient-gold mb-8" />
      <p className="text-foreground/80 text-xl italic max-w-2xl mx-auto leading-relaxed">
        Step into clarity with a personal consultation. Whether seeking direction in life,
        love, career or home — the answers are written in your cosmic blueprint.
      </p>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
        <a href="mailto:contact@manjuumehta.com" className="px-10 py-4 bg-gradient-gold text-primary-foreground font-display tracking-widest text-sm uppercase rounded-full shadow-glow transition-transform hover:scale-105">
          Book a Consultation
        </a>
        <a href="tel:+91" className="px-10 py-4 gold-border text-primary font-display tracking-widest text-sm uppercase rounded-full hover:bg-primary/10 transition-colors">
          Call Manjuu
        </a>
      </div>
      <p className="mt-10 font-sanskrit text-primary/70 text-lg">शुभं भवतु</p>
    </div>
  </section>
);
export default Consult;
