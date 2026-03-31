"use client";

import { useEffect, useRef } from "react";

const galleryImages = [
  { src: "/assets/renders/ig-01.jpg.png", alt: "Coastal sanctuary with infinity pool" },
  { src: "/assets/renders/ig-02.jpg.png", alt: "KDRB precision facade" },
  { src: "/assets/renders/ig-03.jpg.png", alt: "Wellness sanctuary master ensuite" },
  { src: "/assets/renders/ig-04.jpg.png", alt: "Multi-residential streetscape" },
];

export default function Signature() {
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
    <section className="bg-black py-24 sm:py-32 lg:py-40">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-20 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            Curated Environments
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.06em] text-warm-white">
            The Blackwood
            <br />
            Standard
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-body text-sm leading-relaxed text-sand/50">
            No stock plans, no repeated facades. Each project is a direct
            response to its site, its owners, and the subtropical conditions
            between Miami and Byron Bay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[3/2] overflow-hidden bg-stone"
            >
              <div className="absolute inset-0 shimmer" />
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 h-full w-full object-cover time-slice-slow group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 time-slice" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 time-slice">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-warm-white/80">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/projects"
            className="inline-block border border-oak/30 px-10 py-3.5 font-body text-[10px] tracking-[0.25em] uppercase text-warm-white/70 hover:bg-warm-white hover:text-black time-slice"
          >
            All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
