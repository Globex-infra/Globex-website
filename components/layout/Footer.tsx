"use client";

import { NAV_ITEMS, CONTACT_INFO } from "@/lib/data";

const FOOTER_LINKS = {
  Services: [
    "Trade Shows",
    "Corporate Events",
    "Brand Activation",
    "Product Launch",
    "Award Ceremonies",
    "Road Shows",
  ],
  Company: [
    "About Us",
    "Our Work",
    "Process",
    "Clients",
    "Contact",
  ],
};

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/globe_x_infra/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@GlobeXInfra",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573284449586",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/globe-x-infra-private-limited/posts/?feedView=all",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060f14] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-2xl font-bold tracking-tight text-white">
                Globe<span className="font-light">X</span>
                <span className="text-sm font-light text-white/40 ml-2 tracking-[0.2em] uppercase">Infra</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Spatial experience design for exhibitions, trade shows, and corporate events.
              Creating environments that inspire since 2019.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="space-y-2">
              {CONTACT_INFO.phone.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s/g, "")}`}
                  className="block text-sm text-white/40 hover:text-white transition-colors"
                >
                  {p}
                </a>
              ))}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block text-sm text-white/40 hover:text-white transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.Services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/50 hover:text-white transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleScroll(item.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Address column */}
          <div>
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-6">
              Find Us
            </h4>
            <p className="text-sm text-white/50 leading-relaxed mb-4">
              {CONTACT_INFO.address}
            </p>
            <a
              href={`https://${CONTACT_INFO.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-light hover:text-white transition-colors"
            >
              {CONTACT_INFO.website}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {year} Globe X Infra Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/client-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200 underline underline-offset-4"
            >
              Client Policy
            </a>
            <p className="text-xs text-white/20">
              Designed & built with precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
