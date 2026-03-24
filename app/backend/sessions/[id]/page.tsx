import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import sessionsData from '@/data/sessions.json';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
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

  return sessions.map((_, index) => ({
    id: (index + 1).toString(),
  }));
}

export default async function SessionPage({ params }: PageProps) {
  const { id } = await params;
  const sessionIndex = parseInt(id) - 1;

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

  if (sessionIndex < 0 || sessionIndex >= sessions.length) {
    notFound();
  }

  const sessionGroup = sessions[sessionIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href="/backend/sessions" 
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={14} /> Back to Sessions
      </Link>
      
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{sessionGroup.session}</h1>
        <p className="text-neutral-400">
          {sessionGroup.lessons.length} lesson{sessionGroup.lessons.length !== 1 ? 's' : ''} completed
        </p>
      </header>

      <div className="space-y-8">
        {sessionGroup.lessons.map((lesson, lessonIndex) => (
          <section key={lessonIndex} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-800 bg-neutral-900/50">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">{lesson.lesson}</h2>
                <span className={`inline-block text-xs px-2 py-0.5 rounded ${
                  lesson.status.includes('struggled') 
                    ? 'bg-amber-900/30 text-amber-400' 
                    : lesson.status.includes('backfilled')
                    ? 'bg-neutral-800 text-neutral-400'
                    : 'bg-blue-900/30 text-blue-400'
                }`}>
                  {lesson.status}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Assignment</p>
                <p className="text-neutral-300 text-sm bg-neutral-950 rounded-lg p-3 border border-neutral-800">{lesson.assignment}</p>
              </div>

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Solution</p>
                <pre className="bg-neutral-950 rounded-lg p-4 border border-neutral-800 overflow-x-auto text-sm">
                  <code className="text-blue-300">{lesson.code}</code>
                </pre>
              </div>

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Concept</p>
                <p className="text-neutral-300 text-sm">{lesson.concept}</p>
              </div>

              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">How it went</p>
                <p className="text-neutral-300 text-sm">{lesson.how}</p>
              </div>

              {Object.keys(lesson.ratings).length > 0 && (
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
              )}

              {lesson.takeaways.length > 0 && (
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
              )}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        {sessionIndex > 0 ? (
          <Link 
            href={`/backend/sessions/${sessionIndex}`}
            className="text-blue-400 hover:text-blue-300 hover:underline text-sm"
          >
            ← {sessions[sessionIndex - 1].session}
          </Link>
        ) : (
          <span />
        )}
        {sessionIndex < sessions.length - 1 ? (
          <Link 
            href={`/backend/sessions/${sessionIndex + 2}`}
            className="text-blue-400 hover:text-blue-300 hover:underline text-sm"
          >
            {sessions[sessionIndex + 1].session} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
