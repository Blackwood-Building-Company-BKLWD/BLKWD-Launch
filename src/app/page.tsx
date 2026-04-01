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

      {/* Subtropical Materiality */}
      <section className="bg-black py-24 sm:py-32 border-t border-oak/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
                Subtropical Living
              </span>
              <div className="blkwd-rule mt-6 mb-8" />
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-tight tracking-[0.04em] text-warm-white">
                Built For
                <br />
                This Coast
              </h2>
              <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-sand/50">
                South East Queensland isn&apos;t mild — it&apos;s humid, salt-laden, and
                UV-intense. Every material we specify performs here. Barefoot
                luxury from Miami to Byron Bay means your home handles the
                conditions without you thinking about it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-oak/10">
              {[
                { label: "Thermal Mass", detail: "Concrete and masonry strategies that regulate internal temperatures without mechanical cooling dependency" },
                { label: "Salt-Resistant Materiality", detail: "Marine-grade steel, coastal glazing systems, and finishes rated for salt-air corrosion zones" },
                { label: "Spatial Flow", detail: "Cross-ventilation and subtropical orientation designed around prevailing sea breezes and solar paths" },
                { label: "High-Performance Glazing", detail: "Thermally broken aluminium with impact ratings for coastal wind zones from Tweed to Noosa" },
              ].map((spec, i) => (
                <div key={i} className="bg-black p-8">
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-warm-white">
                    {spec.label}
                  </h3>
                  <p className="mt-3 font-body text-[11px] leading-relaxed text-sand/35">
                    {spec.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Grid — IG integrated */}
      <VisualGrid />

      {/* About / Ethos */}
      <section id="about" className="bg-black py-24 sm:py-32 border-t border-oak/10">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            About Blackwood
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-8" />
          <p className="font-display text-2xl sm:text-3xl font-extrabold uppercase leading-snug tracking-[0.04em] text-warm-white">
            Design. Build. Live.
          </p>
          <p className="mx-auto mt-8 max-w-lg font-body text-sm leading-relaxed text-sand/50">
            Blackwood is a design and construct firm rooted in South East
            Queensland. We deliver identity-driven lifestyle homes — bespoke
            residences, knock down rebuilds, and boutique multi-residential
            developments — across the Gold Coast, Brisbane, and Northern NSW.
          </p>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-sand/50">
            No templates. No shortcuts. Architectural integrity and bespoke
            craft, from first conversation to handover.
          </p>
          <a
            href="/about"
            className="mt-10 inline-block border border-oak/30 px-10 py-3.5 font-body text-[10px] tracking-[0.25em] uppercase text-warm-white/70 hover:bg-warm-white hover:text-black time-slice"
          >
            Meet The Team
          </a>
        </div>
      </section>
    </>
  );
}
