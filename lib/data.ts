import type {
  NavItem,
  Service,
  ProcessStep,
  CoreValue,
  Project,
  Stat,
  ContactInfo,
  ClientLogo,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  { value: 6, suffix: "+", label: "Years of Excellence" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Brand Partners" },
  { value: 12, suffix: "", label: "Service Verticals" },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: 1,
    title: "Trade Shows",
    description: "High-impact booth design and fabrication that commands attention on the exhibition floor.",
    icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11",
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "End-to-end event production that reflects your brand's stature and vision.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    id: 3,
    title: "Conferences",
    description: "Thoughtful spatial design and logistics for conferences that inspire and connect.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    id: 4,
    title: "Event Management",
    description: "Seamless planning and execution from concept to teardown, every time.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
  },
  {
    id: 5,
    title: "Exhibition Management",
    description: "Full-cycle exhibition management for domestic and international shows.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    id: 6,
    title: "Exhibition Designer",
    description: "Custom, award-worthy exhibition design that tells your brand story spatially.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    id: 7,
    title: "Brand Promotions",
    description: "Strategic on-ground promotions that build awareness and drive conversion.",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
  },
  {
    id: 8,
    title: "Product Launch",
    description: "Memorable launch events that generate buzz, coverage, and lasting impressions.",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
  },
  {
    id: 9,
    title: "Brand Activation",
    description: "Immersive, interactive experiences that forge genuine human-brand connections.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    id: 10,
    title: "Award Ceremonies",
    description: "Elegant, prestigious ceremonies that celebrate achievement with gravitas.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    id: 11,
    title: "Decor & Concept",
    description: "Bespoke décor and conceptual design that transforms any space into an experience.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    id: 12,
    title: "Road Shows",
    description: "Multi-city roadshows that carry your brand narrative across geographies.",
    icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
  },
];

// ─── Process Steps ─────────────────────────────────────────────────────────────
export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin by deeply understanding your brand narrative, target audience, and objectives. Through collaborative workshops and research, we uncover the insights that will shape your experience.",
  },
  {
    id: 2,
    number: "02",
    title: "Impact & Measurement",
    description:
      "We don't stop at opening day. We measure engagement, gather feedback, and analyze the impact of your experience to ensure lasting results and continuous improvement.",
  },
  {
    id: 3,
    number: "03",
    title: "Creative Conceptualization",
    description:
      "Our creative team transforms insights into compelling spatial concepts. We explore innovative ideas, push boundaries, and develop designs that are both visually striking and strategically aligned.",
  },
  {
    id: 4,
    number: "04",
    title: "Concepts",
    description:
      "From detailed planning to flawless execution, we manage every aspect with precision. Our team coordinates vendors, oversees quality, and ensures your vision comes to life exactly as imagined.",
  },
  {
    id: 5,
    number: "05",
    title: "Execution & Delivery",
    description:
      "From logistics and permits to on-site setup and teardown — we manage every operational detail so you can focus on your audience.",
  },
];


