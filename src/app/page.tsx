import Hero from "@/components/Hero";
import WeHearYou from "@/components/WeHearYou";
import AuthoritySplit from "@/components/AuthoritySplit";
import Signature from "@/components/Signature";
import WellnessSuite from "@/components/WellnessSuite";
import VisualGrid from "@/components/VisualGrid";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Resolve the anxiety immediately after Hero */}
      <WeHearYou />

      {/* The work — lifestyle-led project categories */}
      <AuthoritySplit />

      {/* The Journey to Handover — upgraded as trust asset */}
      <section id="process" className="bg-black py-32 sm:py-44 lg:py-52 border-t border-oak/10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-20">
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
              Clarity Before Commitment
            </span>
            <div className="blkwd-rule mx-auto mt-6 mb-10" />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-warm-white">
              The Journey
              <br />
              To Handover
            </h2>
            <p className="mx-auto mt-8 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-sand/55">
              A clear path — not a leap of faith. Every Blackwood project moves
              through five stages, each with defined outcomes, fixed investment,
              and radical transparency.
            </p>
          </div>

          {/* 5-stage journey with trust signals */}
          <div className="space-y-px bg-oak/10">
            {[
              {
                step: "01",
                label: "Discovery",
                outcome: "A feasibility conversation before any design fees.",
                desc: "We start with a conversation, not a quote. Site potential, budget alignment, what's possible — no commitment, no pressure. You leave with clarity.",
              },
              {
                step: "02",
                label: "Design Partnership",
                outcome: "Your life, translated into architecture.",
                desc: "We design around how you actually live — your mornings, your weekends, how you host. Collaborative, considered, and always anchored to the feasibility we agreed on.",
              },
              {
                step: "03",
                label: "Fixed-Price Contract",
                outcome: "Your investment, locked in. Before a shovel hits dirt.",
                desc: "Full documentation, transparent pricing, clear scope. You sign knowing exactly what you're getting and what it costs. No mid-build surprises. Ever.",
              },
              {
                step: "04",
                label: "Build",
                outcome: "Weekly updates. One point of contact. Zero guesswork.",
                desc: "A construction team that takes ownership of every detail — from slab to second fix. You see progress every week. You always know where things stand.",
              },
              {
                step: "05",
                label: "Handover & Beyond",
                outcome: "The relationship doesn't end at the keys.",
                desc: "Warranty, aftercare, and a genuine partnership that continues long after you move in. We build homes we want to still be looking after in ten years.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-black p-8 sm:p-12 grid grid-cols-12 gap-6 items-start"
              >
                <div className="col-span-12 sm:col-span-2">
                  <span className="font-display text-5xl sm:text-6xl font-extrabold text-oak/25 leading-none">
                    {item.step}
                  </span>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.06em] text-warm-white">
                    {item.label}
                  </h3>
                  <p className="mt-3 font-body text-sm italic text-oak leading-relaxed">
                    {item.outcome}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <p className="font-body text-sm sm:text-base leading-relaxed text-sand/55">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance close */}
          <div className="mt-20 text-center">
            <p className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-[0.04em] text-warm-white max-w-2xl mx-auto leading-snug">
              You&apos;ll never wonder where you stand.
              <br />
              That&apos;s the whole point.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-block border border-warm-white/80 bg-warm-white/90 px-10 py-3.5 font-body text-[10px] tracking-[0.25em] uppercase text-black hover:bg-warm-white time-slice"
            >
              Book A Feasibility Call
            </a>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-oak/10" />

      <Signature />

      {/* Wellness — "The Spaces They Love" */}
      <WellnessSuite />

      {/* Visual Grid — IG integrated */}
      <VisualGrid />

    </>
  );
}
