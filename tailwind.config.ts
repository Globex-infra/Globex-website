import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E516D",
        "primary-dark": "#0a3d53",
        "primary-light": "#1a6b8a",
        "off-white": "#f6f5f2",
        "warm-gray": "#e8e6e1",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.75rem, 1.5vw, 0.875rem)",
        "fluid-base": "clamp(0.9rem, 1.8vw, 1rem)",
        "fluid-lg": "clamp(1rem, 2vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 2.5vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 3vw, 2rem)",
        "fluid-3xl": "clamp(2rem, 4vw, 3rem)",
        "fluid-4xl": "clamp(2.5rem, 5vw, 4rem)",
        "fluid-5xl": "clamp(3rem, 7vw, 6rem)",
        "fluid-hero": "clamp(3rem, 8vw, 7rem)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
