import portrait from "@/assets/Gemini_Generated_Image_c38wuqc38wuqc38w.png";
import { Award, BookOpen, Globe, Heart, Sparkles, Star, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

/* ─── Data ─────────────────────────────────────────────── */

const stats = [
  { value: "10+", label: "Years of Practice" },
  { value: "5000+", label: "Clients Guided" },
  { value: "20+", label: "Countries Served" },
  { value: "8+", label: "Prestigious Awards" },
];

const credentials = [
  { icon: Award, title: "AIFAS Elite Member", desc: "Elite membership of the All India Federation of Astrologers Society — the nation's most respected astrological body." },
  { icon: BookOpen, title: "Certified Vastu Shastra Expert", desc: "Professionally trained in classical Vastu Shastra with a deep understanding of directional energies, the Pancha Bhutas, and space harmonisation." },
  { icon: Star, title: "Vedic Astrology Practitioner", desc: "Specialist in birth chart analysis, Mahadasha interpretation, Navamsa readings and planetary remedial prescriptions rooted in Parashari tradition." },
  { icon: Sparkles, title: "Karmic Numerologist", desc: "Certified numerologist with expertise in Cheiro and Pythagorean systems, name correction, and destiny-path analysis." },
  { icon: Globe, title: "International Consultant", desc: "Recognised consultant serving a distinguished clientele across India, USA, UK, Canada, UAE, Australia and Singapore." },
  { icon: Users, title: "Corporate & Business Advisor", desc: "Trusted by entrepreneurs and established businesses for Vastu audits, launch-date selection, and strategic astrological guidance." },
];

const values = [
  { icon: Heart, title: "Compassion First", desc: "Every consultation is delivered with empathy, respect, and a genuine desire to uplift the life of the seeker." },
  { icon: Zap, title: "Precision & Integrity", desc: "Readings are meticulous and honest — no vague predictions, only actionable, evidence-backed cosmic insights." },
  { icon: BookOpen, title: "Rooted in Tradition", desc: "All guidance draws from authentic, unaltered Vedic texts — the same knowledge that shaped civilisations for five millennia." },
  { icon: Sparkles, title: "Results-Oriented", desc: "The ultimate measure of success is transformation in the client's life — visible, meaningful, and lasting change." },
];

/* ─── Component ─────────────────────────────────────────── */

const AboutUsPage = () => (
  <main className="relative min-h-screen pt-24">

    {/* ── 1. Hero Banner ─────────────────────────────── */}
    <section className="relative py-24 px-6 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full animate-glow-pulse opacity-25"
          style={{ background: "var(--gradient-aura)", filter: "blur(80px)" }} />
      </div>
      <div className="relative max-w-3xl mx-auto animate-rise">
        <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-4">The Cosmic Guide</p>
        <h1 className="font-display text-5xl md:text-7xl text-gold mb-6 leading-tight">Manjuu Mehta</h1>
        <div className="mx-auto h-px w-32 bg-gradient-gold mb-8" />
        <p className="text-foreground/75 text-xl italic leading-relaxed">
          Vastu Advisor · Vedic Astrologer · Karmic Numerologist
        </p>
      </div>
    </section>

    {/* ── 2. Portrait + Bio ──────────────────────────── */}
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Portrait */}
        <div className="relative animate-rise">
          <div className="absolute -inset-6 rounded-3xl animate-glow-pulse"
            style={{ background: "var(--gradient-aura)" }} />
          <div className="relative gold-border rounded-3xl overflow-hidden shadow-deep">
            <img src={portrait} alt="Manjuu Mehta" className="w-full h-auto" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl bg-card gold-border shadow-glow">
            <p className="font-display tracking-widest text-primary text-sm uppercase mb-1">Master Astrologer</p>
            <p className="font-display text-gold text-xs tracking-widest uppercase">AIFAS Elite Member</p>
          </div>
        </div>

        {/* Bio text */}
        <div className="animate-rise" style={{ animationDelay: "0.15s" }}>
          <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">Her Story</p>
          <h2 className="font-display text-4xl md:text-5xl text-gold mb-6 leading-tight">
            A Decade of Cosmic Guidance
          </h2>
          <div className="h-px w-24 bg-gradient-gold mb-8" />

          <div className="space-y-5 text-foreground/80 text-lg leading-relaxed">
            <p>
              <span className="text-gold font-display">Manjuu Mehta</span> is a certified professional Vastu
              Advisor, Vedic Astrologer and Karmic Numerologist, based in the sacred city of
              <span className="text-primary"> Haridwar, Uttarakhand</span> — a land that has been home to cosmic
              knowledge for thousands of years.
            </p>
            <p>
              Her journey into the ancient sciences began with a deep personal calling — a recognition that the
              universe speaks through the language of numbers, planets, and space. What began as a spiritual
              pursuit transformed into a lifelong vocation of service, guiding seekers toward clarity,
              prosperity, and inner alignment.
            </p>
            <p>
              Over the span of more than a decade, she has worked with individuals, families, and business
              owners across India and internationally — her consultations leaving lasting impressions and
              measurable transformation in every life she touches.
            </p>
            <p>
              Her approach is distinguished by its rigour and compassion in equal measure. She never offers
              generic prescriptions; every consultation is a deeply personalised engagement, drawing from
              classical texts and her own well-honed intuition.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ── 3. Stats bar ──────────────────────────────── */}
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s, i) => (
          <div key={s.label}
            className="flex flex-col items-center gap-2 p-8 rounded-2xl bg-card/40 backdrop-blur gold-border text-center hover:shadow-glow transition-all duration-500"
            style={{ animation: `rise 0.7s ease-out ${i * 0.1}s both` }}>
            <div className="font-display text-5xl text-gold">{s.value}</div>
            <div className="text-muted-foreground text-xs tracking-widest uppercase font-display">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* ── 4. Philosophy ─────────────────────────────── */}
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full opacity-20 animate-glow-pulse"
          style={{ background: "var(--gradient-aura)", filter: "blur(80px)" }} />
      </div>
      <div className="max-w-4xl mx-auto relative text-center">
        <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-4">Her Philosophy</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold mb-10 leading-tight">
          The Cosmos is a Living Scripture
        </h2>
        <blockquote className="border-l-4 border-primary/60 pl-8 text-left mb-10">
          <p className="text-xl md:text-2xl text-foreground/90 italic leading-relaxed font-body">
            "I believe that every person arrives in this world with a unique cosmic blueprint — a map written in
            the stars at the precise moment of their birth. My work is simply to read that map with clarity,
            and to help the seeker walk their path with greater confidence, purpose, and joy."
          </p>
          <footer className="mt-6 font-display tracking-widest text-primary text-sm uppercase">
            — Manjuu Mehta
          </footer>
        </blockquote>
        <p className="text-foreground/75 text-lg leading-relaxed">
          She holds that the ancient sciences of Vastu, Jyotisha and Numerology are not superstitions but
          empirical systems refined over millennia by the brightest minds of Vedic India. Applied with precision
          and respect, they are among the most powerful tools available for conscious, purposeful living.
        </p>
      </div>
    </section>

    {/* ── 5. Credentials ────────────────────────────── */}
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl text-gold">Credentials & Specialisations</h2>
          <div className="mx-auto h-px w-32 bg-gradient-gold mt-4" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((c, i) => (
            <div key={c.title}
              className="group p-8 rounded-2xl bg-card/40 backdrop-blur gold-border hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
              style={{ animation: `rise 0.8s ease-out ${i * 0.1}s both` }}>
              <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <c.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl text-gold mb-3">{c.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 6. Core Values ────────────────────────────── */}
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">Principles</p>
          <h2 className="font-display text-4xl md:text-5xl text-gold">Core Values</h2>
          <div className="mx-auto h-px w-32 bg-gradient-gold mt-4" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div key={v.title}
              className="group flex gap-6 p-8 rounded-2xl bg-card/30 backdrop-blur gold-border hover:shadow-glow transition-all duration-500"
              style={{ animation: `rise 0.8s ease-out ${i * 0.12}s both` }}>
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-xl text-gold mb-3">{v.title}</h3>
                <p className="text-foreground/75 leading-relaxed text-lg">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 7. Journey Timeline ──────────────────────── */}
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">Milestones</p>
          <h2 className="font-display text-4xl md:text-5xl text-gold">The Journey</h2>
          <div className="mx-auto h-px w-32 bg-gradient-gold mt-4" />
        </div>
        <div className="relative pl-8 border-l border-primary/30 space-y-12">
          {[
            { year: "2012", title: "The Calling", desc: "Began formal study of Vedic Astrology and Vastu Shastra under the guidance of revered masters in Haridwar." },
            { year: "2015", title: "First Certifications", desc: "Received professional certifications in Vastu Shastra and Vedic Jyotisha. Began accepting private consultations." },
            { year: "2017", title: "AIFAS Recognition", desc: "Inducted as an Elite Member of the All India Federation of Astrologers Society — a landmark of professional credibility." },
            { year: "2019", title: "International Expansion", desc: "Expanded consulting practice to clients across the USA, UK, UAE and Canada, establishing a global reputation." },
            { year: "2022", title: "Award Recognition", desc: "Received multiple prestigious awards recognising excellence in Vastu consultancy and astrological guidance." },
            { year: "Today", title: "5000+ Lives Touched", desc: "Continues her sacred mission from Haridwar — guiding thousands toward clarity, prosperity, and cosmic alignment." },
          ].map((item, i) => (
            <div key={item.year} className="relative animate-rise" style={{ animationDelay: `${i * 0.12}s` }}>
              {/* Dot on the timeline */}
              <div className="absolute -left-[2.1rem] top-1 w-4 h-4 rounded-full bg-primary shadow-glow border-2 border-background" />
              <p className="font-display tracking-widest text-primary text-xs uppercase mb-1">{item.year}</p>
              <h3 className="font-display text-xl text-gold mb-2">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── 8. CTA ───────────────────────────────────── */}
    <section className="relative py-28 px-6 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full opacity-30 animate-glow-pulse"
          style={{ background: "var(--gradient-aura)", filter: "blur(80px)" }} />
      </div>
      <div className="relative max-w-2xl mx-auto animate-rise">
        <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-4">Begin Today</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold mb-6 leading-tight">
          Ready to Discover Your Cosmic Blueprint?
        </h2>
        <div className="mx-auto h-px w-32 bg-gradient-gold mb-8" />
        <p className="text-foreground/75 text-lg italic mb-12">
          A single consultation with Manjuu ji can illuminate years of confusion and set you firmly on the path of your highest destiny.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link to="/contact"
            className="px-10 py-4 rounded-full bg-gradient-gold font-display tracking-widest text-sm uppercase shadow-glow transition-transform hover:scale-105"
            style={{ color: "hsl(250 45% 6%)" }}>
            Book a Consultation
          </Link>
          <Link to="/services"
            className="px-10 py-4 rounded-full gold-border text-primary font-display tracking-widest text-sm uppercase hover:bg-primary/10 transition-colors">
            Explore Services
          </Link>
        </div>
      </div>
    </section>

  </main>
);

export default AboutUsPage;
