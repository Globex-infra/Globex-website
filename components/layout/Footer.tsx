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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {year} Globe X Infra Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Designed & built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