// ─── Core Values ──────────────────────────────────────────────────────────────
export const CORE_VALUES: CoreValue[] = [
  {
    id: 1,
    title: "Relentless Excellence",
    description: "We hold ourselves to a standard that goes beyond client expectations. Mediocrity is not an option — in concept, craft, or delivery.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  },
  {
    id: 2,
    title: "Design at the Core",
    description: "Every decision — spatial, material, experiential — is filtered through the lens of design thinking. Beauty and function are never at odds.",
    icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  },
  {
    id: 3,
    title: "Integrity in Every Interaction",
    description: "We communicate honestly about timelines, budgets, and limitations. Trust is the foundation of every long-term partnership we build.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    id: 4,
    title: "Responsible Creation",
    description: "We are mindful of the materials we use, the waste we generate, and the communities we work within. Creating beautifully means creating responsibly.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
// export const PROJECTS: Project[] = [
//   {
//     id: 1,
//     client: "Anithaa Weaving Mill",
//     category: "Exhibition Design",
//     description: "A textile heritage experience that brought the art of weaving to life through spatial narrative.",
//     colorFrom: "#0E516D",
//     colorTo: "#1a7fa0",
//     tags: ["Trade Show", "Exhibition Design"],
//     image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
//   },
//   {
//     id: 2,
//     client: "AB Collections",
//     category: "Brand Activation",
//     description: "A high-energy brand activation that positioned AB Collections at the forefront of fashion retail.",
//     colorFrom: "#2c3e50",
//     colorTo: "#0E516D",
//     tags: ["Brand Activation", "Retail"],
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
//   },
//   {
//     id: 3,
//     client: "Azerbaijan Tourism",
//     category: "Trade Show",
//     description: "An immersive country pavilion that transported visitors to the landscapes and culture of Azerbaijan.",
//     colorFrom: "#1a5276",
//     colorTo: "#2e86c1",
//     tags: ["Pavilion", "Tourism"],
//     image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&q=80",
//   },
//   {
//     id: 4,
//     client: "Roboqbo",
//     category: "Corporate Event",
//     description: "Precision-engineered event identity for an Italian industrial food-tech brand entering India.",
//     colorFrom: "#0a3d53",
//     colorTo: "#0E516D",
//     tags: ["Corporate", "Product Launch"],
//     image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
//   },
//   {
//     id: 5,
//     client: "Shiv Shakti Group",
//     category: "Product Launch",
//     description: "A commanding product launch environment that set a new benchmark for agricultural innovation.",
//     colorFrom: "#17618a",
//     colorTo: "#0a3d53",
//     tags: ["Product Launch", "Exhibition"],
//     image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
//   },
//   {
//     id: 6,
//     client: "Vi-Power Gold",
//     category: "Brand Promotion",
//     description: "Grassroots brand promotions and activations that built deep community affinity.",
//     colorFrom: "#0E516D",
//     colorTo: "#073a50",
//     tags: ["Brand Promotion", "Activation"],
//     image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
//   },
// ];

// ─── Client Logos ─────────────────────────────────────────────────────────────
// Logos via Clearbit public logo API (https://logo.clearbit.com/{domain}).
// Domains are best-match corporate sites; UI falls back to name if a logo is missing.
export const CLIENTS: ClientLogo[] = [
  { name: "Vibrant", logoUrl: "https://logo.clearbit.com/vibrantindia.com" },
  { name: "Kutchina", logoUrl: "https://logo.clearbit.com/kutchina.com" },
  { name: "Zedpack", logoUrl: "https://logo.clearbit.com/zedpack.com" },
  { name: "Makino", logoUrl: "https://logo.clearbit.com/makino.com" },
  { name: "Metrochem API", logoUrl: "https://logo.clearbit.com/metrochem.co.in" },
  { name: "Power Plus Store", logoUrl: "https://logo.clearbit.com/powerplus.com" },
  { name: "Paris Premium", logoUrl: "https://logo.clearbit.com/parispremium.com" },
  { name: "Monarko", logoUrl: "https://logo.clearbit.com/monarko.com" },
  { name: "LiuGong", logoUrl: "https://logo.clearbit.com/liugong.com" },
  { name: "Magnus", logoUrl: "https://logo.clearbit.com/magnusindia.com" },
  { name: "Caterpillar", logoUrl: "https://logo.clearbit.com/caterpillar.com" },
  { name: "Amrita Hospital", logoUrl: "https://logo.clearbit.com/amritahospitals.org" },
  { name: "NEASE", logoUrl: "https://logo.clearbit.com/nease.in" },
  { name: "OLFA Originals", logoUrl: "https://logo.clearbit.com/olfa.com" },
  { name: "Corona Extra", logoUrl: "https://logo.clearbit.com/corona.com" },
  { name: "Leo Burnett", logoUrl: "https://logo.clearbit.com/leoburnett.com" },
  { name: "GroupM", logoUrl: "https://logo.clearbit.com/groupm.com" },
  { name: "Isuzu", logoUrl: "https://logo.clearbit.com/isuzu.com" },
  { name: "SREI", logoUrl: "https://logo.clearbit.com/srei.com" },
  { name: "WC Creations", logoUrl: "https://logo.clearbit.com/wccreations.com" },
  { name: "Jaquet Technology Group", logoUrl: "https://logo.clearbit.com/jaquet.com" },
  { name: "AVA", logoUrl: "https://logo.clearbit.com/avagroup.com" },
  { name: "Ambrane", logoUrl: "https://logo.clearbit.com/ambrane.com" },
  { name: "X-Rite Pantone", logoUrl: "https://logo.clearbit.com/xrite.com" },
  { name: "Herman Hansen Norway", logoUrl: "https://logo.clearbit.com/akersolutions.com" },
  { name: "EESL", logoUrl: "https://logo.clearbit.com/eeslindia.co.in" },
  { name: "Indo Farm Equipment", logoUrl: "https://logo.clearbit.com/indofarm.co.in" },
];

// ─── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT_INFO: ContactInfo = {
  phone: ["0120 - 471 - 5385"],
  email: "info@globexinfra.com",
  website: "www.globexinfra.com",
  address: "807, Supertech Astralis, Sec-94, Noida, U.P, India",
};

export const PROJECTS: any[] = [
  {
    id: 1,
    slug: "Supreme",
    client: "Supreme",
    category: "Exhibition Design",
    description: "Supreme's Protective Packaging division offers versatile protective solutions across automotive",
    colorFrom: "#0E516D",
    colorTo: "#1a7fa0",
    tags: ["Trade Show"],
    image: "/images/supreme/0.61.png",
    year: "2025",
    deliverables: "Exhibition Design, Spatial Narrative, Fabrication",
    overviewTitle: "Supreme Protective Packaging Products",
    overviewBody: [
      "Supreme's Protective Packaging division offers versatile protective solutions across automotive, construction, electronics, furniture, hospitality, and packaging industries. 99acres They are manufacturers of protective packaging and cushioning products as well as thermal and sound insulation products, and are based in Mumbai.",
    ],
    outcomes: [
      { metric: "40%", label: "increase in booth dwell time vs. previous year" },
      { metric: "3×", label: "more qualified leads compared to prior show" },
    ],
    images: [
      { src: "/images/supreme/0.61.png", alt: "supreme booth overview", size: "wide" },
      { src: "/images/supreme/0.63.png", alt: "supreme" ,size: "tall"},
      { src: "/images/supreme/0.64.png", alt: "supreme" },
    ],
  },
  {
    id: 2,
    slug: "styrenix",
    client: "Styrenix Performance Materials",
    category: "Exhibition Design",
    description: "A bold trade show presence for India's leading styrenic polymers manufacturer, showcasing their full product range across ABS, SAN, GPPS, and HIPS.",
    colorFrom: "#1a3a6b",
    colorTo: "#2d6a9f",
    tags: ["Trade Show", "Exhibition Design"],
    image: "/images/styrenix/0.83.png",
    year: "2024",
    deliverables: "Exhibition Design, Booth Fabrication, Spatial Narrative",
    overviewTitle: "Engineering Presence for a Polymer Leader",
    overviewBody: [
      "Styrenix Performance Materials Ltd (formerly INEOS Styrolution India) is India's leading manufacturer of styrenic polymers — ABS, SAN, GPPS, HIPS, and specialty compounds. Listed on BSE & NSE and headquartered in Vadodara, their trade show presence needed to reflect the technical precision and material versatility that defines their brand.",
      "We designed a booth environment that placed the product range at the centre of the narrative — structured product display zones, material sample interaction panels, and a consulting alcove for distributor conversations. The spatial language drew from the geometry of polymers: modular, interlocking, and precise.",
    ],
    outcomes: [
      { metric: "2×", label: "increase in booth visitor engagement" },
      { metric: "60+", label: "distributor conversations facilitated" },
      { metric: "Top 3", label: "booth recognition at Plastivision India" },
    ],
    images: [
      { src: "/images/styrenix/0.83.png", alt: "Styrenix booth overview", size: "wide" },
      { src: "/images/styrenix/0.84.png", alt: "Styrenix product display zone",size: "tall" },
      { src: "/images/styrenix/0.85.png", alt: "Styrenix consulting alcove" },
    ],
  },
  {
    id: 3,
    slug: "paracoat",
    client: "Paracoat Products",
    category: "Trade Show",
    description: "A striking exhibition presence for Paracoat Products, highlighting their comprehensive range of waterproofing and protective coating solutions.",
    colorFrom: "#1b3a5c",
    colorTo: "#2e6da4",
    tags: ["Trade Show", "Exhibition Design"],
    image: "/images/paracoat/0.90.png",
    year: "2024",
    deliverables: "Exhibition Design, Spatial Narrative, Fabrication, On-site Management",
    overviewTitle: "Protecting Structures, Commanding Space",
    overviewBody: [
      "Paracoat Products Ltd is a specialist manufacturer of waterproofing compounds, protective coatings, and construction chemicals. Their brief was to create an exhibition booth that communicated both the breadth of their product portfolio and the technical credibility of the Paracoat brand.",
      "We designed a booth structured around real product applications — wall sections demonstrating coating systems, interactive material panels, and a live demonstration counter. The visual language was clean and industrial, reflecting the durability and precision of the products themselves.",
    ],
    outcomes: [
      { metric: "180+", label: "contractor and architect leads captured" },
      { metric: "3×", label: "increase in product enquiries vs. previous show" },
      { metric: "5", label: "distributor agreements initiated at the event" },
    ],
    images: [
      { src: "/images/paracoat/0.90.png", alt: "Paracoat booth overview", size: "wide" },
      { src: "/images/paracoat/0.91.png", alt: "Paracoat product display" ,size: "tall"},
      { src: "/images/paracoat/0.92.png", alt: "Paracoat application showcase" },
      { src: "/images/paracoat/0.93.png", alt: "Paracoat material panels" },
      { src: "/images/paracoat/0.95.png", alt: "Paracoat demonstration counter" },
      { src: "/images/paracoat/0.96.png", alt: "Paracoat branding and signage" },
      { src: "/images/paracoat/0.97.png", alt: "Paracoat visitor engagement zone" },
    ],
  },
  {
    id: 4,
    slug: "silveron",
    client: "Silveron",
    category: "Exhibition Design",
    description: "A refined exhibition presence for Silveron, blending technical authority with premium brand aesthetics at a leading industry trade show.",
    colorFrom: "#334155",
    colorTo: "#64748b",
    tags: ["Trade Show", "Exhibition Design"],
    image: "/images/silveron/0.97..png",
    year: "2024",
    deliverables: "Exhibition Design, Fabrication, Brand Identity Integration",
    overviewTitle: "Precision and Presence",
    overviewBody: [
      "Silveron's exhibition brief was rooted in one goal: stand out in a crowded hall without sacrificing the brand's understated, premium identity. The challenge was to create visual impact while maintaining the technical credibility their audience expects.",
      "We developed a booth concept anchored in clean geometry and material contrast — a structured framework of premium finishes that let the products and the brand speak for themselves. Strategic lighting and purposeful spatial flow guided visitors through a curated brand story.",
    ],
    outcomes: [
      { metric: "High", label: "visitor engagement throughout the show" },
      { metric: "Strong", label: "brand recall among key decision-makers" },
    ],
    images: [
      { src: "/images/silveron/0.97..png", alt: "Silveron booth overview", size: "wide" },
    ],
  },
  {
    id: 5,
    slug: "sph-group",
    client: "SPH Group",
    category: "Exhibition Design",
    description: "A commanding exhibition presence for SPH Group, designed to communicate scale, expertise, and vision to industry stakeholders.",
    colorFrom: "#0a2d4a",
    colorTo: "#1a5276",
    tags: ["Trade Show", "Corporate"],
    image: "/images/sph-group/0.98.png",
    year: "2024",
    deliverables: "Exhibition Design, Spatial Planning, Fabrication",
    overviewTitle: "Scale and Substance",
    overviewBody: [
      "SPH Group required an exhibition presence that matched the group's stature — a multi-vertical business with a portfolio spanning infrastructure, construction, and industrial solutions. The booth needed to communicate both breadth and depth without feeling scattered.",
      "We structured the space around a central narrative spine, with distinct zones for each business vertical and a unified visual language that tied the group identity together. Bold graphics, precision fabrication, and a hospitality zone for partner conversations made the SPH Group booth a destination in itself.",
    ],
    outcomes: [
      { metric: "200+", label: "industry partners and stakeholders engaged" },
      { metric: "Multiple", label: "business verticals showcased under one narrative" },
      { metric: "Strong", label: "brand presence among key industry decision-makers" },
    ],
    images: [
      { src: "/images/sph-group/0.98.png", alt: "SPH Group booth overview", size: "wide" },
      { src: "/images/sph-group/0.99.png", alt: "SPH Group product zones" ,size: "tall"},
      { src: "/images/sph-group/0.100.png", alt: "SPH Group branding and signage" },
    ],
  },
  {
    id: 6,
    slug: "chroma-chemie",
    client: "Chroma Chemie",
    category: "Exhibition Design",
    description: "A vibrant and technically rich exhibition booth for Chroma Chemie, India's specialist in specialty chemicals, pigments, and colorants.",
    colorFrom: "#8e53db",
    colorTo: "#a66ef5",
    tags: ["Trade Show", "Exhibition Design"],
    image: "/images/chromachemie/0.101.png",
    year: "2024",
    deliverables: "Exhibition Design, Fabrication, AV Integration",
    overviewTitle: "The Chemistry of Colour",
    overviewBody: [
      "Chroma Chemie Laboratory Pvt. Ltd. is a Vapi-based manufacturer of specialty chemicals, pigments, and colorants serving the plastics, paints, textiles, and printing industries. Their exhibition brief demanded a space as dynamic as the products they create — rich in visual storytelling, technical in substance.",
      "We designed a booth built around the language of colour itself — a structured display environment where Chroma Chemie's product range was organised by application and substrate, allowing visitors from different industries to immediately identify what was relevant to them. Backlit colour panels, product sample displays, and a consultation zone anchored the experience.",
    ],
    outcomes: [
      { metric: "250+", label: "industry visitors across the show" },
      { metric: "Multiple", label: "new distributor conversations initiated" },
      { metric: "High", label: "brand visibility in specialty chemicals segment" },
    ],
    images: [
      { src: "/images/chromachemie/0.101.png", alt: "Chroma Chemie booth overview", size: "wide" },
      { src: "/images/chromachemie/0.102.png", alt: "Chroma Chemie colour display panels",size: "tall" },
      { src: "/images/chromachemie/0.103.png", alt: "Chroma Chemie product showcase" },
      { src: "/images/chromachemie/0.104.png", alt: "Chroma Chemie branding elements" },
      { src: "/images/chromachemie/0.105.png", alt: "Chroma Chemie consultation zone" },
    ],
  },
];