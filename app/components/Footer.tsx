import Link from "next/link";
import { Linkedin, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 pt-10 pb-6 text-sm text-gray-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <p>
          © {new Date().getFullYear()} Bikram Mondal · Built with clarity and intent
        </p>

        {/* Right */}
        <div className="flex items-center gap-5">
          <Link
            href="https://www.linkedin.com/in/bikrammondal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </Link>

          <Link
            href="https://www.youtube.com/@bigbebright"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-white transition-colors"
          >
            <Youtube size={18} />
          </Link>

          <Link
            href="https://www.facebook.com/iambikramm01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <Facebook size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
