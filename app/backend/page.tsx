import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BootdevHeatmap from '@/components/BootdevHeatmap';
import bootdevData from '@/data/bootdev.json';

export default function Backend() {
  const { profile, achievements, heatmap, hardLessons } = bootdevData;

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

      {/* Stats Cards */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Current Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Level" value={profile.level.toString()} />
          <StatCard label="XP" value={profile.xp.toLocaleString()} />
          <StatCard label="Lessons Solved" value={profile.lessonsSolved.toString()} />
          <StatCard label="Best Streak" value={`${profile.bestStreak} days`} />
        </div>
      </section>

      {/* Heatmap */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Activity</h2>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
          <BootdevHeatmap data={heatmap} />
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Achievements</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {achievements.map((achievement, i) => (
            <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-white font-medium text-sm">{achievement.name}</span>
              </div>
              <p className="text-neutral-400 text-sm mb-2">{achievement.description}</p>
              <time className="text-neutral-500 text-xs font-mono">
                {new Date(achievement.earned).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </time>
            </div>
          ))}
        </div>
      </section>

      {/* Hard Lessons */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-white mb-4">Lessons That Stuck</h2>
        <p className="text-neutral-400 mb-4">
          The lessons that kicked my ass until I cracked them — with a bit of help from AI.
        </p>
        
        {hardLessons.length === 0 ? (
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center">
            <p className="text-neutral-500">
              I'll add the lessons I struggled with here as I go. Each one will have notes on what I learned.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {hardLessons.map((lesson, i) => (
              <div key={i} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium">{lesson.title}</h3>
                  <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
                    {lesson.difficulty}
                  </span>
                </div>
                <p className="text-neutral-400 text-sm mb-2">{lesson.concept}</p>
                <p className="text-neutral-300 text-sm">{lesson.note}</p>
              </div>
            ))}
          </div>
        )}
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
