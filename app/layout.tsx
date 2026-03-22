import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────
// Primary UI font — DM Sans (matches --font-dm-sans in globals.css).
// To use Sansserifflf-Demibold instead, add .woff2/.woff to public/fonts/ and
// switch back to next/font/local per public/fonts/README.md.
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
// Favicon: served from `public/favicon.ico` at `/favicon.ico` (do not add `app/favicon.ico` — it overrides public).
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
  title: "Globe X Infra Pvt. Ltd. | Spatial Experience Design",
  description:
    "Globe X Infra transforms ideas into meaningful, immersive spaces through exhibitions, trade shows, installations, and large-scale structures. Based in Greater Noida West.",
  keywords: [
    "exhibition design",
    "trade show",
    "event management",
    "brand activation",
    "spatial experience",
    "Greater Noida",
    "India",
  ],
  authors: [{ name: "Globe X Infra Pvt. Ltd." }],
  openGraph: {
    title: "Globe X Infra Pvt. Ltd. | Spatial Experience Design",
    description:
      "Transforming ideas into meaningful, immersive spaces since 2019.",
    type: "website",
    locale: "en_IN",
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
