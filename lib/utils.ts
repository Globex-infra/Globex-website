import { clsx, type ClassValue } from "clsx";

// ─── Class Name Utility ────────────────────────────────────────────────────────
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

// ─── Number Animation Easing ──────────────────────────────────────────────────
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// ─── Animate Counter ──────────────────────────────────────────────────────────
export function animateCounter(
  element: HTMLElement,
  target: number,
  suffix: string,
  duration: number = 2000
): void {
  const startTime = performance.now();

  const update = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const current = Math.round(eased * target);
    element.textContent = `${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  };

  requestAnimationFrame(update);
}

// ─── Debounce ─────────────────────────────────────────────────────────────────
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ─── Format Phone ─────────────────────────────────────────────────────────────
export function formatPhone(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

/** Fixed navbar height allowance (h-16 / h-20) — scroll target offset for Lenis */
const NAV_SCROLL_OFFSET = -88;

type LenisScroll = {
  scrollTo: (
    target: HTMLElement | string,
    opts?: { offset?: number; immediate?: boolean }
  ) => void;
};

// ─── Scroll to section (Lenis-aware; native #hash does not move Lenis scroll) ─
export function scrollToSection(id: string): void {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  const lenis = (typeof window !== "undefined" &&
    (window as Window & { __globeLenis?: LenisScroll }).__globeLenis) as
    | LenisScroll
    | undefined;

  if (lenis?.scrollTo) {
    lenis.scrollTo(el, { offset: NAV_SCROLL_OFFSET });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
