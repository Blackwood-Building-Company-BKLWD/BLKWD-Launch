"use client";

const instagramCaptions = [
  {
    title: "The Texture Story",
    handle: "@BLKWD.au",
    caption: `Fluted timber meets off-form concrete. Two materials that don't try to be anything other than what they are — and that's the point.

Every surface in a Blackwood home is specified for how it feels under your hand, how it ages in salt air, and how it catches the light at 4pm.

This isn't decoration. It's material integrity.

#BLKWD #DesignBuildLive #GoldCoastBuilder #ArchitecturalDetail #SubtropicalDesign #FlutedTimber #OffFormConcrete #MaterialIntegrity #CoastalArchitecture #BespokeHomes`,
  },
  {
    title: "The Sanctuary Ensuite",
    handle: "@BLKWD.au",
    caption: `Steam showers. Magnesium recovery pools. Circadian lighting that shifts with your day.

More and more, our clients are building homes that make them feel something. Not just look good — actually perform for how they live.

This master ensuite was designed around one question: what does your morning look like?

#BLKWD #WellnessArchitecture #SteamShower #MagnesiumPool #MasterEnsuite #GoldCoastHomes #DesignBuildLive #BathroomDesign #CoastalSanctuary #HighPerformanceLiving`,
  },
  {
    title: "The Multi-Res Pivot",
    handle: "@BLKWD.au",
    caption: `Boutique multi-residential done differently.

Same material integrity as our bespoke homes. Same spatial thinking. Same obsession with how subtropical light moves through a room.

The difference? Each dwelling is designed to stand alone — not repeat. That's how you build yield without sacrificing architecture.

Gold Coast. Brisbane. Northern NSW. We're taking enquiries for 2026 developments.

#BLKWD #MultiResidential #BoutiqueDevelopment #GoldCoastDeveloper #ArchitecturalMultiRes #DesignBuildLive #BrisbaneDeveloper #TweedCoast #HighYield #SubtropicalLiving`,
  },
];

const standardChecklist = [
  { item: "RPEQ Seawall Engineering", category: "Coastal Resilience" },
  { item: "Marine-Grade Steel Framing (AS/NZS 4600)", category: "Coastal Resilience" },
  { item: "Thermally Broken Glazing Systems", category: "Coastal Resilience" },
  { item: "Salt-Air Corrosion Zone Rated Finishes", category: "Coastal Resilience" },
  { item: "Flood-Resilient Ground Floor Engineering", category: "Coastal Resilience" },
  { item: "Cross-Ventilation & Passive Cooling Design", category: "Coastal Resilience" },
  { item: "Circadian Light Array Integration", category: "Biological Optimization" },
  { item: "Magnesium Pool Filtration Systems", category: "Biological Optimization" },
  { item: "Acoustic Isolation Between Living Zones", category: "Biological Optimization" },
  { item: "Steam Shower Infrastructure (Ensuite)", category: "Biological Optimization" },
  { item: "Hot & Cold Plunge Pool Engineering", category: "Biological Optimization" },
  { item: "Biophilic Material Palette Specification", category: "Biological Optimization" },
];

const targetKeywords = [
  "Luxury Builder Gold Coast",
  "Wellness Architecture SEQ",
  "High-Performance Custom Homes",
  "Boutique Multi-Residential Tweed Coast",
  "Knock Down Rebuild Brisbane",
  "Coastal Architect Gold Coast",
  "Subtropical Home Design",
  "Bespoke Homes Northern NSW",
];

