import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { format } from 'date-fns';

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
        <p className="text-neutral-400">Thoughts on infrastructure, linux, and my learning journey.</p>
      </section>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block space-y-3">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h2 className="text-xl font-semibold text-neutral-200 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <time className="text-sm text-neutral-500 font-mono shrink-0">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                {post.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
