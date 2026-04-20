"use client";

import { useEffect, useRef } from "react";

export default function WeHearYou() {
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
    <section className="bg-black py-28 sm:py-36">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-snug tracking-[0.03em] text-warm-white">
          Your builder should care as much
          <br className="hidden sm:block" />
          about how a home lives as how it looks.
        </p>
        <div className="blkwd-rule mx-auto mt-10 mb-10" />
        <p className="max-w-xl mx-auto font-body text-sm sm:text-base leading-relaxed text-sand/55">
          Fixed-price contracts. Feasibility before fees. Weekly updates.
          A partnership built on clarity — not promises.
        </p>
      </div>
    </section>
  );
}
