import os, re

file_path = "src/pages/ServicesPage.tsx"
with open(file_path, "r") as f:
    content = f.read()

import_replace = """
// Import custom generated high-fidelity service images
import imgVastu from "@/assets/services/vastu.png";
import imgAstrology from "@/assets/services/astrology.png";
import imgNumerology from "@/assets/services/numerology.png";
import spiritualImg from "@/assets/spiritual_wcu.png";
"""
content = re.sub(r"// Import custom generated high-fidelity service images\n.*import imgGemstone.*?\n", import_replace.strip() + "\n", content, flags=re.DOTALL)

services_arr = """
const services = [
  {
    icon: Sparkles,
    image: imgAstrology,
    title: "Vedic Astrology",
    tagline: "Your Cosmic Blueprint, Decoded",
    desc: "Jyotisha — the eye of the Vedas — is a precise science mapping your karma, dharma and destiny through the positions of planets at your birth. Manjuu ji provides in-depth birth chart readings rooted in the classical Parashari tradition, offering clarity on every dimension of life from career and health to relationships and spiritual growth.",
    includes: [
      "Natal birth chart (Kundali) analysis",
      "Mahadasha & Antardasha prediction",
      "Transit (Gochar) analysis",
      "Navamsa & divisional chart readings",
      "Annual Varshaphal (Solar Return)",
      "Planetary remedies & gemstone prescriptions",
    ],
  },
  {
    icon: Hash,
    image: imgNumerology,
    title: "Karmic Numerology",
    tagline: "The Vibration of Your Name & Birth",
    desc: "Numbers are the language of the universe. Through the ancient Cheiro and Pythagorean systems of Numerology, Manjuu ji decodes the vibrational energy embedded in your name and date of birth — revealing your life path, soul urge, destiny number and karmic lessons with remarkable precision.",
    includes: [
      "Full numerology profile & life path",
      "Name correction & analysis",
      "Business name selection",
      "Lucky numbers, dates & colours",
      "Karmic debt identification",
      "Compatibility analysis through numbers",
    ],
  },
  {
    icon: Compass,
    image: imgVastu,
    title: "Vastu Consultation",
    tagline: "Align Your Space, Transform Your Life",
    desc: "Vastu Shastra is the ancient Indian science of space and energy. When your home or workplace is aligned with the five elements — Earth, Water, Fire, Air, and Space — harmony, prosperity and wellbeing flow naturally. Manjuu ji performs detailed on-site and remote Vastu audits, identifying energy imbalances and providing precise, practical remedies.",
    includes: [
      "Residential Vastu analysis",
      "Commercial & office Vastu audit",
      "Plot & construction Vastu",
      "Factory & industrial Vastu",
      "Directional corrections & remedies",
      "Vastu for health, wealth & relationships",
    ],
  },
  {
    icon: Heart,
    image: spiritualImg,
    title: "Spiritual Coaching",
    tagline: "Absolute Clarity for Confident Growth",
    desc: "Heal past blockages and gain absolute clarity for confident, aligned growth. Manjuu ji provides intuitive spiritual guidance to help you navigate life's challenges, dissolve inner limitations, and step into your highest potential.",
    includes: [
      "Personalized spiritual counseling",
      "Energy blockage identification",
      "Karmic pattern healing",
      "Guided meditation techniques",
      "Life path alignment",
      "Ongoing energetic support",
    ],
  },
];
"""

content = re.sub(r"const services = \[\n.*?\];\n", services_arr, content, flags=re.DOTALL)

if "Heart," not in content and " Heart " not in content:
    content = content.replace("Compass, ", "Compass, Heart, ")

content = content.replace("text-foreground/80 text-[15.5px] font-poppins", "text-foreground/80 font-poppins\" style={{ fontSize: \"clamp(1.12rem, 1.35vw, 1.15rem)\" }} className=\"")
content = content.replace("className=\"text-foreground/80 font-poppins\" style={{", "className=\"text-foreground/80 font-poppins\" style={{")

content = content.replace("className=\"font-poppins text-[9.5px] tracking-[0.18em] uppercase mt-1 font-bold\" style={{ color: \"#8E6D3D\" }}", "className=\"font-poppins tracking-[0.18em] uppercase mt-1 font-bold\" style={{ color: \"#8E6D3D\", fontSize: \"clamp(0.95rem, 1.2vw, 1.05rem)\" }}")
content = content.replace("className=\"leading-relaxed text-[13.5px] md:text-[14px] font-poppins mb-6\" style={{ color: \"rgba(40,22,10,0.80)\" }}", "className=\"leading-relaxed font-poppins mb-6\" style={{ color: \"rgba(40,22,10,0.80)\", fontSize: \"clamp(1.08rem, 1.35vw, 1.15rem)\" }}")
content = content.replace("className=\"font-cinzel tracking-[0.16em] font-bold text-[10.5px] uppercase mb-4\" style={{ color: \"#8E6D3D\" }}", "className=\"font-cinzel tracking-[0.16em] font-bold uppercase mb-4\" style={{ color: \"#8E6D3D\", fontSize: \"clamp(0.95rem, 1.2vw, 1.05rem)\" }}")
content = content.replace("className=\"flex items-start gap-2.5 text-foreground/75 text-[12.5px] font-poppins font-medium\" style={{ color: \"rgba(40,22,10,0.72)\" }}", "className=\"flex items-start gap-2.5 text-foreground/75 font-poppins font-medium\" style={{ color: \"rgba(40,22,10,0.72)\", fontSize: \"clamp(1rem, 1.2vw, 1.1rem)\" }}")
content = content.replace("className=\"inline-flex items-center gap-2 font-cinzel tracking-[0.2em] text-[10px] uppercase font-bold transition-all hover:gap-4 book-service-link\"", "className=\"inline-flex items-center gap-2 font-cinzel tracking-[0.2em] uppercase font-bold transition-all hover:gap-4 book-service-link\"")
content = content.replace("hover:gap-4 book-service-link\"\n                      style={{ color: \"#8E6D3D\" }}", "hover:gap-4 book-service-link\"\n                      style={{ color: \"#8E6D3D\", fontSize: \"clamp(0.95rem, 1.2vw, 1.05rem)\" }}")

with open(file_path, "w") as f:
    f.write(content)
print("Updated ServicesPage")
