import Hero from "@/components/Hero";
import AuthoritySplit from "@/components/AuthoritySplit";
import Signature from "@/components/Signature";
import WellnessSuite from "@/components/WellnessSuite";
import VisualGrid from "@/components/VisualGrid";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="h-px w-full bg-oak/10" />

      <AuthoritySplit />

      {/* The Journey to Handover */}
      <section id="process" className="bg-black py-32 sm:py-44 lg:py-52">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            Outcome-Based Delivery
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-10" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-[0.06em] text-warm-white">
            The Journey
            <br />
            To Handover
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-sand/50">
            Radical transparency from first conversation to key handover. No
            hidden costs, no scope creep. You know what you&apos;re getting, what
            it costs, and when it&apos;s done.
          </p>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16">
            {[
              { step: "01", label: "Design", desc: "Site analysis, council requirements, subtropical orientation. We design around your block and the SEQ conditions \u2014 not a template." },
              { step: "02", label: "Build", desc: "Fixed-price contract. Weekly progress updates. A construction team across the Gold Coast and Brisbane that owns every detail." },
              { step: "03", label: "Live", desc: "Handover isn\u2019t the finish line \u2014 it\u2019s the start. We build homes that perform thermally, structurally, and in the way they make you feel." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-display text-7xl font-extrabold text-oak/15">
                  {item.step}
                </span>
                <h3 className="mt-6 font-display text-base font-bold uppercase tracking-[0.15em] text-warm-white">
                  {item.label}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-sand/40">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-oak/10" />

      <Signature />

      {/* Wellness — trimmed, alluded */}
      <WellnessSuite />

      {/* Visual Grid — IG integrated */}
      <VisualGrid />

    </>
  );
}
