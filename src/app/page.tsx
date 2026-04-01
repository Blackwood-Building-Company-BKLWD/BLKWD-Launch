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

      {/* About / Ethos */}
      <section id="about" className="bg-black py-32 sm:py-44 border-t border-oak/10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
              About Blackwood
            </span>
            <div className="blkwd-rule mx-auto mt-6 mb-10" />
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-snug tracking-[0.04em] text-warm-white">
              Design. Build. Live.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <p className="font-body text-base sm:text-lg leading-relaxed text-sand/60">
              We started Blackwood because we thought the Gold Coast deserved
              better. Better design. Better communication during the build.
              Better outcomes on handover day. That hasn&apos;t changed.
            </p>
            <p className="font-body text-base sm:text-lg leading-relaxed text-sand/60">
              We&apos;re a design and construct firm that works across bespoke homes,
              knock down rebuilds, and boutique multi-residential — from the
              Gold Coast through Brisbane and up into Northern NSW. Whether
              it&apos;s a family home on a suburban block or a coastal compound on
              acreage, we bring the same level of care to every project.
            </p>
            <p className="font-body text-base sm:text-lg leading-relaxed text-sand/60">
              We know this coast. The humidity, the salt air, the council
              processes, and the way subtropical light moves through a room
              at 4pm. That knowledge sits behind every decision we make —
              from structural framing to door handle selection.
            </p>
            <p className="font-body text-base sm:text-lg leading-relaxed text-sand/60">
              No templates. No recycled floor plans. Every home we build is
              shaped around the people who&apos;ll live in it — their mornings,
              their weekends, the way they move through a space. That&apos;s
              what we mean by Design. Build. Live.
            </p>
          </div>

          <div className="mt-14 text-center">
            <a
              href="/about"
              className="inline-block border border-oak/30 px-10 py-3.5 font-body text-[10px] tracking-[0.25em] uppercase text-warm-white/70 hover:bg-warm-white hover:text-black time-slice"
            >
              Meet The Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
