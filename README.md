# Globe X Infra — Next.js Website

Spatial experience design company website built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS (globals.css)
- **Fonts**: DM Sans + Playfair Display (via `next/font/google`)
- **Smooth Scroll**: Lenis v1.0.42 + GSAP ScrollTrigger
- **Animations**: CSS reveal system (IntersectionObserver) + hero entrance keyframes

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
globex-nextjs/
├── app/
│   └── layout.tsx          # Root layout (fonts, metadata)
│   └── page.tsx            # Home page assembly
├── components/
│   ├── animations/
│   │   └── LenisProvider.tsx   # Smooth scroll + reveal observer
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with scroll states
│   │   └── Footer.tsx          # Footer with links
│   ├── sections/               # All page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ValuesSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── ClientsSection.tsx
│   │   ├── CtaBand.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       └── CustomCursor.tsx    # Custom cursor (desktop only)
├── hooks/
│   ├── useLenis.ts
│   ├── useScrollReveal.ts
│   ├── useCustomCursor.ts
│   └── useNavScroll.ts
├── lib/
│   ├── data.ts                 # All site content / constants
│   └── utils.ts                # cn(), animateCounter(), debounce()
├── styles/
│   └── globals.css             # Design tokens, reveal system, animations
├── types/
│   └── index.ts                # TypeScript interfaces
└── public/
    └── fonts/                  # Place any local fonts here
```

## Scroll Reveal System

Any element with `data-reveal` will animate in when it enters the viewport.

```tsx
// Default: fade up
<div data-reveal>...</div>

// Variants
<div data-reveal="fade">...</div>    // fade only
<div data-reveal="left">...</div>    // slide from left
<div data-reveal="right">...</div>   // slide from right

// Stagger with transitionDelay
<div data-reveal style={{ transitionDelay: "100ms" }}>...</div>
```

## Content Editing

All copy, services, clients, projects, and contact info live in:

```
lib/data.ts
```

Edit that file to update any site content without touching components.

## Brand

- **Primary**: `#0E516D`
- **Dark**: `#0a3d53`
- **Light**: `#1a6b8a`
- **Off-white**: `#f6f5f2`
- **Fonts**: DM Sans (headings/body) · Playfair Display (italic accents)
