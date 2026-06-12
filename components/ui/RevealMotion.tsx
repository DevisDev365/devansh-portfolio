import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
  sweep?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0, width = '100%', sweep = false }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const d = delay / 1000;
  return (
    <div ref={elementRef} style={{ width }} className={`${className} relative overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: d, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
      {sweep && (
        <motion.div
          className="absolute inset-0 bg-primary/10 origin-left pointer-events-none"
          initial={{ scaleX: 0 }}
          animate={isIntersecting ? { scaleX: [0, 1, 0] } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: d, ease: 'easeInOut', times: [0, 0.5, 1] }}
        />
      )}
    </div>
  );
};
