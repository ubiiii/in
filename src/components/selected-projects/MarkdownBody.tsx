'use client';

import React, { useEffect, useRef } from 'react';

interface MarkdownBodyProps {
  html: string;
}

export default function MarkdownBody({ html }: MarkdownBodyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pres = Array.from(container.querySelectorAll('pre')) as HTMLPreElement[];

    pres.forEach((pre) => {
      const alreadyHasBtn = pre.querySelector('[data-copy-btn]');
      if (alreadyHasBtn) return;

      const button = document.createElement('button');
      button.textContent = 'Copy';
      button.setAttribute('type', 'button');
      button.setAttribute('data-copy-btn', 'true');
      button.className = 'code-copy-btn';

      button.addEventListener('click', async () => {
        try {
          const text = pre.innerText;
          await navigator.clipboard.writeText(text);
          button.textContent = 'Copied!';
          button.classList.add('copied');
          setTimeout(() => {
            button.textContent = 'Copy';
            button.classList.remove('copied');
          }, 1200);
        } catch (err) {
          // no-op
        }
      });

      pre.appendChild(button);
    });

    return () => {
      pres.forEach((pre) => {
        const btn = pre.querySelector('[data-copy-btn]');
        if (btn) btn.remove();
      });
    };
  }, [html]);

  return (
    <div ref={containerRef} className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
  );
}


