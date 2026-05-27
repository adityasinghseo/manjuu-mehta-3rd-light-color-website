import { Link } from "react-router-dom";
import { Compass, Sparkles, Hash, HeartHandshake, Briefcase, Gem, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { OrnDivider } from "@/components/SiteNav";

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
  },
];

const ServicesPage = () => (
  <main className="relative min-h-screen pt-24" style={{ background: "linear-gradient(180deg, #FAF0E4 0%, #F5E6D2 50%, #FAF0E4 100%)" }}>
    
    {/* Star field overlay */}
    <div className="pointer-events-none absolute inset-0 opacity-30 star-field" />

    {/* ── Hero Banner ── */}
    <section className="relative py-24 px-6 text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full opacity-20 animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(197,146,42,0.14) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>
      
      {/* Faint spinning mandala watermark */}
      <div className="anim-spin" style={{
        position: "absolute",
        top: "-15%",
        left: "-10%",
        width: "45%",
        maxWidth: 450,
        aspectRatio: "1",
        opacity: 0.02,
        pointerEvents: "none",
        zIndex: 0,
      }}>
        <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.6">
          <circle cx="50" cy="50" r="48" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(22.5 50 50)" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto anim-fadeup" style={{ zIndex: 1 }}>
        <p className="font-display tracking-[0.26em] text-[10px] font-bold uppercase mb-4" style={{ color: "#C5922A" }}>
          ✦ Custom Consultations ✦
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight font-cinzel" style={{ color: "#7B1034" }}>
          Sacred Services
        </h1>
        <OrnDivider style={{ margin: "0 auto 28px" } as React.CSSProperties} />
        <p className="text-foreground/75 text-xl font-garamond italic leading-relaxed max-w-2xl mx-auto">
          Precision-crafted spatial audits and planetary interpretations rooted in 5000 years of Vedic wisdom, delivered with absolute modern clarity.
        </p>
      </div>
    </section>

    {/* ── Service Detail Cards ── */}
    <section style={{ padding: "116px 0 128px" }} className="px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((s, i) => (
          <article
            key={s.title}
            className="relative overflow-hidden rounded-2xl transition-all duration-500 services-editorial-card"
            style={{
              background: "rgba(255,255,255,0.78)",
              border: "1px solid rgba(197,146,42,0.18)",
              boxShadow: "0 8px 30px -10px rgba(91,10,36,0.06)",
              animation: `fadeUp 0.8s ease ${i * 0.08}s both`,
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Horizontal Hover gold line */}
            <div className="card-top-line" style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%) scaleX(0)",
              width: "100%",
              height: 3,
              background: "var(--grad-gold)",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              transformOrigin: "center",
            }} />

            <div className="p-8 md:p-12 grid md:grid-cols-12 gap-10 items-center">
              
              {/* Left Column — Title, Tagline & Description (7 cols) */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 card-icon-badge"
                    style={{ background: "#FDF6EE", border: "1px solid rgba(197,146,42,0.28)", transition: "all 0.4s ease" }}
                  >
                    <s.icon className="w-5 h-5 icon-svg" strokeWidth={1.2} style={{ color: "#C5922A", transition: "all 0.4s ease" }} />
                  </div>
                  <div>
                    <h2 className="font-cinzel text-xl md:text-2xl font-bold leading-tight" style={{ color: "#7B1034" }}>
                      {s.title}
                    </h2>
                    <p className="font-poppins text-[10px] tracking-[0.20em] uppercase mt-1.5 font-bold" style={{ color: "#C5922A" }}>
                      {s.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-20" style={{ background: "linear-gradient(90deg, #C5922A, transparent)" }} />
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C5922A" }} />
                </div>

                <p className="leading-relaxed text-sm md:text-base font-poppins text-foreground/75 mb-8" style={{ color: "rgba(58,32,16,0.76)" }}>
                  {s.desc}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-cinzel tracking-[0.2em] text-[10px] uppercase font-bold transition-all hover:gap-4 book-service-link"
                  style={{ color: "#7B1034" }}
                >
                  Book This Service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right Column — Includes list (5 cols) */}
              <div
                className="md:col-span-5 rounded-2xl p-7"
                style={{
                  background: "rgba(251,244,234,0.65)",
                  border: "1px solid rgba(197,146,42,0.18)"
                }}
              >
                <p className="font-cinzel tracking-[0.16em] font-bold text-xs uppercase mb-6" style={{ color: "#7B1034" }}>
                  What's Included
                </p>
                <ul className="space-y-3.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3.5 text-foreground/75 text-sm font-poppins font-medium" style={{ color: "rgba(58,32,16,0.70)" }}>
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.5} style={{ color: "#C5922A" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </article>
        ))}
      </div>
      <style>{`
        .services-editorial-card:hover {
          transform: translateY(-5px);
          background: #ffffff !important;
          border-color: rgba(197, 146, 42, 0.48) !important;
          box-shadow: 0 20px 48px -12px rgba(91,10,36,0.12), 0 0 10px rgba(197,146,42,0.08) !important;
        }
        .services-editorial-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
        .services-editorial-card:hover .card-icon-badge {
          background: #7B1034 !important;
          border-color: #7B1034 !important;
          transform: scale(1.08);
        }
        .services-editorial-card:hover .icon-svg {
          color: #FAF0E4 !important;
        }
        .book-service-link {
          position: relative;
          padding-bottom: 2px;
        }
        .book-service-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 1px;
          background: #7B1034;
          transition: width 0.3s ease;
        }
        .book-service-link:hover::after {
          width: 100%;
        }
      `}</style>
    </section>

    {/* ── Overhauled High-Contrast CTA Section ── */}
    <section style={{
      padding: "128px 0",
      background: "linear-gradient(135deg, #7B1034 0%, #4A081F 100%)",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background Radial Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        maxWidth: 500,
        aspectRatio: "1",
        background: "radial-gradient(circle, rgba(197,146,42,0.18) 0%, transparent 70%)",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Rotating Background Mandala Watermark */}
      <div className="anim-spinrev" style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        maxWidth: 680,
        aspectRatio: "1",
        opacity: 0.04,
        pointerEvents: "none",
        zIndex: 0,
      }}>
        <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="38" strokeDasharray="1 1" />
          <polygon points="50,2 98,50 50,98 2,50" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(30 50 50)" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(60 50 50)" />
        </svg>
      </div>

      <div className="sparkle-field" style={{ opacity: 0.28 }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }} className="anim-fadeup">
        <p className="font-display tracking-[0.26em] text-[10px] font-bold uppercase mb-4" style={{ color: "#FAF0E4" }}>
          ✦ Take the First Step ✦
        </p>
        <h2 className="font-garamond text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#FAF0E4" }}>
          Not Sure Which Service Is Right for You?
        </h2>
        <OrnDivider style={{ margin: "0 auto 28px" } as React.CSSProperties} />
        <p className="text-foreground/80 text-xl font-garamond italic max-w-2xl mx-auto mb-10" style={{ color: "rgba(250,240,228,0.80)" }}>
          Simply reach out. Manjuu ji will personally review your planetary chart and spatial guidelines to recommend the consultation best suited to your path.
        </p>
        
        {/* Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 18 }} className="cta-btn-group">
          
          {/* Primary CTA */}
          <Link
            to="/contact"
            style={{
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "#7B1034",
              background: "linear-gradient(135deg, #FDF6EE 0%, #C5922A 100%)",
              padding: "16px 36px",
              borderRadius: 999,
              display: "inline-block",
              transition: "all 0.4s ease",
              border: "1.5px solid #C5922A",
              boxShadow: "0 8px 30px -10px rgba(197,146,42,0.40)",
            }}
            className="cta-primary-btn"
          >
            Get in Touch
          </Link>
          
          {/* Secondary CTA (WhatsApp) */}
          <a href="https://wa.me/917310952576"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Cinzel, serif",
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "#FAF0E4",
              background: "rgba(255,255,255,0.08)",
              padding: "15px 34px",
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.4s ease",
              border: "1.5px solid rgba(197,146,42,0.45)",
            }}
            className="cta-secondary-btn"
          >
            <MessageCircle size={14} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Priority Badge */}
        <div style={{ marginTop: 28 }} className="anim-glow">
          <span style={{
            fontFamily: "Cinzel, serif",
            fontSize: 9.5,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C5922A",
            fontWeight: 700,
          }}>
            ✦ Priority response within 2–4 Hours ✦
          </span>
        </div>
      </div>
      <style>{`
        .cta-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px -8px rgba(197,146,42,0.60) !important;
          background: #FAF0E4 !important;
          border-color: #FAF0E4 !important;
        }
        .cta-secondary-btn:hover {
          transform: translateY(-3px);
          background: #FAF0E4 !important;
          color: #7B1034 !important;
          border-color: #FAF0E4 !important;
          box-shadow: 0 16px 40px -12px rgba(250,240,228,0.22) !important;
        }
        @media (max-width: 500px) {
          .cta-btn-group { flex-direction: column !important; width: 100% !important; max-width: 320px !important; margin: 0 auto !important; }
          .cta-primary-btn, .cta-secondary-btn { width: 100% !important; text-align: center !important; justify-content: center !important; }
        }
      `}</style>
    </section>

  </main>
);

export default ServicesPage;
