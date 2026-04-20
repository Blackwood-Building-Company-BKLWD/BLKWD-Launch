"use client";

import { useEffect, useRef } from "react";

const concerns = [
  {
    fear: "Budget blowouts",
    answer: "Fixed-price contracts. Clear scope. No mid-build surprises.",
  },
  {
    fear: "Where do I even start?",
    answer: "A feasibility conversation before any design fees. Clarity before commitment.",
  },
  {
    fear: "What if I overcapitalise?",
    answer: "We guide value decisions up front \u2014 so your investment is aligned to the end result.",
  },
  {
    fear: "Builder insolvency",
    answer: "Licensed, insured, and financially stable. Built to still be here in ten years.",
  },
  {
    fear: "The home not turning out right",
    answer: "A true partnership. Every design decision made with you \u2014 not around you.",
  },
  {
    fear: "Getting taken for a ride",
    answer: "Radical transparency. Weekly updates. You see what we see, the whole way through.",
  },
];

export default function WeHearYou() {
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
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            A Safe Pair Of Hands
          </span>
          <div className="blkwd-rule mt-6 mb-10" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-[1.1] tracking-[0.04em] text-warm-white">
            Building Should Feel
            <br />
            Exciting — Not Overwhelming.
          </h2>
          <p className="mt-8 font-body text-base sm:text-lg leading-relaxed text-sand/60 max-w-2xl">
            You&apos;ve worked hard to get here. The last thing you need is a
            builder who treats this like a transaction. We&apos;ve spent years
            listening to the real concerns that come with a custom build — and
            designed our entire process around solving them.
          </p>
        </div>

        {/* Concerns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {concerns.map((c, i) => (
            <div key={i} className="border-l border-oak/20 pl-6">
              <p className="font-display text-lg sm:text-xl font-bold text-warm-white/90 italic">
                &ldquo;{c.fear}&rdquo;
              </p>
              <p className="mt-3 font-body text-sm sm:text-base leading-relaxed text-sand/55">
                {c.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance line */}
        <div className="mt-20 max-w-2xl">
          <p className="font-display text-xl sm:text-2xl font-extrabold uppercase leading-snug tracking-[0.03em] text-warm-white">
            We&apos;re the team you hand the keys to before the build even starts.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block border border-oak/40 px-10 py-3.5 font-body text-[10px] tracking-[0.25em] uppercase text-warm-white/80 hover:bg-warm-white hover:text-black time-slice"
          >
            Book A Feasibility Call
          </a>
        </div>
      </div>
    </section>
  );
}
