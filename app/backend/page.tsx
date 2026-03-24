import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import lessonsData from '@/data/lessons.json';

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

      {/* Lessons That Stuck */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Lessons That Stuck</h2>
        <p className="text-neutral-400 mb-6">
          The concepts that kicked my ass until I cracked them — with a bit of help from AI.
        </p>
        <div className="space-y-3">
          {lessonsData.map((item, i) => (
            <details key={i} className="group bg-neutral-900 border border-neutral-800 rounded-xl">
              <summary className="flex items-center justify-between cursor-pointer p-4 text-neutral-300 hover:text-white transition-colors list-none">
                <span className="font-medium">{item.lesson}</span>
                <span className="text-neutral-500 group-hover:text-white transition-colors">
                  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-4 pb-4 border-t border-neutral-800 pt-4">
                <p className="text-neutral-400 text-sm mb-3">
                  <span className="text-neutral-500">Concept:</span> {item.concept}
                </p>
                <p className="text-blue-400 text-sm">
                  <span className="text-neutral-500">Key takeaway:</span> {item.takeaway}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
