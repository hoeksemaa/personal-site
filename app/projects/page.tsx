import { getContentList } from '@/lib/content';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Projects - John',
  description: 'Things I have built',
};

export default function ProjectsPage() {
  const projects = getContentList('projects');

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <p className="mt-2 text-zinc-400">Things I have built.</p>

      {projects.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-zinc-500">No projects yet.</p>
      )}
    </div>
  );
}
