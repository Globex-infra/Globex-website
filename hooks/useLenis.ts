"use client";

import { useEffect, useRef } from "react";

// ─── useLenis ──────────────────────────────────────────────────────────────────
// Initializes Lenis smooth scroll and integrates with GSAP ScrollTrigger
export function useLenis() {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
      on: (event: string, callback: (e: { scroll: number }) => void) => void;
    } | null = null;

    const initLenis = async () => {
      try {
        const { default: Lenis } = await import("@studio-freight/lenis");
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        }) as typeof lenis;

        lenisRef.current = lenis;

        // Sync Lenis with GSAP ScrollTrigger
        lenis!.on("scroll", ScrollTrigger.update);

        const gsapTicker = gsap.ticker;
        gsapTicker.add((time: number) => {
          lenis!.raf(time * 1000);
        });
        gsapTicker.lagSmoothing(0);
      } catch (error) {
        console.warn("Lenis initialization failed:", error);
      }
    };

    initLenis();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return lenisRef;
}
