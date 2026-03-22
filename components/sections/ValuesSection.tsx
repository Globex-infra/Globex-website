"use client";

import { CORE_VALUES } from "@/lib/data";
import type { CoreValue } from "@/types";

export default function ValuesSection() {
  return (
    <section id="values" className="py-32 bg-off-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4" data-reveal="fade">
            <span className="w-8 h-px bg-primary/40" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/60">
              What Guides Us
            </span>
            <span className="w-8 h-px bg-primary/40" />
          </div>
          <h2 className="text-fluid-4xl font-bold text-gray-900 leading-tight" data-reveal>
            Core{" "}
            <em className="font-playfair italic font-normal text-primary">Values</em>
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_VALUES.map((value: CoreValue, i: number) => (
            <div
              key={value.id}
              data-reveal={i % 2 === 0 ? "left" : "right"}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="group bg-white border border-gray-100 rounded-2xl p-8 lg:p-10
                         hover:border-primary/20 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/8 group-hover:bg-primary/12 flex items-center justify-center transition-colors duration-500">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="text-xs font-mono text-gray-300 mb-1">
                    0{value.id}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-3 group-hover:text-primary transition-colors duration-500">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>

              {/* Hover accent line */}
              <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-primary/30 to-transparent mt-8 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
