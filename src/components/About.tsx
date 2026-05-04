import portrait from "@/assets/manjuu-portrait.jpg";

const About = () => (
  <section id="about" className="relative py-32 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative animate-rise">
        <div className="absolute -inset-6 rounded-3xl animate-glow-pulse" style={{ background: 'var(--gradient-aura)' }} />
        <div className="relative gold-border rounded-3xl overflow-hidden shadow-deep">
          <img
            src={portrait}
            alt="Manjuu Mehta — Vastu Advisor and Astrologer"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl bg-card gold-border shadow-glow">
          <p className="font-sanskrit text-primary text-sm">ज्योतिषाचार्य</p>
          <p className="font-display text-gold text-xs tracking-widest uppercase">AIFAS Elite Member</p>
        </div>
      </div>

      <div className="animate-rise" style={{ animationDelay: '0.15s' }}>
        <p className="font-sanskrit text-primary/80 text-xl mb-3">परिचय</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold mb-6 leading-tight">
          A Decade of Cosmic Guidance
        </h2>
        <div className="h-px w-24 bg-gradient-gold mb-8" />
        <p className="text-foreground/85 text-lg leading-relaxed mb-5">
          <span className="text-gold font-display">Manjuu Mehta</span> is a certified professional
          Vastu Advisor, Astrologer and Karmic Numerologist with over a decade of rich experience in
          transforming lives through the ancient sciences.
        </p>
        <p className="text-foreground/75 text-lg leading-relaxed mb-5">
          An elite member of the <span className="text-primary">All India Federation of Astrologers
          Society (AIFAS)</span>, she has built a strong reputation across both domestic and
          international markets — guiding individuals, families and business owners toward clarity,
          prosperity and aligned growth.
        </p>
        <p className="text-foreground/75 text-lg leading-relaxed italic">
          Her precise, insightful consultations have consistently delivered powerful results,
          earning deep trust and long-term relationships with clients across the globe.
        </p>

        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            { n: "10+", l: "Years" },
            { n: "8", l: "Awards" },
            { n: "∞", l: "Lives Touched" },
          ].map(s => (
            <div key={s.l} className="p-4 rounded-xl gold-border bg-card/30">
              <div className="font-display text-3xl text-gold">{s.n}</div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
