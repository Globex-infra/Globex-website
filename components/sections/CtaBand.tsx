"use client";

export default function CtaBand() {
;

  const openWhatsApp = () => {
  const phoneNumber = "918700420772"; // include country code (91 for India)
  const message = "Hi, I want to start a conversation!";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

  return (
    <section className="relative py-24 bg-primary-dark grain overflow-hidden">
      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span className="text-[10rem] lg:text-[16rem] font-bold text-white/[0.03] tracking-tight whitespace-nowrap">
          EXPERIENCE
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <div className="flex items-center justify-center gap-4 mb-6" data-reveal="fade">
          <span className="w-8 h-px bg-white/30" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/40">
            Let's Build Together
          </span>
          <span className="w-8 h-px bg-white/30" />
        </div>

        <h2 className="text-fluid-4xl font-bold text-white leading-tight mb-6" data-reveal>
          Have a space that needs a{" "}
          <em className="font-playfair italic font-normal text-white/60">story?</em>
        </h2>

        <p className="text-white/50 leading-relaxed max-w-xl mx-auto mb-10" data-reveal="fade">
          Whether it's a trade show debut, a product launch, or an international pavilion — we
          would love to hear about it.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4" data-reveal>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 bg-white text-primary font-semibold text-sm px-8 py-4 rounded-full
             hover:bg-white/90 transition-all duration-300 group"
          >
            Start a Conversation
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          {/* <a
            href="tel:+916395255110"
            className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +91 6395255110
          </a> */}
        </div>
      </div>
    </section>
  );
}