export default function StrategyGuide() {
  return (
    <div className="min-h-screen bg-[#0A0A08] pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">

        {/* Masthead */}
        <div className="border-b border-[#8B7D6B]/20 pb-16 mb-20">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            Internal Document — Not For Distribution
          </span>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[1.05] tracking-[0.04em] text-[#FAF8F5]">
            The Blackwood
            <br />
            Journal
          </h1>
          <p className="mt-4 font-body text-lg text-[#C4B8A5]/60">
            2026 Market Strategy &amp; Brand Authority Guide
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="px-3 py-1 border border-[#8B7D6B]/30 font-body text-[9px] tracking-[0.2em] uppercase text-[#8B7D6B]">
              SEO Strategy
            </span>
            <span className="px-3 py-1 border border-[#8B7D6B]/30 font-body text-[9px] tracking-[0.2em] uppercase text-[#8B7D6B]">
              Brand Voice
            </span>
            <span className="px-3 py-1 border border-[#8B7D6B]/30 font-body text-[9px] tracking-[0.2em] uppercase text-[#8B7D6B]">
              Social Kit
            </span>
            <span className="px-3 py-1 border border-[#8B7D6B]/30 font-body text-[9px] tracking-[0.2em] uppercase text-[#8B7D6B]">
              Non-Negotiables
            </span>
          </div>
        </div>

        {/* ─── SECTION 1: Strategic Positioning ─── */}
        <section className="mb-24">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            01 — Strategic Positioning
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            The Edge
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#8B7D6B]/10">
            <div className="bg-[#0A0A08] p-10">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">
                Primary Edge
              </span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-[0.06em] text-[#FAF8F5]">
                Coastal Resilience
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-[#C4B8A5]/50">
                High-performance engineering for the SEQ and Northern NSW
                elements. Salt-laden air, cyclonic wind ratings, flood-zone
                compliance, and UV-intense material degradation. Every
                specification is driven by what this coast does to buildings
                over 10, 20, 50 years. We don&apos;t build for the brochure
                photo — we build for the decade after it.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Salt Air", "Wind Rating", "Flood Engineering", "UV Resistance", "Thermal Mass"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-[#2A2A2A] font-body text-[9px] tracking-[0.15em] uppercase text-[#C4B8A5]/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0A0A08] p-10">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">
                Secondary Edge
              </span>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-[0.06em] text-[#FAF8F5]">
                Biological Optimization
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-[#C4B8A5]/50">
                Wellness-integrated infrastructure that goes beyond spa
                bathrooms and yoga rooms. Magnesium pool filtration, circadian
                lighting arrays that shift colour temperature through the day,
                acoustic isolation between living zones, and steam-shower
                sanctuaries engineered for SEQ humidity levels. The home as
                a performance environment — not just a shelter.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Circadian Lighting", "Magnesium Filtration", "Acoustic Mastery", "Steam Infrastructure", "Biophilic Design"].map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-[#2A2A2A] font-body text-[9px] tracking-[0.15em] uppercase text-[#C4B8A5]/40">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 2: Technical SEO & Meta ─── */}
        <section className="mb-24">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            02 — Technical SEO &amp; Meta
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            Search Authority
          </h2>

          <div className="mt-12 space-y-8">
            {/* Meta Tags */}
            <div className="border border-[#8B7D6B]/15 p-8">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">
                Meta Title
              </span>
              <p className="mt-2 font-display text-lg font-bold text-[#FAF8F5]">
                Blackwood Building Co | Architecture for the Subtropical Lifestyle
              </p>
            </div>

            <div className="border border-[#8B7D6B]/15 p-8">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">
                Meta Description
              </span>
              <p className="mt-2 font-body text-base text-[#C4B8A5]/60">
                Bespoke, resilient, and wellness-led residential builds from
                Miami to Byron Bay. We design for longevity and human performance.
              </p>
            </div>

            {/* Keywords */}
            <div className="border border-[#8B7D6B]/15 p-8">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">
                Target Keywords
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {targetKeywords.map((kw) => (
                  <span key={kw} className="px-3 py-1.5 bg-[#2A2A2A] border border-[#8B7D6B]/10 font-body text-xs text-[#C4B8A5]/50">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: The 2026 Manifesto ─── */}
        <section className="mb-24">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            03 — The 2026 Manifesto
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            Identity-Driven Living
          </h2>

          <div className="mt-12 max-w-3xl space-y-6">
            <p className="font-body text-base leading-relaxed text-[#C4B8A5]/60">
              The &quot;custom builder&quot; category is dead. Every second operator on
              the Gold Coast calls themselves custom. The word means nothing
              now. What separates Blackwood isn&apos;t customisation — it&apos;s
              identity. We don&apos;t build custom homes. We build homes that are
              a direct expression of how their owners live, recover, entertain,
              and exist in subtropical South East Queensland.
            </p>
            <p className="font-body text-base leading-relaxed text-[#C4B8A5]/60">
              Identity-Driven Living means every decision — from site
              orientation to sauna placement to the species of timber on
              the front door — is derived from the client&apos;s daily patterns,
              not from a display village or a Pinterest board. The brief
              isn&apos;t &quot;I want a hamptons kitchen.&quot; The brief is &quot;I surf at
              5:30am, I work from home three days, and I host 20 people on
              a Saturday night.&quot; That&apos;s what we design around.
            </p>
            <p className="font-body text-base leading-relaxed text-[#C4B8A5]/60">
              This positioning moves us out of the &quot;luxury builder&quot;
              comparison set and into architectural lifestyle outcomes. We
              stop competing on inclusions lists and start competing on
              relevance — how well does this home fit the life of the person
              inside it? That&apos;s the 2026 edge. That&apos;s where Blackwood lives.
            </p>
          </div>
        </section>

        {/* ─── SECTION 4: Social Media Kit ─── */}
        <section className="mb-24">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            04 — Social Media Kit
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            Copy-Paste Captions
          </h2>
          <p className="mt-4 font-body text-sm text-[#C4B8A5]/40">
            Ready-to-use Instagram captions. Copy directly into posts.
          </p>

          <div className="mt-12 space-y-8">
            {instagramCaptions.map((post, i) => (
              <div key={i} className="border border-[#8B7D6B]/15 overflow-hidden">
                {/* Caption header */}
                <div className="flex items-center justify-between px-8 py-4 bg-[#2A2A2A]/50 border-b border-[#8B7D6B]/10">
                  <div>
                    <span className="font-display text-sm font-bold uppercase tracking-[0.1em] text-[#FAF8F5]">
                      {post.title}
                    </span>
                    <span className="ml-3 font-body text-[10px] text-[#8B7D6B]">
                      {post.handle}
                    </span>
                  </div>
                  <span className="font-body text-[9px] tracking-[0.2em] uppercase text-[#8B7D6B]/50">
                    Caption {i + 1} of 3
                  </span>
                </div>

                {/* Caption body */}
                <div className="px-8 py-6">
                  <pre className="font-body text-sm leading-relaxed text-[#C4B8A5]/60 whitespace-pre-wrap">
                    {post.caption}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 5: The Standard Checklist ─── */}
        <section className="mb-24">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            05 — The Blackwood Standard
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            Non-Negotiable Inclusions
          </h2>
          <p className="mt-4 font-body text-sm text-[#C4B8A5]/40">
            Every Blackwood project ships with these as standard. Not upgrades.
            Not options. The baseline.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#8B7D6B]/10">
            {/* Coastal Resilience column */}
            <div className="bg-[#0A0A08] p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-[#8B7D6B] mb-6">
                Coastal Resilience
              </h3>
              <div className="space-y-4">
                {standardChecklist
                  .filter((c) => c.category === "Coastal Resilience")
                  .map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 shrink-0 border border-[#8B7D6B]/40" />
                      <span className="font-body text-sm text-[#C4B8A5]/50">
                        {c.item}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Biological Optimization column */}
            <div className="bg-[#0A0A08] p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-[#8B7D6B] mb-6">
                Biological Optimization
              </h3>
              <div className="space-y-4">
                {standardChecklist
                  .filter((c) => c.category === "Biological Optimization")
                  .map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 shrink-0 border border-[#8B7D6B]/40" />
                      <span className="font-body text-sm text-[#C4B8A5]/50">
                        {c.item}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <div className="border-t border-[#8B7D6B]/15 pt-12 text-center">
          <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-[#FAF8F5]">
            Design. Build. Live.
          </p>
          <p className="mt-3 font-body text-xs text-[#C4B8A5]/30">
            The Blackwood Journal — Internal Strategy Document — Q2 2026
          </p>
          <p className="mt-1 font-body text-[10px] text-[#C4B8A5]/20">
            Confidential. Blackwood Building Company.
          </p>
        </div>

      </div>
    </div>
  );
}
