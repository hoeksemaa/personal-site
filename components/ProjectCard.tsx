import Link from 'next/link';
import type { ContentMeta } from '@/lib/content';

export default function ProjectCard({ project }: { project: ContentMeta }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-zinc-800 p-6 transition-colors hover:border-zinc-600"
    >
      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
      {project.tech && (
        <p className="mt-3 text-xs text-zinc-500">{project.tech}</p>
      )}
    </Link>
  );
}
