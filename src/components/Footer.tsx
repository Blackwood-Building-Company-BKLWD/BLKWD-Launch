export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="font-display text-lg tracking-[0.35em] font-extrabold uppercase text-white">
              BLKWD
            </span>
            <p className="mt-2 font-body text-[10px] tracking-[0.15em] uppercase text-white/40">
              Design. Build. Live.
            </p>
            <p className="mt-4 max-w-xs font-body text-xs leading-relaxed text-white/30">
              Bespoke homes, multi-residential, and knock down rebuilds
              across the Gold Coast, Brisbane, and Northern NSW.
            </p>
          </div>

          {/* Contact */}
          <div>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40">
              Contact
            </span>
            <div className="mt-4 space-y-2 font-body text-sm text-white/50">
              <p>hello@blkwd.au</p>
              <p>Gold Coast | Brisbane | Northern NSW</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="font-body text-[10px] tracking-[0.3em] uppercase text-white/40">
              Follow
            </span>
            <div className="mt-4 space-y-2 font-body text-sm text-white/50">
              <p>
                <a href="https://instagram.com/BLKWD.au" className="hover:text-white time-slice">
                  Instagram
                </a>
              </p>
              <p>
                <a href="#" className="hover:text-white time-slice">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center gap-4 border-t border-white/5 pt-10">
          <div className="blkwd-rule" />
          <p className="font-body text-[10px] tracking-[0.2em] uppercase text-white/20">
            &copy; {new Date().getFullYear()} Blackwood Building Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
