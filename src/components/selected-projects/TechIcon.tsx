'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Shield } from 'lucide-react';

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
  if (key.includes('socket.io') || key.includes('socketio') || key.includes('socket')) return 'socketdotio';
  if (key.includes('node.js') || key.includes('nodejs') || key === 'node' || key.includes('node')) return 'nodedotjs';
  if (key.includes('express')) return 'express';
  if (key.includes('vite')) return 'vite';
  if (key.includes('bootstrap')) return 'bootstrap';
  if (key.includes('mdx')) return 'mdx';
  if (key.includes('vercel')) return 'vercel';
  if (key.includes('cors')) return '';
  if (key.includes('libsodium') || key.includes('sodium')) return '';
  if (key.includes('cybersecurity')) return '';
  if (key.includes('network security')) return '';
  if (key.includes('penetration testing')) return '';
  if (key.includes('ethical hacking')) return '';
  if (key.includes('digital forensics')) return '';
  return key.replace(/\s+/g, '');
}

export default function TechIcon({ name, className }: TechIconProps) {
  const lower = name.toLowerCase();
  const iconName = toIconName(name);
  const isLibsodium = lower.includes('libsodium') || lower.includes('sodium');
  const isCors = lower.includes('cors');
  const isCybersecurity = lower.includes('cybersecurity');
  const isNetworkSecurity = lower.includes('network security');
  const isPenetrationTesting = lower.includes('penetration testing');
  const isEthicalHacking = lower.includes('ethical hacking');
  const isDigitalForensics = lower.includes('digital forensics');
  const [failed, setFailed] = useState(iconName === '' && !isLibsodium && !isCors && !isCybersecurity && !isNetworkSecurity && !isPenetrationTesting && !isEthicalHacking && !isDigitalForensics);
  
  // Use white icons for specific techs in dark mode
  const isNextJs = iconName === 'nextdotjs';
  const isSocketIo = iconName === 'socketdotio';
  const isExpress = iconName === 'express';
  const isVercel = iconName === 'vercel';
  const isMdx = iconName === 'mdx';
  const isDarkMode = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldUseWhite = isDarkMode && (isNextJs || isSocketIo || isExpress || isVercel || isMdx);
  const src = iconName ? `https://cdn.simpleicons.org/${iconName}${shouldUseWhite ? '/white' : ''}` : '';
  return (
    <div
      className={[
        'flex items-center gap-2 rounded-lg px-3 py-2 bg-neutral-100 dark:bg-neutral-900 ring-1 ring-black/5 dark:ring-white/10',
        'shadow-sm',
        className || '',
      ].join(' ')}
      title={name}
    >
      {isLibsodium || isCors || isCybersecurity || isNetworkSecurity || isPenetrationTesting || isEthicalHacking || isDigitalForensics ? (
        <span className="inline-flex items-center justify-center h-6 w-6 md:h-7 md:w-7 rounded-sm bg-white/30 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10 text-lg leading-none">
          {isLibsodium ? '🔐' : 
           isCors ? '🌐' :
           isCybersecurity ? '🔐' :
           isNetworkSecurity ? '📡' :
           isPenetrationTesting ? '🎯' :
           isEthicalHacking ? '👨‍💻' :
           isDigitalForensics ? '🔍' : '🔐'}
        </span>
      ) : !failed ? (
        <span className="relative inline-block h-6 w-6 md:h-7 md:w-7">
          <Image src={src} alt={name} fill sizes="28px" onError={() => setFailed(true)} />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center h-6 w-6 md:h-7 md:w-7 rounded-sm bg-white/20 dark:bg-white/10 ring-1 ring-black/5 dark:ring-white/10">
          <Shield className="h-4 w-4 md:h-5 md:w-5 opacity-80" />
        </span>
      )}
      <span className="text-sm md:text-base">{name}</span>
    </div>
  );
}


