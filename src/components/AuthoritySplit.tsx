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
        title="Luxury Custom Homes"
        subtitle="Bespoke Residences"
        description="Architectural sanctuaries crafted for subtropical living. Salt-resistant materials, passive cooling, and bespoke craftsmanship converge — every residence an enduring statement of visual serenity and coastal luxury."
        image="/assets/renders/ig-03.jpg"
      />

      {/* Divider */}
      <div className="flex items-center justify-center py-4">
        <div className="h-16 w-px bg-white/10" />
      </div>

      <ArchBlock
        title="Architectural Knockdown Rebuilds"
        subtitle="Reimagined Living"
        description="Reimagine your site as an architectural sanctuary. Our custom KDRB process integrates wellness suites, subtropical sustainable design, and coastal-resilient construction — transforming your block into an enduring legacy."
        image="/assets/renders/ig-04.jpg"
        reverse
      />
    </section>
  );
}
