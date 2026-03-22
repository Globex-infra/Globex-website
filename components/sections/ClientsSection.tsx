"use client";

import { useRef } from "react";
import { CLIENTS } from "@/lib/data";
import { ClientMarqueeLogo } from "@/components/sections/ClientMarqueeLogo";

export default function ClientsSection() {
  const track = useRef<HTMLDivElement>(null);

  // Duplicate for seamless loop
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="py-32 bg-off-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4" data-reveal="fade">
              <span className="w-8 h-px bg-primary/40" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/60">
                Trusted By
              </span>
            </div>
            <h2 className="text-fluid-4xl font-bold text-gray-900 leading-tight" data-reveal>
              50+ Brands.{" "}
              <em className="font-playfair italic font-normal text-primary">One Standard.</em>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed" data-reveal="right">
            From startups to multinationals — our clients trust us to represent them on the world stage.
          </p>
        </div>
      </div>

      {/* Marquee track — full bleed */}
      <div
        className="relative group"
        onMouseEnter={() => { if (track.current) track.current.style.animationPlayState = "paused"; }}
        onMouseLeave={() => { if (track.current) track.current.style.animationPlayState = "running"; }}
      >
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-off-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-off-white to-transparent z-10 pointer-events-none" />

        <div ref={track} className="flex animate-marquee whitespace-nowrap gap-0">
          {doubled.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-8 flex-shrink-0 px-8 py-4 group/item"
            >
              <div className="flex h-12 min-w-[7rem] max-w-[180px] items-center cursor-default">
                <ClientMarqueeLogo client={client} />
              </div>
              <span className="text-gray-200 text-lg select-none">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second row — reverse */}
      <div
        className="relative group mt-4"
        onMouseEnter={() => { const el = document.getElementById("marquee-r"); if (el) el.style.animationPlayState = "paused"; }}
        onMouseLeave={() => { const el = document.getElementById("marquee-r"); if (el) el.style.animationPlayState = "running"; }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-off-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-off-white to-transparent z-10 pointer-events-none" />

        <div
          id="marquee-r"
          className="flex animate-marquee-reverse whitespace-nowrap gap-0"
          style={{ animationDuration: "35s" }}
        >
          {[...doubled].reverse().map((client, i) => (
            <div
              key={`${client.name}-r-${i}`}
              className="flex items-center gap-8 flex-shrink-0 px-8 py-4 group/item"
            >
              <div className="flex h-12 min-w-[7rem] max-w-[180px] items-center cursor-default">
                <ClientMarqueeLogo client={client} muted />
              </div>
              <span className="text-gray-200 text-lg select-none">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
