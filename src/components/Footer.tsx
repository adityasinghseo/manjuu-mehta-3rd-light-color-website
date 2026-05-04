const Footer = () => (
  <footer className="relative border-t border-primary/15 py-14 px-6 mt-20">
    <div className="max-w-7xl mx-auto text-center">
      <p className="font-sanskrit text-primary/80 text-2xl mb-3">ॐ शान्तिः शान्तिः शान्तिः</p>
      <p className="font-display tracking-[0.3em] text-gold text-lg mb-2">MANJUU MEHTA</p>
      <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
        Vastu Advisor · Astrologer · Karmic Numerologist
      </p>
      <div className="flex justify-center gap-8 text-sm text-muted-foreground font-display tracking-widest uppercase flex-wrap">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#awards" className="hover:text-primary transition-colors">Awards</a>
        <a href="#consult" className="hover:text-primary transition-colors">Consult</a>
      </div>
      <p className="mt-10 text-xs text-muted-foreground/70 italic">
        © {new Date().getFullYear()} Manjuu Mehta · AIFAS Elite Member · Haridwar, Uttarakhand
      </p>
    </div>
  </footer>
);
export default Footer;
