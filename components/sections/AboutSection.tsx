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
                Founded in 2019, Globe X Infra Pvt. Ltd. is a Greater Noida–based spatial
                experience design company specialising in exhibitions, trade shows, corporate
                events, and brand activations across India and internationally.
              </p>
              <p>
                We believe every square metre of space is an opportunity to communicate. Our
                multidisciplinary team of designers, fabricators, and event strategists works
                as an integrated unit — concept to teardown — ensuring that nothing is lost
                in translation between idea and reality.
              </p>
              <p>
                With 200+ projects delivered across 50+ brand partners, we have developed a
                fluency in diverse sectors: textile, automotive, food-tech, tourism, finance,
                FMCG, and heavy industry.
              </p>
            </div>

            {/* Image strip below copy */}
            <div className="mt-10 grid grid-cols-2 gap-3" data-reveal="left">
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
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-primary">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be South Asia's most trusted spatial experience design partner — where
                every environment we create becomes a lasting memory for the people who
                inhabit it.
              </p>
            </div>

            <div className="bg-primary text-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-white/70">Mission</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                To deliver spatial experiences that are both strategically intelligent and
                aesthetically exceptional — empowering brands to connect with their
                audiences at a human level, every single time.
              </p>
            </div>

            {/* Full-width showcase image */}
            <div className="relative h-52 rounded-2xl overflow-hidden" data-reveal="right">
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
            </div>

            {/* Founded badge */}
            <div className="flex items-center gap-6 pt-2 pl-4">
              <div className="text-4xl font-bold text-primary/20">6+</div>
              <div>
                <div className="text-sm font-medium text-gray-900">Years of award-winning work</div>
                <div className="text-xs text-gray-400 mt-0.5">200+ projects · 50+ brand partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
