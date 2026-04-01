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
    <section className="bg-black py-32 sm:py-44 lg:py-52">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-24 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            Brisbane to Byron
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-10" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-[0.06em] text-warm-white">
            Our Promise
            <br />
            To You
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-sand/50">
            From Brisbane to Byron Bay, every home we build is a direct
            reflection of the way its owners live. Not how we think they should
            live — how they actually do. Your mornings, your weekends, the way
            you move through a space. We listen to that, and we build around it.
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-sand/50">
            No stock plans. No repeated facades. Just considered homes that
            belong on their site and feel right from the first morning.
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
