"use client";

import { useEffect, useRef } from "react";

export default function MultiRes() {
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
    <section className="bg-black py-24 sm:py-32 border-t border-oak/10">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-stone">
            <div className="absolute inset-0 shimmer" />
            <img
              src="/assets/renders/ig-08.jpg.png"
              alt="Boutique multi-residential development"
              className="absolute inset-0 h-full w-full object-cover time-slice-slow hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
              High-Performance Development
            </span>
            <div className="blkwd-rule mt-6 mb-8" />
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-tight tracking-[0.04em] text-warm-white">
              Boutique
              <br />
              Multi-Residential
            </h2>
            <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-sand/60">
              Engineering high-yield, architecturally-led developments for the
              selective QLD market. We bring the same material integrity and
              spatial thinking from our bespoke homes into duplex, triplex, and
              boutique multi-res projects across the Gold Coast and Brisbane.
            </p>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-sand/60">
              Each unit is designed as a standalone residence — not a repeated
              floor plan with different paint. Sensory architecture, subtropical
              flow, and coastal resilience engineered into every dwelling.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex w-fit border border-oak/30 px-8 py-3 font-body text-[10px] tracking-[0.25em] uppercase text-warm-white/80 hover:bg-warm-white hover:text-black time-slice"
            >
              Discuss A Development
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
