"use client";

import { useEffect, useRef } from "react";

interface BlockProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
}

function ArchBlock({ title, subtitle, description, image, reverse }: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal grid grid-cols-1 lg:grid-cols-2 gap-0 ${
        reverse ? "lg:direction-rtl" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${reverse ? "lg:order-2" : ""}`}>
        <div className="absolute inset-0 bg-stone shimmer" />
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover time-slice-slow hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-20 lg:py-24 ${reverse ? "lg:order-1" : ""}`}>
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
          {subtitle}
        </span>
        <div className="blkwd-rule mb-6" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-[0.04em] text-white">
          {title}
        </h2>
        <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-white/50">
          {description}
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex w-fit border border-white/15 px-8 py-3 font-body text-[10px] tracking-[0.25em] uppercase text-white/80 hover:bg-white hover:text-black time-slice"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default function AuthoritySplit() {
  return (
    <section id="projects" className="bg-black">
      <ArchBlock
        title="Bespoke Homes"
        subtitle="Architectural Integrity"
        description="We build homes that work for the way you actually live. Cross-ventilation engineered for SEQ humidity, material palettes that handle salt air without compromise, and spatial design that connects you to the subtropical landscape outside your door. Gold Coast, Brisbane, hinterland — every site has a story. We make sure the house tells it."
        image="/assets/renders/ig-03.jpg.png"
      />

      {/* Divider */}
      <div className="flex items-center justify-center py-4">
        <div className="h-16 w-px bg-white/10" />
      </div>

      <ArchBlock
        title="Knock Down Rebuild"
        subtitle="Bespoke Craft"
        description="Your block has potential the existing structure can't unlock. Our KDRB process starts with rigorous site analysis — orientation, setbacks, soil, views — then designs around what the land actually offers. From council-ready documentation through to handover, we manage the full build so you get a home that belongs on that site."
        image="/assets/renders/ig-04.jpg.png"
        reverse
      />
    </section>
  );
}
