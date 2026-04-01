import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLKWD | About",
  description:
    "Bespoke design and construction across South East Queensland and Northern New South Wales. Built on relationships, collaboration, and a shared vision.",
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
    <div className="min-h-screen bg-black">
      {/* Hero Banner with Video */}
      <div className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-stone shimmer" />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/renders/ig-01.jpg.png"
        >
          <source src="/assets/video/about-banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            About Blackwood
          </span>
          <div className="blkwd-rule mx-auto mt-6 mb-8" />
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase leading-tight tracking-[0.04em] text-warm-white">
            Design. Build. Live.
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-12 pt-20 pb-24">

        {/* Brand Story */}
        <div className="max-w-3xl mb-24 space-y-6">
          <p className="font-body text-base sm:text-lg leading-relaxed text-sand/70">
            We&apos;re a bespoke design and construction company, specialising in
            custom luxury homes across South East Queensland and Northern New
            South Wales.
          </p>
          <p className="font-body text-base sm:text-lg leading-relaxed text-sand/70">
            Our homes are built on more than just craftsmanship — they are built
            on relationships. We believe in collaboration, transparency, and a
            shared vision which empowers our clients to bring their homes to life.
          </p>
          <p className="font-body text-base sm:text-lg leading-relaxed text-sand/70">
            Every new home we create is a reflection of the lives and aspirations
            of the people we journey with — ensuring the process is as rewarding
            as the outcome.
          </p>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-[0.04em] text-warm-white mb-12">
            What We Stand On
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-oak/10">
            {[
              { title: "Relationships", desc: "Every project starts with a conversation, not a floor plan. We take the time to understand how you live before we design how you\u2019ll build." },
              { title: "Transparency", desc: "Fixed-price contracts, weekly updates, no hidden costs. You know what you\u2019re getting, what it costs, and when it\u2019s done. The whole way through." },
              { title: "Shared Vision", desc: "Your home is a reflection of your life. We collaborate closely to ensure every decision \u2014 from site orientation to door handle \u2014 serves how you actually live." },
            ].map((v, i) => (
              <div key={i} className="bg-black p-8 sm:p-10">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-warm-white">
                  {v.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-sand/45">
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
