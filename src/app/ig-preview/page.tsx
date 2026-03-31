"use client";

/* ─────────────────────────────────────────────
   Grid — matches Draft IG page layout exactly
   Row 1: pool sanctuary  |  KDRB Precision facade  |  Wellness Sanctuary ensuite
   Row 2: multi-res streetscape  |  spiral staircase  |  Kinfolk-style Scullery
   Row 3: Lifestyle Transition  |  horizontal compound  |  Wellness Sanctuary ensuite
   Captions are baked into the images — no code overlays needed.
   ───────────────────────────────────────────── */

type PostType = "photo" | "carousel" | "reel";

interface Post {
  src: string;
  alt: string;
  type: PostType;
}

const posts: Post[] = [
  // Row 1
  { src: "/assets/renders/ig-01.jpg.png", alt: "Curved coastal sanctuary with infinity pool at sunset", type: "photo" },
  { src: "/assets/renders/ig-02.jpg.png", alt: "KDRB Precision facade — concrete and dark timber battens", type: "carousel" },
  { src: "/assets/renders/ig-03.jpg.png", alt: "Wellness Sanctuary master ensuite — stone bath and dual shower", type: "carousel" },
  // Row 2
  { src: "/assets/renders/ig-04.jpg.png", alt: "Multi-residential streetscape — contemporary townhouses at dusk", type: "photo" },
  { src: "/assets/renders/ig-05.jpg.png", alt: "Sculptural spiral staircase with skylight and brass handrail", type: "reel" },
  { src: "/assets/renders/ig-06.jpg.png", alt: "Kinfolk-style scullery with brass shelving and wine display", type: "carousel" },
  // Row 3
  { src: "/assets/renders/ig-07.jpg.png", alt: "Lifestyle Transition — seamless indoor-outdoor flow with plunge pool", type: "carousel" },
  { src: "/assets/renders/ig-08.jpg.png", alt: "Architectural compound with horizontal lines amongst established trees", type: "photo" },
  { src: "/assets/renders/ig-09.jpg.png", alt: "Wellness Sanctuary master ensuite — freestanding stone bath", type: "reel" },
];

const highlights = [
  { label: "Projects", icon: "projects" },
  { label: "Details", icon: "details" },
  { label: "Process", icon: "process" },
  { label: "About", icon: "about" },
];

function HighlightIcon({ type }: { type: string }) {
  const cls = "h-6 w-6 text-neutral-500";
  switch (type) {
    case "projects":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      );
    case "details":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      );
    case "process":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      );
    case "about":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      );
    default:
      return null;
  }
}

/* Carousel icon — stacked squares (top-right) */
function CarouselBadge() {
  return (
    <div className="absolute top-2.5 right-2.5 drop-shadow-md">
      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="7" y="3" width="14" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}

/* Reel icon — play triangle (top-right) */
function ReelBadge() {
  return (
    <div className="absolute top-2.5 right-2.5 drop-shadow-md">
      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.5 8.5v7l6-3.5-6-3.5z" />
        <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="2" />
        <line x1="9" y1="3" x2="9" y2="9" stroke="currentColor" strokeWidth="2" />
        <line x1="15" y1="3" x2="15" y2="9" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function IGPreview() {
  return (
    <div className="min-h-screen bg-white pt-0">
      {/* IG Top Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <svg className="h-6 w-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="18" cy="6" r="1.5" fill="currentColor" />
          </svg>
          <span style={{ fontFamily: "Georgia, 'Times New Roman', serif" }} className="text-xl text-neutral-900">
            Instagram
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-neutral-900">
          <span>Log in</span>
          <span className="text-neutral-400">|</span>
          <span>Sign up</span>
          <span className="ml-1 text-neutral-900">...</span>
        </div>
      </div>

      <div className="mx-auto max-w-[935px] px-4 pt-8">
        {/* Profile Header */}
        <div className="flex items-start gap-8 sm:gap-20 pb-10">
          {/* Avatar */}
          <div className="flex h-[150px] w-[150px] shrink-0 items-center justify-center rounded-full bg-neutral-900">
            <div className="text-center leading-none">
              <span className="block text-[28px] font-black tracking-[0.1em] text-white" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                BLK
              </span>
              <span className="block text-[28px] font-black tracking-[0.1em] text-white" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                WD
              </span>
              <span className="block text-[7px] font-normal tracking-[0.3em] text-white/60 mt-0.5">TM</span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-normal text-neutral-900">BLKWD</h1>
            </div>
            <p className="mt-1 text-sm text-neutral-500">Blackwood Building</p>

            {/* Bio */}
            <div className="mt-5 text-sm leading-relaxed text-neutral-900">
              <p className="font-semibold">BLKWD</p>
              <p className="text-neutral-700">Luxury Design and Build</p>
              <p className="mt-1.5 text-neutral-700">Homes | Multi-Residential | Knock Down Rebuild</p>
              <p className="text-neutral-700">Gold Coast | Brisbane | Northern NSW</p>
              <p className="mt-1.5 text-neutral-500">blkwd.au</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex gap-10 px-4 pb-6">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col items-center gap-2">
              <div className="flex h-[77px] w-[77px] items-center justify-center rounded-full border border-neutral-300 bg-neutral-50">
                <HighlightIcon type={h.icon} />
              </div>
              <span className="text-xs font-normal text-neutral-900">
                {h.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tab Bar */}
        <div className="flex border-t border-neutral-200">
          <button className="flex-1 flex items-center justify-center gap-1.5 py-3 border-t border-neutral-900 -mt-px">
            <svg className="h-3.5 w-3.5 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-3">
            <svg className="h-3.5 w-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <line x1="3" y1="9" x2="21" y2="9" />
              <line x1="9" y1="3" x2="9" y2="9" />
              <line x1="15" y1="3" x2="15" y2="9" />
              <path d="M10 14l5 3-5 3V14z" />
            </svg>
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-3">
            <svg className="h-3.5 w-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
            </svg>
          </button>
          <button className="flex-1 flex items-center justify-center gap-1.5 py-3">
            <svg className="h-3.5 w-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>
        </div>

        {/* 3x3 Visual Emotion Grid */}
        <div className="grid grid-cols-3 gap-1">
          {posts.map((post, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-neutral-100">
              <img
                src={post.src}
                alt={post.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />

              {/* Carousel / Reel badge */}
              {post.type === "carousel" && <CarouselBadge />}
              {post.type === "reel" && <ReelBadge />}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom IG Bar */}
      <div className="mt-8 flex items-center justify-center gap-12 border-t border-neutral-200 py-4">
        {[
          { icon: "grid", active: true },
          { icon: "reels", active: false },
          { icon: "shop", active: false },
          { icon: "settings", active: false },
        ].map((tab, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${tab.active ? "text-neutral-900" : "text-neutral-400"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {tab.icon === "grid" && (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            )}
            {tab.icon === "reels" && (
              <>
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M10 9l5 3-5 3V9z" />
              </>
            )}
            {tab.icon === "shop" && (
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            )}
            {tab.icon === "settings" && (
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            )}
          </svg>
        ))}
      </div>
    </div>
  );
}
