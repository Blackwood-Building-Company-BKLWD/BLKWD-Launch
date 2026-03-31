"use client";

const posts = [
  { src: "/assets/renders/ig-01.jpg", alt: "Curved coastal sanctuary with infinity pool at golden hour", type: "render" },
  { src: "/assets/renders/ig-team-01.jpg", alt: "Team on-site — foundation pour, Gold Coast", type: "team" },
  { src: "/assets/renders/ig-03.jpg", alt: "Architectural compound with clean horizontal lines and palm-lined driveway", type: "render" },
  { src: "/assets/renders/ig-team-02.jpg", alt: "Site walkthrough — steel frame inspection", type: "team" },
  { src: "/assets/renders/ig-05.jpg", alt: "Angular townhouse development with timber and render contrast", type: "render" },
  { src: "/assets/renders/ig-team-03.jpg", alt: "Carpentry detail — bespoke timber joinery", type: "team" },
  { src: "/assets/renders/ig-team-04.jpg", alt: "Client handover — keys to a new build", type: "team" },
  { src: "/assets/renders/ig-02.jpg", alt: "Contemporary subtropical residence with vertical screening and rooftop gardens", type: "render" },
  { src: "/assets/renders/ig-team-05.jpg", alt: "Drone shot — rooftop progress, Brisbane project", type: "team" },
  { src: "/assets/renders/ig-04.jpg", alt: "Modern street-facing facade with mixed materials and lush landscaping", type: "render" },
  { src: "/assets/renders/ig-06.jpg", alt: "Wellness pool detail — sculptural edge, warm sandstone", type: "render" },
  { src: "/assets/renders/ig-team-06.jpg", alt: "BLKWD crew — team photo on completed build", type: "team" },
];

const highlights = [
  { label: "Projects", emoji: "🏛" },
  { label: "Process", emoji: "📐" },
  { label: "Team", emoji: "👤" },
  { label: "Reviews", emoji: "⭐" },
];

export default function IGPreview() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="mx-auto max-w-[470px] bg-black border border-white/10">
        {/* Profile Header */}
        <div className="px-5 pt-8 pb-6">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-white/20 bg-stone">
              <span className="font-display text-lg font-extrabold tracking-[0.2em] text-white">
                B
              </span>
            </div>

            {/* Stats */}
            <div className="flex flex-1 justify-around text-center">
              {[
                { value: "52", label: "posts" },
                { value: "2,841", label: "followers" },
                { value: "312", label: "following" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="block font-body text-sm font-semibold text-white">
                    {stat.value}
                  </span>
                  <span className="font-body text-[10px] text-white/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="mt-5">
            <h1 className="font-body text-sm font-semibold text-white">
              BLKWD — Luxury Design & Build
            </h1>
            <p className="mt-1 font-body text-xs leading-relaxed text-white/60">
              Custom Homes | Multi-Residential | Knock Down Rebuild
              <br />
              Gold Coast | Brisbane | Northern NSW 📍
            </p>
            <p className="mt-1 font-body text-xs text-white/40">
              blkwd.au
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-lg bg-white/10 py-1.5 font-body text-xs font-semibold text-white">
              Follow
            </button>
            <button className="flex-1 rounded-lg bg-white/10 py-1.5 font-body text-xs font-semibold text-white">
              Message
            </button>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex gap-6 overflow-x-auto px-5 pb-4 scrollbar-hide">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col items-center gap-1.5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-stone">
                <span className="text-xl">{h.emoji}</span>
              </div>
              <span className="font-body text-[10px] text-white/50">
                {h.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tab Bar */}
        <div className="flex border-t border-white/10">
          <button className="flex-1 py-3 text-center border-b border-white">
            <svg className="mx-auto h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          </button>
          <button className="flex-1 py-3 text-center">
            <svg className="mx-auto h-4 w-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </button>
          <button className="flex-1 py-3 text-center">
            <svg className="mx-auto h-4 w-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>

        {/* 4x3 Mixed-Media Grid */}
        <div className="grid grid-cols-3 gap-px">
          {posts.map((post, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-stone">
              <div className="absolute inset-0 shimmer" />
              <img
                src={post.src}
                alt={post.alt}
                className="absolute inset-0 h-full w-full object-cover time-slice group-hover:opacity-80"
                loading="lazy"
              />
              {post.type === "render" && (
                <div className="absolute top-2 right-2">
                  <svg className="h-3.5 w-3.5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Label */}
      <div className="py-12 text-center">
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/20">
          @BLKWD.au — Visual Emotion Grid Preview
        </span>
      </div>
    </div>
  );
}
