import { Link } from "react-router-dom";
import { Compass, Sparkles, Hash, HeartHandshake, Briefcase, Gem, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Vastu Consultation",
    tagline: "Align Your Space, Transform Your Life",
    desc: "Vastu Shastra is the ancient Indian science of space and energy. When your home or workplace is aligned with the five elements — Earth, Water, Fire, Air, and Space — harmony, prosperity and wellbeing flow naturally. Manjuu ji performs detailed on-site and remote Vastu audits, identifying energy imbalances and providing precise, practical remedies.",
    includes: [
      "Residential Vastu analysis",
      "Commercial & office Vastu audit",
      "Plot & construction Vastu",
      "Factory & industrial Vastu",
      "Directional corrections & remedies",
      "Vastu for health, wealth & relationships",
    ],
    color: "from-amber-500/10 to-transparent",
  },
  {
    icon: Sparkles,
    title: "Vedic Astrology",
    tagline: "Your Cosmic Blueprint, Decoded",
    desc: "Jyotisha — the eye of the Vedas — is a precise science mapping your karma, dharma and destiny through the positions of planets at your birth. Manjuu ji provides in-depth birth chart readings rooted in the classical Parashari tradition, offering clarity on every dimension of life from career and health to relationships and spiritual growth.",
    includes: [
      "Natal birth chart (Kundali) analysis",
      "Mahadasha & Antardasha prediction",
      "Transit (Gochar) analysis",
      "Navamsa & divisional chart readings",
      "Annual Varshaphal (Solar Return)",
      "Planetary remedies & gemstone prescriptions",
    ],
    color: "from-purple-500/10 to-transparent",
  },
  {
    icon: Hash,
    title: "Karmic Numerology",
    tagline: "The Vibration of Your Name & Birth",
    desc: "Numbers are the language of the universe. Through the ancient Cheiro and Pythagorean systems of Numerology, Manjuu ji decodes the vibrational energy embedded in your name and date of birth — revealing your life path, soul urge, destiny number and karmic lessons with remarkable precision.",
    includes: [
      "Full numerology profile & life path",
      "Name correction & analysis",
      "Business name selection",
      "Lucky numbers, dates & colours",
      "Karmic debt identification",
      "Compatibility analysis through numbers",
    ],
    color: "from-rose-500/10 to-transparent",
  },
  {
    icon: HeartHandshake,
    title: "Match Making",
    tagline: "Bless Your Union with Cosmic Harmony",
    desc: "Marriage is the most sacred of all partnerships. Through the traditional Ashta-Koota compatibility system and deep Navamsa analysis, Manjuu ji offers comprehensive Kundali Milan readings — helping couples and families understand compatibility at the soul level and make this most important decision with clarity and confidence.",
    includes: [
      "Ashta-Koota Guna Milan",
      "Manglik dosha analysis & remedies",
      "Navamsa compatibility reading",
      "Emotional & spiritual compatibility",
      "Auspicious wedding Muhurta selection",
      "Post-marriage planetary guidance",
    ],
    color: "from-pink-500/10 to-transparent",
  },
  {
    icon: Briefcase,
    title: "Business Guidance",
    tagline: "Align Your Enterprise with the Cosmos",
    desc: "Every successful enterprise has an unseen cosmic dimension. Manjuu ji provides strategic astrological and Vastu counsel tailored specifically for entrepreneurs, startups, and established businesses — helping them choose auspicious timings, aligned premises, and navigate challenges through planetary insight.",
    includes: [
      "Business launch Muhurta selection",
      "Partner compatibility analysis",
      "Business Vastu audit",
      "Astrological risk assessment",
      "Brand name & logo numerology",
      "Quarterly astrological business forecast",
    ],
    color: "from-blue-500/10 to-transparent",
  },
  {
    icon: Gem,
    title: "Gemstone Counsel",
    tagline: "Harness the Power of Sacred Stones",
    desc: "Vedic gemology prescribes specific gemstones to strengthen benefic planets and mitigate malefic influences in the birth chart. Manjuu ji provides a precise gemstone analysis — recommending only what is genuinely suited to your chart, worn correctly for maximum therapeutic and cosmic benefit.",
    includes: [
      "Planetary gemstone prescription",
      "Substitute stone recommendations",
      "Correct metal, finger & timing guidance",
      "Gemstone quality assessment advice",
      "Activation & energisation guidance",
      "Periodic review & adjustment",
    ],
    color: "from-emerald-500/10 to-transparent",
  },
];

const ServicesPage = () => (
  <main className="relative min-h-screen pt-24">

    {/* ── Hero Banner ── */}
    <section className="relative py-24 px-6 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full animate-glow-pulse opacity-20"
          style={{ background: "var(--gradient-aura)", filter: "blur(80px)" }} />
      </div>
      <div className="relative max-w-3xl mx-auto animate-rise">
        <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-4">What We Offer</p>
        <h1 className="font-display text-5xl md:text-7xl text-gold mb-6 leading-tight">Sacred Services</h1>
        <div className="mx-auto h-px w-32 bg-gradient-gold mb-8" />
        <p className="text-foreground/75 text-xl italic leading-relaxed max-w-2xl mx-auto">
          Precision-crafted consultations rooted in 5000 years of Vedic wisdom, delivered with modern clarity and compassion.
        </p>
      </div>
    </section>

    {/* ── Service Detail Cards ── */}
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="group relative rounded-3xl bg-card/40 backdrop-blur gold-border overflow-hidden hover:shadow-glow transition-all duration-500"
            style={{ animation: `rise 0.8s ease-out ${i * 0.08}s both` }}
          >
            {/* Gradient accent */}
            <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
              {/* Left — title & desc */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl text-gold leading-tight">{s.title}</h2>
                    <p className="text-primary/70 text-sm font-display tracking-widest uppercase mt-1">{s.tagline}</p>
                  </div>
                </div>
                <div className="h-px w-20 bg-gradient-gold mb-6" />
                <p className="text-foreground/80 leading-relaxed text-lg">{s.desc}</p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-primary font-display tracking-widest text-sm uppercase hover:gap-4 transition-all"
                >
                  Book This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right — includes list */}
              <div className="bg-card/30 rounded-2xl p-6 gold-border">
                <p className="font-display tracking-widest text-gold text-sm uppercase mb-5">What's Included</p>
                <ul className="space-y-3">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/80 text-base">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="relative py-28 px-6 text-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full opacity-25 animate-glow-pulse"
          style={{ background: "var(--gradient-aura)", filter: "blur(80px)" }} />
      </div>
      <div className="relative max-w-2xl mx-auto animate-rise">
        <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-4">Take the First Step</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold mb-6 leading-tight">
          Not Sure Which Service Is Right for You?
        </h2>
        <div className="mx-auto h-px w-32 bg-gradient-gold mb-8" />
        <p className="text-foreground/75 text-lg italic mb-12">
          Simply reach out — Manjuu ji will personally guide you to the consultation best suited to your needs and cosmic blueprint.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-gold font-display tracking-widest text-sm uppercase shadow-glow transition-transform hover:scale-105"
          style={{ color: "hsl(250 45% 6%)" }}
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>

  </main>
);

export default ServicesPage;
