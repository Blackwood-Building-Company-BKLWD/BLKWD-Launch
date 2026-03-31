import Hero from "@/components/Hero";
import AuthoritySplit from "@/components/AuthoritySplit";
import Signature from "@/components/Signature";
import WellnessSuite from "@/components/WellnessSuite";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Breathing space between sections */}
      <div className="h-px w-full bg-white/5" />

      <AuthoritySplit />

      {/* Process */}
      <section id="process" className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-white/30">
            How We Work
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.06em] text-white">
            Architectural
            <br />
            Integrity
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-body text-sm leading-relaxed text-white/40">
            Our process is straightforward. We listen, we plan properly, and we
            build what we said we&apos;d build. No scope creep, no surprises on
            handover day. Just clear communication from first sketch to final
            walkthrough.
          </p>

          {/* Process Steps */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              { step: "01", label: "Design", desc: "Site analysis, council requirements, orientation for SEQ conditions. We design around your block, not a template." },
              { step: "02", label: "Build", desc: "Fixed-price contracts, weekly progress updates, and a construction team that takes ownership of every detail." },
              { step: "03", label: "Live", desc: "Handover isn\u2019t the end. We build homes that perform \u2014 thermally, structurally, and in the way they make you feel every morning." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-display text-5xl font-extrabold text-white/10">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-sm font-bold uppercase tracking-[0.15em] text-white">
                  {item.label}
                </h3>
                <p className="mt-3 font-body text-xs leading-relaxed text-white/35">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-white/5" />

      <Signature />

      {/* Wellness Suite */}
      <WellnessSuite />

      {/* Subtropical Living */}
      <section className="bg-black py-24 sm:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-white/30">
                Subtropical Living
              </span>
              <div className="blkwd-rule mt-6 mb-8" />
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-tight tracking-[0.04em] text-white">
                Built For
                <br />
                This Coast
              </h2>
              <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-white/40">
                South East Queensland isn&apos;t a mild climate — it&apos;s humid, salt-laden,
                and UV-intense. Every material we specify is chosen because it
                performs here, not because it looks good in a catalogue.
              </p>
              <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-white/40">
                Marine-grade steel framing. Thermally broken glazing systems.
                Composite decking that won&apos;t cup or fade after two summers.
                We build for the Gold Coast and Brisbane climate because
                that&apos;s where we build — and we know what lasts.
              </p>
            </div>

            {/* Material Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
              {[
                { label: "Marine-Grade Steel", detail: "Structural framing rated for salt-air corrosion zones across the Gold Coast and Northern NSW coastline" },
                { label: "Composite Decking", detail: "UV-stable, low-maintenance surfaces engineered for SEQ\u2019s humidity and direct sun exposure" },
                { label: "Passive Cooling", detail: "Cross-ventilation and subtropical orientation \u2014 reducing mechanical cooling loads by design, not afterthought" },
                { label: "Coastal Glazing", detail: "Thermally broken aluminium with impact ratings for coastal wind zones from Tweed to Noosa" },
              ].map((spec, i) => (
                <div key={i} className="bg-black p-8">
                  <h3 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white">
                    {spec.label}
                  </h3>
                  <p className="mt-3 font-body text-[11px] leading-relaxed text-white/30">
                    {spec.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About / Ethos */}
      <section id="about" className="bg-black py-24 sm:py-32 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-white/30">
            About Blackwood
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-8" />
          <p className="font-display text-2xl sm:text-3xl font-extrabold uppercase leading-snug tracking-[0.04em] text-white">
            Design. Build. Live.
          </p>
          <p className="mx-auto mt-8 max-w-lg font-body text-sm leading-relaxed text-white/40">
            Blackwood was built on a simple idea: your builder should care as
            much about how a home lives as how it looks. We&apos;re a design and
            construct firm rooted in South East Queensland — Gold Coast, Brisbane,
            Northern NSW — and we bring architectural integrity to every project,
            whether it&apos;s a bespoke family home, a multi-residential development,
            or a knock down rebuild that finally does the site justice.
          </p>
          <p className="mx-auto mt-4 max-w-lg font-body text-sm leading-relaxed text-white/40">
            No templates. No shortcuts. Just considered homes built by people
            who take the craft seriously.
          </p>
        </div>
      </section>
    </>
  );
}
