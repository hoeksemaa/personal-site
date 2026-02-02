import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { getContentBySlug, getContentList } from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getContentList('projects');
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getContentBySlug('projects', slug);
  if (!project) return { title: 'Not Found' };
  return {
    title: `${project.meta.title} - John`,
    description: project.meta.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getContentBySlug('projects', slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link href="/projects" className="text-sm text-zinc-400 hover:text-white">
        ← Back to projects
      </Link>

      <article className="mt-8">
        <h1 className="text-3xl font-bold text-white">{project.meta.title}</h1>
        <p className="mt-2 text-zinc-400">{project.meta.description}</p>
        {project.meta.tech && (
          <p className="mt-2 text-sm text-zinc-500">{project.meta.tech}</p>
        )}

        <div className="prose prose-invert mt-8 max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-blue-400 prose-strong:text-white prose-li:text-zinc-300">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
