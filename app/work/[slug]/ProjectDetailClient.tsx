"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LenisProvider } from "@/components/animations/LenisProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { scrollToSection } from "@/lib/utils";
import type { Project } from "@/types";
import { GlobeLoader } from "@/components/ui/GlobeLoader";

interface Props {
  project: any;
  nextProject:any;
}

export default function ProjectDetailClient({ project, nextProject }: Props) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax on hero image
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-reveal observer (reuses the same data-reveal pattern from the rest of the site)
  useEffect(() => {
    if (!mounted) return;
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [mounted]);

  // Lightbox keyboard navigation
  useEffect(() => {
    if (!project.images) return;
    const total = project.images.length;
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => ((i ?? 0) + 1) % total);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => ((i ?? 0) - 1 + total) % total);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, project.images]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  if (!mounted) return null;

  const images = project.images ?? [];

  return (
    <LenisProvider>
      <GlobeLoader staticLogo />

      <CustomCursor />
      <Navbar />

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section className="relative h-[75vh] min-h-[520px] overflow-hidden">
          {/* Parallax image */}
          <div
            ref={heroImgRef}
            className="absolute inset-0"
            style={{ transform: `translateY(${scrollY * 0.3}px)`, willChange: "transform" }}
          >
            <Image
              src={project.image}
              alt={project.client}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>

          {/* Colour gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(160deg, ${project.colorFrom}d9 0%, ${project.colorTo}f5 100%)`,
            }}
          />

          {/* Dot pattern (matches site-wide card motif) */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Back button */}
          <div className="absolute top-24 left-6 lg:left-10 z-20">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium group"
            >
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back
            </button>
          </div>

          {/* Hero text — staggered entrance */}
          <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 lg:px-10 max-w-7xl mx-auto">
            <div style={{ opacity: 0, animation: "heroFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s forwards" }}>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag:any) => (
                  <span
                    key={tag}
                    className="text-xs text-white/70 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ opacity: 0, animation: "heroFadeUp 0.65s cubic-bezier(0.16,1,0.3,1) 0.18s forwards" }}>
              <p className="text-xs text-white/40 font-mono mb-2">
                {String(project.id).padStart(2, "0")}
              </p>
            </div>

            <div style={{ opacity: 0, animation: "heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.24s forwards" }}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight mb-4">
                {project.client}
              </h1>
            </div>

            <div style={{ opacity: 0, animation: "heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.32s forwards" }}>
              <p className="text-white/70 max-w-xl text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <style>{`
            @keyframes heroFadeUp {
              from { opacity: 0; transform: translateY(22px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </section>

        {/* ── META BAR ──────────────────────────────────────────────────── */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Client", value: project.client },
              { label: "Category", value: project.category },
              { label: "Year", value: project.year ?? "—" },
              { label: "Deliverables", value: project.deliverables ?? project.tags.join(", ") },
            ].map((item, i) => (
              <div
                key={item.label}
                data-reveal="fade"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-gray-900">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── OVERVIEW ──────────────────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_360px] gap-16 items-start">
              {/* Left: copy */}
              <div>
                <div className="flex items-center gap-4 mb-6" data-reveal="fade">
                  <span className="w-8 h-px bg-primary/40" />
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/60">
                    Overview
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight"
                  data-reveal
                >
                  {project.overviewTitle ?? "The Challenge & Approach"}
                </h2>
                <div className="space-y-5 text-gray-500 leading-relaxed text-base" data-reveal>
                  {(
                    project.overviewBody ?? [
                      project.description,
                      "Our team worked closely with the client to craft an environment that was both strategically sound and experientially memorable — every detail considered, every element purposeful.",
                    ]
                  ).map((para:any, i:any) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Right: outcomes */}
              {project.outcomes && project.outcomes.length > 0 && (
                <div
                  className="rounded-2xl border border-gray-100 p-8 bg-gray-50/60 sticky top-28"
                  data-reveal="right"
                >
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/60 mb-7">
                    Outcomes
                  </p>
                  <ul className="space-y-6">
                    {project.outcomes.map((outcome :any, i:any) => (
                      <li key={i} className="flex items-start gap-4">
                        <span
                          className="text-2xl font-bold leading-none shrink-0"
                          style={{ color: project.colorFrom }}
                        >
                          {outcome.metric}
                        </span>
                        <span className="text-sm text-gray-500 leading-snug pt-0.5">
                          {outcome.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── GALLERY ───────────────────────────────────────────────────── */}
        {images.length > 0 && (
          <section className="bg-gray-50 py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div className="flex items-center gap-4 mb-12" data-reveal="fade">
                <span className="w-8 h-px bg-primary/40" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/60">
                  Gallery
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((img :any, i :any) => (
                  <div
                    key={i}
                    data-reveal
                    style={{ transitionDelay: `${(i % 3) * 70}ms` }}
                    className={[
                      "relative overflow-hidden rounded-2xl cursor-zoom-in group bg-gray-200",
                      img.size === "wide" ? "md:col-span-2" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => setLightboxIndex(i)}
                  >
                    <div
                      className={`relative w-full ${
                        img.size === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt ?? `${project.client} — image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Zoom hint on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── NEXT PROJECT ──────────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex items-center gap-4 mb-10" data-reveal="fade">
              <span className="w-8 h-px bg-primary/40" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/60">
                Next Project
              </span>
            </div>

            <Link href={`/work/${nextProject.slug}`} className="group block" data-reveal>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <Image
                    src={nextProject.image}
                    alt={nextProject.client}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div
                    className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity duration-700"
                    style={{
                      background: `linear-gradient(160deg, ${nextProject.colorFrom}cc 0%, ${nextProject.colorTo}f0 100%)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {nextProject.tags.map((tag :any) => (
                      <span
                        key={tag}
                        className="text-xs text-white/70 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                    {nextProject.client}
                  </h3>
                  <p className="text-white/60 group-hover:text-white/80 transition-colors duration-500 max-w-lg text-sm leading-relaxed">
                    {nextProject.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-white/40 group-hover:text-white/90 transition-colors duration-500">
                    <span className="text-xs tracking-widest uppercase font-medium">View Project</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Back to all work */}
            <div className="mt-12 flex justify-center" data-reveal="fade">
              <a
                href="/#work"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/");
                  setTimeout(() => scrollToSection("work"), 400);
                }}
                className="inline-flex items-center gap-3 border border-primary/30 text-primary font-semibold text-sm px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
              >
                All Projects
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ── LIGHTBOX ──────────────────────────────────────────────────── */}
      {lightboxIndex !== null && images.length > 0 && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
          style={{ animation: "lbFadeIn 0.2s ease" }}
        >
          <style>{`@keyframes lbFadeIn { from { opacity:0 } to { opacity:1 } }`}</style>

          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
            onClick={() => setLightboxIndex(null)}
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => ((i ?? 0) - 1 + images.length) % images.length);
              }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-20 aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt ?? ""}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => ((i ?? 0) + 1) % images.length);
              }}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono tracking-widest">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </LenisProvider>
  );
}
