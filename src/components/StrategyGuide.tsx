"use client";

const igPosts = [
  {
    title: "The Texture Story",
    image: "/assets/renders/ig-05.jpg.png",
    caption: `Fluted timber meets off-form concrete. Two materials that don't try to be anything other than what they are — and that's the point.

Every surface in a Blackwood home is specified for how it feels under your hand, how it ages in salt air, and how it catches the light at 4pm.

This isn't decoration. It's material integrity.`,
    hashtags: "#BLKWD #DesignBuildLive #GoldCoastBuilder #ArchitecturalDetail #SubtropicalDesign #FlutedTimber #OffFormConcrete #MaterialIntegrity",
    type: "carousel" as const,
  },
  {
    title: "The Sanctuary Ensuite",
    image: "/assets/renders/ig-03.jpg.png",
    caption: `Steam showers. Magnesium recovery pools. Circadian lighting that shifts with your day.

More and more, our clients are building homes that make them feel something. Not just look good — actually perform for how they live.

This master ensuite was designed around one question: what does your morning look like?`,
    hashtags: "#BLKWD #WellnessArchitecture #SteamShower #MasterEnsuite #GoldCoastHomes #DesignBuildLive #CoastalSanctuary",
    type: "carousel" as const,
  },
  {
    title: "The Multi-Res Pivot",
    image: "/assets/renders/ig-04.jpg.png",
    caption: `Boutique multi-residential done differently.

Same material integrity as our bespoke homes. Same spatial thinking. Same obsession with how subtropical light moves through a room.

The difference? Each dwelling is designed to stand alone — not repeat. That's how you build yield without sacrificing architecture.`,
    hashtags: "#BLKWD #MultiResidential #BoutiqueDevelopment #GoldCoastDeveloper #ArchitecturalMultiRes #DesignBuildLive",
    type: "reel" as const,
  },
  {
    title: "The Lifestyle Transition",
    image: "/assets/renders/ig-07.jpg.png",
    caption: `Where inside ends and outside begins — that's the line we design around.

Seamless flow isn't a marketing word for us. It's a construction detail. Flush thresholds, retractable glazing, continuous floor finishes from living room to alfresco.

Your home should move the way you do.`,
    hashtags: "#BLKWD #IndoorOutdoor #SubtropicalLiving #SpatialFlow #GoldCoastArchitecture #DesignBuildLive",
    type: "carousel" as const,
  },
  {
    title: "The Coastal Sanctuary",
    image: "/assets/renders/ig-01.jpg.png",
    caption: `Built for this coast. Not just designed for it — engineered for it.

Salt-resistant steel. Thermally broken glazing. Cross-ventilation mapped to prevailing sea breezes. Materials that perform in humidity, UV, and salt air without thinking about it.

From Miami to Byron Bay — this is what high-performance living looks like.`,
    hashtags: "#BLKWD #CoastalArchitecture #GoldCoastBuilder #HighPerformanceLiving #DesignBuildLive #LuxuryHomes",
    type: "reel" as const,
  },
  {
    title: "KDRB Precision",
    image: "/assets/renders/Bowsprit%20Hi%20Res.jpg",
    caption: `Your block has potential the existing structure can't unlock.

We start with rigorous site analysis — orientation, setbacks, soil, views — then design around what the land actually offers. Not what a template says it should be.

Fixed-price. Outcome-based. Built to last.`,
    hashtags: "#BLKWD #KnockDownRebuild #KDRB #GoldCoastBuilder #BrisbanBuilder #DesignBuildLive #BespokeHomes",
    type: "carousel" as const,
  },
];

const metaAds = [
  {
    headline: "Your Block. Reimagined.",
    body: "Knock down rebuild specialists across the Gold Coast and Brisbane. Fixed-price contracts. Architectural outcomes.",
    cta: "Learn More",
    image: "/assets/renders/Bowsprit%20Hi%20Res.jpg",
    placement: "Facebook / Instagram Feed",
  },
  {
    headline: "Homes That Perform.",
    body: "Bespoke design & construct from Miami to Byron Bay. Built for the subtropical lifestyle.",
    cta: "View Projects",
    image: "/assets/renders/Maybree%20close.png",
    placement: "Instagram Stories / Reels",
  },
  {
    headline: "Multi-Res. Done Differently.",
    body: "Boutique multi-residential developments with bespoke home quality. Taking 2026 enquiries.",
    cta: "Discuss A Development",
    image: "/assets/renders/ig-04.jpg.png",
    placement: "Facebook / LinkedIn Feed",
  },
];

