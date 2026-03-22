"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useNavScroll } from "@/hooks/useNavScroll";
import { NAV_ITEMS } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import type { NavItem } from "@/types";

const SECTION_IDS = ["about", "services", "process", "work", "clients", "contact"];

export default function Navbar() {
  const { isScrolled, activeSection } = useNavScroll(SECTION_IDS);
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="group flex items-center"
            aria-label="Globe X Infra — Home"
          >
            <span className="nav-logo-shell">
              <Image
                src="/brand/logo.png"
                alt=""
                width={168}
                height={40}
                className="h-8 w-auto max-w-[168px] object-contain object-left sm:h-9"
                priority
              />
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item: NavItem) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                    isScrolled
                      ? isActive ? "text-primary" : "text-gray-600 hover:text-primary"
                      : isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
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
              className={`hidden lg:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary-dark"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Get in Touch
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-white"
              }`}
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
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
