import Link from 'next/link';
import { getContentList } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  const projects = getContentList('projects').slice(0, 3);
  const posts = getContentList('blog').slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Hero */}
      <section className="py-12">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          Hi, I'm John
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          A developer passionate about building things for the web.
          I write about programming, design, and whatever else I find interesting.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            View Projects
          </Link>
          <Link
            href="/resume"
            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-zinc-500"
          >
            Resume
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          <Link href="/projects" className="text-sm text-zinc-400 hover:text-white">
            View all →
          </Link>
        </div>
        {projects.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-zinc-500">No projects yet.</p>
        )}
      </section>

      {/* Recent Posts */}
      <section className="py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Recent Posts</h2>
          <Link href="/blog" className="text-sm text-zinc-400 hover:text-white">
            View all →
          </Link>
        </div>
        {posts.length > 0 ? (
          <div className="mt-6 space-y-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-zinc-500">No posts yet.</p>
        )}
      </section>
    </div>
  );
}
