import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BLKWD | About",
  description:
    "Bespoke design and construction across South East Queensland and Northern New South Wales. Built on relationships, collaboration, and a shared vision.",
};

const team = [
  { name: "Scott", role: "General Manager", image: "/assets/team/scott.jpg" },
  { name: "Elicia", role: "Business Operations Manager", image: "/assets/team/elicia.jpg" },
  { name: "Tim", role: "Project Manager", image: "/assets/team/tim.jpg" },
  { name: "Clint", role: "Project Manager", image: "/assets/team/clint.jpg" },
  { name: "Dane", role: "Project Manager", image: "/assets/team/dane.jpg" },
  { name: "Adrian", role: "Senior Estimator", image: "/assets/team/adrian.jpg" },
  { name: "Bill", role: "Contracts Administrator", image: "/assets/team/bill.jpg" },
  { name: "Basho", role: "Cadet CA", image: "/assets/team/basho.jpg" },
  { name: "Brandon", role: "Building Designer", image: "/assets/team/brandon.jpg" },
  { name: "Kamila", role: "Architectural Designer", image: "/assets/team/kamila.jpg" },
  { name: "Ashlee", role: "Interior Designer", image: "/assets/team/ashlee.jpg" },
  { name: "Adam", role: "Marketing Manager", image: "/assets/team/adam.jpg" },
  { name: "John", role: "Construction Manager", image: "/assets/team/john.jpg" },
  { name: "Ian", role: "Site Manager", image: "/assets/team/ian.jpg" },
  { name: "Alby", role: "Site Manager", image: "/assets/team/alby.jpg" },
  { name: "David", role: "Site Manager", image: "/assets/team/david.jpg" },
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

        {/* Signature Skyline */}
        <div className="mb-24 flex justify-center">
          <img
            src="/assets/renders/blkwd-signature.png"
            alt="Blackwood signature skyline"
            className="w-full max-w-2xl opacity-60"
            loading="lazy"
          />
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

        {/* Meet The Team */}
        <div className="mb-24">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-oak">
            The People Behind The Build
          </span>
          <div className="blkwd-rule mt-6 mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.04em] text-warm-white mb-16">
            Meet The Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="relative aspect-square overflow-hidden bg-charcoal mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 time-slice"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.06em] text-warm-white">
                  {member.name}
                </h3>
                <p className="mt-0.5 font-body text-[11px] italic text-oak">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-oak/10 pt-16">
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
