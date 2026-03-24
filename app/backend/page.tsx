import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Learning() {
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

      {/* Boot.dev Profile Embed */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Progress Overview</h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
          <iframe 
            src="https://www.boot.dev/u/haxford"
            className="w-full h-[600px] border-0"
            title="Harry's boot.dev profile"
            loading="lazy"
          />
        </div>
      </section>

      {/* Stats Cards */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Current Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Level" value="16" />
          <StatCard label="XP" value="1,269" />
          <StatCard label="Lessons Solved" value="126" />
          <StatCard label="Best Streak" value="13 days" />
        </div>
      </section>

      {/* Hard Lessons */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Lessons That Stuck</h2>
        <p className="text-neutral-400 mb-4">
          These are the lessons that kicked my ass until I cracked them — with a bit of help from AI.
        </p>
        <div className="space-y-4">
          <LessonCard 
            title="Coming soon..."
            difficulty="TBD"
            note="I'll add the lessons I struggled with here as I go."
          />
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
      <p className="text-neutral-500 text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function LessonCard({ title, difficulty, note }: { title: string; difficulty: string; note: string }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-medium">{title}</h3>
        <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">{difficulty}</span>
      </div>
      <p className="text-neutral-400 text-sm">{note}</p>
    </div>
  );
}
