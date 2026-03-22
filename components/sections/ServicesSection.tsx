"use client";

import { useRef } from "react";
import { SERVICES } from "@/lib/data";
import type { Service } from "@/types";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "";
    }
  };

  return (
    <div
      ref={cardRef}
      data-reveal
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white border border-gray-100 rounded-2xl p-6 lg:p-8 cursor-default
                 hover:border-primary/30 hover:shadow-xl transition-all duration-500
                 [transform-style:preserve-3d] [will-change:transform]"
    >
      {/* Hover fill */}
      <div className="absolute inset-0 rounded-2xl bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-white/15 flex items-center justify-center mb-5 transition-colors duration-500">
          <svg
            className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-500"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
          </svg>
        </div>

        {/* Number */}
        <div className="text-xs font-mono text-gray-300 group-hover:text-white/30 mb-2 transition-colors duration-500">
          {String(service.id).padStart(2, "0")}
        </div>

        <h3 className="font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-500 text-base">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 group-hover:text-white/70 leading-relaxed transition-colors duration-500">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4" data-reveal="fade">
              <span className="w-8 h-px bg-primary/40" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/60">
                What We Do
              </span>
            </div>
            <h2 className="text-fluid-4xl font-bold text-gray-900 leading-tight" data-reveal>
              12 Ways We{" "}
              <em className="font-playfair italic font-normal text-primary">Create</em>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed" data-reveal="right">
            Our full-spectrum service offering means you never have to stitch together
            multiple vendors. We own the entire experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service: Service, i: number) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
