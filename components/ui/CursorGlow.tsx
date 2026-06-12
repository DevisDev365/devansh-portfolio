import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CursorGlow: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      {/* Outer soft glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{ x: x - 200, y: y - 200 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 0.5 }}
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />
      {/* Inner sharp dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        style={{
          width: 8,
          height: 8,
          background: 'rgba(59,130,246,0.8)',
          boxShadow: '0 0 8px rgba(59,130,246,0.6)',
        }}
      />
    </>
  );
};
