"use client";

import { useEffect, useRef } from "react";

type PostType = "photo" | "carousel" | "reel";

interface Post {
  src: string;
  alt: string;
  type: PostType;
}

const posts: Post[] = [
  { src: "/assets/renders/ig-01.jpg.png", alt: "Coastal sanctuary with infinity pool at sunset", type: "photo" },
  { src: "/assets/renders/ig-02.jpg.png", alt: "KDRB Precision facade", type: "carousel" },
  { src: "/assets/renders/ig-03.jpg.png", alt: "Wellness Sanctuary master ensuite", type: "carousel" },
  { src: "/assets/renders/ig-04.jpg.png", alt: "Multi-residential streetscape at dusk", type: "photo" },
  { src: "/assets/renders/ig-05.jpg.png", alt: "Sculptural spiral staircase", type: "reel" },
  { src: "/assets/renders/ig-06.jpg.png", alt: "Kinfolk-style scullery", type: "carousel" },
  { src: "/assets/renders/ig-07.jpg.png", alt: "Lifestyle Transition — seamless flow", type: "carousel" },
  { src: "/assets/renders/ig-08.jpg.png", alt: "Architectural compound amongst trees", type: "photo" },
  { src: "/assets/renders/ig-09.jpg.png", alt: "Wellness Sanctuary ensuite", type: "reel" },
];

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

export default function VisualGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-black py-24 sm:py-32 border-t border-oak/10">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            @BLKWD.au
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.06em] text-warm-white">
            Visit Our
            <br />
            Socials
          </h2>

          {/* Social Icons */}
          <div className="mt-10 flex items-center justify-center gap-6">
            {/* Instagram */}
            <a href="https://instagram.com/BLKWD.au" target="_blank" rel="noopener noreferrer" className="group/icon">
              <svg className="h-6 w-6 text-sand/40 group-hover/icon:text-warm-white time-slice" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/BLKWD_au" target="_blank" rel="noopener noreferrer" className="group/icon">
              <svg className="h-5 w-5 text-sand/40 group-hover/icon:text-warm-white time-slice" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com/@BLKWD" target="_blank" rel="noopener noreferrer" className="group/icon">
              <svg className="h-6 w-6 text-sand/40 group-hover/icon:text-warm-white time-slice" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Pinterest */}
            <a href="https://pinterest.com/BLKWD_au" target="_blank" rel="noopener noreferrer" className="group/icon">
              <svg className="h-6 w-6 text-sand/40 group-hover/icon:text-warm-white time-slice" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/company/blackwood-building" target="_blank" rel="noopener noreferrer" className="group/icon">
              <svg className="h-5 w-5 text-sand/40 group-hover/icon:text-warm-white time-slice" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {posts.map((post, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden bg-stone">
              <img
                src={post.src}
                alt={post.alt}
                className="absolute inset-0 h-full w-full object-cover time-slice group-hover:scale-105"
                loading="lazy"
              />
              {post.type === "carousel" && <CarouselBadge />}
              {post.type === "reel" && <ReelBadge />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
