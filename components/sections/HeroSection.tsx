"use client";

import { useEffect, useRef } from "react";
import { STATS } from "@/lib/data";
import { animateCounter } from "@/lib/utils";
import type { Stat } from "@/types";

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const countersStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted.current) {
            countersStarted.current = true;
            const els = entry.target.querySelectorAll<HTMLElement>("[data-count]");
            els.forEach((el) => {
              const target = parseInt(el.dataset.count || "0", 10);
              animateCounter(el, target, "", 2000);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-primary grain"
    >
      {/* Grid background */}
      <div className="grid-bg absolute inset-0 opacity-30" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-10 pt-32 pb-0 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="hero-animate-1 flex items-center gap-3 mb-8">
          <span className="inline-block w-8 h-px bg-white/40" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/60">
            Spatial Experience Design
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-animate-2 font-dm-sans font-bold text-white leading-[1.0] tracking-tight mb-8">
          <span className="block text-fluid-5xl">We Build</span>
          <span className="block text-fluid-5xl">
            Spaces That{" "}
            <em className="font-playfair font-normal italic text-white/70 not-italic">
              Speak.
            </em>
          </span>
        </h1>

        {/* Sub */}
        <p className="hero-animate-3 text-white/60 text-fluid-base max-w-lg leading-relaxed mb-12">
          Globe X Infra crafts award-worthy exhibitions, trade show booths, and
          corporate event environments across India and internationally.
        </p>

        {/* CTAs */}
        <div className="hero-animate-4 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 bg-white text-primary font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/90 transition-all duration-300 group"
          >
            View Our Work
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-3 text-white/80 font-medium text-sm hover:text-white transition-colors duration-300 group"
          >
            Our Story
            <span className="w-8 h-px bg-white/40 group-hover:w-12 transition-all duration-300 inline-block" />
          </a>
        </div>
      </div>

      {/* Watermark marquee */}
      <div className="hero-animate-5 relative z-0 overflow-hidden py-4 select-none pointer-events-none">
        <div className="flex whitespace-nowrap animate-[marquee_10s_linear_infinite]">
          {Array(6).fill("Globe X Infra · Exhibition Design · Trade Shows · Brand Activation · ").map((t, i) => (
            <span key={i} className="text-white/[0.04] text-8xl font-bold tracking-tight mr-8 shrink-0">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <div
        ref={statsRef}
        className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {STATS.map((stat: Stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center py-6 px-4 text-center">
              <div className="flex items-baseline gap-0.5 mb-1">
                <span
                  data-count={stat.value}
                  className="text-2xl md:text-3xl font-bold text-white tabular-nums"
                >
                  0
                </span>
                <span className="text-xl font-bold text-white/60">{stat.suffix}</span>
              </div>
              <span className="text-xs text-white/40 tracking-wide">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-32 right-10 hidden lg:flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300 group z-10"
      >
        <span className="text-xs tracking-[0.2em] uppercase rotate-90 translate-y-4">Scroll</span>
        <span className="w-px h-12 bg-white/20 group-hover:bg-white/40 transition-colors duration-500" />
      </a>
    </section>
  );
}


