"use client";

import { useLayoutEffect, useRef } from "react";
import { PROCESS_STEPS } from "@/lib/data";
import type { ProcessStep } from "@/types";

/** Minimal vector icons (stroke-based) for each phase */
function StepIcon({ index }: { index: number }) {
  const common = "stroke-current fill-none stroke-[1.5px]";
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 text-white/90 ${common}`} aria-hidden>
          <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 text-white/90 ${common}`} aria-hidden>
          <path d="M3 3v18h18M7 16l4-4 4 4 5-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 text-white/90 ${common}`} aria-hidden>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 text-white/90 ${common}`} aria-hidden>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 text-white/90 ${common}`} aria-hidden>
          <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function prefersReducedMotion(): boolean {
  if (globalThis.window === undefined) return false;
  return globalThis.window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Smooth S-curve spine (infographic-style timeline vector) */
const TIMELINE_PATH =
  "M 24 0 C 42 180 6 320 24 500 S 42 680 24 1000";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const path = pathRef.current;
    if (!section || !path || prefersReducedMotion()) return;

    let ctx: gsap.Context | undefined;
    let cancelled = false;

    void (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (cancelled) return;

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
          const len = path.getTotalLength();
          if (len <= 0) return;
          gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

          gsap.fromTo(
            path,
            { strokeDashoffset: len },
            {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom 52%",
                scrub: 0.2,
                invalidateOnRefresh: true,
              },
            }
          );

          nodesRef.current.forEach((node) => {
            if (!node) return;
            gsap.fromTo(
              node,
              { opacity: 0.45, scale: 0.92 },
              {
                opacity: 1,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: node,
                  start: "top 78%",
                  end: "top 42%",
                  scrub: 0.2,
                },
              }
            );
          });
        });
      }, section);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-primary py-28 md:py-36 grain"
    >
      {/* Decorative background vectors — md+ only */}
      <div className="pointer-events-none absolute inset-0 hidden opacity-[0.07] md:block" aria-hidden>
        <svg className="absolute -right-20 top-20 h-64 w-64 text-white" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="120" stroke="currentColor" strokeWidth="0.35" />
          <path d="M100 20v160M20 100h160" stroke="currentColor" strokeWidth="0.35" />
        </svg>
        <svg className="absolute -left-16 bottom-32 h-48 w-48 text-primary-light rotate-12" viewBox="0 0 200 200" fill="none">
          <path d="M20 180 Q100 20 180 180" stroke="currentColor" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="relative z-[1] mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-4" data-reveal="fade">
              <span className="h-px w-8 bg-white/30" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                How We Work
              </span>
            </div>
            <h2 className="text-fluid-4xl font-bold leading-tight text-white" data-reveal>
              Our{" "}
              <em className="font-playfair font-normal italic text-white/60">Process</em>
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-white/50 md:text-base" data-reveal="right">
            A rigorous yet flexible methodology developed across 200+ projects. Every
            engagement is distinct; every process step is intentional.
          </p>
        </div>

        {/* Timeline + content — md+ row so tablet (e.g. 768px) isn’t a giant rail above all cards */}
        <div className="relative isolate flex flex-col gap-10 md:flex-row md:items-stretch md:gap-10 lg:gap-12">
          {/* SVG timeline rail — hidden below md */}
          <div className="relative z-0 hidden max-w-[min(100%,28rem)] shrink-0 md:mx-0 md:block md:w-28 md:max-w-none lg:w-32">
            <div className="relative aspect-[3/5] min-h-[320px] w-full overflow-hidden sm:min-h-[min(50vh,420px)] md:aspect-auto md:h-full md:min-h-[min(100%,640px)]">
              <svg
                className="absolute inset-0 h-full w-full overflow-hidden"
                viewBox="0 0 48 1000"
                preserveAspectRatio="xMidYMin slice"
                aria-hidden
              >
                <defs>
                  <linearGradient id="process-line-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
                    <stop offset="45%" stopColor="rgba(26,107,138,0.95)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
                  </linearGradient>
                  <filter id="process-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.5" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Soft track */}
                <path
                  d={TIMELINE_PATH}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Animated main vector */}
                <path
                  ref={pathRef}
                  d={TIMELINE_PATH}
                  fill="none"
                  stroke="url(#process-line-grad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#process-glow)"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Node rings positioned along the path (approximate % positions for 5 steps) */}
              {PROCESS_STEPS.map((step, i) => {
                const tops = [6, 26, 46, 66, 86];
                const pct = tops[i] ?? (i + 0.5) * (100 / PROCESS_STEPS.length);
                return (
                  <div
                    key={step.id}
                    ref={(el) => {
                      nodesRef.current[i] = el;
                    }}
                    className="absolute left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-primary/95 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.25)] md:h-14 md:w-14"
                    style={{ top: `${pct}%` }}
                  >
                    <StepIcon index={i} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cards */}
          <div className="relative z-10 min-w-0 flex-1 space-y-6 md:space-y-8">
            {PROCESS_STEPS.map((step: ProcessStep, i: number) => (
              <article
                key={step.id}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group relative rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 md:p-8 hover:border-white/15"
              >
                {/* Small vector accent — md+ only */}
                <div className="absolute right-6 top-6 hidden opacity-[0.12] transition-opacity duration-500 group-hover:opacity-25 md:block" aria-hidden>
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="text-white">
                    <path
                      d="M8 36h56M36 8v56M18 18l36 36M54 18L18 54"
                      stroke="currentColor"
                      strokeWidth="0.75"
                    />
                    <circle cx="36" cy="36" r="28" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>

                <div className="relative flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.07] pb-4">
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/35">
                    {String(i + 1).padStart(2, "0")} / {String(PROCESS_STEPS.length).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-sm font-semibold text-primary-light/80">{step.number}</span>
                </div>
                <h3 className="mb-3 mt-4 font-display text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {step.title}
                </h3>
                <p className="max-w-2xl text-[15px] leading-relaxed text-white/50 md:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
