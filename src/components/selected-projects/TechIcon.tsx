'use client';

import React from 'react';
import Image from 'next/image';

interface TechIconProps {
  name: string;
  className?: string;
}

function toIconName(name: string): string {
  const key = name.toLowerCase();
  if (key.includes('python')) return 'python';
  if (key.includes('flask')) return 'flask';
  if (key === 'html' || key.includes('html5')) return 'html5';
  if (key === 'css' || key.includes('css')) return 'css';
  if (key.includes('javascript') || key === 'js') return 'javascript';
  if (key.includes('typescript') || key === 'ts') return 'typescript';
  if (key.includes('react')) return 'react';
  if (key.includes('next')) return 'nextdotjs';
  if (key.includes('tailwind')) return 'tailwindcss';
  return key.replace(/\s+/g, '');
}

export default function TechIcon({ name, className }: TechIconProps) {
  const iconName = toIconName(name);
  const src = `https://cdn.simpleicons.org/${iconName}`;
  return (
    <div
      className={[
        'flex items-center gap-2 rounded-lg px-3 py-2 bg-neutral-100 dark:bg-neutral-900 ring-1 ring-black/5 dark:ring-white/10',
        'shadow-sm',
        className || '',
      ].join(' ')}
      title={name}
    >
      <span className="relative inline-block h-6 w-6 md:h-7 md:w-7">
        <Image src={src} alt={name} fill sizes="28px" />
      </span>
      <span className="text-sm md:text-base">{name}</span>
    </div>
  );
}


