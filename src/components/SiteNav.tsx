const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#awards", label: "Awards" },
  { href: "#wisdom", label: "Wisdom" },
];

const SiteNav = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-primary/10">
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <a href="#" className="flex items-center gap-3">
        <span className="text-2xl text-gold font-display">✦</span>
        <div className="leading-tight">
          <div className="font-display tracking-[0.25em] text-gold text-sm md:text-base">MANJUU MEHTA</div>
          <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase hidden md:block">Vastu · Astrology · Numerology</div>
        </div>
      </a>
      <ul className="hidden md:flex items-center gap-10 text-sm font-display tracking-widest uppercase">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className="text-foreground/80 hover:text-primary transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-gold group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
      <a href="#consult" className="px-5 py-2 rounded-full gold-border text-primary text-xs font-display tracking-widest uppercase hover:bg-primary/10 transition">
        Book Consult
      </a>
    </nav>
  </header>
);

export default SiteNav;
