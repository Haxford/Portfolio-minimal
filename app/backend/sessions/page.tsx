import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import sessionsData from '@/data/sessions.json';

export default function SessionsIndex() {
  // Group lessons by session
  const sessions = sessionsData.reduce((acc, item) => {
    const existing = acc.find(s => s.session === item.session);
    if (existing) {
      existing.lessons.push(item);
    } else {
      acc.push({ session: item.session, lessons: [item] });
    }
    return acc;
  }, [] as { session: string; lessons: typeof sessionsData }[]);

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/backend" 
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={14} /> Back to Backend Dev
      </Link>
      
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Session Archive</h1>
        <p className="text-neutral-400">
          Full detailed session notes from my boot.dev learning sessions. Every lesson, every struggle, every breakthrough.
        </p>
      </header>

      <div className="grid gap-6">
        {sessions.map((sessionGroup, index) => (
          <Link 
            key={index}
            href={`/backend/sessions/${index + 1}`}
            className="group bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {sessionGroup.session}
                </h2>
                <p className="text-neutral-500 text-sm">
                  {sessionGroup.lessons.length} lesson{sessionGroup.lessons.length !== 1 ? 's' : ''} completed
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {sessionGroup.lessons.slice(0, 3).map((lesson, i) => (
                    <span key={i} className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded">
                      {lesson.lesson.length > 25 ? lesson.lesson.slice(0, 25) + '...' : lesson.lesson}
                    </span>
                  ))}
                  {sessionGroup.lessons.length > 3 && (
                    <span className="text-xs text-neutral-600 px-2 py-1">
                      +{sessionGroup.lessons.length - 3} more
                    </span>
                  )}
                </div>
              </div>
              <span className="text-neutral-600 group-hover:text-blue-400 transition-colors">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center text-neutral-500 text-sm">
        <p>These notes are maintained as I learn. Last updated: March 2026.</p>
      </div>
    </div>
  );
}
