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
      if (overlay) overlay.style.opacity = `${0.35 + y * 0.0008}`;
      if (text) text.style.transform = `translateY(${y * 0.2}px)`;
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

      <div className="hero-overlay absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 opacity-35" />

      <div className="hero-text relative z-10 flex h-full flex-col items-end justify-end px-8 sm:px-16 pb-20 sm:pb-28">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[1.05] tracking-[0.03em] text-white text-right">
            Build the Home
            <br />
            You Can Exhale In.
          </h1>
          <p className="mt-6 font-body text-sm sm:text-base text-white/70 text-right leading-relaxed">
            Gold Coast. Brisbane. Northern NSW.
          </p>
          <div className="mt-8 flex justify-end gap-4">
            <a
              href="#projects"
              className="border border-white/30 px-7 py-3 font-body text-[10px] tracking-[0.2em] uppercase text-white/90 hover:bg-white hover:text-black time-slice"
            >
              Our Work
            </a>
            <a
              href="#contact"
              className="bg-white px-7 py-3 font-body text-[10px] tracking-[0.2em] uppercase text-black hover:bg-white/90 time-slice"
            >
              Start A Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
