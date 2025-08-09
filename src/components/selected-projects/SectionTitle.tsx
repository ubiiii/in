import { ReactNode } from 'react';
import { cn } from './utils';

interface Props {
  icon?: ReactNode;
  className?: string;
  classNames?: {
    container?: string;
    title?: string;
    icon?: string;
  };
  title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
  return (
    <div className={cn('flex items-center gap-4 mb-10', className, classNames?.container)}>
      {icon ?? <div className={cn('size-3 rounded-full bg-primary animate-spin', classNames?.icon)} />}
      <h2 className={cn('text-xl uppercase leading-none', classNames?.title)}>{title}</h2>
    </div>
  );
};

export default SectionTitle;



