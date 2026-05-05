import { Globe, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years of Practice" },
  { icon: Users, value: "5000+", label: "Lives Transformed" },
  { icon: Globe, value: "20+", label: "Countries Served" },
  { icon: Award, value: "8+", label: "Prestigious Awards" },
];

const features = [
  {
    title: "Ancient Wisdom, Modern Clarity",
    desc: "Every consultation blends 5000-year-old Vedic sciences with practical, real-world guidance you can act on immediately.",
  },
  {
    title: "Personalised & Precise",
    desc: "No generic advice. Every reading is meticulously crafted to your unique birth chart, numerology, or property — no two consultations alike.",
  },
  {
    title: "AIFAS Elite Certified",
    desc: "As an elite member of the All India Federation of Astrologers Society, Manjuu ji upholds the highest standards of ethical and accurate practice.",
  },
  {
    title: "Global Clientele",
    desc: "Trusted by clients across India, USA, UK, Canada, UAE and beyond — serving the diaspora wherever destiny calls.",
  },
];

const WhyChooseUs = () => (
  <section id="why-us" className="relative py-32 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-20">
        <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">
          The Difference
        </p>
        <h2 className="font-display text-4xl md:text-6xl text-gold">Why Choose Manjuu Mehta</h2>
        <div className="mx-auto h-px w-32 bg-gradient-gold mt-4" />
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-3 p-8 rounded-2xl bg-card/40 backdrop-blur gold-border text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
            style={{ animation: `rise 0.7s ease-out ${i * 0.1}s both` }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <div className="font-display text-4xl text-gold">{s.value}</div>
            <div className="text-muted-foreground text-xs tracking-widest uppercase font-display">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Feature grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group flex gap-6 p-8 rounded-2xl bg-card/30 backdrop-blur gold-border hover:shadow-glow transition-all duration-500"
            style={{ animation: `rise 0.8s ease-out ${0.3 + i * 0.1}s both` }}
          >
            {/* Gold bullet */}
            <div className="flex-shrink-0 w-2 h-2 mt-3 rounded-full bg-primary shadow-glow group-hover:scale-150 transition-transform" />
            <div>
              <h3 className="font-display text-xl text-gold mb-3">{f.title}</h3>
              <p className="text-foreground/75 leading-relaxed text-lg">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
