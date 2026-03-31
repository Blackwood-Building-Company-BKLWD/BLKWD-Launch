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

  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "Process", href: "/#process" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 time-slice ${
        scrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <span className="font-display text-xl tracking-[0.35em] font-extrabold uppercase text-warm-white">
            BLKWD
          </span>
          <span className="hidden sm:inline-block h-4 w-px bg-oak/30" />
          <span className="hidden sm:inline-block font-body text-[10px] tracking-[0.25em] uppercase text-oak">
            Design. Build. Live.
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-[11px] tracking-[0.2em] uppercase text-sand/60 hover:text-warm-white time-slice"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-4 border border-oak/30 px-6 py-2.5 font-body text-[10px] tracking-[0.2em] uppercase text-warm-white hover:bg-warm-white hover:text-black time-slice"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-warm-white time-slice ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-warm-white time-slice ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden glass overflow-hidden time-slice ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-sm tracking-[0.2em] uppercase text-sand/70 hover:text-warm-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
