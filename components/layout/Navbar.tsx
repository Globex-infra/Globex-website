"use client";

import { useNavScroll } from "@/hooks/useNavScroll";
import { NAV_ITEMS } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import type { NavItem } from "@/types";
import { useEffect, useState } from "react";

const SECTION_IDS = ["about", "services", "process", "work", "clients", "contact"];

export default function Navbar() {
  const { activeSection } = useNavScroll(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    scrollToSection(id);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-primary shadow-sm transition-all duration-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        
          <div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item: NavItem) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative text-sm tracking-wide transition-all duration-300 ${
                    isActive ? "font-semibold text-white" : "font-medium text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:bg-white/90 lg:inline-flex"
            >
              Get in Touch
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 text-white transition-colors duration-300 lg:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay — use display:none when closed so the layer cannot block scroll/touch */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "hidden"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-primary" />
        <div className="relative h-full flex flex-col items-center justify-center gap-8 pt-16">
          {NAV_ITEMS.map((item: NavItem, i) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-white text-3xl font-light tracking-wide hover:opacity-70 transition-opacity"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:+916395255110"
            className="mt-8 text-white/60 text-sm tracking-widest uppercase"
          >
            +91 6395255110
          </a>
        </div>
      </div>
    </>
  );
}
