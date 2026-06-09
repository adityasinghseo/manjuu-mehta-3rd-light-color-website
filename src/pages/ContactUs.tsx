import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { OrnDivider } from "@/components/SiteNav";
import Consult from "@/components/Consult";

const contactDetails = [
  {
    icon: Phone,
    label: "Primary Phone",
    value: "+91 73109 52576",
    href: "tel:+917310952576",
    sub: "Available Mon – Sat, 9 AM – 7 PM",
  },
  {
    icon: Phone,
    label: "Alternate Phone",
    value: "+91 77373 29191",
    href: "tel:+917737329191",
    sub: "For general inquiries",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    value: "Chat on WhatsApp",
    href: "https://wa.me/917310952576",
    sub: "Quickest way to connect",
  },
  {
    icon: Mail,
    label: "Email",
    value: "manjuumehta1@gmail.com",
    href: "mailto:manjuumehta1@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Haridwar, Uttarakhand",
    href: "#",
    sub: "Remote consultations available worldwide",
  },
  {
    icon: Clock,
    label: "Consultation Hours",
    value: "Mon – Sat: 9 AM – 7 PM",
    href: "#",
    sub: "IST (Indian Standard Time)",
  },
];

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hello Manjuu ji,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0A%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917310952576?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputClass = `w-full px-5 py-4 rounded-xl text-foreground text-[14.5px] bg-white/40 border border-gold/22 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/40 font-poppins premium-input`;

  return (
    <main className="relative min-h-screen pt-24" style={{ background: "var(--color-bg-primary)" }}>
      {/* Background Star Overlay */}
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
          right: "-10%",
          width: "45%",
          maxWidth: 450,
          aspectRatio: "1",
          opacity: 0.02,
          pointerEvents: "none",
          zIndex: 0,
        }}>
          <svg viewBox="0 0 100 100" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.6">
            <circle cx="50" cy="50" r="48" />
            <polygon points="50,2 98,50 50,98 2,50" transform="rotate(30 50 50)" />
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto anim-fadeup" style={{ zIndex: 1 }}>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-cinzel" style={{ color: "var(--color-text-heading)" }}>
            Contact Us
          </h1>
          <OrnDivider style={{ margin: "0 auto 28px" } as React.CSSProperties} />
          <p className="text-foreground/80 text-[15.5px] font-poppins leading-relaxed max-w-2xl mx-auto">
            Align your physical spaces and cosmic energies. Manjuu ji personally reviews and responds to every message.
          </p>
        </div>
      </section>

      {/* ── Main Content: Form + Details ── */}
      <section className="py-10 px-6 pb-32 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Column — Contact Form (7 cols on desktop) */}
          <div className="lg:col-span-7 anim-fadeup">
            <p className="font-poppins tracking-[0.16em] text-[var(--color-accent-gold)] text-xs font-bold uppercase mb-3">
              Direct Booking
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-[var(--color-text-heading)] font-bold mb-8 leading-tight">
              Book Your Consultation
            </h2>

            {sent ? (
              <div className="p-10 md:p-14 text-center bg-white/70 border border-gold/18 rounded-2xl shadow-glow backdrop-blur-md">
                <div className="w-16 h-16 rounded-full bg-[#FAF3EB] border border-gold/28 flex items-center justify-center mb-6 text-gold mx-auto animate-glow-pulse">
                  <Send className="w-6 h-6" style={{ color: "var(--color-accent-gold)" }} />
                </div>
                <h3 className="font-cinzel text-xl text-[var(--color-accent-gold)] font-bold mb-3">Message Formed!</h3>
                <p className="text-foreground/70 max-w-sm font-poppins mx-auto text-sm leading-relaxed" style={{ color: "rgba(58,32,16,0.70)" }}>
                  You have been safely redirected to WhatsApp with your message pre-filled. Manjuu ji will reply to your request shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 px-8 py-3.5 rounded-full border border-gold text-[var(--color-accent-gold)] font-cinzel font-bold tracking-widest uppercase hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  style={{ border: "1.5px solid var(--color-accent-gold)", fontSize: "clamp(1.15rem, 1.2vw, 1.2rem)" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-10 bg-white/78 border border-gold/18 rounded-2xl shadow-glow space-y-6 relative overflow-hidden contact-editorial-card"
                style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
              >
                {/* Expanding Top Line */}
                <div className="card-top-line" style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%) scaleX(0)",
                  width: "100%",
                  height: 3,
                  background: "var(--grad-gold)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  transformOrigin: "center",
                }} />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[var(--color-accent-gold)] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[var(--color-accent-gold)] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Phone *</label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 _____ _____"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[var(--color-accent-gold)] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-[var(--color-accent-gold)] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Service Required *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ appearance: "none" }}
                  >
                    <option value="" style={{ background: "#FFFFFF" }}>Select a service…</option>
                    <option value="Vastu Consultation" style={{ background: "#FFFFFF" }}>Vastu Consultation</option>
                    <option value="Vedic Astrology" style={{ background: "#FFFFFF" }}>Vedic Astrology</option>
                    <option value="Karmic Numerology" style={{ background: "#FFFFFF" }}>Karmic Numerology</option>
                    <option value="Match Making" style={{ background: "#FFFFFF" }}>Match Making (Kundali Milan)</option>
                    <option value="Business Guidance" style={{ background: "#FFFFFF" }}>Business Guidance</option>
                    <option value="Gemstone Counsel" style={{ background: "#FFFFFF" }}>Gemstone Counsel</option>
                    <option value="Not Sure" style={{ background: "#FFFFFF" }}>Not Sure — Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[var(--color-accent-gold)] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Your Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell Manjuu ji a little about yourself and what you're seeking guidance on…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-gold font-cinzel tracking-[0.20em] uppercase shadow-gold transition-transform hover:scale-[1.01] flex items-center justify-center gap-3 text-white font-bold submit-btn"
                  style={{
                    background: "var(--color-accent-gold)",
                    color: "#FFFFFF",
                    border: "1.5px solid var(--color-accent-gold)",
                    boxShadow: "0 8px 24px -10px rgba(var(--color-accent-gold-rgb),0.40)",
                    cursor: "pointer",
                    fontSize: "clamp(1.15rem, 1.2vw, 1.2rem)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </button>
                <p className="text-center text-muted-foreground text-[9px] font-poppins" style={{ color: "rgba(58,32,16,0.50)" }}>
                  ✦ Submitting this form will open WhatsApp with your message pre-filled. ✦
                </p>
              </form>
            )}
          </div>

          {/* Right Column — Contact Details (5 cols on desktop) */}
          <div className="lg:col-span-5 anim-fadeup" style={{ animationDelay: "0.15s" }}>
            <p className="font-poppins tracking-[0.16em] text-[var(--color-accent-gold)] text-xs font-bold uppercase mb-3">
              Prestige Channels
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-[var(--color-text-heading)] font-bold mb-8 leading-tight">
              Contact Details
            </h2>

            <div className="space-y-4 mb-8">
              {contactDetails.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-6 bg-white/78 border border-gold/18 rounded-2xl flex items-start gap-5 transition-all duration-400 contact-detail-card"
                  style={{
                    boxShadow: "0 4px 18px -6px rgba(var(--color-text-heading-rgb),0.05)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Sliding Top Line */}
                  <div className="card-top-line" style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%) scaleX(0)",
                    width: "100%",
                    height: 2.5,
                    background: "var(--grad-gold)",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    transformOrigin: "center",
                  }} />

                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gold/35 flex items-center justify-center text-gold transition-all duration-400 card-icon-badge" style={{ background: "var(--color-bg-primary)" }}>
                    <c.icon className="w-5 h-5 icon-svg" strokeWidth={1.2} style={{ color: "var(--color-accent-gold)", transition: "all 0.4s ease" }} />
                  </div>
                  <div>
                    <p className="font-cinzel tracking-[0.16em] text-[var(--color-accent-gold)] text-[9.5px] uppercase mb-1.5 font-bold">
                      {c.label}
                    </p>
                    <p className="font-cinzel text-[var(--color-accent-gold)] text-base mb-1 font-bold leading-tight">
                      {c.value}
                    </p>
                    <p className="text-muted-foreground text-xs font-poppins font-medium" style={{ color: "rgba(58,32,16,0.55)" }}>
                      {c.sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .contact-editorial-card:hover {
          transform: translateY(-4px);
          border-color: rgba(var(--color-accent-gold-rgb), 0.48) !important;
          box-shadow: 0 20px 48px -12px rgba(var(--color-text-heading-rgb),0.12), 0 0 10px rgba(var(--color-accent-gold-rgb),0.08) !important;
        }
        .contact-editorial-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
        
        .contact-detail-card:hover {
          transform: translateY(-4px);
          background: #ffffff !important;
          border-color: rgba(var(--color-accent-gold-rgb), 0.48) !important;
          box-shadow: 0 16px 36px -12px rgba(var(--color-text-heading-rgb),0.10) !important;
        }
        .contact-detail-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
        .contact-detail-card:hover .card-icon-badge {
          background: var(--color-accent-gold) !important;
          border-color: var(--color-accent-gold) !important;
          transform: scale(1.06);
        }
        .contact-detail-card:hover .icon-svg {
          color: #FFFFFF !important;
        }
        
        .submit-btn {
          background: var(--color-accent-gold) !important;
          color: #FFFFFF !important;
          border-color: var(--color-accent-gold) !important;
          transition: all 0.25s ease !important;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px) scale(1.015);
          box-shadow: 0 12px 32px -8px rgba(var(--color-accent-gold-rgb),0.35) !important;
          background: var(--color-accent-light) !important;
          border-color: var(--color-accent-light) !important;
          color: #FFFFFF !important;
        }
        
        .premium-input:focus {
          border-color: var(--color-accent-gold) !important;
          box-shadow: 0 0 8px rgba(var(--color-accent-gold-rgb), 0.15) !important;
          background: #ffffff !important;
        }
      `}</style>
      <Consult />
    </main>
  );
};

export default ContactUs;
