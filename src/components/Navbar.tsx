"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 time-slice ${
        scrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-[0.35em] font-extrabold uppercase text-white">
            BLKWD
          </span>
          <span className="hidden sm:inline-block h-4 w-px bg-white/20" />
          <span className="hidden sm:inline-block font-body text-[10px] tracking-[0.25em] uppercase text-white/50">
            Luxury Design &amp; Build
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {["Projects", "Process", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-white time-slice"
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 border border-white/20 px-6 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black time-slice"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-white time-slice ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white time-slice ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden glass overflow-hidden time-slice ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-10">
          {["Projects", "Process", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
