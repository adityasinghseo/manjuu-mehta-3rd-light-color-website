import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { MMLogo } from "./SiteNav";

const InstagramIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9 8H7v3h2v9h3v-9h2.72l.42-3H12V6c0-.5.5-1 1-1h1.72V2H12a4 4 0 00-4 4v2z" />
  </svg>
);

const YoutubeIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ display: "block" }}>
    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 8.432L15.818 12l-6.273 3.568V8.432z" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

const Footer = () => (
  <footer style={{
    background: "#E5D8C0",
    borderTop: "1px solid rgba(var(--color-accent-gold-rgb), 0.24)",
    padding: "88px 0 36px",
    position: "relative",
    overflow: "hidden",
  }}>
    {/* Ambient Glow */}
    <div style={{
      position: "absolute",
      bottom: "-10%",
      left: "5%",
      width: 320,
      height: 320,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(var(--color-accent-gold-rgb),0.12) 0%, transparent 70%)",
      filter: "blur(50px)",
      pointerEvents: "none",
      zIndex: 0,
    }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>

      {/* Top ornamental row with pulsing halo */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 64 }}>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(var(--color-accent-gold-rgb),0.40))" }} />
        <div style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {/* Faint gold radial halo behind logo */}
          <div style={{
            position: "absolute",
            width: 80,
            height: 80,
            background: "radial-gradient(circle, rgba(var(--color-accent-gold-rgb),0.22) 0%, transparent 70%)",
            filter: "blur(8px)",
          }} />
          <MMLogo size={52} />
        </div>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(var(--color-accent-gold-rgb),0.40), transparent)" }} />
      </div>

      {/* Three columns grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 48, marginBottom: 64 }} className="footer-cols">

        {/* Brand Description Column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2vw, 1.6rem)", color: "var(--color-text-heading)", letterSpacing: "0.12em", marginBottom: 5 }}>
            MANJUU MEHTA
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.1rem, 1.3vw, 1.2rem)", fontWeight: 500, color: "var(--color-text-heading)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 18 }}>
            Vastu ✦ Astrology ✦ Numerology
          </p>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.15rem, 1.45vw, 1.25rem)", color: "rgba(40,22,10,0.76)", lineHeight: 1.8, maxWidth: 300, marginBottom: 22 }}>
            Guiding you toward prosperity, harmony, and cosmic alignment through the ancient Vedic sciences.
          </p>

          {/* Sleek Social Rectangular Badges with Official Brand Colors */}
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { href: "https://www.instagram.com/manjuumehta", Icon: InstagramIcon, color: "#E1306C", rgb: "225, 48, 108" },
              { href: "https://www.facebook.com/manjuu.mehta", Icon: FacebookIcon, color: "#1877F2", rgb: "24, 119, 242" },
              { href: "https://www.youtube.com/@manjuumehta", Icon: YoutubeIcon, color: "#FF0000", rgb: "255, 0, 0" },
            ].map(({ href, Icon, color, rgb }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 6,
                  background: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="footer-social-icon"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 6px 14px rgba(${rgb}, 0.45)`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon size={16} fill="currentColor" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column with Gold Star Bullets */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.12rem, 1.4vw, 1.25rem)", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-text-heading)", marginBottom: 24, borderBottom: "1.5px solid rgba(var(--color-accent-gold-rgb),0.30)", paddingBottom: 6, width: "100%", maxWidth: 160 }}>
            Navigation
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact Us" },
            ].map(link => (
              <li key={link.to} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "var(--color-accent-gold)", fontSize: "clamp(1.1rem, 1.3vw, 1.2rem)", userSelect: "none" }}>✦</span>
                <Link to={link.to}
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.12rem, 1.4vw, 1.25rem)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(40,22,10,0.68)",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  className="footer-nav-link"
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--color-accent-gold)"; e.currentTarget.style.transform = "translateX(2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(58,32,16,0.64)"; e.currentTarget.style.transform = "none"; }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column with Thinned Glowing Details */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.12rem, 1.4vw, 1.25rem)", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-text-heading)", marginBottom: 24, borderBottom: "1.5px solid rgba(var(--color-accent-gold-rgb),0.30)", paddingBottom: 6, width: "100%", maxWidth: 160 }}>
            Sacred Office
          </h3>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { href: "mailto:manjuumehta1@gmail.com", label: "manjuumehta1@gmail.com", Icon: Mail },
              { href: "tel:+917310952576", label: "+91 73109 52576", Icon: Phone },
              { href: "tel:+917737329191", label: "+91 77373 29191", Icon: Phone },
              { href: "#", label: "Haridwar, Uttarakhand", Icon: MapPin },
            ].map(({ href, label, Icon }, i) => (
              <li key={i}>
                <a href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "clamp(1.15rem, 1.45vw, 1.25rem)",
                    fontWeight: 400,
                    color: "rgba(40,22,10,0.76)",
                    transition: "all 0.3s ease",
                  }}
                  className="footer-contact-link"
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--color-accent-gold)";
                    e.currentTarget.style.transform = "translateX(2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "rgba(58,32,16,0.72)";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <div style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.45)",
                    border: "1px solid rgba(var(--color-accent-gold-rgb),0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s",
                  }} className="contact-icon-frame">
                    <Icon size={12} color="var(--color-accent-gold)" strokeWidth={1.4} />
                  </div>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spaced Follow Me On Row */}
      <div style={{ marginTop: 64, borderTop: "1px solid rgba(var(--color-accent-gold-rgb),0.18)", paddingTop: 44 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26, maxWidth: 460, margin: "0 auto 26px" }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(var(--color-accent-gold-rgb),0.36))" }} />
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(1.1rem, 1.3vw, 1.2rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--color-text-heading)", flexShrink: 0 }}>
            Follow Us
          </p>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(var(--color-accent-gold-rgb),0.36), transparent)" }} />
        </div>

        {/* Follow handle tags */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {[
            { href: "https://www.instagram.com/manjuumehta", Icon: InstagramIcon, label: "/manjuumehta", color: "#E1306C", rgb: "225, 48, 108" },
            { href: "https://www.facebook.com/manjuu.mehta", Icon: FacebookIcon, label: "/manjuu.mehta", color: "#1877F2", rgb: "24, 119, 242" },
            { href: "https://www.youtube.com/@manjuumehta", Icon: YoutubeIcon, label: "/@manjuumehta", color: "#FF0000", rgb: "255, 0, 0" },
          ].map(({ href, Icon, label, color, rgb }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 18px",
                background: color,
                border: `1.5px solid ${color}`,
                borderRadius: 999,
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(1.12rem, 1.4vw, 1.25rem)",
                fontWeight: 600,
                color: "#FFFFFF",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: `0 4px 12px rgba(${rgb}, 0.22)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 6px 16px rgba(${rgb}, 0.35)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = `0 4px 12px rgba(${rgb}, 0.22)`;
              }}
            >
              {Icon ? (
                <Icon size={13} fill="#FFFFFF" />
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              )}
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div style={{ marginTop: 44, textAlign: "center", borderTop: "1px solid rgba(var(--color-accent-gold-rgb),0.14)", paddingTop: 28 }}>
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1.12rem, 1.4vw, 1.25rem)", color: "rgba(40,22,10,0.52)", fontWeight: 400 }}>
          © {new Date().getFullYear()} Manjuu Mehta ✦ All Rights Reserved
        </p>
      </div>
    </div>

    {/* Responsive Media Queries */}
    <style>{`
      @media (min-width: 768px) {
        .footer-cols { grid-template-columns: repeat(3, 1fr) !important; gap: 64px !important; }
      }
    `}</style>
  </footer>
);

export default Footer;
