import React from 'react';
import { motion } from 'framer-motion';

interface TerminalLabelProps {
  text: string;
  className?: string;
}

export const TerminalLabel: React.FC<TerminalLabelProps> = ({ text, className = '' }) => {
  return (
    <span className={`text-accent font-mono text-sm tracking-wider uppercase flex items-center gap-1 ${className}`}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
        className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-0.5"
      />
    </span>
  );
};
