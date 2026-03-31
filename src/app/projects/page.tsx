import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLKWD | Projects",
  description:
    "Bespoke homes, knock down rebuilds, and boutique multi-residential across the Gold Coast, Brisbane, and Northern NSW.",
};

const projects = [
  { src: "/assets/renders/ig-01.jpg.png", title: "Coastal Sanctuary", location: "Gold Coast", type: "Bespoke Home" },
  { src: "/assets/renders/ig-02.jpg.png", title: "KDRB Precision", location: "Brisbane", type: "Knock Down Rebuild" },
  { src: "/assets/renders/ig-04.jpg.png", title: "The Terraces", location: "Northern NSW", type: "Multi-Residential" },
  { src: "/assets/renders/ig-05.jpg.png", title: "Spiral House", location: "Gold Coast Hinterland", type: "Bespoke Home" },
  { src: "/assets/renders/ig-07.jpg.png", title: "Seamless Flow", location: "Burleigh Heads", type: "Bespoke Home" },
  { src: "/assets/renders/ig-08.jpg.png", title: "Compound Living", location: "Byron Bay", type: "Multi-Residential" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            Curated Environments
          </span>
          <div className="blkwd-rule mt-6 mb-8" />
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-[0.04em] text-warm-white">
            Projects
          </h1>
          <p className="mt-6 max-w-lg font-body text-sm leading-relaxed text-sand/50">
            Bespoke homes, knock down rebuilds, and boutique multi-residential
            developments across South East Queensland and Northern NSW.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-stone">
              <img
                src={project.src}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover time-slice-slow group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="font-body text-[9px] tracking-[0.25em] uppercase text-oak">
                  {project.type}
                </span>
                <h2 className="mt-1 font-display text-lg font-bold uppercase tracking-[0.04em] text-warm-white">
                  {project.title}
                </h2>
                <p className="mt-1 font-body text-xs text-sand/50">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
