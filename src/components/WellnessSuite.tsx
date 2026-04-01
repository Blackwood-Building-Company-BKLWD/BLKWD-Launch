"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    title: "Hot & Cold Plunge",
    description:
      "Integrated plunge pools — cold recovery after a surf, heated spa under the stars. Designed into your landscape, not bolted on after.",
    image: "/assets/renders/wellness-plunge.jpg.png",
  },
  {
    title: "Outdoor Barrel Sauna",
    description:
      "Timber barrel saunas nestled into subtropical gardens. A 15-step walk from your back door to genuine recovery.",
    image: "/assets/renders/wellness-sauna.jpg.png",
  },
  {
    title: "Home Gym & Recovery",
    description:
      "Purpose-built gym spaces with indoor sauna, spa, and cool-down zones. Train, recover, and never leave the house.",
    image: "/assets/renders/wellness-gym.jpg.png",
  },
  {
    title: "Steam Shower",
    description:
      "Steam rooms engineered directly into your shower. Recovery becomes part of your morning — not a separate trip.",
    image: "/assets/renders/wellness-steam.jpg.png",
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
    <section className="bg-black py-32 sm:py-44 border-t border-oak/10">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            What Our Clients Want
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-10" />
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-[0.06em] text-warm-white">
            Your Home Should
            <br />
            Make You Feel Something
          </h2>
        </div>

        {/* Intro copy */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="font-body text-base sm:text-lg leading-relaxed text-sand/60">
            More and more, our clients care about how they feel. How they
            operate. How their daily routines integrate into the spaces they
            live in. We hear it in every brief — and we&apos;re building for it.
          </p>
          <p className="mt-8 font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.04em] text-warm-white">
            The Spaces They Love.
          </p>
        </div>

        {/* 4-up feature grid with image slots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="group relative overflow-hidden bg-stone">
              {/* Image */}
              <div className="aspect-[3/2] relative">
                <div className="absolute inset-0 shimmer" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="absolute inset-0 h-full w-full object-cover time-slice-slow group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-[0.06em] text-warm-white">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-sm font-body text-xs sm:text-sm leading-relaxed text-sand/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
