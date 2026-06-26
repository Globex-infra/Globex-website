"use client";

import { useEffect, useRef } from "react";
import { STATS } from "@/lib/data";
import { animateCounter } from "@/lib/utils";
import type { Stat } from "@/types";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const mobileStatsRef = useRef<HTMLDivElement>(null);
  const countersStarted = useRef(false);

  useEffect(() => {
    const section = document.getElementById("hero");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted.current) {
            countersStarted.current = true;
            const els = section.querySelectorAll<HTMLElement>("[data-count]");
            els.forEach((el) => {
              const target = parseInt(el.dataset.count || "0", 10);
              animateCounter(el, target, "", 2000);
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    const targets = [statsRef.current, mobileStatsRef.current].filter(Boolean);
    targets.forEach((el) => observer.observe(el!));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#050505] lg:bg-black">
      {/* ── VIDEO FRAME ── */}
      <div className="hero-viewport">
        <div className="hero-video-wrap">
          <video
            className="hero-video"
            src="/videos/hero-model.mov"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

        {/* Mobile/tablet: bottom fade */}
        <div
          className="hero-mobile-fade pointer-events-none absolute inset-0 lg:hidden"
          aria-hidden
        />

        {/* Desktop vignette */}
        <div
          className="hero-vignette pointer-events-none absolute inset-0 hidden lg:block"
          aria-hidden
        />

        <div className="grain pointer-events-none absolute inset-0 hidden opacity-25 lg:block" aria-hidden />

        <h1 className="sr-only">Globe X Infra — We Build Spaces That Speak</h1>

        {/* ── DESKTOP CONTENT ── */}
        <div className="relative z-10 mx-auto hidden h-full w-full max-w-7xl flex-col justify-between px-10 pb-6 pt-24 xl:px-14 lg:flex">
          <div className="flex max-w-xl flex-1 flex-col justify-center xl:max-w-2xl">
            <div className="hero-animate-1 mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-white/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60">
                Spatial Experience Design
              </span>
            </div>

            <h1 className="hero-animate-2 mb-6 font-dm-sans text-white leading-[1.05] tracking-tight">
              <span className="block text-fluid-5xl font-bold">We Build</span>
              <span className="block text-fluid-5xl font-bold">
                Spaces That{" "}
                <em className="font-playfair font-normal italic text-white/70">
                  Speak.
                </em>
              </span>
            </h1>

            <p className="hero-animate-3 mb-10 max-w-md text-fluid-base leading-relaxed text-white/60">
              Globe X Infra crafts award-worthy exhibitions, trade show booths,
              and corporate event environments across India and internationally.
            </p>

            <div className="hero-animate-4 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("work");
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:bg-white/90"
              >
                View Our Work
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("about");
                }}
                className="group inline-flex items-center gap-3 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
              >
                Our Story
                <span className="inline-block h-px w-8 bg-white/40 transition-all duration-300 group-hover:w-12" />
              </a>
            </div>
          </div>

          <div className="hero-animate-5 pointer-events-none select-none overflow-hidden py-3">
            <div className="flex animate-[marquee_10s_linear_infinite] whitespace-nowrap">
              {Array(6)
                .fill(
                  "Globe X Infra · Exhibition Design · Trade Shows · Brand Activation · "
                )
                .map((t, i) => (
                  <span
                    key={i}
                    className="mr-8 shrink-0 text-7xl font-bold tracking-tight text-white/[0.06] xl:text-8xl"
                  >
                    {t}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Scroll hint — desktop */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("about");
          }}
          className="group absolute bottom-28 right-10 z-10 hidden flex-col items-center gap-2 text-white/30 transition-colors duration-300 hover:text-white/60 lg:flex"
        >
          <span className="translate-y-4 rotate-90 text-xs uppercase tracking-[0.2em]">
            Scroll
          </span>
          <span className="h-12 w-px bg-white/20 transition-colors duration-500 group-hover:bg-white/40" />
        </a>

        <div
          className="pointer-events-none absolute bottom-[18%] right-[8%] top-[22%] hidden w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block xl:right-[10%]"
          aria-hidden
        />

        {/* ── MOBILE / TABLET: stats overlay on video bottom ── */}
        <div
          ref={mobileStatsRef}
          className="hero-mobile-stats absolute inset-x-0 bottom-0 z-20 px-4 pb-5 pt-16 sm:px-6 md:pt-20 lg:hidden"
        >
          <div className="mx-auto grid max-w-lg grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 sm:max-w-2xl md:max-w-3xl md:grid-cols-4">
            {STATS.map((stat: Stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-black/25 px-3 py-3.5 text-center backdrop-blur-md sm:py-4"
              >
                <div className="mb-0.5 flex items-baseline gap-0.5">
                  <span
                    data-count={stat.value}
                    className="text-xl font-bold tabular-nums text-white sm:text-2xl md:text-3xl"
                  >
                    0
                  </span>
                  <span className="text-base font-bold text-white/70 sm:text-lg md:text-xl">
                    {stat.suffix}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/55 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollTo("about")}
            className="mx-auto mt-3 flex flex-col items-center gap-1 text-white/40 transition-colors hover:text-white/70"
            aria-label="Scroll to about section"
          >
            <span className="text-[10px] uppercase tracking-[0.25em]">Explore</span>
            <svg
              className="h-4 w-4 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── DESKTOP STATS STRIP ── */}
      <div
        ref={statsRef}
        className="relative z-10 hidden border-t border-white/10 bg-black/80 backdrop-blur-md lg:block"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-white/10 px-6 lg:px-10">
          {STATS.map((stat: Stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-4 py-6 text-center"
            >
              <div className="mb-1 flex items-baseline gap-0.5">
                <span
                  data-count={stat.value}
                  className="text-2xl font-bold tabular-nums text-white md:text-3xl"
                >
                  0
                </span>
                <span className="text-xl font-bold text-white/60">
                  {stat.suffix}
                </span>
              </div>
              <span className="text-xs tracking-wide text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
