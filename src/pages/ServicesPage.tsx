import { Link } from "react-router-dom";
import { Compass, Heart, Sparkles, Hash, HeartHandshake, Briefcase, Gem, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { OrnDivider } from "@/components/SiteNav";
import Consult from "@/components/Consult";

// Import custom generated high-fidelity service images
import imgVastu from "@/assets/services/vastu.png";
import imgAstrology from "@/assets/services/astrology.png";
import imgNumerology from "@/assets/services/numerology.png";
import spiritualImg from "@/assets/spiritual_wcu.png";


const services = [
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
    icon: Heart,
    image: spiritualImg,
    title: "Spiritual Coaching",
    tagline: "Absolute Clarity for Confident Growth",
    desc: "Heal past blockages and gain absolute clarity for confident, aligned growth. Manjuu ji provides intuitive spiritual guidance to help you navigate life's challenges, dissolve inner limitations, and step into your highest potential.",
    includes: [
      "Personalized spiritual counseling",
      "Energy blockage identification",
      "Karmic pattern healing",
      "Guided meditation techniques",
      "Life path alignment",
      "Ongoing energetic support",
    ],
  },
];

const ServicesPage = () => (
  <main className="relative min-h-screen pt-24" style={{ background: "var(--color-bg-primary)" }}>
    
    {/* Star field overlay */}
    <div className="pointer-events-none absolute inset-0 opacity-30 star-field" />

    {/* ── Hero Banner ── */}
    <section className="relative py-24 px-6 text-center overflow-hidden">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full opacity-20 animate-glow-pulse"
          style={{ background: "radial-gradient(circle, rgba(var(--color-accent-gold-rgb),0.14) 0%, transparent 70%)", filter: "blur(80px)" }} />
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
        <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.6">
          <circle cx="50" cy="50" r="48" />
          <polygon points="50,2 98,50 50,98 2,50" transform="rotate(22.5 50 50)" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto anim-fadeup" style={{ zIndex: 1 }}>

        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight font-cinzel" style={{ color: "var(--color-text-heading)" }}>
          Sacred Services
        </h1>
        <OrnDivider style={{ margin: "0 auto 28px" } as React.CSSProperties} />
        <p className="text-foreground/80 font-poppins leading-relaxed max-w-2xl mx-auto" style={{ fontSize: "clamp(1.12rem, 1.35vw, 1.15rem)" }}>
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
                background: "#FAF4E8",
                border: "1px solid rgba(var(--color-accent-gold-rgb),0.18)",
                boxShadow: "0 8px 30px -10px rgba(var(--color-text-heading-rgb),0.06)",
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
                background: "linear-gradient(90deg, var(--color-accent-gold) 0%, #FFFFFF 50%, var(--color-accent-gold) 100%)",
                transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transformOrigin: "center",
                zIndex: 10,
              }} />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch">
                
                {/* Column 1 — Image Card Section (5 cols) */}
                <div className={`relative overflow-hidden md:col-span-5 min-h-[260px] md:min-h-full flex items-stretch p-4 md:p-6 ${isEven ? "order-1 md:order-1" : "order-1 md:order-2"}`}>
                  <div className="w-full relative group h-full overflow-hidden rounded-xl shadow-sm border" style={{ borderColor: "rgba(var(--color-accent-gold-rgb),0.15)" }}>
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
                      className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent"
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
                        style={{ background: "var(--color-bg-primary)", border: "1px solid rgba(var(--color-accent-gold-rgb),0.35)", transition: "all 0.4s ease" }}
                      >
                        <s.icon className="w-5 h-5 icon-svg" strokeWidth={1.7} style={{ color: "var(--color-accent-gold)", transition: "all 0.4s ease" }} />
                      </div>
                      <div>
                        <h2 className="font-cinzel text-xl md:text-[22px] font-bold leading-tight" style={{ color: "var(--color-text-heading)" }}>
                          {s.title}
                        </h2>
                        <p className="font-poppins tracking-[0.18em] uppercase mt-1 font-bold" style={{ color: "var(--color-accent-gold)", fontSize: "clamp(1.05rem, 1.3vw, 1.15rem)" }}>
                          {s.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-5">
                      <div className="h-px w-16" style={{ background: "linear-gradient(90deg, var(--color-accent-gold), transparent)" }} />
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-accent-gold)" }} />
                    </div>

                    {/* Description */}
                    <p className="leading-relaxed font-poppins mb-6" style={{ color: "rgba(40,22,10,0.80)", fontSize: "clamp(1.15rem, 1.5vw, 1.25rem)" }}>
                      {s.desc}
                    </p>

                    {/* Includes Section */}
                    <div className="mb-6">
                      <p className="font-cinzel tracking-[0.16em] font-bold uppercase mb-4" style={{ color: "var(--color-text-heading)", fontSize: "clamp(1.05rem, 1.3vw, 1.15rem)" }}>
                        What's Included
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {s.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-foreground/75 font-poppins font-medium" style={{ color: "rgba(40,22,10,0.72)", fontSize: "clamp(1.08rem, 1.35vw, 1.18rem)" }}>
                            <CheckCircle className="w-3.5 h-3.5 mt-1 flex-shrink-0" strokeWidth={1.7} style={{ color: "var(--color-accent-gold)" }} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Book link */}
                  <div className="mt-6 pt-4 border-t border-dashed" style={{ borderColor: "rgba(var(--color-accent-gold-rgb), 0.22)" }}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 font-cinzel tracking-[0.2em] uppercase font-bold transition-all px-8 py-3.5 rounded-full"
                      style={{
                        color: "#FFFFFF",
                        background: "var(--color-accent-gold)",
                        border: "1.5px solid var(--color-accent-gold)",
                        boxShadow: "0 6px 20px rgba(var(--color-accent-gold-rgb), 0.25)",
                        fontSize: "clamp(1.05rem, 1.3vw, 1.15rem)"
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = "var(--color-accent-light)";
                        e.currentTarget.style.borderColor = "var(--color-accent-light)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 8px 24px rgba(var(--color-accent-gold-rgb), 0.35)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = "var(--color-accent-gold)";
                        e.currentTarget.style.borderColor = "var(--color-accent-gold)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(var(--color-accent-gold-rgb), 0.25)";
                      }}
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
          background: #FAF4E8 !important;
          border-color: rgba(var(--color-accent-gold-rgb), 0.48) !important;
          box-shadow: 0 20px 48px -12px rgba(var(--color-text-heading-rgb),0.12), 0 0 10px rgba(var(--color-accent-gold-rgb),0.08) !important;
        }
        .services-editorial-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
        .services-editorial-card:hover .card-icon-badge {
          background: var(--color-accent-gold) !important;
          border-color: var(--color-accent-gold) !important;
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
          background: var(--color-accent-gold);
          transition: width 0.3s ease;
        }
        .book-service-link:hover::after {
          width: 100%;
        }
      `}</style>
    </section>

    <Consult />

  </main>
);

export default ServicesPage;
