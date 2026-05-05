import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

const SiteNav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      {/* ── Header ── */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}
        className="backdrop-blur-md bg-background/80 lg:bg-background/40 border-b border-primary/10"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link to="/" onClick={close} className="flex items-center gap-3">
            <span className="text-2xl font-display" style={{ color: "hsl(42 88% 62%)" }}>✦</span>
            <div className="font-display tracking-[0.25em] text-sm lg:text-base" style={{ color: "hsl(42 88% 62%)" }}>
              MANJUU MEHTA
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-display tracking-widest uppercase">
            {links.map((l) => (
              <li key={l.href}>
                <Link to={l.href}
                  className={`relative group transition-colors ${location.pathname === l.href ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                >
                  {l.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-gradient-gold transition-all duration-300 ${location.pathname === l.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link to="/contact"
              className="hidden lg:inline-flex px-5 py-2 rounded-full gold-border text-primary text-xs font-display tracking-widest uppercase hover:bg-primary/10 transition"
            >
              Book Consult
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Open menu"
              className="lg:hidden"
              style={{
                background: "transparent",
                border: "none",
                color: "hsl(42 88% 62%)",
                cursor: "pointer",
                padding: 4,
              }}
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Overlay — rendered at document level via high z-index ── */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "hsl(250 45% 5% / 0.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Close button — top right, explicitly styled */}
          <button
            onClick={close}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "transparent",
              border: "none",
              color: "hsl(42 88% 62%)",
              cursor: "pointer",
              padding: 4,
            }}
          >
            <X size={24} />
          </button>

          {/* Brand name inside menu */}
          <p className="font-display tracking-[0.3em] text-sm uppercase mb-12"
            style={{ color: "hsl(42 88% 62% / 0.5)" }}>
            MANJUU MEHTA
          </p>

          {/* Nav links */}
          <ul className="flex flex-col items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={close}
                  className="font-display tracking-widest uppercase text-2xl transition-colors"
                  style={{
                    color: location.pathname === l.href
                      ? "hsl(42 88% 62%)"
                      : "hsl(42 60% 88% / 0.75)",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            onClick={close}
            className="mt-12 px-10 py-4 rounded-full font-display tracking-widest text-sm uppercase shadow-glow bg-gradient-gold"
            style={{ color: "hsl(250 45% 6%)" }}
          >
            Book Consult
          </Link>

          <p className="mt-12 text-xs tracking-[0.3em] uppercase font-display"
            style={{ color: "hsl(42 60% 88% / 0.3)" }}>
            Vastu · Astrology · Numerology
          </p>
        </div>
      )}
    </>
  );
};

export default SiteNav;
