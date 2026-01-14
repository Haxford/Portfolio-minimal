import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { format } from 'date-fns';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link 
        href="/blog" 
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft size={14} /> Back to Blog
      </Link>
      
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
        <time className="text-neutral-500 font-mono text-sm">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
      </header>

      <div className="text-neutral-300">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({children}) => <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>,
            h2: ({children}) => <h2 className="text-2xl font-bold text-white mt-10 mb-4 border-b border-neutral-800 pb-2">{children}</h2>,
            h3: ({children}) => <h3 className="text-xl font-bold text-white mt-8 mb-3">{children}</h3>,
            p: ({children}) => <p className="leading-relaxed mb-6 text-neutral-300">{children}</p>,
            ul: ({children}) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2">{children}</ul>,
            ol: ({children}) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2">{children}</ol>,
            li: ({children}) => <li className="pl-1">{children}</li>,
            blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-neutral-400 bg-neutral-900/50 py-2 rounded-r">{children}</blockquote>,
            a: ({href, children}) => <a href={href} className="text-blue-400 hover:text-blue-300 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>,
            code: ({children}) => <code className="bg-neutral-800 text-blue-200 rounded px-1.5 py-0.5 text-sm font-mono">{children}</code>,
            pre: ({children}) => <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 overflow-x-auto mb-6 text-sm">{children}</pre>,
            table: ({children}) => <div className="overflow-x-auto mb-6"><table className="min-w-full text-left text-sm border-collapse">{children}</table></div>,
            th: ({children}) => <th className="border-b border-neutral-700 font-semibold p-2 text-white bg-neutral-800/50">{children}</th>,
            td: ({children}) => <td className="border-b border-neutral-800 p-2 text-neutral-300">{children}</td>,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
