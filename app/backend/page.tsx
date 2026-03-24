import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Backend() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={14} /> Back
      </Link>
      
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Backend Dev</h1>
        <p className="text-neutral-400">
          Tracking my progress through{' '}
          <a 
            href="https://www.boot.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline"
          >
            boot.dev
          </a>
          {' '}— Python, Go, and the fundamentals of backend development.
        </p>
      </header>

      {/* Boot.dev Profile */}
      <section className="mb-12">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
          <iframe 
            src="https://www.boot.dev/u/haxford"
            className="w-full h-[700px] border-0"
            title="Harry's boot.dev profile"
          />
        </div>
      </section>

      {/* Hard Lessons */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Lessons That Stuck</h2>
        <p className="text-neutral-400 mb-4">
          The lessons that kicked my ass until I cracked them — with a bit of help from AI.
        </p>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
          <p className="text-neutral-500">
            I'll add the lessons I struggled with here as I go.
          </p>
        </div>
      </section>
    </div>
  );
}
