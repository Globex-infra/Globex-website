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
      { src: "/images/supreme/0.63.png", alt: "supreme" },
      { src: "/images/supreme/0.64.png", alt: "supreme", size: "tall" },
    ],
  },
  {
    id: 2,
    slug: "ab-collections",
    client: "AB Collections",
    category: "Brand Activation",
    description: "A high-energy brand activation that positioned AB Collections at the forefront of fashion retail.",
    colorFrom: "#2c3e50",
    colorTo: "#0E516D",
    tags: ["Brand Activation", "Retail"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    year: "2023",
    deliverables: "Brand Activation, Retail Experience, Event Management",
    overviewTitle: "Fashion Forward, Space First",
    overviewBody: [
      "AB Collections needed a brand activation that would feel native to its audience — young, style-conscious, and social-media savvy. The space had to earn its square footage in Instagram shares and real dwell time.",
      "We designed an activation built around 'the edit' — a curated spatial journey that mimicked the feeling of a personal stylist's studio. Mirrored corridors, styled vignettes, and a content creation corner gave visitors reasons to stay, explore, and share.",
    ],
    outcomes: [
      { metric: "12K+", label: "footfall across the 3-day activation" },
      { metric: "4.8×", label: "social impressions vs. brand's previous event" },
      { metric: "₹2.4Cr", label: "in on-site sales attributed to the activation" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80", alt: "Activation entrance", size: "wide" },
      { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80", alt: "Styled vignette zone" },
      { src: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80", alt: "Mirror corridor", size: "tall" },
      { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", alt: "Product display" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Content creation corner" },
    ],
  },
  {
    id: 3,
    slug: "azerbaijan-tourism",
    client: "Azerbaijan Tourism",
    category: "Trade Show",
    description: "An immersive country pavilion that transported visitors to the landscapes and culture of Azerbaijan.",
    colorFrom: "#1a5276",
    colorTo: "#2e86c1",
    tags: ["Pavilion", "Tourism"],
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&q=80",
    year: "2022",
    deliverables: "Pavilion Design, Spatial Experience, AV Integration",
    overviewTitle: "A Country In A Booth",
    overviewBody: [
      "The Azerbaijan Tourism Board needed a pavilion presence that would do what no brochure could — make visitors feel the pull of a destination. The brief called for cultural authenticity without becoming a museum, and visual drama without becoming a theme park.",
      "We built a layered spatial journey: a gateway arch in traditional tile motifs, a panoramic projection wall of Baku's skyline, a scent-diffused carpet lounge, and a guided discovery station staffed by cultural ambassadors. Every element was calibrated to spark conversations and booking intent.",
    ],
    outcomes: [
      { metric: "8,200+", label: "pavilion visitors over the 4-day show" },
      { metric: "#1", label: "ranked country pavilion by show organisers" },
      { metric: "220+", label: "qualified tourism enquiries captured" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200&q=80", alt: "Pavilion entrance arch", size: "wide" },
      { src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80", alt: "Cultural artefact display" },
      { src: "https://images.unsplash.com/photo-1542601906897-ecd5b8c4bf26?w=800&q=80", alt: "Projection panorama wall", size: "tall" },
      { src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&q=80", alt: "Lounge and discovery zone" },
    ],
  },
  {
    id: 4,
    slug: "roboqbo",
    client: "Roboqbo",
    category: "Corporate Event",
    description: "Precision-engineered event identity for an Italian industrial food-tech brand entering India.",
    colorFrom: "#0a3d53",
    colorTo: "#0E516D",
    tags: ["Corporate", "Product Launch"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    year: "2023",
    deliverables: "Event Identity, Stage Design, AV Production",
    overviewTitle: "Precision Meets Presentation",
    overviewBody: [
      "Roboqbo is a Bologna-based manufacturer of high-precision food processing machines. Their India market entry needed an event that felt as engineered as their products — refined, confident, and built to impress industrial buyers and distributors.",
      "We designed a stage environment that mirrored the machines' aesthetic: clean metal surfaces, precise lighting rigs, and a product reveal sequence timed to a custom audio track. The result felt less like a product launch and more like a performance.",
    ],
    outcomes: [
      { metric: "150+", label: "industry decision-makers in attendance" },
      { metric: "6", label: "distribution agreements signed at the event" },
      { metric: "100%", label: "attendee satisfaction in post-event survey" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80", alt: "Stage overview", size: "wide" },
      { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80", alt: "Product reveal moment" },
      { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", alt: "Networking area", size: "tall" },
      { src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&q=80", alt: "Branding elements" },
    ],
  },
  {
    id: 5,
    slug: "shiv-shakti-group",
    client: "Shiv Shakti Group",
    category: "Product Launch",
    description: "A commanding product launch environment that set a new benchmark for agricultural innovation.",
    colorFrom: "#17618a",
    colorTo: "#0a3d53",
    tags: ["Product Launch", "Exhibition"],
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    year: "2022",
    deliverables: "Launch Event Design, Fabrication, On-site Management",
    overviewTitle: "Launching Innovation at Scale",
    overviewBody: [
      "Shiv Shakti Group needed a product launch that communicated scale — their new equipment line was designed for large-format farming, and the launch environment had to match that ambition.",
      "We created an outdoor launch arena with a dramatic reveal stage, product islands for close-up exploration, and a demonstration track. The spatial language drew from the land itself — earthy tones, raw steel, and bold industrial typography — rooting the brand firmly in its domain.",
    ],
    outcomes: [
      { metric: "500+", label: "farmers and dealers attended the launch" },
      { metric: "35+", label: "media coverages across regional publications" },
      { metric: "₹8Cr+", label: "in pre-orders taken at the event" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&q=80", alt: "Launch arena overview", size: "wide" },
      { src: "https://images.unsplash.com/photo-1605732562742-3023a888e56e?w=800&q=80", alt: "Stage reveal moment" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Product display island", size: "tall" },
      { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80", alt: "Audience and atmosphere" },
    ],
  },
  {
    id: 6,
    slug: "vi-power-gold",
    client: "Vi-Power Gold",
    category: "Brand Promotion",
    description: "Grassroots brand promotions and activations that built deep community affinity.",
    colorFrom: "#0E516D",
    colorTo: "#073a50",
    tags: ["Brand Promotion", "Activation"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    year: "2022",
    deliverables: "Promotion Design, Ground Activation, Brand Collateral",
    overviewTitle: "Building Brand at Ground Level",
    overviewBody: [
      "Vi-Power Gold's challenge was one of penetration — reaching communities where trust is earned through presence, not advertising. Their brief was to build a promotion programme that felt local, genuine, and memorable.",
      "We designed a modular activation kit deployable across markets — community engagement stations, live demonstration units, and a consistent visual language that worked equally well in a village square or a district fair. Over 18 months, the campaign touched 40+ locations.",
    ],
    outcomes: [
      { metric: "40+", label: "locations activated across 3 states" },
      { metric: "2.1L+", label: "consumers engaged directly" },
      { metric: "28%", label: "increase in regional distributor offtake" },
    ],
    images: [
      { src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80", alt: "Ground activation overview", size: "wide" },
      { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", alt: "Community engagement station" },
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", alt: "Demo unit in field", size: "tall" },
      { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", alt: "Brand collateral and signage" },
    ],
  },
];