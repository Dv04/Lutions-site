"use client";

import { useState, useEffect } from 'react';

interface AnimatedSubtitleProps {
  text: string;
  className?: string;
}

export default function AnimatedSubtitle({ text, className = "" }: AnimatedSubtitleProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Reset on text change
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <p className={`relative ${className}`}>
      {displayedText}
      <span className="absolute right-[-2px] bottom-0 top-0 w-0.5 animate-typing-blink bg-current"></span>
    </p>
  );
}
