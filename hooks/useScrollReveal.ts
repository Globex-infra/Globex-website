"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  stagger?: boolean;
  staggerDelay?: number;
  once?: boolean;
}

// ─── useScrollReveal ───────────────────────────────────────────────────────────
// Uses IntersectionObserver to reveal elements on scroll
export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.15,
    stagger = false,
    staggerDelay = 100,
    once = true,
  } = options;

  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;

            if (stagger) {
              const index = Array.from(elements).indexOf(el);
              el.style.transitionDelay = `${index * staggerDelay}ms`;
            }

            el.classList.add("revealed");

            if (once) {
              observer.unobserve(el);
            }
          } else if (!once) {
            (entry.target as HTMLElement).classList.remove("revealed");
          }
        });
      },
      { threshold }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, stagger, staggerDelay, once]);

  return containerRef;
}

// ─── useSingleReveal ──────────────────────────────────────────────────────────
// Reveal a single element on scroll
export function useSingleReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
