import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { OrnDivider } from "@/components/SiteNav";

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
    <main className="relative min-h-screen pt-24" style={{ background: "linear-gradient(180deg, #FAF0E4 0%, #F5E6D2 50%, #FAF0E4 100%)" }}>
      {/* Background Star Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-30 star-field" />

      {/* ── Hero Banner ── */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        {/* Background radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full opacity-20 animate-glow-pulse"
            style={{ background: "radial-gradient(circle, rgba(197,146,42,0.14) 0%, transparent 70%)", filter: "blur(80px)" }} />
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
          <svg viewBox="0 0 100 100" fill="none" stroke="#C5922A" strokeWidth="0.6">
            <circle cx="50" cy="50" r="48" />
            <polygon points="50,2 98,50 50,98 2,50" transform="rotate(30 50 50)" />
          </svg>
        </div>

        <div className="relative max-w-3xl mx-auto anim-fadeup" style={{ zIndex: 1 }}>
          <p className="font-display tracking-[0.26em] text-[10px] font-bold uppercase mb-4" style={{ color: "#C5922A" }}>
            ✦ Begin Your Journey ✦
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-cinzel" style={{ color: "#7B1034" }}>
            Contact Us
          </h1>
          <OrnDivider style={{ margin: "0 auto 28px" } as React.CSSProperties} />
          <p className="text-foreground/75 text-xl font-garamond italic max-w-2xl mx-auto">
            Align your physical spaces and cosmic energies. Manjuu ji personally reviews and responds to every message.
          </p>
        </div>
      </section>

      {/* ── Main Content: Form + Details ── */}
      <section className="py-10 px-6 pb-32 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Column — Contact Form (7 cols on desktop) */}
          <div className="lg:col-span-7 anim-fadeup">
            <p className="font-poppins tracking-[0.16em] text-[#C5922A] text-xs font-bold uppercase mb-3">
              Direct Booking
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-[#7B1034] font-bold mb-8 leading-tight">
              Book Your Consultation
            </h2>

            {sent ? (
              <div className="p-10 md:p-14 text-center bg-white/70 border border-gold/18 rounded-2xl shadow-glow backdrop-blur-md">
                <div className="w-16 h-16 rounded-full bg-[#FAF3EB] border border-gold/28 flex items-center justify-center mb-6 text-gold mx-auto animate-glow-pulse">
                  <Send className="w-6 h-6" style={{ color: "#C5922A" }} />
                </div>
                <h3 className="font-cinzel text-xl text-[#7B1034] font-bold mb-3">Message Formed!</h3>
                <p className="text-foreground/70 max-w-sm font-poppins mx-auto text-sm leading-relaxed" style={{ color: "rgba(58,32,16,0.70)" }}>
                  You have been safely redirected to WhatsApp with your message pre-filled. Manjuu ji will reply to your request shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 px-8 py-3.5 rounded-full border border-gold text-[#7B1034] font-cinzel font-bold tracking-widest text-[10px] uppercase hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  style={{ border: "1.5px solid #C5922A" }}
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
                    <label className="block text-[#7B1034] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Full Name *</label>
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
                    <label className="block text-[#7B1034] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Phone *</label>
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
                  <label className="block text-[#7B1034] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Email</label>
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
                  <label className="block text-[#7B1034] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Service Required *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ appearance: "none" }}
                  >
                    <option value="" style={{ background: "#FAF0E4" }}>Select a service…</option>
                    <option value="Vastu Consultation" style={{ background: "#FAF0E4" }}>Vastu Consultation</option>
                    <option value="Vedic Astrology" style={{ background: "#FAF0E4" }}>Vedic Astrology</option>
                    <option value="Karmic Numerology" style={{ background: "#FAF0E4" }}>Karmic Numerology</option>
                    <option value="Match Making" style={{ background: "#FAF0E4" }}>Match Making (Kundali Milan)</option>
                    <option value="Business Guidance" style={{ background: "#FAF0E4" }}>Business Guidance</option>
                    <option value="Gemstone Counsel" style={{ background: "#FAF0E4" }}>Gemstone Counsel</option>
                    <option value="Not Sure" style={{ background: "#FAF0E4" }}>Not Sure — Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#7B1034] text-[10px] font-cinzel tracking-widest uppercase mb-2 font-bold">Your Message</label>
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
                  className="w-full py-4 rounded-full bg-gradient-gold font-cinzel tracking-[0.20em] text-[11px] uppercase shadow-gold transition-transform hover:scale-[1.01] flex items-center justify-center gap-3 text-[#7B1034] font-bold submit-btn"
                  style={{
                    background: "linear-gradient(135deg, #FDF6EE 0%, #C5922A 100%)",
                    border: "1.5px solid #C5922A",
                    boxShadow: "0 8px 24px -10px rgba(197,146,42,0.40)",
                    cursor: "pointer"
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
            <p className="font-poppins tracking-[0.16em] text-[#C5922A] text-xs font-bold uppercase mb-3">
              Prestige Channels
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl text-[#7B1034] font-bold mb-8 leading-tight">
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
                    boxShadow: "0 4px 18px -6px rgba(91,10,36,0.05)",
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

                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FDF6EE] border border-gold/28 flex items-center justify-center text-gold transition-all duration-400 card-icon-badge">
                    <c.icon className="w-5 h-5 icon-svg" strokeWidth={1.2} style={{ color: "#C5922A", transition: "all 0.4s ease" }} />
                  </div>
                  <div>
                    <p className="font-cinzel tracking-[0.16em] text-[#C5922A] text-[9.5px] uppercase mb-1.5 font-bold">
                      {c.label}
                    </p>
                    <p className="font-cinzel text-[#7B1034] text-base mb-1 font-bold leading-tight">
                      {c.value}
                    </p>
                    <p className="text-muted-foreground text-xs font-poppins font-medium" style={{ color: "rgba(58,32,16,0.55)" }}>
                      {c.sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Arched Personal Note Quote Block */}
            <div className="p-7 bg-[#F5ECE0]/40 border border-gold/18 shadow-inner flex flex-col justify-between"
              style={{
                borderRadius: "2.5rem 2.5rem 0.8rem 0.8rem",
                boxShadow: "inset 0 4px 20px rgba(91,10,36,0.02)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div>
                <p className="font-cinzel tracking-[0.16em] text-[#7B1034] font-bold text-xs uppercase mb-3">
                  ✦ A Personal Blessing ✦
                </p>
                <p className="text-foreground/75 leading-relaxed text-[14.5px] italic font-garamond" style={{ color: "rgba(58,32,16,0.80)" }}>
                  "Every seeker that reaches out to this sanctuary is treated as sacred. I review your planetary transits and Vastu inquiries personally, assuring that every consultation is structured with the deepest compassion, focus, and ancient wisdom."
                </p>
              </div>
              <p className="mt-4 font-cinzel text-[#C5922A] text-[10px] tracking-widest font-bold uppercase">
                — Manjuu Mehta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .contact-editorial-card:hover {
          transform: translateY(-4px);
          border-color: rgba(197, 146, 42, 0.48) !important;
          box-shadow: 0 20px 48px -12px rgba(91,10,36,0.12), 0 0 10px rgba(197,146,42,0.08) !important;
        }
        .contact-editorial-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
        
        .contact-detail-card:hover {
          transform: translateY(-4px);
          background: #ffffff !important;
          border-color: rgba(197, 146, 42, 0.48) !important;
          box-shadow: 0 16px 36px -12px rgba(91,10,36,0.10) !important;
        }
        .contact-detail-card:hover .card-top-line {
          transform: translateX(-50%) scaleX(1);
        }
        .contact-detail-card:hover .card-icon-badge {
          background: #7B1034 !important;
          border-color: #7B1034 !important;
          transform: scale(1.06);
        }
        .contact-detail-card:hover .icon-svg {
          color: #FAF0E4 !important;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px) scale(1.015);
          box-shadow: 0 12px 32px -8px rgba(197,146,42,0.60) !important;
          background: #FAF0E4 !important;
          border-color: #FAF0E4 !important;
        }
        
        .premium-input:focus {
          border-color: #7B1034 !important;
          box-shadow: 0 0 8px rgba(123, 16, 52, 0.15) !important;
          background: #ffffff !important;
        }
      `}</style>
    </main>
  );
};

export default ContactUs;
