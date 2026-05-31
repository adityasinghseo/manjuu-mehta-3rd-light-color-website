import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { MMLogo } from "./SiteNav";

const Footer = () => (
  <footer style={{
    background: "linear-gradient(180deg, #E3C5A0 0%, #F2ECE2 40%, #FFFFFF 100%)",
    borderTop: "1px solid rgba(142, 109, 61, 0.24)",
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
      background: "radial-gradient(circle, rgba(142,109,61,0.12) 0%, transparent 70%)",
      filter: "blur(50px)",
      pointerEvents: "none",
      zIndex: 0,
    }} />

    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>

      {/* Top ornamental row with pulsing halo */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 64 }}>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(142,109,61,0.40))" }} />
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
            background: "radial-gradient(circle, rgba(142,109,61,0.22) 0%, transparent 70%)",
            filter: "blur(8px)",
          }} />
          <MMLogo size={52} />
        </div>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(142,109,61,0.40), transparent)" }} />
      </div>

      {/* Three columns grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: 48, marginBottom: 64 }} className="footer-cols">

        {/* Brand Description Column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h2 style={{ fontFamily: "Cinzel, serif", fontWeight: 800, fontSize: "clamp(1.4rem, 2vw, 1.6rem)", color: "#8E6D3D", letterSpacing: "0.12em", marginBottom: 5 }}>
            MANJUU MEHTA
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)", fontWeight: 500, color: "#8E6D3D", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 18 }}>
            Vastu ✦ Astrology ✦ Numerology
          </p>
          <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(1rem, 1.35vw, 1.05rem)", color: "rgba(40,22,10,0.76)", lineHeight: 1.8, maxWidth: 300, marginBottom: 22 }}>
            Guiding you toward prosperity, harmony, and cosmic alignment through the ancient Vedic sciences.
          </p>

          {/* Sleek Social Circle Badges */}
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { href: "https://instagram.com/manjuumehtaofficial", Icon: Instagram },
              { href: "https://facebook.com/manjuumehtaofficial", Icon: Facebook },
              { href: "https://youtube.com/manjuumehtaofficial", Icon: Youtube },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.45)",
                  border: "1px solid rgba(142, 109, 61, 0.28)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#8E6D3D",
                  boxShadow: "0 4px 10px rgba(68,65,54,0.02)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="footer-social-icon"
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#8E6D3D";
                  e.currentTarget.style.color = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#8E6D3D";
                  e.currentTarget.style.transform = "translateY(-3px) rotate(8deg)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(142,109,61,0.25)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.45)";
                  e.currentTarget.style.color = "#8E6D3D";
                  e.currentTarget.style.borderColor = "rgba(142, 109, 61, 0.28)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(68,65,54,0.02)";
                }}
              >
                <Icon size={15} strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column with Gold Star Bullets */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8E6D3D", marginBottom: 24, borderBottom: "1.5px solid rgba(142,109,61,0.30)", paddingBottom: 6, width: "100%", maxWidth: 160 }}>
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
                <span style={{ color: "#8E6D3D", fontSize: "clamp(0.85rem, 1vw, 0.9rem)", userSelect: "none" }}>✦</span>
                <Link to={link.to}
                  style={{
                    fontFamily: "Cinzel, serif",
                    fontWeight: 600,
                    fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(40,22,10,0.68)",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  className="footer-nav-link"
                  onMouseEnter={e => { e.currentTarget.style.color = "#8E6D3D"; e.currentTarget.style.transform = "translateX(2px)"; }}
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
          <h3 style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8E6D3D", marginBottom: 24, borderBottom: "1.5px solid rgba(142,109,61,0.30)", paddingBottom: 6, width: "100%", maxWidth: 160 }}>
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
                    fontSize: "clamp(1rem, 1.35vw, 1.05rem)",
                    fontWeight: 400,
                    color: "rgba(40,22,10,0.76)",
                    transition: "all 0.3s ease",
                  }}
                  className="footer-contact-link"
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "#8E6D3D";
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
                    border: "1px solid rgba(142,109,61,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all 0.3s",
                  }} className="contact-icon-frame">
                    <Icon size={12} color="#8E6D3D" strokeWidth={1.4} />
                  </div>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Spaced Follow Me On Row */}
      <div style={{ marginTop: 64, borderTop: "1px solid rgba(142,109,61,0.18)", paddingTop: 44 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26, maxWidth: 460, margin: "0 auto 26px" }}>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, rgba(142,109,61,0.36))" }} />
          <p style={{ fontFamily: "Cinzel, serif", fontWeight: 700, fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#8E6D3D", flexShrink: 0 }}>
            Follow Me On
          </p>
          <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(142,109,61,0.36), transparent)" }} />
        </div>

        {/* Follow handle tags */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {[
            { href: "https://instagram.com/manjuumehtaofficial", Icon: Instagram, label: "/manjuumehtaofficial" },
            { href: "https://facebook.com/manjuumehtaofficial", Icon: Facebook, label: "/manjuumehtaofficial" },
            { href: "https://youtube.com/manjuumehtaofficial", Icon: Youtube, label: "/manjuumehtaofficial" },
            { href: "https://wa.me/919820954254", Icon: null, label: "+91 98209 54254" },
          ].map(({ href, Icon, label }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 18px",
                background: "rgba(255,255,255,0.50)",
                border: "1px solid rgba(142,109,61,0.22)",
                borderRadius: 999,
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                fontWeight: 500,
                color: "rgba(58,32,16,0.72)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 2px 8px rgba(68,65,54,0.01)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(142,109,61,0.45)";
                e.currentTarget.style.color = "#8E6D3D";
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.transform = "translateY(-1.5px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(68,65,54,0.03)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(142,109,61,0.22)";
                e.currentTarget.style.color = "rgba(58,32,16,0.72)";
                e.currentTarget.style.background = "rgba(255,255,255,0.50)";
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(68,65,54,0.01)";
              }}
            >
              {Icon ? (
                <Icon size={13} color="#8E6D3D" strokeWidth={1.5} />
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              )}
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Copyright & AIFAS Credentials */}
      <div style={{ marginTop: 44, textAlign: "center", borderTop: "1px solid rgba(142,109,61,0.14)", paddingTop: 28 }}>
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", color: "rgba(40,22,10,0.52)", fontWeight: 400 }}>
          © {new Date().getFullYear()} Manjuu Mehta ✦ All Rights Reserved
        </p>
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "clamp(0.85rem, 1vw, 0.9rem)", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(142,109,61,0.65)", marginTop: 6 }}>
          AIFAS Elite Member
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
