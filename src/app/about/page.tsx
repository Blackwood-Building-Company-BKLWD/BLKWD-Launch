import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLKWD | About",
  description:
    "Meet the Blackwood team. Design and construct specialists across the Gold Coast, Brisbane, and Northern NSW.",
};

const team = [
  {
    name: "Director",
    role: "Design & Strategy",
    bio: "Leads the design direction and client relationships. Focused on translating lifestyle intent into architectural outcomes across SEQ.",
  },
  {
    name: "Construction Manager",
    role: "Build & Delivery",
    bio: "Manages every project from slab to handover. Specialist in coastal construction, fixed-price delivery, and on-site quality control.",
  },
  {
    name: "Project Coordinator",
    role: "Client & Council",
    bio: "The link between design intent and build reality. Handles council approvals, scheduling, and client communication throughout the journey.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            About Blackwood
          </span>
          <div className="blkwd-rule mt-6 mb-8" />
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-[0.04em] text-warm-white">
            Design. Build. Live.
          </h1>
        </div>

        {/* Story */}
        <div className="max-w-2xl mb-24">
          <p className="font-body text-sm leading-relaxed text-sand/60">
            Blackwood Building Company is a design and construct firm rooted in
            South East Queensland. We deliver identity-driven lifestyle homes
            for people who understand the difference between a house that looks
            good and one that actually works.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-sand/60">
            Our work spans bespoke homes, knock down rebuilds, and boutique
            multi-residential developments across the Gold Coast, Brisbane, and
            Northern NSW. We bring the same material integrity and spatial
            thinking to a $600k duplex as we do to a $3M coastal sanctuary.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-sand/60">
            We know this coast. The humidity, the salt air, the council
            processes, and the way subtropical light moves through a room at
            4pm. That knowledge is in every decision we make — from structural
            framing to door handle selection.
          </p>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.04em] text-warm-white mb-12">
            What We Stand On
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-oak/10">
            {[
              { title: "Material Integrity", desc: "Every material is specified because it performs in SEQ conditions — not because it photographs well or costs less." },
              { title: "Radical Transparency", desc: "Fixed-price contracts, weekly updates, no hidden costs. You know what you're getting and when it's done." },
              { title: "Outcome-Based Delivery", desc: "We measure success by how a home lives five years after handover — not by how it looks on completion day." },
            ].map((v, i) => (
              <div key={i} className="bg-black p-8 sm:p-10">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-warm-white">
                  {v.title}
                </h3>
                <p className="mt-4 font-body text-xs leading-relaxed text-sand/40">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            The Team
          </span>
          <div className="blkwd-rule mt-6 mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-charcoal mb-6 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-charcoal-light to-charcoal flex items-center justify-center">
                    <span className="font-display text-4xl font-extrabold text-oak/20">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.1em] text-warm-white">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-[10px] tracking-[0.2em] uppercase text-oak">
                  {member.role}
                </p>
                <p className="mt-3 font-body text-xs leading-relaxed text-sand/40">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center border-t border-oak/10 pt-16">
          <p className="font-display text-xl sm:text-2xl font-extrabold uppercase tracking-[0.04em] text-warm-white">
            Ready to start a conversation?
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block border border-oak/30 px-10 py-3.5 font-body text-[10px] tracking-[0.25em] uppercase text-warm-white/70 hover:bg-warm-white hover:text-black time-slice"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
