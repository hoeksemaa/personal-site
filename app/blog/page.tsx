import { getContentList } from '@/lib/content';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: 'Blog - John',
  description: 'Thoughts and writings',
};

export default function BlogPage() {
  const posts = getContentList('blog');

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white">Blog</h1>
      <p className="mt-2 text-zinc-400">Thoughts and writings.</p>

      {posts.length > 0 ? (
        <div className="mt-8 space-y-10">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-zinc-500">No posts yet.</p>
      )}
    </div>
  );
}
