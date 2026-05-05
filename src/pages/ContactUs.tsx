import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone & WhatsApp",
    value: "+91 77373 29191",
    href: "tel:+917737329191",
    sub: "Available Mon – Sat, 9 AM – 7 PM",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    value: "Chat on WhatsApp",
    href: "https://wa.me/917737329191",
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
    window.open(`https://wa.me/917737329191?text=${msg}`, "_blank");
    setSent(true);
  };

  const inputClass = `w-full px-5 py-4 rounded-xl text-foreground text-base bg-card/50 border border-primary/20 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/50`;

  return (
    <main className="relative min-h-screen pt-24">

      {/* ── Hero Banner ── */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full animate-glow-pulse opacity-20"
            style={{ background: "var(--gradient-aura)", filter: "blur(80px)" }} />
        </div>
        <div className="relative max-w-3xl mx-auto animate-rise">
          <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-4">Reach Out</p>
          <h1 className="font-display text-5xl md:text-7xl text-gold mb-6 leading-tight">Contact Us</h1>
          <div className="mx-auto h-px w-32 bg-gradient-gold mb-8" />
          <p className="text-foreground/75 text-xl italic leading-relaxed max-w-2xl mx-auto">
            Begin your journey toward cosmic clarity. Manjuu ji personally responds to every enquiry.
          </p>
        </div>
      </section>

      {/* ── Main Content: Form + Details ── */}
      <section className="py-10 px-6 pb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Left — Contact Form */}
          <div className="animate-rise">
            <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">Send a Message</p>
            <h2 className="font-display text-3xl md:text-4xl text-gold mb-8 leading-tight">
              Book Your Consultation
            </h2>

            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gold-border rounded-2xl bg-card/30">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-gold mb-3">Message Sent!</h3>
                <p className="text-foreground/70 max-w-sm">
                  You've been redirected to WhatsApp. Manjuu ji will respond to your enquiry shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 px-8 py-3 rounded-full gold-border text-primary font-display tracking-widest text-sm uppercase hover:bg-primary/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-muted-foreground text-xs font-display tracking-widest uppercase mb-2">Full Name *</label>
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
                    <label className="block text-muted-foreground text-xs font-display tracking-widest uppercase mb-2">Phone *</label>
                    <input
                      type="tel"
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
                  <label className="block text-muted-foreground text-xs font-display tracking-widest uppercase mb-2">Email</label>
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
                  <label className="block text-muted-foreground text-xs font-display tracking-widest uppercase mb-2">Service Required *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select a service…</option>
                    <option value="Vastu Consultation">Vastu Consultation</option>
                    <option value="Vedic Astrology">Vedic Astrology</option>
                    <option value="Karmic Numerology">Karmic Numerology</option>
                    <option value="Match Making">Match Making (Kundali Milan)</option>
                    <option value="Business Guidance">Business Guidance</option>
                    <option value="Gemstone Counsel">Gemstone Counsel</option>
                    <option value="Not Sure">Not Sure — Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-muted-foreground text-xs font-display tracking-widest uppercase mb-2">Your Message</label>
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
                  className="w-full py-4 rounded-full bg-gradient-gold font-display tracking-widest text-sm uppercase shadow-glow transition-transform hover:scale-[1.02] flex items-center justify-center gap-3"
                  style={{ color: "hsl(250 45% 6%)" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Send via WhatsApp
                </button>
                <p className="text-center text-muted-foreground text-xs">
                  Submitting this form will open WhatsApp with your message pre-filled.
                </p>
              </form>
            )}
          </div>

          {/* Right — Contact Details */}
          <div className="animate-rise" style={{ animationDelay: "0.15s" }}>
            <p className="font-display tracking-widest text-primary/80 text-sm uppercase mb-3">Get in Touch</p>
            <h2 className="font-display text-3xl md:text-4xl text-gold mb-8 leading-tight">
              Contact Details
            </h2>

            <div className="space-y-4 mb-12">
              {contactDetails.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 p-6 rounded-2xl bg-card/40 backdrop-blur gold-border hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <c.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display tracking-widest text-primary/70 text-xs uppercase mb-1">{c.label}</p>
                    <p className="font-display text-gold text-base mb-1">{c.value}</p>
                    <p className="text-muted-foreground text-sm">{c.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick note */}
            <div className="p-6 rounded-2xl bg-primary/5 gold-border">
              <p className="font-display tracking-widest text-gold text-sm uppercase mb-3">A Personal Note</p>
              <p className="text-foreground/75 leading-relaxed italic">
                "Every soul that reaches out to me is treated as sacred. I personally review every message
                and ensure each consultation is as thorough and compassionate as possible."
              </p>
              <p className="mt-3 font-display text-primary text-sm tracking-widest uppercase">— Manjuu Mehta</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactUs;
