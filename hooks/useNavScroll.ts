"use client";

import { useEffect, useState } from "react";
import { debounce } from "@/lib/utils";

interface NavScrollState {
  isScrolled: boolean;
  activeSection: string;
}

// ─── useNavScroll ──────────────────────────────────────────────────────────────
// Tracks scroll position to toggle nav background and active section
export function useNavScroll(sectionIds: string[]): NavScrollState {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = debounce(() => {
      setIsScrolled(window.scrollY > 60);

      // Determine active section
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.getBoundingClientRect().top <= 100) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    }, 10);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return { isScrolled, activeSection };
}
