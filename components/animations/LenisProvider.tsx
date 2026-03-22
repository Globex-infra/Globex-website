"use client";

import { useEffect } from "react";

interface LenisProviderProps {
  children: React.ReactNode;
}

// ─── LenisProvider ────────────────────────────────────────────────────────────
// Initializes Lenis smooth scroll + GSAP ScrollTrigger integration
// Also bootstraps the global [data-reveal] IntersectionObserver
export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    // ── Scroll Reveal ──────────────────────────────────────────────────
    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // ── Lenis + GSAP ───────────────────────────────────────────────────
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
      on: (event: string, callback: () => void) => void;
    } | null = null;

    const init = async () => {
      try {
        const [{ default: Lenis }, { gsap }, { ScrollTrigger }] =
          await Promise.all([
            import("@studio-freight/lenis"),
            import("gsap"),
            import("gsap/ScrollTrigger"),
          ]);

        gsap.registerPlugin(ScrollTrigger);

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        }) as typeof lenis;

        (window as Window & { __globeLenis?: typeof lenis }).__globeLenis = lenis;

        lenis!.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time: number) => {
          lenis!.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
      } catch (err) {
        console.warn("Lenis init failed:", err);
      }
    };

    init();

    return () => {
      delete (window as Window & { __globeLenis?: unknown }).__globeLenis;
      lenis?.destroy();
      revealObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}
