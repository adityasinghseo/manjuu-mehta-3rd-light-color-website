const Footer = () => (
  <footer className="relative border-t border-primary/15 py-14 px-6 mt-20">
    <div className="max-w-7xl mx-auto text-center">
      <p className="font-sanskrit text-primary/80 text-2xl mb-3">ॐ शान्तिः शान्तिः शान्तिः</p>
      <p className="font-display tracking-[0.3em] text-gold text-sm mb-6">JYOTISHA · THE EYE OF THE VEDAS</p>
      <div className="flex justify-center gap-8 text-sm text-muted-foreground font-display tracking-widest uppercase">
        <a href="#" className="hover:text-primary transition-colors">Kundli</a>
        <a href="#" className="hover:text-primary transition-colors">Panchang</a>
        <a href="#" className="hover:text-primary transition-colors">Mantras</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <p className="mt-10 text-xs text-muted-foreground/70 italic">
        © {new Date().getFullYear()} Jyotisha · Crafted under a benefic alignment of Guru and Shukra.
      </p>
    </div>
  </footer>
);
export default Footer;
