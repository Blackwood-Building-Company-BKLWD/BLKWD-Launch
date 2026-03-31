"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    title: "Cold Plunge & Recovery Pools",
    description:
      "Temperature-controlled plunge pools with integrated filtration, designed as functional landscape elements. Not an add-on \u2014 part of the architecture from day one.",
  },
  {
    title: "Magnesium Pools",
    description:
      "Mineral-based aquatic systems that eliminate chlorine, reduce maintenance, and integrate seamlessly into subtropical outdoor living. Built for daily use, not just weekends.",
  },
  {
    title: "Home Spa & Sauna",
    description:
      "Infrared saunas, steam rooms, and hydrotherapy suites specified with materials that handle SEQ humidity. Engineered to perform, not just photograph well.",
  },
  {
    title: "Wellness-Integrated Design",
    description:
      "Breathwork rooms, meditation courtyards, biophilic detailing. We design wellness into the floor plan \u2014 not as a marketing line, but as spaces you\u2019ll actually use.",
  },
];

export default function WellnessSuite() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-24 sm:py-32 lg:py-40 border-t border-white/5">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-white/30">
            Live
          </span>
          <div className="blkwd-rule mt-6 mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-[0.04em] text-white">
            Wellness &amp;
            <br />
            Coastal Sanctuaries
          </h2>
          <p className="mt-6 max-w-lg font-body text-sm leading-relaxed text-white/40">
            The &apos;Live&apos; in Design. Build. Live. means something specific to us.
            It means your home supports recovery after a surf, hosts properly on
            a Saturday night, and feels like a retreat without leaving the Gold
            Coast. We integrate wellness into the architecture — not as an
            afterthought, but as the reason you built in the first place.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-black p-8 sm:p-12 time-slice hover:bg-stone"
            >
              <span className="font-display text-4xl font-extrabold text-white/[0.05]">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-white">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-sm font-body text-xs leading-relaxed text-white/35 group-hover:text-white/50 time-slice">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex items-center gap-6">
          <div className="h-px flex-1 bg-white/5" />
          <a
            href="#contact"
            className="border border-white/15 px-8 py-3 font-body text-[10px] tracking-[0.25em] uppercase text-white/70 hover:bg-white hover:text-black time-slice"
          >
            Talk To Us About Wellness
          </a>
          <div className="h-px flex-1 bg-white/5" />
        </div>
      </div>
    </section>
  );
}
