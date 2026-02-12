import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  width = "100%" 
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={elementRef} style={{ width }} className={`${className} relative overflow-hidden`}>
      <div
        className={`reveal-hidden ${isIntersecting ? 'reveal-visible' : ''}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};