import { Link } from "react-router-dom";
import { Compass, Sparkles, Hash, HeartHandshake, Briefcase, Gem, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { OrnDivider } from "@/components/SiteNav";

// Import custom generated high-fidelity service images
import imgVastu from "@/assets/services/vastu.png";
import imgAstrology from "@/assets/services/astrology.png";
import imgNumerology from "@/assets/services/numerology.png";
import imgMatchmaking from "@/assets/services/matchmaking.png";
import imgBusiness from "@/assets/services/business.png";
import imgGemstone from "@/assets/services/gemstone.png";

const services = [
  {
    icon: Compass,
    image: imgVastu,
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
    image: imgAstrology,
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
    image: imgNumerology,
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
    image: imgMatchmaking,
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
    image: imgBusiness,
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
    image: imgGemstone,
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
  <main className="relative min-h-screen pt-24" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FAF6F0 50%, #FFFFFF 100%)" }}>
    
    {/* Star field overlay */}
    <div className="pointer-events-none absolute inset-0 opacity-30 star-field" />

    {/* ── Hero Banner ── */}
    <section className="relative py-24 px-6 text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full opacity-20 animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(142,109,61,0.14) 0%, transparent 70%)", filter: "blur(80px)" }} />
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
        <svg viewBox="0 0 100 100" fill="none" stroke="#8E6D3D" strokeWidth="0.6">
          <circle cx="50" cy="50" r="48" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(22.5 50 50)" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto anim-fadeup" style={{ zIndex: 1 }}>
        <p className="font-display tracking-[0.20em] text-[11px] font-bold uppercase mb-4" style={{ color: "#8E6D3D" }}>
          ✦ Custom Consultations ✦
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight font-cinzel" style={{ color: "#8E6D3D" }}>
          Sacred Services
        </h1>
        <OrnDivider style={{ margin: "0 auto 28px" } as React.CSSProperties} />
        <p className="text-foreground/80 text-[15.5px] font-poppins leading-relaxed max-w-2xl mx-auto">
          Precision-crafted spatial audits and planetary interpretations rooted in 5000 years of Vedic wisdom, delivered with absolute modern clarity.
        </p>
      </div>
    </section>

    {/* ── Service Detail Cards ── */}
    <section style={{ padding: "88px 0 128px" }} className="px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        {services.map((s, i) => {
          const isEven = i % 2 === 0;
          return (
            <article
              key={s.title}
              className="relative overflow-hidden rounded-2xl transition-all duration-500 services-editorial-card"
              style={{
                background: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(142,109,61,0.18)",
                boxShadow: "0 8px 30px -10px rgba(68,65,54,0.06)",
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
                height: 3.5,
                background: "linear-gradient(90deg, #8E6D3D 0%, #FFFFFF 50%, #8E6D3D 100%)",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transformOrigin: "center",
                zIndex: 10,
              }} />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
                
                {/* Column 1 — Image Card Section (5 cols) */}
                <div className={`relative overflow-hidden md:col-span-5 min-h-[260px] md:min-h-full flex items-stretch ${isEven ? "order-1 md:order-1" : "order-1 md:order-2"}`}>
                  <div className="w-full relative group h-full overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out service-editorial-img"
                      loading="lazy"
                    />
                    {/* Subtle gold frame border on hover */}
                    <div className="absolute inset-0 border-[8px] border-solid border-transparent group-hover:border-white/10 transition-all duration-500 pointer-events-none" />
                    
                    {/* Custom Vignette & Cosmic Gradient Overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: isEven 
                          ? "linear-gradient(to right, transparent 60%, rgba(250,240,228,0.1) 100%), linear-gradient(180deg, rgba(142,109,61,0.02) 0%, rgba(142,109,61,0.18) 100%)"
                          : "linear-gradient(to left, transparent 60%, rgba(250,240,228,0.1) 100%), linear-gradient(180deg, rgba(142,109,61,0.02) 0%, rgba(142,109,61,0.18) 100%)"
                      }} 
                    />
                  </div>
                </div>

                {/* Column 2 — Service Content details (7 cols) */}
                <div className={`p-8 md:p-10 flex flex-col justify-between md:col-span-7 ${isEven ? "order-2 md:order-2" : "order-2 md:order-1"}`}>
                  
                  {/* Upper info section */}
                  <div>
                    {/* Title and Icon badge */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 card-icon-badge"
                        style={{ background: "#FFFFFF", border: "1px solid rgba(142,109,61,0.28)", transition: "all 0.4s ease" }}
                      >
                        <s.icon className="w-5 h-5 icon-svg" strokeWidth={1.7} style={{ color: "#8E6D3D", transition: "all 0.4s ease" }} />
                      </div>
                      <div>
                        <h2 className="font-cinzel text-xl md:text-[22px] font-bold leading-tight" style={{ color: "#8E6D3D" }}>
                          {s.title}
                        </h2>
                        <p className="font-poppins text-[9.5px] tracking-[0.18em] uppercase mt-1 font-bold" style={{ color: "#8E6D3D" }}>
                          {s.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-5">
                      <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #8E6D3D, transparent)" }} />
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#8E6D3D" }} />
                    </div>

                    {/* Description */}
                    <p className="leading-relaxed text-[13.5px] md:text-[14px] font-poppins mb-6" style={{ color: "rgba(40,22,10,0.80)" }}>
                      {s.desc}
                    </p>

                    {/* Includes Section */}
                    <div className="mb-6">
                      <p className="font-cinzel tracking-[0.16em] font-bold text-[10.5px] uppercase mb-4" style={{ color: "#8E6D3D" }}>
                        What's Included
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-foreground/75 text-[12.5px] font-poppins font-medium" style={{ color: "rgba(40,22,10,0.72)" }}>
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" strokeWidth={1.7} style={{ color: "#8E6D3D" }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Book link */}
                  <div className="mt-6 pt-4 border-t border-dashed border-gold/15">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 font-cinzel tracking-[0.2em] text-[10px] uppercase font-bold transition-all hover:gap-4 book-service-link"
                      style={{ color: "#8E6D3D" }}
                    >
                      Book This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

              </div>
            </article>
          );
        })}
      </div>
      <style>{`
        .services-editorial-card:hover {
          transform: translateY(-5px);
          background: #ffffff !important;
          border-color: rgba(142, 109, 61, 0.48) !important;
          box-shadow: 0 20px 48px -12px rgba(68,65,54,0.12), 0 0 10px rgba(142,109,61,0.08) !important;
        }
        .services-editorial-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
        .services-editorial-card:hover .card-icon-badge {
          background: #8E6D3D !important;
          border-color: #8E6D3D !important;
          transform: scale(1.08);
        }
        .services-editorial-card:hover .icon-svg {
          color: #FFFFFF !important;
        }
        .services-editorial-card:hover .service-editorial-img {
          transform: scale(1.05);
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
          background: #8E6D3D;
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
      background: "linear-gradient(135deg, #8E6D3D 0%, #2C2922 100%)",
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
        background: "radial-gradient(circle, rgba(142,109,61,0.18) 0%, transparent 70%)",
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
        <svg viewBox="0 0 100 100" fill="none" stroke="#8E6D3D" strokeWidth="0.5">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="38" strokeDasharray="1 1" />
          <polygon points="50,2 98,50 50,98 2,50" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(30 50 50)" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(60 50 50)" />
        </svg>
      </div>

      <div className="sparkle-field" style={{ opacity: 0.28 }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }} className="anim-fadeup">
        <p className="font-display tracking-[0.20em] text-[11px] font-bold uppercase mb-4" style={{ color: "#FFFFFF" }}>
          ✦ Take the First Step ✦
        </p>
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#FFFFFF" }}>
          Not Sure Which Service Is Right for You?
        </h2>
        <OrnDivider style={{ margin: "0 auto 28px" } as React.CSSProperties} />
        <p className="text-foreground/90 text-[15px] font-poppins max-w-2xl mx-auto mb-10" style={{ color: "rgba(250,240,228,0.90)" }}>
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
              fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "#8E6D3D",
              background: "linear-gradient(135deg, #FFFFFF 0%, #8E6D3D 100%)",
              padding: "16px 36px",
              borderRadius: 999,
              display: "inline-block",
              transition: "all 0.4s ease",
              border: "1.5px solid #8E6D3D",
              boxShadow: "0 8px 30px -10px rgba(142,109,61,0.40)",
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
              fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
              letterSpacing: "0.20em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: "rgba(255,255,255,0.08)",
              padding: "15px 34px",
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.4s ease",
              border: "1.5px solid rgba(142,109,61,0.45)",
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
            color: "#8E6D3D",
            fontWeight: 700,
          }}>
            ✦ Priority response within 2–4 Hours ✦
          </span>
        </div>
      </div>
      <style>{`
        .cta-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 40px -8px rgba(142,109,61,0.60) !important;
          background: #FFFFFF !important;
          border-color: #FFFFFF !important;
        }
        .cta-secondary-btn:hover {
          transform: translateY(-3px);
          background: #FFFFFF !important;
          color: #8E6D3D !important;
          border-color: #FFFFFF !important;
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
