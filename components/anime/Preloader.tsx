import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('visited_episode_intro');
    }
    return false;
  });

  const dismiss = () => {
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('visited_episode_intro', 'true');
    }
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (!isVisible) return;

    // Auto dismiss after 1.4s
    const timer = setTimeout(() => {
      dismiss();
    }, 1400);

    // Escape key listener to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07080C] px-6 selection:bg-none"
        >
          <div className="max-w-xl w-full text-center relative z-10">
            {/* Broadcast Category */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/[0.04] text-xs font-semibold text-emerald-400 mb-5"
            >
              <span>Broadcast Sequence</span>
              <span>•</span>
              <span>Episode 01</span>
            </motion.div>

            {/* Monumental Episode Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase mb-3 font-sans"
            >
              Devansh Khanna
            </motion.h1>

            {/* Mission Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.16 }}
              className="text-sm text-slate-400 font-medium mb-8"
            >
              Enterprise SAP Consulting · AI Automation Architect
            </motion.p>

            {/* Progress line */}
            <div className="w-48 h-[2px] bg-white/10 mx-auto rounded-full overflow-hidden mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.2, ease: 'linear' }}
                className="h-full bg-emerald-400"
              />
            </div>

            {/* Skip Button */}
            <button
              onClick={dismiss}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors px-3 py-1 rounded hover:bg-white/5"
            >
              Skip Intro [ESC]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
