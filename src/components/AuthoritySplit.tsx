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
        <p className="mt-6 max-w-md font-body text-base leading-relaxed text-sand/65">
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
      {/* Intro header for section */}
      <div className="mx-auto max-w-4xl px-6 lg:px-12 pt-32 sm:pt-40 pb-16 text-center">
        <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
          The Work
        </span>
        <div className="blkwd-rule mx-auto mt-6 mb-10" />
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-[1.1] tracking-[0.04em] text-warm-white">
          Homes Built
          <br />
          Around The Life Inside Them.
        </h2>
        <p className="mt-8 max-w-2xl mx-auto font-body text-base sm:text-lg leading-relaxed text-sand/55">
          Your life has changed. Your home should catch up. Whether you&apos;re
          building fresh, reimagining a block you already own, or shaping a
          boutique development — we design around how you actually live.
        </p>
      </div>

      <ArchBlock
        title="The Sanctuary"
        subtitle="Custom Homes"
        description="For those ready to build the reward for years of hard work. Indoor-outdoor living, material integrity, and spatial flow designed around your rituals — morning coffee, the way you host on a Saturday, how you wind down on a Tuesday. Wow factor with liveability."
        image="/assets/renders/Maybree close.png"
      />

      <div className="flex items-center justify-center py-4">
        <div className="h-16 w-px bg-oak/15" />
      </div>

      <ArchBlock
        title="The Reimagination"
        subtitle="Knock Down Rebuild"
        description="You already have the block. You just need the home that belongs on it. Rigorous site analysis, fixed-price clarity, and a construction team that owns every detail through to handover. The site you love, finally doing the life you're building justice."
        image="/assets/renders/Bowsprit Hi Res.jpg"
        reverse
      />

      <div className="flex items-center justify-center py-4">
        <div className="h-16 w-px bg-oak/15" />
      </div>

      <ArchBlock
        title="The Collection"
        subtitle="Boutique Multi-Residential"
        description="Architecturally-led duplex, triplex, and small-scale multi-res projects for selective developers. Same material integrity, same spatial thinking we bring to bespoke homes — engineered for yield without repetition. Each dwelling designed as a standalone residence."
        image="/assets/renders/ig-04.jpg.png"
      />
    </section>
  );
}
