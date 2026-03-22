"use client";

import { useRef } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLarge = index === 0 || index === 3;

  return (
    <div
      ref={cardRef}
      data-reveal
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
      className={`group relative overflow-hidden rounded-2xl cursor-default select-none ${isLarge ? "md:row-span-2" : ""}`}
    >
      {/* Project image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <Image
          src={project.image}
          alt={`${project.client} – ${project.category}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={index < 2}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-700 opacity-80 group-hover:opacity-90"
        style={{ background: `linear-gradient(160deg, ${project.colorFrom}cc 0%, ${project.colorTo}f0 100%)` }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className={`relative z-10 p-7 flex flex-col justify-end ${isLarge ? "min-h-72 md:min-h-[420px]" : "min-h-52"}`}>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs text-white/70 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-0.5">
              {tag}
            </span>
          ))}
        </div>

        <div className="text-xs text-white/40 font-mono mb-1">
          {String(project.id).padStart(2, "0")}
        </div>
        <h3 className="text-xl font-semibold text-white mb-1">{project.client}</h3>
        <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
          {project.description}
        </p>
        <div className="mt-2">
          <span className="text-xs font-medium text-white/40 tracking-wider uppercase">{project.category}</span>
        </div>
        <div className="mt-4 flex items-center gap-2 text-white/30 group-hover:text-white/70 transition-colors duration-500">
          <span className="text-xs tracking-widest uppercase">View Project</span>
          <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4" data-reveal="fade">
              <span className="w-8 h-px bg-primary/40" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/60">Selected Work</span>
            </div>
            <h2 className="text-fluid-4xl font-bold text-gray-900 leading-tight" data-reveal>
              Projects That{" "}
              <em className="font-playfair italic font-normal text-primary">Define</em>{" "}Us
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed" data-reveal="right">
            A curated look at the work that reflects our craft, our clients, and our commitment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-auto">
          {PROJECTS.map((project: Project, i: number) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center" data-reveal="fade">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="inline-flex items-center gap-3 border border-primary/30 text-primary font-semibold text-sm px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 group"
          >
            Start Your Project
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
