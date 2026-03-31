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
            Sensory
            <br />
            Architecture
          </h2>
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
