
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-950"
          onClick={() => setMobileOpen(false)}
        >
          BuiltByAfnan<span className="text-teal-700">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-neutral-600 transition-colors hover:text-teal-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hire Me Button */}
        <a
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition-all hover:bg-teal-800 lg:inline-flex"
        >
          Hire me
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-900 hover:bg-neutral-100 lg:hidden"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-neutral-200 bg-white px-5 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1440px] flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3.5 text-sm font-medium text-white hover:bg-teal-800"
            >
              Hire me
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