function IGPostMockup({ post, index }: { post: typeof igPosts[0]; index: number }) {
  return (
    <div className="bg-[#111] border border-[#8B7D6B]/10 overflow-hidden">
      {/* IG Header */}
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="h-8 w-8 rounded-full bg-[#2A2A2A] flex items-center justify-center">
          <span className="font-display text-[8px] font-bold text-[#FAF8F5]">BW</span>
        </div>
        <div>
          <p className="font-body text-xs font-semibold text-[#FAF8F5]">BLKWD.au</p>
          <p className="font-body text-[9px] text-[#C4B8A5]/40">Gold Coast, Australia</p>
        </div>
        <div className="ml-auto flex items-center gap-1">
          <span className="font-body text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 border border-[#8B7D6B]/20 text-[#8B7D6B]">
            {post.type}
          </span>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-square bg-[#1A1A1A]">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        {/* Post number badge */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-sm">
          <span className="font-body text-[9px] tracking-[0.2em] uppercase text-[#8B7D6B]">
            Post {index + 1} of {igPosts.length}
          </span>
        </div>
        {/* Title overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-5 pt-16">
          <p className="font-display text-lg font-bold uppercase tracking-[0.04em] text-[#FAF8F5]" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}>
            {post.title}
          </p>
        </div>
      </div>

      {/* IG Action Bar */}
      <div className="flex items-center gap-4 px-4 py-3">
        <svg className="h-5 w-5 text-[#FAF8F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        <svg className="h-5 w-5 text-[#FAF8F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
        </svg>
        <svg className="h-5 w-5 text-[#FAF8F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
        <svg className="ml-auto h-5 w-5 text-[#FAF8F5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4">
        <pre className="font-body text-xs leading-relaxed text-[#C4B8A5]/70 whitespace-pre-wrap">
          {post.caption}
        </pre>
        <p className="mt-3 font-body text-[10px] text-[#8B7D6B]/50 leading-relaxed">
          {post.hashtags}
        </p>
      </div>
    </div>
  );
}

function MetaAdMockup({ ad }: { ad: typeof metaAds[0] }) {
  return (
    <div className="bg-[#111] border border-[#8B7D6B]/10 overflow-hidden">
      {/* Ad header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[#8B7D6B]/5">
        <div className="h-8 w-8 rounded-full bg-[#2A2A2A] flex items-center justify-center">
          <span className="font-display text-[8px] font-bold text-[#FAF8F5]">BW</span>
        </div>
        <div>
          <p className="font-body text-xs font-semibold text-[#FAF8F5]">Blackwood Building Co</p>
          <p className="font-body text-[9px] text-[#C4B8A5]/40">Sponsored</p>
        </div>
      </div>

      {/* Image */}
      <div className="relative aspect-[16/9] bg-[#1A1A1A]">
        <img
          src={ad.image}
          alt={ad.headline}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Ad Content */}
      <div className="px-4 py-4 border-t border-[#8B7D6B]/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-body text-xs text-[#C4B8A5]/40">blkwd.au</p>
            <p className="font-display text-sm font-bold text-[#FAF8F5] mt-0.5">{ad.headline}</p>
            <p className="font-body text-xs text-[#C4B8A5]/50 mt-1">{ad.body}</p>
          </div>
          <button className="shrink-0 ml-4 bg-[#FAF8F5] text-black px-4 py-2 font-body text-[10px] font-semibold tracking-[0.1em] uppercase">
            {ad.cta}
          </button>
        </div>
      </div>

      {/* Placement tag */}
      <div className="px-4 pb-3">
        <span className="font-body text-[8px] tracking-[0.15em] uppercase px-2 py-0.5 border border-[#8B7D6B]/15 text-[#8B7D6B]/50">
          {ad.placement}
        </span>
      </div>
    </div>
  );
}

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

export default function StrategyGuide() {
  return (
    <div className="min-h-screen bg-[#0A0A08] pt-32 pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">

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
            {["Visual Content Kit", "Meta Ads", "SEO Strategy", "Brand Voice", "Non-Negotiables"].map((tag) => (
              <span key={tag} className="px-3 py-1 border border-[#8B7D6B]/30 font-body text-[9px] tracking-[0.2em] uppercase text-[#8B7D6B]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ─── SECTION 1: Instagram Content Kit ─── */}
        <section className="mb-32">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            01 — Instagram Content Kit
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            Visual Posts
          </h2>
          <p className="mt-4 font-body text-sm text-[#C4B8A5]/40 max-w-xl">
            Ready-to-post content with images, captions, and hashtags.
            Each post uses actual project renders. Copy the caption directly into Instagram.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {igPosts.map((post, i) => (
              <IGPostMockup key={i} post={post} index={i} />
            ))}
          </div>
        </section>

        {/* ─── SECTION 2: Meta / Facebook Ads ─── */}
        <section className="mb-32">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            02 — Meta Ad Creatives
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            Paid Campaigns
          </h2>
          <p className="mt-4 font-body text-sm text-[#C4B8A5]/40 max-w-xl">
            Facebook, Instagram, and LinkedIn ad mockups. Copy headline and body text
            directly into Meta Ads Manager.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {metaAds.map((ad, i) => (
              <MetaAdMockup key={i} ad={ad} />
            ))}
          </div>
        </section>

        {/* ─── SECTION 3: Strategic Positioning ─── */}
        <section className="mb-32">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            03 — Strategic Positioning
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            The Edge
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Coastal Resilience */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0">
                <img src="/assets/renders/ig-01.jpg.png" alt="" className="h-full w-full object-cover opacity-20" />
              </div>
              <div className="relative bg-black/70 backdrop-blur-sm p-10 h-full">
                <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">
                  Primary Edge
                </span>
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-[0.06em] text-[#FAF8F5]">
                  Coastal Resilience
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-[#C4B8A5]/50">
                  High-performance engineering for the SEQ and Northern NSW
                  elements. Salt-laden air, cyclonic wind ratings, flood-zone
                  compliance, and UV-intense material degradation. We build for
                  the decade after the brochure photo.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Salt Air", "Wind Rating", "Flood Engineering", "UV Resistance", "Thermal Mass"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-[#2A2A2A] font-body text-[9px] tracking-[0.15em] uppercase text-[#C4B8A5]/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Biological Optimization */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0">
                <img src="/assets/renders/ig-03.jpg.png" alt="" className="h-full w-full object-cover opacity-20" />
              </div>
              <div className="relative bg-black/70 backdrop-blur-sm p-10 h-full">
                <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">
                  Secondary Edge
                </span>
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-[0.06em] text-[#FAF8F5]">
                  Biological Optimization
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-[#C4B8A5]/50">
                  Wellness-integrated infrastructure. Magnesium pool filtration,
                  circadian lighting arrays, acoustic isolation between zones,
                  and steam-shower sanctuaries. The home as a performance
                  environment — not just a shelter.
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
          </div>
        </section>

        {/* ─── SECTION 4: SEO ─── */}
        <section className="mb-32">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            04 — Technical SEO
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            Search Authority
          </h2>

          <div className="mt-12 space-y-6">
            <div className="border border-[#8B7D6B]/15 p-8">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">Meta Title</span>
              <p className="mt-2 font-display text-lg font-bold text-[#FAF8F5]">
                Blackwood Building Co | Architecture for the Subtropical Lifestyle
              </p>
            </div>
            <div className="border border-[#8B7D6B]/15 p-8">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">Meta Description</span>
              <p className="mt-2 font-body text-base text-[#C4B8A5]/60">
                Bespoke, resilient, and wellness-led residential builds from Miami to Byron Bay. We design for longevity and human performance.
              </p>
            </div>
            <div className="border border-[#8B7D6B]/15 p-8">
              <span className="font-body text-[9px] tracking-[0.3em] uppercase text-[#8B7D6B]">Target Keywords</span>
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

        {/* ─── SECTION 5: Manifesto ─── */}
        <section className="mb-32">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            05 — The 2026 Manifesto
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            Identity-Driven Living
          </h2>

          <div className="mt-12 max-w-3xl space-y-6">
            <p className="font-body text-base leading-relaxed text-[#C4B8A5]/60">
              The &quot;custom builder&quot; category is dead. Every second operator on
              the Gold Coast calls themselves custom. What separates Blackwood
              isn&apos;t customisation — it&apos;s identity. We build homes that are
              a direct expression of how their owners live, recover, entertain,
              and exist in subtropical South East Queensland.
            </p>
            <p className="font-body text-base leading-relaxed text-[#C4B8A5]/60">
              Identity-Driven Living means every decision — from site
              orientation to sauna placement to timber species — is derived
              from the client&apos;s daily patterns. The brief isn&apos;t &quot;I want a
              hamptons kitchen.&quot; The brief is &quot;I surf at 5:30am, I work from
              home three days, and I host 20 people on a Saturday night.&quot;
            </p>
            <p className="font-body text-base leading-relaxed text-[#C4B8A5]/60">
              This moves us out of the &quot;luxury builder&quot; comparison set and into
              architectural lifestyle outcomes. We stop competing on inclusions
              lists and start competing on relevance.
            </p>
          </div>
        </section>

        {/* ─── SECTION 6: Non-Negotiables ─── */}
        <section className="mb-24">
          <span className="font-body text-[9px] tracking-[0.5em] uppercase text-[#8B7D6B]">
            06 — The Blackwood Standard
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-[#FAF8F5]">
            Non-Negotiable Inclusions
          </h2>
          <p className="mt-4 font-body text-sm text-[#C4B8A5]/40">
            Every Blackwood project ships with these as standard. Not upgrades. The baseline.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#8B7D6B]/10">
            <div className="bg-[#0A0A08] p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-[#8B7D6B] mb-6">
                Coastal Resilience
              </h3>
              <div className="space-y-4">
                {standardChecklist.filter((c) => c.category === "Coastal Resilience").map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 shrink-0 border border-[#8B7D6B]/40" />
                    <span className="font-body text-sm text-[#C4B8A5]/50">{c.item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A0A08] p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-[#8B7D6B] mb-6">
                Biological Optimization
              </h3>
              <div className="space-y-4">
                {standardChecklist.filter((c) => c.category === "Biological Optimization").map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 shrink-0 border border-[#8B7D6B]/40" />
                    <span className="font-body text-sm text-[#C4B8A5]/50">{c.item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
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
