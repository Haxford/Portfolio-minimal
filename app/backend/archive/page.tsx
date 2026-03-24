import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import sessionsData from '@/data/sessions.json';

export default function BackendArchive() {
  // Group by session
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

      <div className="space-y-12">
        {sessions.map((sessionGroup, groupIndex) => (
          <section key={groupIndex} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-800 bg-neutral-900/50">
              <h2 className="text-lg font-semibold text-white">{sessionGroup.session}</h2>
              <p className="text-sm text-neutral-500">{sessionGroup.lessons.length} lesson{sessionGroup.lessons.length !== 1 ? 's' : ''} completed</p>
            </div>

            <div className="divide-y divide-neutral-800">
              {sessionGroup.lessons.map((lesson, lessonIndex) => (
                <div key={lessonIndex} className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-white font-medium mb-1">{lesson.lesson}</h3>
                      <span className={`inline-block text-xs px-2 py-0.5 rounded ${
                        lesson.status.includes('struggled') 
                          ? 'bg-amber-900/30 text-amber-400' 
                          : 'bg-blue-900/30 text-blue-400'
                      }`}>
                        {lesson.status}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Concept</p>
                      <p className="text-neutral-300 text-sm">{lesson.concept}</p>
                    </div>

                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">How it went</p>
                      <p className="text-neutral-300 text-sm">{lesson.how}</p>
                    </div>

                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Ratings</p>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(lesson.ratings).map(([key, value]) => (
                          <div key={key} className="bg-neutral-800 rounded px-3 py-1">
                            <span className="text-neutral-400 text-xs">{key}: </span>
                            <span className="text-white text-xs font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Key takeaways</p>
                      <ul className="space-y-1">
                        {lesson.takeaways.map((takeaway, i) => (
                          <li key={i} className="text-blue-400 text-sm flex gap-2">
                            <span className="text-neutral-600">→</span>
                            <span>{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 text-center text-neutral-500 text-sm">
        <p>These notes are maintained as I learn. Last updated: March 2026.</p>
      </div>
    </div>
  );
}
