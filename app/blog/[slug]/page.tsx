import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
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

      <div className="prose prose-invert prose-neutral max-w-none prose-headings:font-bold prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-code:text-blue-300 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}
