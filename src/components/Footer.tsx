import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-oak/10 bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-display text-lg tracking-[0.35em] font-extrabold uppercase text-warm-white">
              BLKWD
            </span>
            <p className="mt-2 font-body text-[10px] tracking-[0.15em] uppercase text-oak">
              Design. Build. Live.
            </p>
            <p className="mt-4 max-w-xs font-body text-xs leading-relaxed text-sand/35">
              Identity-driven lifestyle homes across the Gold Coast,
              Brisbane, and Northern NSW. Bespoke homes, knock down
              rebuilds, and boutique multi-residential.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-oak">
              Navigate
            </span>
            <div className="mt-4 space-y-2 font-body text-sm text-sand/50">
              <p><Link href="/projects" className="hover:text-warm-white time-slice">Projects</Link></p>
              <p><Link href="/about" className="hover:text-warm-white time-slice">About</Link></p>
              <p><Link href="/ig-preview" className="hover:text-warm-white time-slice">Instagram</Link></p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-oak">
              Contact
            </span>
            <div className="mt-4 space-y-2 font-body text-sm text-sand/50">
              <p>hello@blkwd.au</p>
              <p>Gold Coast | Brisbane | Northern NSW</p>
              <p className="pt-2">
                <a href="https://instagram.com/BLKWD.au" className="hover:text-warm-white time-slice">
                  @BLKWD.au
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-oak/10 pt-10">
          <div className="blkwd-rule" />
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-sand/25">
            &copy; {new Date().getFullYear()} Blackwood Building Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
