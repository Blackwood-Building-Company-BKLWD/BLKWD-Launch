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
    <section className="bg-black py-32 sm:py-44 border-t border-oak/10">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            How You Live
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-10" />
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-[0.06em] text-warm-white">
            Your Home Should
            <br />
            Make You Feel Something
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-body text-base sm:text-lg leading-relaxed text-sand/60">
            More and more, our clients care about how they feel. How they
            operate. How their daily routines integrate into the spaces they
            live in. We hear it in every brief. We see it in the way people
            are building now.
          </p>
          <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-sand/60">
            Cold plunge pools after a morning surf. Hot spas under the stars
            on a Tuesday night. Indoor and outdoor saunas that actually get
            used — not just photographed. Steam rooms built into your shower
            so recovery is part of your morning, not a separate trip.
          </p>
          <p className="mt-6 font-body text-base sm:text-lg leading-relaxed text-sand/60">
            We don&apos;t sell wellness as a marketing line. We design these
            spaces because our clients ask for them — and because we know
            how to build them properly for the Gold Coast climate. The right
            filtration, the right materials, the right placement so it all
            works without thinking about it.
          </p>
        </div>
      </div>
    </section>
  );
}
