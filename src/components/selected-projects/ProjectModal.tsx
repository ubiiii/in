'use client';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { IProject } from './types';
import { cn } from './utils';
import { useEffect } from 'react';

interface Props {
  open: boolean;
  project: IProject | null;
  onClose: () => void;
}

const ProjectModal = ({ open, project, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open || !project) return null;

  const previewImage = project.longThumbnail || project.thumbnail || project.images?.[0];

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 backdrop-blur-sm p-4',
      )}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-card text-card-foreground border border-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          className="absolute left-4 top-4 z-10 inline-flex items-center justify-center rounded-full bg-foreground/10 text-foreground p-2 hover:bg-foreground/20 ring-1 ring-foreground/20"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>

        {previewImage && (
          <div className="relative h-64 w-full md:h-80 lg:h-96">
            <Image src={previewImage} alt={project.title} fill className="object-cover" />
          </div>
        )}

        <div className="p-6 md:p-8 space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
          {project.description && (
            <div
              className="prose prose-neutral dark:prose-invert max-w-none text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          )}
          {project.images?.length ? (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {project.images.map((img) => (
                <div key={img} className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src={img} alt={project.title} fill className="object-cover" />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;


