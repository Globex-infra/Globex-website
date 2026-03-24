"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const LOADER_ID = "globe-intro-loader";

/** Final overlay dimensions (fixed px — same on all viewports) */
const OVERLAY_FINAL_WIDTH = 160;
const OVERLAY_FINAL_HEIGHT = 54;
/** Logo width — initial (Phase 1) and final (Phase 2), fixed px */
const LOGO_INITIAL_WIDTH = 200;
const LOGO_FINAL_WIDTH = 108;

/** Tailwind breakpoints (px) — align with Navbar layout */
const BP = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 } as const;
const MAX_CONTAINER = 1280; // max-w-7xl
const NAV_PX_MOBILE = 24;   // px-6
const NAV_PX_DESKTOP = 40;  // lg:px-10

/** Navbar heights (px) — h-16 / lg:h-20 */
const NAV_H_MOBILE = 64;
const NAV_H_DESKTOP = 80;

/** Responsive gaps (top, left) based on viewport width — aligns with navbar logo position */
function getLoaderGaps(width: number): { top: number; left: number } {
  const containerLeft = width >= MAX_CONTAINER
    ? (width - MAX_CONTAINER) / 2 + NAV_PX_DESKTOP
    : width >= BP.lg
      ? NAV_PX_DESKTOP
      : NAV_PX_MOBILE;
  const left = Math.round(containerLeft);
  const navH = width >= BP.lg ? NAV_H_DESKTOP : NAV_H_MOBILE;
  const top = Math.round((navH - OVERLAY_FINAL_HEIGHT) / 2);
  return { top, left };
}

function prefersReducedMotion(): boolean {
  if (globalThis.window === undefined) return false;
  return globalThis.window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function GlobeLoader() {
  const overlayRef  = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(true);


  useLayoutEffect(() => {
    const overlay  = overlayRef.current;
    const logoWrap = logoWrapRef.current;
    if (!overlay || !logoWrap) return;

    const reduced = prefersReducedMotion();
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    let alive = true;
    const finish = () => {
      if (!alive) return;
      document.documentElement.style.overflow = prevOverflow;
      setActive(false);
    };

    if (reduced) {
      const t = gsap.timeline({ onComplete: finish });
      t.to({}, { duration: 0.3 });
      return () => { alive = false; t.kill(); document.documentElement.style.overflow = prevOverflow; };
    }

    // ── Initial states ──────────────────────────────────────────────────────
    gsap.set(overlay,  { yPercent: 0 });
    gsap.set(logoWrap, { opacity: 0, scale: 0.85, y: 20, width: LOGO_INITIAL_WIDTH });

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    // Phase 1 — Logo reveals (clip-path wipe + fade up)
    tl
      .to(logoWrap, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
      }, 0.2)
      // hold so the full logo is readable
      .to({}, { duration: 0.55 })

    // Phase 2 — Overlay animates to fixed pixel size (consistent across viewports)
    const width = globalThis.window === undefined ? 1024 : globalThis.window.innerWidth;
    const { top, left } = getLoaderGaps(width);
    tl.to(overlay, {
      width: OVERLAY_FINAL_WIDTH,
      height: OVERLAY_FINAL_HEIGHT,
      left,
      top,
      right: "auto",
      bottom: "auto",
      duration: 1.85,
      ease: "power3.inOut",
    }, ">")
    .to(logoWrap, {
      width: LOGO_FINAL_WIDTH,
      duration: 1.85,
      ease: "power3.inOut",
    }, "<")

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
      role="status"
      aria-live="polite"
      aria-label="Loading Globe X Infra"
      className="fixed inset-0 z-[10001] pointer-events-none overflow-hidden"
    >
      {/* Solid primary overlay — slides to position; logo is inside so it moves with it */}
      <div
        ref={overlayRef}
        className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-primary will-change-transform pointer-events-auto"
      >
        <button
          ref={logoWrapRef}
          type="button"
          className="relative select-none will-change-transform cursor-pointer overflow-hidden border-0 bg-transparent p-0 font-inherit [&:focus]:outline-none [&:focus-visible]:outline-2 [&:focus-visible]:outline-primary [&:focus-visible]:outline-offset-2"
          onClick={(e) => { e.preventDefault(); globalThis.window?.scrollTo({ top: 0, behavior: "smooth" }); }}
          aria-label="Scroll to top"
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={240}
            height={58}
            className="h-auto w-full max-w-full object-contain object-center"
            priority
          />
        </button>
      </div>
    </div>
  );
}

