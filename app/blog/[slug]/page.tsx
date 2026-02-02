import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getContentBySlug, getContentList } from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getContentList('blog');
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug('blog', slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.meta.title} - John`,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getContentBySlug('blog', slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/blog" className="text-sm text-zinc-400 hover:text-white">
        ← Back to blog
      </Link>

      <article className="mt-8">
        <p className="text-sm text-zinc-500">{post.meta.date}</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{post.meta.title}</h1>

        <div className="prose prose-invert mt-8 max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-blue-400 prose-strong:text-white prose-li:text-zinc-300">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
