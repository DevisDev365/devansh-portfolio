import { useState, useCallback, useRef } from 'react';

const GLYPHS = '01#@%&<>*+=~∆Ξ';

export const useTextScramble = (finalText: string) => {
  const [displayText, setDisplayText] = useState<string>(finalText);
  const intervalRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(() =>
        finalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return finalText[index];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (iteration >= finalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
      iteration += 1 / 2;
    }, 30);
  }, [finalText]);

  return { displayText, scramble };
};
