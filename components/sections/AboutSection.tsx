"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-off-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16" data-reveal="fade">
          <span className="w-8 h-px bg-primary/40" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/60">
            About Globe X
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Story */}
          <div>
            <h2
              className="text-fluid-4xl font-bold text-gray-900 leading-tight mb-8"
              data-reveal="left"
            >
              We turn{" "}
              <em className="font-playfair italic font-normal text-primary">
                physical space
              </em>{" "}
              into brand narrative.
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed" data-reveal="left">
              <p>
                At Globe X, we turn ideas into real, living spaces. Every brand has a story to tell, and our job is to bring that story to life through
                thoughtfully designed spaces that people can see, feel, and experience.
              </p>
              <p>
                Inspired by architecture and driven by design thinking, we craft spaces that are more than just structures—they are experiences designed
                to create a lasting impression. While exhibitions are part of our journey, our work goes far beyond them. From installations to large-scale
                structures, we explore every possibility where art, design, and production meet.

              </p>
            </div>

            {/* Image strip below copy */}
            {/* <div className="mt-10 grid grid-cols-2 gap-3" data-reveal="left">
              <div className="relative h-44 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80"
                  alt="Exhibition booth craftsmanship"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80"
                  alt="Trade show floor"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
              </div>
            </div> */}

            <div className="flex items-center gap-6 pt-12 pl-4">
              <div className="text-4xl font-bold text-primary/20">6+</div>
              <div>
                <div className="text-sm font-medium text-gray-900">Years of award-winning work</div>
                <div className="text-xs text-gray-400 mt-0.5">200+ projects · 50+ brand partners</div>
              </div>
            </div>
          </div>

          {/* Right — Vision & Mission */}
          <div className="space-y-6" data-reveal="right">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">Our Promise</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To continue delivering spaces that
                inspire, connect, and transform how
                people experience brands and ideas.
              </p>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-white/70">Our Vision</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                To become India's most sought-after
                experiential design firm, known for
                innovation, quality, and unforgettable
                spatial experiences.
              </p>
            </div>

            {/* Full-width showcase image */}
            {/* <div className="relative h-52 rounded-2xl overflow-hidden" data-reveal="right">
              <Image
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                alt="Globe X event design showcase"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(120deg, #0E516Daa, #0a3d53dd)" }}
              />
              <div className="absolute bottom-5 left-6 text-white">
                <div className="text-xs tracking-[0.2em] uppercase text-white/50 mb-1">Est.</div>
                <div className="text-3xl font-bold">2019</div>
                <div className="text-xs text-white/60 mt-0.5">Greater Noida · India</div>
              </div>
            </div> */}

            <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2L28 7V17C28 24 22 30 16 33C10 30 4 24 4 17V7L16 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="10,17 14,22 22,12"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                </div>
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">Our Commitment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To invest in our people, embrace new
                technologies, and constantly raise the
                bar for what's possible in experiential
                design.

              </p>
            </div>

            {/* Founded badge */}

          </div>
        </div>
      </div>
    </section>
  );
}