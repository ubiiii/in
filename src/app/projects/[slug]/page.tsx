import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/components/selected-projects/data';
import MarkdownBody from '@/components/selected-projects/MarkdownBody';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-sm text-blue-600 hover:underline">
          ← Back
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Visit live
          </a>
        )}
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            Source
          </a>
        )}
      </div>

      <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
      <div className="text-muted-foreground">{project.year}</div>

      <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl border bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={project.longThumbnail || project.thumbnail}
          alt={project.title}
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="space-y-6">
        <MarkdownBody html={project.description} />
        {project.role && (
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: project.role }} />
          </div>
        )}
        {project.techStack?.length ? (
          <div>
            <h3 className="text-sm uppercase tracking-wide text-muted-foreground mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {project.images?.length ? (
          <div className="grid grid-cols-1 gap-4">
            {project.images.map((img) => (
              <div
                key={img}
                className="relative overflow-hidden rounded-xl border aspect-[16/9] bg-neutral-100 dark:bg-neutral-900"
              >
                <Image src={img} alt={project.title} fill className="object-contain" />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}



