import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-primary/15 pt-20 pb-8 px-6 mt-10 bg-card/30">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
      
      {/* Brand Column */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="font-display tracking-[0.25em] text-gold text-2xl mb-2">MANJUU MEHTA</h2>
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Vastu · Astrology · Numerology
        </p>
        <p className="text-sm text-foreground/70 italic leading-relaxed max-w-sm">
          Guiding you toward prosperity, harmony, and purpose through the ancient sciences of the cosmos.
        </p>
      </div>

      {/* Menu Column */}
      <div className="flex flex-col items-center">
        <h3 className="font-display tracking-widest text-gold text-lg mb-6 uppercase">Quick Links</h3>
        <ul className="flex flex-col space-y-4 text-sm font-display tracking-widest uppercase text-muted-foreground items-center">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
          <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
          <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
        </ul>
      </div>

      {/* Contacts Column */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <h3 className="font-display tracking-widest text-gold text-lg mb-6 uppercase">Contact Details</h3>
        <ul className="flex flex-col space-y-4 text-sm text-foreground/80 items-center md:items-end">
          <li className="flex items-center gap-3 justify-center md:justify-end">
            <a href="mailto:manjuumehta1@gmail.com" className="hover:text-primary transition-colors">manjuumehta1@gmail.com</a>
            <Mail className="w-4 h-4 text-primary" />
          </li>
          <li className="flex items-center gap-3 justify-center md:justify-end">
            <a href="tel:+917310952576" className="hover:text-primary transition-colors">+91 73109 52576</a>
            <Phone className="w-4 h-4 text-primary" />
          </li>
          <li className="flex items-center gap-3 justify-center md:justify-end">
            <a href="tel:+917737329191" className="hover:text-primary transition-colors">+91 77373 29191</a>
            <Phone className="w-4 h-4 text-transparent" />
          </li>
          <li className="flex items-center gap-3 justify-center md:justify-end">
            <span className="hover:text-primary transition-colors">Haridwar</span>
            <MapPin className="w-4 h-4 text-primary" />
          </li>
        </ul>
        <div className="flex justify-center md:justify-end gap-4 mt-8">
          <a href="#" className="p-3 gold-border rounded-full text-primary hover:bg-primary/10 transition-colors shadow-glow">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="p-3 gold-border rounded-full text-primary hover:bg-primary/10 transition-colors shadow-glow">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto border-t border-primary/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-xs text-muted-foreground/70 italic">
        © {new Date().getFullYear()} Manjuu Mehta · All Rights Reserved
      </p>
      <p className="text-xs text-muted-foreground/50 uppercase tracking-widest font-display">
        AIFAS Elite Member
      </p>
    </div>
  </footer>
);

export default Footer;
