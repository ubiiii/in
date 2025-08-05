'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
  words: string[];
  className?: string;
}

export default function TypingEffect({ words, className }: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      // Backspacing - much slower
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      
             const timer = setTimeout(() => {
         setCurrentText(currentWord.substring(0, currentText.length - 1));
       }, 50); // 135ms per character deletion (10% faster)
      
      return () => clearTimeout(timer);
    } else {
      // Typing - much slower
      if (currentText === currentWord) {
        // Word is complete, wait then start deleting
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // 3 seconds pause
        return () => clearTimeout(timer);
      }
      
             const timer = setTimeout(() => {
         setCurrentText(currentWord.substring(0, currentText.length + 1));
       }, 50); // 180ms per character typing (10% faster)
      
      return () => clearTimeout(timer);
    }
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
} 