"use client";

import { useEffect, useRef } from "react";

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
    <section className="bg-black py-24 sm:py-32 border-t border-oak/10">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
          Beyond Aesthetics
        </span>
        <div className="blkwd-rule mx-auto mt-6 mb-8" />
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.06em] text-warm-white">
          Integrated Wellness
          <br />
          Infrastructure
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-body text-sm leading-relaxed text-sand/50">
          Acoustic isolation between living zones. Magnesium pool filtration
          systems. Steam-room sanctuaries with materials rated for SEQ humidity.
          We integrate high-performance wellness infrastructure into the
          architecture — invisible until you need it, engineered to last.
        </p>
      </div>
    </section>
  );
}
