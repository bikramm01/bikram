import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10 bg-background/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-white">
          Bikram Mondal
        </span>

        <nav className="flex gap-6 text-sm text-gray-400">
          <Link href="#work" className="hover:text-white">Work</Link>
          <Link href="#writing" className="hover:text-white">Writing</Link>
          <Link href="#focus" className="hover:text-white">Now</Link>
        </nav>
      </div>
    </header>
  );
}
