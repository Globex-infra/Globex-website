// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

// ─── Services ─────────────────────────────────────────────────────────────────
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// ─── Process ──────────────────────────────────────────────────────────────────
export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}

// ─── Core Values ──────────────────────────────────────────────────────────────
export interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// ─── Work / Projects ──────────────────────────────────────────────────────────
export interface Project {
  id: number;
  client: string;
  category: string;
  description: string;
  colorFrom: string;
  colorTo: string;
  tags: string[];
  image: string;
}

// ─── Stats ────────────────────────────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// ─── Clients (marquee logos) ─────────────────────────────────────────────────
export interface ClientLogo {
  name: string;
  /** Remote logo URL (Clearbit public logo API by domain). */
  logoUrl: string;
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export interface ContactInfo {
  phone: string[];
  email: string;
  website: string;
  address: string;
}
