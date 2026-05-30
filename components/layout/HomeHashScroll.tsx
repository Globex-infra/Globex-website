"use client";

import { useEffect } from "react";
import { GLOBEX_NAV_SECTION_STORAGE_KEY } from "@/lib/nav-scroll-bridge";
import { scrollToSection } from "@/lib/utils";

// ─── HomeHashScroll ───────────────────────────────────────────────────────────
// After navigating from other routes (e.g. /work/*) with ?/# section target,
// scroll once the home sections are in the DOM and Lenis may be attached.
export function HomeHashScroll() {
  useEffect(() => {
    const fromStorage = sessionStorage.getItem(GLOBEX_NAV_SECTION_STORAGE_KEY);
    const fromHash = globalThis.location.hash.replace(/^#/, "");
    const id = (fromStorage || fromHash).trim();
    if (!id) return;

    if (fromStorage) sessionStorage.removeItem(GLOBEX_NAV_SECTION_STORAGE_KEY);

    let cancelled = false;
    let done = false;
    const tryScroll = () => {
      if (cancelled || done) return;
      if (!document.getElementById(id)) return;
      done = true;
      scrollToSection(id);
    };

    tryScroll();
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    for (let i = 1; i <= 16; i++) {
      timeouts.push(setTimeout(tryScroll, i * 40));
    }
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return null;
}
