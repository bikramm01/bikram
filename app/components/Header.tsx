"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10 bg-background/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <span className="font-semibold text-white">
          Bikram Mondal
        </span>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-400">
          <Link href="#work" className="hover:text-white">Work</Link>
          <Link href="#writing" className="hover:text-white">Writing</Link>
          <Link href="#focus" className="hover:text-white">Now</Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur">
          <nav className="flex flex-col px-6 py-4 space-y-4 text-sm text-gray-400">
            <Link
              href="#work"
              className="hover:text-white"
              onClick={() => setOpen(false)}
            >
              Work
            </Link>
            <Link
              href="#writing"
              className="hover:text-white"
              onClick={() => setOpen(false)}
            >
              Writing
            </Link>
            <Link
              href="#focus"
              className="hover:text-white"
              onClick={() => setOpen(false)}
            >
              Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
