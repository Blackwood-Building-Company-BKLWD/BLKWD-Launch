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

      <WeHearYou />

      <AuthoritySplit />

      {/* Process — minimal, trust through calm */}
      <section id="process" className="bg-black py-32 sm:py-44 border-t border-oak/10">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            Your Path
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-10" />
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.04em] text-warm-white leading-tight">
            Clarity At
            <br />
            Every Stage.
          </h2>
        </div>

        <div className="mx-auto max-w-5xl px-6 mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-oak/8">
            {[
              {
                step: "01",
                label: "Discover",
                line: "We listen. Feasibility before fees. You leave with clarity \u2014 no commitment.",
              },
              {
                step: "02",
                label: "Design & Lock",
                line: "Your life, translated into architecture. Then a fixed-price contract before a shovel hits dirt.",
              },
              {
                step: "03",
                label: "Build & Handover",
                line: "Weekly updates. One point of contact. A home that performs the way it promised.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-black p-10 sm:p-14 text-center">
                <span className="font-display text-6xl font-extrabold text-oak/12 leading-none">
                  {item.step}
                </span>
                <h3 className="mt-6 font-display text-base font-bold uppercase tracking-[0.15em] text-warm-white">
                  {item.label}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-sand/45">
                  {item.line}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block bg-warm-white px-10 py-3.5 font-body text-[10px] tracking-[0.2em] uppercase text-black hover:bg-warm-white/90 time-slice"
          >
            Book A Feasibility Call
          </a>
        </div>
      </section>

      <Signature />

      <WellnessSuite />

      <VisualGrid />
    </>
  );
}
