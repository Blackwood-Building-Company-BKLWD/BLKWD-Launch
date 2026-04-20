"use client";

import { useEffect, useRef } from "react";

function ProjectBlock({
  title,
  subtitle,
  tagline,
  image,
}: {
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
}) {
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
    <div ref={ref} className="reveal group relative aspect-[16/10] sm:aspect-[16/8] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover time-slice-slow group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-14">
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-oak">
          {subtitle}
        </span>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.03em] text-white leading-tight">
          {title}
        </h2>
        <p className="mt-3 max-w-md font-body text-sm text-white/60 leading-relaxed">
          {tagline}
        </p>
      </div>
    </div>
  );
}

export default function AuthoritySplit() {
  return (
    <section id="projects" className="bg-black">
      <ProjectBlock
        title="The Sanctuary"
        subtitle="Custom Homes"
        tagline="Indoor-outdoor living, material integrity, and a home designed around the life you've built."
        image="/assets/renders/Maybree close.png"
      />
      <ProjectBlock
        title="The Reimagination"
        subtitle="Knock Down Rebuild"
        tagline="Your block, reimagined. Fixed-price clarity from first sketch to handover."
        image="/assets/renders/Bowsprit%20Hi%20Res.jpg"
      />
      <ProjectBlock
        title="The Collection"
        subtitle="Boutique Multi-Residential"
        tagline="Architecturally-led developments with bespoke home quality. Each dwelling stands alone."
        image="/assets/renders/ig-04.jpg.png"
      />
    </section>
  );
}
