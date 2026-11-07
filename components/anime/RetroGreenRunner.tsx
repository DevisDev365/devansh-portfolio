import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface RetroGreenRunnerProps {
  onGoal?: () => void;
  playClick?: () => void;
}

export const RetroGreenRunner: React.FC<RetroGreenRunnerProps> = ({ onGoal, playClick }) => {
  const [isRunningFast, setIsRunningFast] = useState<boolean>(false);
  const [hasScored, setHasScored] = useState<boolean>(false);
  const [scoreCount, setScoreCount] = useState<number>(0);
  const [positionX, setPositionX] = useState<number>(10);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    let currentX = 10;
    const speed = isRunningFast ? 1.4 : 0.45;

    const loop = () => {
      currentX += speed;
      if (currentX >= 88) {
        // Goal post reached!
        currentX = 10;
        setHasScored(true);
        setScoreCount((prev) => prev + 1);
        if (onGoal) onGoal();
        try {
          confetti({
            particleCount: 25,
            spread: 50,
            origin: { x: 0.85, y: 0.65 },
            colors: ['#00E47C', '#FFFFFF', '#F59E0B'],
            disableForReducedMotion: true,
          });
        } catch {
          // Fallback
        }
        setTimeout(() => setHasScored(false), 1800);
      }
      setPositionX(currentX);
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    animationFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isRunningFast, onGoal]);

  const handleSprintBoost = () => {
    if (playClick) playClick();
    setIsRunningFast(true);
    setTimeout(() => setIsRunningFast(false), 2400);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto my-6 p-4 rounded-2xl bg-[#090D17] border border-white/10 overflow-hidden select-none">
      {/* Track HUD Status */}
      <div className="flex items-center justify-between text-xs mb-3 pb-2 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-300">
            Sprint Execution Stage
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">Goals Scored: <strong className="text-emerald-400">{scoreCount}</strong></span>
          <button
            onClick={handleSprintBoost}
            className="px-2.5 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-[11px] font-bold tracking-wide uppercase transition-colors"
          >
            {isRunningFast ? 'Sprint Boost Active!' : 'Click to Boost'}
          </button>
        </div>
      </div>

      {/* Retro Animation Field */}
      <div className="relative h-20 sm:h-24 bg-[#05070B] rounded-xl overflow-hidden flex items-end px-4 pb-2 border border-white/5">
        {/* Track Line */}
        <div className="absolute bottom-3 left-4 right-4 h-[2px] bg-emerald-500/30" />

        {/* Goal Post (Right Side) */}
        <div className="absolute right-6 bottom-3 flex flex-col items-center">
          <motion.div
            animate={{ rotate: hasScored ? [0, -12, 12, 0] : 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Goal Net & Uprights */}
            <svg width="42" height="52" viewBox="0 0 42 52" fill="none">
              <path d="M 6 50 L 6 8 L 36 8 L 36 50" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
              <path d="M 6 22 L 36 22" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
              <path d="M 6 36 L 36 36" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
              {/* Goal flag */}
              <motion.path
                d="M 36 8 L 48 13 L 36 18 Z"
                fill={hasScored ? '#00E47C' : '#F59E0B'}
                animate={{ scaleX: hasScored ? [1, 1.4, 1] : 1 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.div>
        </div>

        {/* The Retro Green Runner Figure */}
        <div
          className="absolute bottom-3 cursor-pointer group"
          style={{ left: `${positionX}%` }}
          onClick={handleSprintBoost}
          title="Click to Boost Sprint Speed!"
        >
          <motion.div
            animate={{
              y: [0, -4, 0],
              skewX: isRunningFast ? [-8, -12, -8] : [-4, -6, -4],
            }}
            transition={{
              duration: isRunningFast ? 0.16 : 0.32,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative flex flex-col items-center"
          >
            {/* Retro Stylized Green Runner SVG */}
            <svg width="28" height="38" viewBox="0 0 28 38" fill="none">
              {/* Head */}
              <circle cx="14" cy="7" r="5" fill="#00E47C" />
              <rect x="15" y="6" width="3" height="2" fill="#05070B" />

              {/* Torso */}
              <path d="M 14 12 L 14 24" stroke="#00E47C" strokeWidth="3.5" strokeLinecap="round" />

              {/* Arms (Pumping Sprint Cycle) */}
              <motion.path
                d="M 14 15 L 8 20 M 14 15 L 20 18"
                stroke="#00E47C"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={{
                  d: [
                    'M 14 15 L 7 19 M 14 15 L 21 16',
                    'M 14 15 L 21 19 M 14 15 L 7 16',
                  ],
                }}
                transition={{
                  duration: isRunningFast ? 0.16 : 0.3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />

              {/* Legs (Running Stride) */}
              <motion.path
                d="M 14 24 L 9 35 M 14 24 L 19 32"
                stroke="#00E47C"
                strokeWidth="3"
                strokeLinecap="round"
                animate={{
                  d: [
                    'M 14 24 L 6 34 M 14 24 L 22 30',
                    'M 14 24 L 22 34 M 14 24 L 6 30',
                  ],
                }}
                transition={{
                  duration: isRunningFast ? 0.16 : 0.3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </svg>

            {/* Dust puffs kicked up behind heels */}
            <motion.div
              animate={{ opacity: [0.6, 0.1, 0.6], scale: [0.8, 1.3, 0.8] }}
              transition={{ duration: 0.25, repeat: Infinity }}
              className="absolute -bottom-1 -left-3 w-2 h-2 rounded-full bg-emerald-500/40 blur-[1px]"
            />
          </motion.div>
        </div>

        {/* Goal celebration banner overlay */}
        <AnimatePresence>
          {hasScored && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-emerald-500/10 pointer-events-none"
            >
              <div className="px-3.5 py-1.5 rounded-lg bg-[#090D17] border border-emerald-500/50 text-emerald-300 font-extrabold text-xs">
                Goal Reached · Revenue Target Unlocked
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
