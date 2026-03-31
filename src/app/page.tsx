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

      {/* Process Teaser */}
      <section id="process" className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-white/30">
            Our Process
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.06em] text-white">
            Precision At
            <br />
            Every Stage
          </h2>
          <p className="mx-auto mt-6 max-w-lg font-body text-sm leading-relaxed text-white/40">
            From initial concept through to handover, our process is built on
            transparency, accountability, and an obsessive attention to detail
            that defines the Blackwood standard.
          </p>

          {/* Process Steps */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            {[
              { step: "01", label: "Vision & Strategy", desc: "Site analysis, subtropical orientation, and coastal design direction — engineered for enduring luxury." },
              { step: "02", label: "Design & Documentation", desc: "Architectural design, salt-resistant material selection, and council approvals with bespoke craftsmanship." },
              { step: "03", label: "Build & Handover", desc: "Precision construction with full transparency — built to withstand coastal conditions for generations." },
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

      {/* Coastal Resilience */}
      <section className="bg-black py-24 sm:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-white/30">
                Subtropical Sustainable Design
              </span>
              <div className="blkwd-rule mt-6 mb-8" />
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase leading-tight tracking-[0.04em] text-white">
                Enduring
                <br />
                Coastal Luxury
              </h2>
              <p className="mt-6 max-w-md font-body text-sm leading-relaxed text-white/40">
                Every Blackwood residence is engineered for the demands of coastal
                living — salt-resistant high-grade steel framing, composite
                decking systems, and low-maintenance material palettes that age
                with grace, not compromise.
              </p>
              <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-white/40">
                We design for visual serenity and structural permanence.
                Subtropical orientation, passive cooling, and resilient
                construction converge to create architectural sanctuaries that
                perform as beautifully as they endure.
              </p>
            </div>

            {/* Material Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
              {[
                { label: "High-Grade Steel", detail: "Marine-grade structural framing engineered for salt-air environments" },
                { label: "Composite Decking", detail: "Low-maintenance, UV-stable surfaces that resist warping and fading" },
                { label: "Passive Cooling", detail: "Cross-ventilation and subtropical orientation for natural climate control" },
                { label: "Coastal Glazing", detail: "Impact-rated, thermally broken aluminium systems for panoramic resilience" },
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
            We don&apos;t build houses.
            <br />
            We build sanctuaries.
          </p>
          <p className="mx-auto mt-8 max-w-lg font-body text-sm leading-relaxed text-white/40">
            Blackwood Building Company was founded on a singular belief: that the
            homes we create should outlast trends, exceed expectations, and stand
            as enduring statements of architectural intent. From subtropical
            sustainable design to wellness-integrated living — every project is
            a partnership in bespoke craftsmanship and visual serenity.
          </p>
        </div>
      </section>
    </>
  );
}
