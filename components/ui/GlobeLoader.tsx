"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { GlobeLogoMark } from "@/components/ui/GlobeLogoMark";

const LOADER_ID = "globe-intro-loader";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ─── GlobeLoader — full-viewport intro; X petals assemble then overlay fades out ─
export function GlobeLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState(true);
  const [exiting, setExiting] = useState(false);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const inner = innerRef.current;
    const word = wordRef.current;
    const svg = svgRef.current;
    if (!root || !inner || !word || !svg) return;

    const petals = svg.querySelectorAll<SVGElement>(".globe-x-petal");
    if (petals.length === 0) return;

    const reduced = prefersReducedMotion();

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    gsap.set(root, { opacity: 1, pointerEvents: "auto" });
    gsap.set(word, { opacity: 0, y: 16 });
    gsap.set(inner, { scale: 0.94, opacity: 0 });
    gsap.set(petals, {
      scale: 0,
      opacity: 0,
      transformOrigin: "50% 50%",
      rotation: reduced ? 0 : -42,
    });

    let alive = true;

    const finishOut = () => {
      if (!alive) return;
      document.documentElement.style.overflow = prevOverflow;
      setExiting(true);
      gsap.to(root, {
        opacity: 0,
        duration: reduced ? 0.35 : 0.65,
        ease: reduced ? "power2.out" : "power2.inOut",
        delay: reduced ? 0 : 0.12,
        onComplete: () => {
          if (!alive) return;
          setActive(false);
          root.setAttribute("aria-hidden", "true");
          root.style.pointerEvents = "none";
        },
      });
    };

    if (reduced) {
      gsap.set(word, { opacity: 1, y: 0 });
      gsap.set(inner, { scale: 1, opacity: 1 });
      gsap.set(petals, { scale: 1, opacity: 1, rotation: 0 });
      const t = gsap.timeline({ onComplete: finishOut });
      t.to({}, { duration: 0.35 });
      return () => {
        alive = false;
        t.kill();
        document.documentElement.style.overflow = prevOverflow;
      };
    }

    const tl = gsap.timeline({
      defaults: { ease: "expo.out" },
      onComplete: finishOut,
    });

    tl.to(inner, { scale: 1, opacity: 1, duration: 0.55 }, 0)
      .to(word, { opacity: 1, y: 0, duration: 0.5 }, 0.08)
      .to(
        petals,
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.62,
          stagger: {
            each: 0.09,
            from: "center",
          },
          ease: "back.out(1.35)",
        },
        0.22
      )
      .to(inner, { scale: 1.03, duration: 0.35, ease: "power1.inOut" }, "-=0.15")
      .to(inner, { scale: 1, duration: 0.4, ease: "power2.out" })
      .to({}, { duration: 0.35 });

    return () => {
      alive = false;
      tl.kill();
      document.documentElement.style.overflow = prevOverflow;
    };
  }, []);

  if (!active) return null;

  return (
    <div
      id={LOADER_ID}
      ref={rootRef}
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
      aria-label="Loading Globe X Infra"
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-white/[0.04] backdrop-blur-[3px] supports-[backdrop-filter]:bg-white/[0.02]"
      style={{ pointerEvents: "auto" }}
    >
      <div ref={innerRef} className="flex items-end gap-2 sm:gap-3 md:gap-4 select-none">
        <span
          ref={wordRef}
          className="font-sans font-bold tracking-tight text-[clamp(3.25rem,14vw,7rem)] leading-none text-[#b0b0ae] drop-shadow-sm"
        >
          Globe
        </span>
        <GlobeLogoMark
          ref={svgRef}
          className="h-[clamp(4rem,16vw,8.5rem)] w-[clamp(4rem,16vw,8.5rem)] shrink-0 -translate-y-1 drop-shadow-sm"
        />
      </div>
    </div>
  );
}
