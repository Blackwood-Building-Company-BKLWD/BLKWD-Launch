"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      const overlay = el.querySelector<HTMLDivElement>(".hero-overlay");
      const text = el.querySelector<HTMLDivElement>(".hero-text");
      if (overlay) overlay.style.opacity = `${0.4 + y * 0.001}`;
      if (text) text.style.transform = `translateY(${y * 0.25}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-stone shimmer" />
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/renders/ig-01.jpg.png"
      >
        <source src="/assets/video/hero-reel.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black opacity-40" />

      <div className="hero-text relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="blkwd-rule mx-auto mb-8" />
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[1.1] tracking-[0.08em] text-warm-white max-w-5xl">
          Architecture For The
          <br />
          Subtropical Lifestyle.
        </h1>
        <p className="mt-6 max-w-2xl font-body text-sm sm:text-base tracking-wide text-sand/80 leading-relaxed">
          Designing and delivering high-performance residential sanctuaries
          <br className="hidden sm:block" />
          across the Gold Coast, Brisbane, and Northern NSW.
        </p>
        <a
          href="#projects"
          className="mt-10 border border-oak/40 px-8 py-3 font-body text-[11px] tracking-[0.25em] uppercase text-warm-white hover:bg-warm-white hover:text-black time-slice"
        >
          View Our Work
        </a>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-sand/30">
            Scroll
          </span>
          <div className="h-8 w-px bg-oak/30" />
        </div>
      </div>
    </section>
  );
}
