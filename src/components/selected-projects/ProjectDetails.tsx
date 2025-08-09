'use client';
import Image from 'next/image';
import type { IProject } from './types';
import MarkdownBody from './MarkdownBody';
import TechIcon from './TechIcon';

interface Props {
  project: IProject | null;
}

const ProjectDetails = ({ project }: Props) => {
  if (!project) return null;
  const preview = project.longThumbnail || project.thumbnail || project.images?.[0];

  return (
    <div className="space-y-5">
      {preview && (
        <div className="relative w-full h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image src={preview} alt={project.title} fill className="object-contain" />
        </div>
      )}
      <div className="space-y-3">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
        {project.techStack?.length ? (
          <div className="flex flex-wrap items-center gap-3 my-3 md:my-4">
            {project.techStack.map((t) => (
              <TechIcon key={t} name={t} />
            ))}
          </div>
        ) : null}
        {project.description && <MarkdownBody html={project.description} />}
        {project.images?.length ? (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {project.images.map((img) => (
              <div
                key={img}
                className="relative aspect-video overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900"
              >
                <Image src={img} alt={project.title} fill className="object-contain" />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectDetails;


