'use client';
import Image from 'next/image';
import type { IProject } from './types';
import MarkdownBody from './MarkdownBody';
import TechIcon from './TechIcon';
import { ExternalLink, Github } from 'lucide-react';

interface Props {
  project: IProject | null;
}

const ProjectDetails = ({ project }: Props) => {
  if (!project) return null;

  // Determine button text and link based on project
  const getProjectButton = () => {
    switch (project.slug) {
      case 'awesome-react-native':
        return { text: 'Live', link: 'https://awesomereactnative.com/', icon: ExternalLink };
      case 'brutalyze-web':
        return { text: 'GitHub', link: 'https://github.com/ubiiii/Brutalyze-GUI', icon: Github };
      case 'silencium':
        return { text: 'GitHub', link: 'https://github.com/ubiiii/Silencium', icon: Github };
      case 'shadowkey':
        return { text: 'GitHub', link: 'https://github.com/ubiiii/ShadowKey', icon: Github };
      case 'blockchain-cloudguard':
        return { text: 'Visit Research', link: 'https://www.jetir.org/papers/JETIR2307677.pdf', icon: ExternalLink };
      case 'python-ethical-hacking':
        return { text: 'View Certificate', link: 'https://www.udemy.com/certificate/UC-de49e904-0333-4ddd-a3f0-9c137082119f/', icon: ExternalLink };
      case 'cyber-security':
        return { text: 'View Certificate', link: 'https://drive.google.com/file/d/1XtwYoKnv2LaKa_IMII-1MkBHEVC2Bihq/view', icon: ExternalLink };
      default:
        return null;
    }
  };

  const projectButton = getProjectButton();

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
          {projectButton && (
            <a
              href={projectButton.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <projectButton.icon className="w-4 h-4" />
              {projectButton.text}
            </a>
          )}
        </div>
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


