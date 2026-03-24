import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-800 bg-neutral-950/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-white text-neutral-400 transition-colors">
            Home
          </Link>
          <Link href="/blog" className="hover:text-white text-neutral-400 transition-colors">
            Blog
          </Link>
          <Link href="/backend" className="hover:text-white text-neutral-400 transition-colors">
            Backend
          </Link>
          <Link href="/cv" className="hover:text-white text-neutral-400 transition-colors">
            CV
          </Link>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Haxford"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
