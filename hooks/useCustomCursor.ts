"use client";

import { useEffect, useRef } from "react";

// ─── useCustomCursor ───────────────────────────────────────────────────────────
// Drives the custom dot + follower cursor
export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Hide on mobile
    if (globalThis.window?.matchMedia("(pointer: coarse)").matches) {
      cursor.style.display = "none";
      follower.style.display = "none";
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let rafId: number;

    const HERO_SELECTOR = "#hero";

    const updateHeroCursor = () => {
      const target = document.elementFromPoint(mouseX, mouseY);
      const heroEl = target?.closest(HERO_SELECTOR);
      const inHero = Boolean(heroEl);
      const heroTheme = heroEl instanceof HTMLElement ? heroEl.dataset.theme : undefined;
      const useLightCursor = inHero && heroTheme !== "light";
      cursor.classList.toggle("cursor--on-hero", useLightCursor);
      follower.classList.toggle("cursor-follower--on-hero", useLightCursor);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      updateHeroCursor();
    };

    const onScroll = () => updateHeroCursor();

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animateFollower);
    };

    const onMouseEnterLink = () => {
      cursor.classList.add("cursor--hover");
      follower.classList.add("cursor-follower--hover");
    };

    const onMouseLeaveLink = () => {
      cursor.classList.remove("cursor--hover");
      follower.classList.remove("cursor-follower--hover");
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll, true);
    rafId = requestAnimationFrame(animateFollower);

    const links = document.querySelectorAll("a, button, [data-cursor-hover]");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll, true);
      cancelAnimationFrame(rafId);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnterLink);
        link.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return { cursorRef, followerRef };
}
