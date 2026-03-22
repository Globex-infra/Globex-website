"use client";

import { PROCESS_STEPS } from "@/lib/data";
import type { ProcessStep } from "@/types";

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-primary grain overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-4" data-reveal="fade">
              <span className="w-8 h-px bg-white/30" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40">
                How We Work
              </span>
            </div>
            <h2 className="text-fluid-4xl font-bold text-white leading-tight" data-reveal>
              Our{" "}
              <em className="font-playfair italic font-normal text-white/60">Process</em>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm leading-relaxed" data-reveal="right">
            A rigorous yet flexible methodology developed across 200+ projects. Every
            engagement is distinct; every process step is intentional.
          </p>
        </div>

        {/* Steps — vertical timeline on mobile, horizontal on desktop */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-white/10" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
            {PROCESS_STEPS.map((step: ProcessStep, i: number) => (
              <div
                key={step.id}
                data-reveal
                style={{ transitionDelay: `${i * 100}ms` }}
                className="relative group"
              >
                {/* Mobile connector */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-8 top-16 bottom-0 w-px bg-white/10" />
                )}

                <div className="flex lg:flex-col gap-5 lg:gap-0">
                  {/* Step number bubble */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center
                                 group-hover:bg-white/10 transition-all duration-500 bg-primary"
                    >
                      <span className="text-xl font-bold text-white/30 group-hover:text-white/60 transition-colors duration-500 font-mono">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <div className="lg:pt-8">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
