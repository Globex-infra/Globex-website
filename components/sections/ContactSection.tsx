"use client";

import { useState } from "react";
import { CONTACT_INFO } from "@/lib/data";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const SERVICES_LIST = [
  "Trade Shows", "Corporate Events", "Conferences", "Event Management",
  "Exhibition Design", "Brand Promotions", "Product Launch", "Brand Activation",
  "Award Ceremonies", "Decor & Concept", "Road Shows", "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 " +
    "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300";

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4" data-reveal="fade">
          <span className="w-8 h-px bg-primary/40" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary/60">
            Contact Us
          </span>
        </div>
        <h2 className="text-fluid-4xl font-bold text-gray-900 leading-tight mb-16" data-reveal>
          Let's{" "}
          <em className="font-playfair italic font-normal text-primary">Connect</em>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Contact Info */}
          <div data-reveal="left">
            <p className="text-gray-500 leading-relaxed mb-10">
              Whether you have a brief ready or just an idea — reach out. Our team
              responds within 24 hours and we love talking through spatial challenges.
            </p>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-off-white rounded-xl group hover:bg-primary/5 transition-colors duration-300">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-[0.1em] uppercase text-gray-400 mb-1">Phone</div>
                  {CONTACT_INFO.phone.map((p) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-sm text-gray-700 hover:text-primary transition-colors">
                      {p}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-off-white rounded-xl hover:bg-primary/5 transition-colors duration-300">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-[0.1em] uppercase text-gray-400 mb-1">Email</div>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-gray-700 hover:text-primary transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-off-white rounded-xl hover:bg-primary/5 transition-colors duration-300">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-[0.1em] uppercase text-gray-400 mb-1">Address</div>
                  <p className="text-sm text-gray-700 leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div data-reveal="right">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-6 py-16">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Received!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    We'll be in touch within 24 hours. Looking forward to working with you.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Full Name *</label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="Rajesh Kumar"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Email *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="rajesh@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Phone</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Company</label>
                    <input
                      name="company" value={form.company} onChange={handleChange}
                      placeholder="Company Name"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Service Interested In</label>
                  <select name="service" value={form.service} onChange={handleChange} className={inputClass}>
                    <option value="">Select a service…</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Message *</label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, timeline, and goals…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white font-semibold text-sm py-4 rounded-xl
                             hover:bg-primary-dark transition-all duration-300 flex items-center justify-center gap-3
                             disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
