import Link from 'next/link';
import type { ContentMeta } from '@/lib/content';

export default function BlogCard({ post }: { post: ContentMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
    >
      <p className="text-sm text-zinc-500">{post.date}</p>
      <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-blue-400">
        {post.title}
      </h3>
      <p className="mt-2 text-zinc-400">{post.description}</p>
    </Link>
  );
}
