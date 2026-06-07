import { useState, useEffect } from "react";
import { Anchor, Sparkles, Sun } from "lucide-react";

type Theme = "theme-navy" | "theme-purple" | "theme-white";

interface ThemeOption {
  id: Theme;
  label: string;
  shortLabel: string;
  Icon: React.FC<{ size?: number; style?: React.CSSProperties }>;
  previewBg: string;
  previewDot: string;
  description: string;
}

const THEMES: ThemeOption[] = [
  {
    id: "theme-navy",
    label: "Royal Navy + Gold",
    shortLabel: "Navy",
    Icon: ({ size = 14, style }) => <Anchor size={size} style={style} />,
    previewBg: "#0F172A",
    previewDot: "#D4AF37",
    description: "Premium & Trusted",
  },
  {
    id: "theme-purple",
    label: "Deep Purple + Gold",
    shortLabel: "Mystic",
    Icon: ({ size = 14, style }) => <Sparkles size={size} style={style} />,
    previewBg: "#12082A",
    previewDot: "#D4AF37",
    description: "Astrology & Mystical",
  },
  {
    id: "theme-white",
    label: "White + Gold",
    shortLabel: "Light",
    Icon: ({ size = 14, style }) => <Sun size={size} style={style} />,
    previewBg: "#FFFFFF",
    previewDot: "#B8860B",
    description: "Bright & Elegant",
  },
];

const ThemeToggle = () => {
  const [active, setActive] = useState<Theme>("theme-navy");
  const [open, setOpen] = useState(false);

  // Initialise from localStorage or default to navy
  useEffect(() => {
    const saved = localStorage.getItem("site-theme") as Theme | null;
    const initial = saved && ["theme-navy", "theme-purple", "theme-white"].includes(saved)
      ? saved
      : "theme-navy";
    apply(initial);
  }, []);

  const apply = (theme: Theme) => {
    setActive(theme);
    localStorage.setItem("site-theme", theme);
    document.documentElement.classList.remove("theme-navy", "theme-purple", "theme-white");
    document.documentElement.classList.add(theme);
  };

  const current = THEMES.find(t => t.id === active)!;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 28,
        left: 24,
        zIndex: 9999,
        animation: "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both",
      }}
    >
      {/* Flyout panel */}
      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 12px)",
            left: 0,
            background: "var(--color-bg-secondary, #1E293B)",
            border: "1.5px solid rgba(var(--color-accent-gold-rgb, 212,175,55), 0.30)",
            borderRadius: 16,
            padding: "14px 12px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(212,175,55,0.08)",
            backdropFilter: "blur(20px)",
            minWidth: 210,
            animation: "fadeUp 0.25s ease both",
          }}
        >
          {/* Panel title */}
          <p style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 700,
            fontSize: 10,
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "var(--color-accent-gold, #D4AF37)",
            marginBottom: 10,
            paddingLeft: 4,
          }}>
            ✦ Choose Theme
          </p>

          {/* Theme options */}
          {THEMES.map(t => (
            <button
              key={t.id}
              onClick={() => { apply(t.id); setOpen(false); }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                padding: "9px 10px",
                borderRadius: 10,
                border: active === t.id
                  ? "1.5px solid rgba(var(--color-accent-gold-rgb, 212,175,55), 0.65)"
                  : "1.5px solid transparent",
                background: active === t.id
                  ? "rgba(var(--color-accent-gold-rgb, 212,175,55), 0.10)"
                  : "transparent",
                cursor: "pointer",
                marginBottom: 4,
                transition: "all 0.25s ease",
              }}
              className="theme-btn-option"
            >
              {/* Colour swatch */}
              <div style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: t.previewBg,
                border: "1.5px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: t.previewDot,
                }} />
              </div>

              {/* Labels */}
              <div style={{ textAlign: "left" }}>
                <div style={{
                  fontFamily: "Cinzel, serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  color: active === t.id
                    ? "var(--color-accent-gold, #D4AF37)"
                    : "var(--color-text-primary, #E2E8F0)",
                }}>
                  {t.label}
                </div>
                <div style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 10,
                  color: "var(--color-text-muted, #94A3B8)",
                  marginTop: 1,
                }}>
                  {t.description}
                </div>
              </div>

              {/* Active checkmark */}
              {active === t.id && (
                <div style={{
                  marginLeft: "auto",
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: "var(--color-accent-gold, #D4AF37)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Trigger button */}
      <button
        id="theme-toggle-btn"
        onClick={() => setOpen(v => !v)}
        aria-label={`Current theme: ${current.label}. Click to change theme.`}
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "var(--color-bg-secondary, #1E293B)",
          border: "1.5px solid rgba(var(--color-accent-gold-rgb, 212,175,55), 0.40)",
          padding: "9px 16px",
          borderRadius: "999px",
          cursor: "pointer",
          color: "var(--color-accent-gold, #D4AF37)",
          boxShadow: "var(--shadow-card)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          fontFamily: "Cinzel, serif",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
        className="theme-trigger-btn"
      >
        {/* Colour dot */}
        <div style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: current.previewDot,
          border: "1.5px solid rgba(255,255,255,0.18)",
          flexShrink: 0,
        }} />
        <span>{current.shortLabel}</span>
        {/* Chevron */}
        <svg
          width="10" height="10" viewBox="0 0 12 12" fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style>{`
        .theme-trigger-btn:hover {
          border-color: rgba(var(--color-accent-gold-rgb, 212,175,55), 0.75) !important;
          box-shadow: var(--shadow-card), var(--shadow-gold) !important;
          transform: translateY(-2px);
        }
        .theme-trigger-btn:focus {
          outline: 2px solid var(--color-accent-gold, #D4AF37);
          outline-offset: 3px;
        }
        .theme-btn-option:hover {
          background: rgba(var(--color-accent-gold-rgb, 212,175,55), 0.08) !important;
        }
      `}</style>
    </div>
  );
};

export default ThemeToggle;
