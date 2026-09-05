"use client";

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
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
      {/* LOGO */}
      <a
        href="/"
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
    </header>
  );
}