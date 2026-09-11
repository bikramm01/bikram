"use client";

import { useState } from "react";
import { Cormorant_Garamond, Geist_Mono } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const navigation = [
  {
    label: "Journey",
    href: "/#journey",
  },
  {
    label: "Work",
    href: "/#work",
  },
  {
    label: "Acting",
    href: "/acting",
  },
  {
    label: "Insights",
    href: "/insights",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-gradient-to-b from-black/80 to-transparent">
      {/* HEADER ROW */}
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <a
          href="/"
          onClick={() => setMenuOpen(false)}
          className={`${serif.className} text-xl text-white hover:opacity-70 transition-opacity`}
        >
          BIKRAM
        </a>

        {/* DESKTOP NAV */}
        <nav
          className={`${mono.className} hidden md:flex gap-10 text-[11px] uppercase tracking-[0.25em] text-white/40`}
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden flex flex-col items-end justify-center gap-1.5 w-8 h-8"
        >
          <span
            className={`block h-px bg-white transition-all duration-300 ${
              menuOpen
                ? "w-5 rotate-45 translate-y-[3px]"
                : "w-5"
            }`}
          />

          <span
            className={`block h-px bg-white transition-all duration-300 ${
              menuOpen
                ? "w-5 -rotate-45 -translate-y-[3px]"
                : "w-3.5"
            }`}
          />
        </button>
      </div>

      {/* MOBILE NAV */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
    menuOpen
      ? "max-h-[420px] opacity-100 mt-6"
      : "max-h-0 opacity-0 mt-0"
  }`}
>
  <nav
    className={`${mono.className} border-t border-white/10 pt-4 pb-2 text-right`}
  >
    {navigation.map((item) => (
      <a
        key={item.label}
        href={item.href}
        onClick={() => setMenuOpen(false)}
        className="block py-3 text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors"
      >
        {item.label}
      </a>
    ))}
  </nav>
</div>
    </header>
  );
}