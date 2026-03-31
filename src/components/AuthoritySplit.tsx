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

      <div className={`flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-20 lg:py-24 ${reverse ? "lg:order-1" : ""}`}>
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-oak mb-4">
          {subtitle}
        </span>
        <div className="blkwd-rule mb-6" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight tracking-[0.04em] text-warm-white">
          {title}
        </h2>
        <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-sand/60">
          {description}
        </p>
        <a
          href="#contact"
          className="mt-10 inline-flex w-fit border border-oak/30 px-8 py-3 font-body text-[10px] tracking-[0.25em] uppercase text-warm-white/80 hover:bg-warm-white hover:text-black time-slice"
        >
          Explore
        </a>
      </div>
    </div>
  );
}

export default function AuthoritySplit() {
  return (
    <section id="projects" className="bg-black">
      <ArchBlock
        title="Luxury Homes"
        subtitle="Material Integrity"
        description="Spatial flow designed around how you live, not how a brochure reads. Cross-ventilation for SEQ humidity, salt-resistant materiality from Miami to Byron, and thermal mass strategies that keep your home performing through every season. Each residence is a direct response to its site."
        image="/assets/renders/ig-08.jpg.png"
      />

      <div className="flex items-center justify-center py-4">
        <div className="h-16 w-px bg-oak/15" />
      </div>

      <ArchBlock
        title="Knock Down Rebuild"
        subtitle="Coastal Resilience"
        description="Your block has potential the existing structure can&apos;t reach. We start with rigorous site analysis — orientation, setbacks, soil, views — then design around what the land offers. Fixed-price contracts, outcome-based delivery, and a construction team that takes ownership of every detail through to handover."
        image="/assets/renders/Bowsprit Hi Res.jpg"
        reverse
      />
    </section>
  );
}
