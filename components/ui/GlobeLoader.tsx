"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const LOADER_ID = "globe-intro-loader";

/** Final overlay dimensions (fixed px — same on all viewports) */
const OVERLAY_FINAL_WIDTH = 260;
const OVERLAY_FINAL_HEIGHT = 64;
/** Logo width — initial (Phase 1) and final (Phase 2), fixed px */
const LOGO_INITIAL_WIDTH = 360;
const LOGO_FINAL_WIDTH = 190;

/** Tailwind breakpoints (px) — align with Navbar layout */
const BP = { sm: 640, md: 768, lg: 1024, xl: 1280, "2xl": 1536 } as const;
const MAX_CONTAINER = 1280; // max-w-7xl
const NAV_PX_MOBILE = 24; // px-6
const NAV_PX_DESKTOP = 40; // lg:px-10

/** Navbar heights (px) — h-16 / lg:h-20 */
const NAV_H_MOBILE = 64;
const NAV_H_DESKTOP = 80;

/** Responsive gaps (top, left) based on viewport width — aligns with navbar logo position */
function getLoaderGaps(width: number): { top: number; left: number } {
  const containerLeft =
    width >= MAX_CONTAINER
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

type GlobeLoaderProps = {
  /** Navbar-aligned logo only — no full-screen intro, scroll lock, or motion */
  staticLogo?: boolean;
};

export function GlobeLoader({ staticLogo = false }: GlobeLoaderProps = {}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLButtonElement>(null);
  const scrollLockRestoreRef = useRef<string | null>(null);
  /** Wait for decoded bitmap so the fade doesn’t run while the image is still loading (common “jerk” cause) */
  const [logoDecoded, setLogoDecoded] = useState(false);

  useEffect(() => {
    if (staticLogo) return;
    scrollLockRestoreRef.current ??= document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = scrollLockRestoreRef.current ?? "";
    };
  }, [staticLogo]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const logoWrap = logoWrapRef.current;
    if (!overlay || !logoWrap) return;

    const restoreScroll = () => {
      document.documentElement.style.overflow = scrollLockRestoreRef.current ?? "";
    };

    let alive = true;
    /** Unlock page scroll after intro; keep mounted so the corner logo stays visible. */
    const onIntroComplete = () => {
      if (!alive) return;
      restoreScroll();
    };

    const applyFinalLayout = () => {
      const vw = globalThis.window.innerWidth;
      const { top, left } = getLoaderGaps(vw);
      gsap.set(overlay, {
        width: OVERLAY_FINAL_WIDTH,
        height: OVERLAY_FINAL_HEIGHT,
        left,
        top,
        right: "auto",
        bottom: "auto",
      });
      gsap.set(logoWrap, {
        width: LOGO_FINAL_WIDTH,
        opacity: 1,
      });
    };

    if (staticLogo) {
      applyFinalLayout();
      onIntroComplete();
      return () => {
        alive = false;
        restoreScroll();
      };
    }

    if (prefersReducedMotion()) {
      applyFinalLayout();
      onIntroComplete();
      return () => {
        alive = false;
        restoreScroll();
      };
    }

    if (!logoDecoded) {
      // Don’t restore scroll here — deps will flip to logoDecoded next; restoring mid-loader unlocks the page
      return;
    }

    const introW = Math.min(
      LOGO_INITIAL_WIDTH,
      Math.round(globalThis.window.innerWidth * 0.92)
    );

    gsap.set(overlay, { yPercent: 0 });
    gsap.set(logoWrap, {
      opacity: 0,
      width: introW,
      scale: 1,
      transformOrigin: "50% 50%",
    });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      onComplete: onIntroComplete,
    });

    // Phase 1 — single property (opacity) + smooth ease = no stutter from blur/GPU filter
    tl.fromTo(
      logoWrap,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.825,
        ease: "sine.out",
      },
      0
    ).to({}, { duration: 0.225 });

    const vw = globalThis.window.innerWidth;
    const { top, left } = getLoaderGaps(vw);

    // Phase 2 — slower, gentler move to the corner
    tl.to(
      overlay,
      {
        width: OVERLAY_FINAL_WIDTH,
        height: OVERLAY_FINAL_HEIGHT,
        left,
        top,
        right: "auto",
        bottom: "auto",
        duration: 1.15,
        ease: "power2.inOut",
      },
      ">"
    ).to(
      logoWrap,
      {
        width: LOGO_FINAL_WIDTH,
        duration: 1.15,
        ease: "power2.inOut",
      },
      "<"
    );

    return () => {
      alive = false;
      tl.kill();
      restoreScroll();
    };
  }, [logoDecoded, staticLogo]);

  // Fallback if onLoadingComplete never fires (edge network / ad blockers)
  useEffect(() => {
    if (logoDecoded || prefersReducedMotion() || staticLogo) return;
    const id = globalThis.window.setTimeout(() => setLogoDecoded(true), 1400);
    return () => globalThis.window.clearTimeout(id);
  }, [logoDecoded, staticLogo]);

  return (
    <div
      id={LOADER_ID}
      role={staticLogo ? undefined : "status"}
      aria-live={staticLogo ? undefined : "polite"}
      aria-label={staticLogo ? undefined : "Loading Globe X Infra"}
      className="fixed inset-0 z-[10001] pointer-events-none overflow-hidden"
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-primary will-change-transform pointer-events-auto"
      >
        <button
          ref={logoWrapRef}
          type="button"
          className="relative w-[min(92vw,360px)] max-w-full cursor-pointer select-none overflow-hidden border-0 bg-transparent p-0 font-inherit [backface-visibility:hidden] will-change-[opacity] [&:focus]:outline-none [&:focus-visible]:outline-2 [&:focus-visible]:outline-primary [&:focus-visible]:outline-offset-2"
          onClick={(e) => {
            e.preventDefault();
            globalThis.window?.scrollTo({ top: 0, behavior: "smooth" });
          }}
          aria-label="Scroll to top"
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={520}
            height={104}
            className="h-auto w-full max-w-full object-contain object-center"
            priority
            onLoadingComplete={() => setLogoDecoded(true)}
          />
        </button>
      </div>
    </div>
  );
}
