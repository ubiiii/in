import TransitionLink from './TransitionLink';
import { cn } from './utils';
import { IProject } from './types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';
import ProjectTypeBadge from './ProjectTypeBadge';

interface Props {
  index: number;
  project: IProject;
  selectedProject: string | null;
  onMouseEnter: (_slug: string) => void;
  onClick?: () => void;
}

gsap.registerPlugin(useGSAP);

const Project = ({ index, project, selectedProject, onMouseEnter, onClick }: Props) => {
  const externalLinkSVGRef = useRef<SVGSVGElement>(null);
  const { context, contextSafe } = useGSAP(() => {}, {
    scope: externalLinkSVGRef,
    revertOnUpdate: true,
  });

  const handleMouseEnter = contextSafe?.(() => {
    // Always call onMouseEnter for container hover effects
    onMouseEnter(project.slug);
    
    // Skip Skills project-specific animations
    if (project.slug === 'skills') return;

    const arrowLine = externalLinkSVGRef.current?.querySelector('#arrow-line') as SVGPathElement;
    const arrowCurb = externalLinkSVGRef.current?.querySelector('#arrow-curb') as SVGPathElement;
    const box = externalLinkSVGRef.current?.querySelector('#box') as SVGPathElement;

    gsap.set(box, {
      opacity: 0,
      strokeDasharray: box?.getTotalLength(),
      strokeDashoffset: box?.getTotalLength(),
    });
    gsap.set(arrowLine, {
      opacity: 0,
      strokeDasharray: arrowLine?.getTotalLength(),
      strokeDashoffset: arrowLine?.getTotalLength(),
    });
    gsap.set(arrowCurb, {
      opacity: 0,
      strokeDasharray: arrowCurb?.getTotalLength(),
      strokeDashoffset: arrowCurb?.getTotalLength(),
    });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(externalLinkSVGRef.current, { autoAlpha: 1 })
      .to(box, { opacity: 1, strokeDashoffset: 0 })
      .to(arrowLine, { opacity: 1, strokeDashoffset: 0 }, '<0.2')
      .to(arrowCurb, { opacity: 1, strokeDashoffset: 0 })
      .to(externalLinkSVGRef.current, { autoAlpha: 0 }, '+=1');
  });

  const handleMouseLeave = contextSafe?.(() => {
    context.kill();
  });

  return (
    <TransitionLink
      href={undefined as any}
      className={cn(
        "project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none transition-all duration-500 will-change-transform transform-gpu",
        project.slug === 'skills' 
          ? "md:group-hover/projects:opacity-30 md:hover:!opacity-100 md:group-hover/projects:-translate-x-2 md:hover:translate-x-0" 
          : "md:group-hover/projects:opacity-30 md:hover:!opacity-100 md:group-hover/projects:-translate-x-2 md:hover:translate-x-0"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e: any) => { e.preventDefault(); onClick?.(); }}
    >
      {selectedProject === null && (
        <div className="w-full mb-6 aspect-[3/2] overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={project.thumbnail}
            alt="Project"
            width={300}
            height={200}
            className={cn('w-full h-full object-contain')}
            key={project.slug}
            loading="lazy"
          />
        </div>
      )}
      <div className="flex gap-2 md:gap-5">
        <div className="font-anton text-muted-foreground font-semibold">_{(index + 1).toString().padStart(2, '0')}.</div>
        <div>
          <h4 className={cn(
            "text-4xl xs:text-6xl flex gap-4 font-anton font-extrabold text-foreground transition-[color,background-position] duration-700",
            project.slug === 'skills'
              ? "text-foreground"
              : "bg-[length:200%_100%] bg-[right_center] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[left_center] project-title-gradient"
          )}>
            {project.title}
            <span className={cn(
              "text-foreground transition-all",
              project.slug === 'skills' ? "opacity-0" : "opacity-0 group-hover:opacity-100"
            )}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                ref={externalLinkSVGRef}
              >
                <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <path id="arrow-line" d="M10 14 21 3"></path>
                <path id="arrow-curb" d="M15 3h6v6"></path>
              </svg>
            </span>
          </h4>
          <div className="mt-2 flex items-center gap-3">
            <ProjectTypeBadge type={project.type} />
            <div className="flex flex-wrap gap-3 text-muted-foreground text-xs font-medium">
              {project.techStack.slice(0, 3).map((tech, idx, stackArr) => (
                <div className="gap-3 flex items-center" key={tech}>
                  <span>{tech}</span>
                  {idx !== stackArr.length - 1 && (
                    <span className="inline-block size-2 rounded-full bg-secondary"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};

export default Project;


