import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

/* ── Shared MM Logo ─────────────────────────────────────────── */
export const MMLogo = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="55" cy="55" r="52" stroke="var(--color-accent-gold)" strokeWidth="1.6" />
    {/* Dashed inner ring */}
    <circle cx="55" cy="55" r="46" stroke="var(--color-accent-gold)" strokeWidth="0.8" strokeDasharray="3.5 2.5" opacity="0.7" />
    {/* Cardinal accents */}
    <line x1="55" y1="3"  x2="55" y2="11" stroke="var(--color-accent-gold)" strokeWidth="1.2" opacity="0.65" />
    <line x1="55" y1="99" x2="55" y2="107" stroke="var(--color-accent-gold)" strokeWidth="1.2" opacity="0.65" />
    <line x1="3"  y1="55" x2="11" y2="55" stroke="var(--color-accent-gold)" strokeWidth="1.2" opacity="0.65" />
    <line x1="99" y1="55" x2="107" y2="55" stroke="var(--color-accent-gold)" strokeWidth="1.2" opacity="0.65" />
    {/* Cardinal dots */}
    <circle cx="55" cy="4"   r="2.2" fill="var(--color-accent-gold)" opacity="0.8" />
    <circle cx="55" cy="106" r="2.2" fill="var(--color-accent-gold)" opacity="0.8" />
    <circle cx="4"  cy="55"  r="2.2" fill="var(--color-accent-gold)" opacity="0.8" />
    <circle cx="106" cy="55" r="2.2" fill="var(--color-accent-gold)" opacity="0.8" />
    {/* Fill */}
    <circle cx="55" cy="55" r="43" fill="#D86A63" />
    {/* MM text */}
    <text
      x="55" y="69"
      textAnchor="middle"
      fontFamily="Cinzel, serif"
      fontSize="34"
      fontWeight="700"
      fill="#F4D06F"
      letterSpacing="-0.5"
    >MM</text>
  </svg>
);

/* ── Ornamental divider (poster-style) ─────────────────────── */
export const OrnDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,rgba(var(--color-accent-gold-rgb),.55),transparent)" }} />
    {/* Lotus bud */}
    <svg width="18" height="12" viewBox="0 0 36 24" fill="none">
      <path d="M18 22C15 14 5 12 2 6C7 4 13 8 18 16C23 8 29 4 34 6C31 12 21 14 18 22Z" fill="var(--color-accent-gold)" opacity="0.85"/>
      <circle cx="18" cy="6" r="2" fill="var(--color-accent-gold)" opacity="0.6"/>
    </svg>
    <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,rgba(var(--color-accent-gold-rgb),.55),transparent)" }} />
  </div>
);

/* ── SiteNav ─────────────────────────────────────────────────── */
const SiteNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    background: scrolled ? "rgba(253,246,238,0.88)" : "rgba(253,246,238,0.45)",
    borderBottom: scrolled ? "1px solid rgba(var(--color-accent-gold-rgb),0.16)" : "1px solid rgba(var(--color-accent-gold-rgb),0.06)",
    boxShadow: scrolled ? "0 4px 24px rgba(var(--color-text-heading-rgb),0.04)" : "none",
    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <>
      <header style={navStyle}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 86 }}>
          
          {/* Logo */}
          <Link to="/" onClick={close} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <MMLogo size={64} />
            <div>
              <div style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.1rem, 1.2vw, 1.25rem)", letterSpacing: "0.22em", color: "var(--color-text-heading)", lineHeight: 1.2 }}>
                MANJUU MEHTA
              </div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(0.55rem, 0.6vw, 0.65rem)", letterSpacing: "0.28em", color: "var(--color-text-heading)", textTransform: "uppercase", marginTop: 1 }}>
                Vastu · Astrology · Numerology
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                to={l.href}
                style={{ display: "none" }}
                className={`lg-nav-link ${location.pathname === l.href ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              to="/contact"
              id="nav-cta"
              style={{ display: "none" }}
              className="lg-cta"
            >
              Book Consultation
            </Link>
            <button
              onClick={() => setOpen(v => !v)}
              aria-label="Menu"
              style={{
                background: "transparent",
                border: "1px solid rgba(var(--color-accent-gold-rgb),0.40)",
                borderRadius: 999,
                padding: "7px",
                cursor: "pointer",
                color: "var(--color-accent-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="hamburger"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(253,246,238,0.98)",
          backdropFilter: "blur(16px)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          animation: "fadeIn 0.2s ease both",
        }}>
          <button onClick={close} style={{ position: "absolute", top: 20, right: 20, background: "transparent", border: "1px solid rgba(var(--color-accent-gold-rgb),0.35)", borderRadius: 999, padding: 8, cursor: "pointer", color: "var(--color-accent-gold)" }}>
            <X size={22} />
          </button>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 40 }}>
            <MMLogo size={60} />
            <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.12rem, 1.4vw, 1.2rem)", letterSpacing: "0.20em", color: "var(--color-text-heading)", marginTop: 12 }}>MANJUU MEHTA</p>
            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.7rem, 0.9vw, 0.85rem)", letterSpacing: "0.28em", color: "var(--color-text-heading)", textTransform: "uppercase", marginTop: 4 }}>Vastu · Astrology · Numerology</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
            {NAV_LINKS.map(l => (
              <Link key={l.href} to={l.href} onClick={close}
                style={{ fontFamily: "Cinzel, serif", fontWeight: 600, fontSize: 17, letterSpacing: "0.18em", textTransform: "uppercase", color: location.pathname === l.href ? "var(--color-accent-gold)" : "rgba(58,32,16,0.65)" }}
              >{l.label}</Link>
            ))}
          </div>
          <Link to="/contact" onClick={close}
            style={{ marginTop: 44, fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.15rem, 1.45vw, 1.25rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-accent-gold)", background: "transparent", border: "1px solid rgba(var(--color-accent-gold-rgb),0.40)", padding: "12px 31px", borderRadius: 999 }}
          >Book Consultation</Link>
        </div>
      )}

      {/* Responsive CSS for nav */}
      <style>{`
        @media (min-width: 1024px) {
          .lg-nav-link { display: block !important; }
          .lg-cta { display: block !important; }
          .hamburger { display: none !important; }
        }

        .lg-nav-link {
          font-family: "Cinzel", serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(58,32,16,0.65) !important;
          transition: color 0.4s ease;
          position: relative;
          padding: 4px 0;
        }
        .lg-nav-link:hover {
          color: var(--color-accent-gold) !important;
        }
        .lg-nav-link.active {
          color: var(--color-accent-gold) !important;
          font-weight: 700;
        }
        .lg-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1.5px;
          background: var(--color-accent-gold);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .lg-nav-link:hover::after,
        .lg-nav-link.active::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .lg-nav-link:hover::after {
          background: var(--color-accent-gold);
        }
        .lg-nav-link.active::after {
          background: var(--color-accent-gold);
        }

        .lg-cta {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--color-accent-gold) !important;
          background: transparent;
          border: 1px solid rgba(var(--color-accent-gold-rgb),0.40);
          padding: 10px 24px;
          border-radius: 999px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .lg-cta:hover {
          transform: translateY(-2px);
          border-color: var(--color-accent-gold);
          background: rgba(var(--color-accent-gold-rgb),0.02);
          box-shadow: 0 4px 14px rgba(var(--color-text-heading-rgb),0.04);
        }
      `}</style>
    </>
  );
};

export default SiteNav;
