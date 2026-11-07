import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Flag } from 'lucide-react';

interface RetroGreenRunnerProps {
  playClick?: () => void;
}

export const RetroGreenRunner: React.FC<RetroGreenRunnerProps> = ({ playClick }) => {
  const [isSurgeActive, setIsSurgeActive] = useState<boolean>(false);
  const [distanceKm, setDistanceKm] = useState<number>(42.195);
  const [cadence, setCadence] = useState<number>(172);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState<number>(0);
  
  // Track offset for continuous scrolling background
  const [trackOffset, setTrackOffset] = useState<number>(0);
  const animFrameRef = useRef<number | null>(null);

  const milestones = [
    { km: 5, label: 'Imperial Auto: Fuel Line Architecture', color: '#1E5BFF' },
    { km: 15, label: 'SMAAASH: ₹59K Outbound Launch', color: '#E4002B' },
    { km: 26, label: 'Elevra Tech: Enterprise Solution Delivery', color: '#6D28D9' },
    { km: 42, label: 'Autonomous AI: GTM Lead Engine', color: '#00E47C' },
    { km: 50, label: 'Ultra Marathon: Continuous Systems Scaling', color: '#F59E0B' },
  ];

  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      const speedFactor = isSurgeActive ? 2.8 : 1.0;
      
      // Update background track offset for smooth continuous motion
      setTrackOffset((prev) => (prev + dt * 60 * speedFactor) % 400);

      // Increment distance smoothly (represents marathon execution)
      setDistanceKm((prev) => {
        const next = prev + dt * 0.08 * speedFactor;
        // Cycle active milestone smoothly based on distance
        const mIdx = Math.floor((next % 50) / 10) % milestones.length;
        setActiveMilestoneIndex(mIdx);
        return next;
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isSurgeActive, milestones.length]);

  const toggleSurge = () => {
    if (playClick) playClick();
    setIsSurgeActive((prev) => !prev);
    setCadence(isSurgeActive ? 172 : 194);
  };

  const currentMilestone = milestones[activeMilestoneIndex];

  return (
    <div className="relative w-full max-w-2xl mx-auto my-6 p-4 rounded-2xl bg-[#090D17] border border-white/10 overflow-hidden select-none">
      {/* Marathon HUD Status Bar */}
      <div className="flex flex-wrap items-center justify-between text-xs mb-3 pb-2.5 border-b border-white/10 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="font-semibold text-slate-200">
            Endurance Engine · Marathon Cadence
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-slate-400">
          <span className="text-[11px] sm:text-xs">
            Dist:{' '}
            <strong className="text-emerald-400 font-mono">
              {distanceKm.toFixed(2)} km
            </strong>
          </span>
          <span className="text-[11px] sm:text-xs">
            Cadence:{' '}
            <strong className="text-white font-mono">{cadence} SPM</strong>
          </span>
          <button
            onClick={toggleSurge}
            className={`px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-bold tracking-wide uppercase flex items-center gap-1.5 transition-all ${
              isSurgeActive
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300'
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>{isSurgeActive ? 'Surge (194 SPM)' : 'Pace Surge'}</span>
          </button>
        </div>
      </div>

      {/* Retro Animation Marathon Track */}
      <div className="relative h-24 sm:h-28 bg-[#05070B] rounded-xl overflow-hidden flex items-end px-4 pb-3 border border-white/5">
        {/* Continuous Grid Lines moving backward */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00E47C 1px, transparent 1px), linear-gradient(to bottom, #00E47C 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            transform: `translateX(-${trackOffset % 32}px)`,
          }}
        />

        {/* Milestone Distance Banners in continuous parallax */}
        <div className="absolute top-2 left-3 right-3 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none gap-2">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#0C121E] border border-white/10 text-[10px] sm:text-[11px] max-w-full">
            <Flag className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="text-slate-400 shrink-0 hidden xs:inline">Milestone:</span>
            <span className="font-semibold text-white truncate">
              {currentMilestone.label}
            </span>
          </div>
          <span className="text-[10px] text-slate-500 hidden md:inline">
            Long-term execution • Zero plateau
          </span>
        </div>

        {/* Running Track Road with animated dashes */}
        <div className="absolute bottom-3 left-0 right-0 h-[3px] bg-emerald-500/40 overflow-hidden">
          <div
            className="h-full w-[200%] flex"
            style={{
              transform: `translateX(-${trackOffset % 80}px)`,
            }}
          >
            {Array.from({ length: 40 }).map((_, idx) => (
              <span
                key={idx}
                className="w-8 h-full bg-emerald-300/80 inline-block mr-6 shrink-0"
              />
            ))}
          </div>
        </div>

        {/* The Retro Green Marathon Runner Figure (Centered & Running Fluidly) */}
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 cursor-pointer group"
          onClick={toggleSurge}
          title="Click to toggle sprint pace"
        >
          {/* Surge Speed Particle Trail */}
          {isSurgeActive && (
            <motion.div
              className="absolute -left-6 top-3 w-8 h-1 bg-gradient-to-r from-transparent to-amber-400/80 blur-[1px]"
              animate={{ opacity: [0.4, 0.9, 0.4], x: [-6, 0, -6] }}
              transition={{ duration: 0.2, repeat: Infinity }}
            />
          )}

          <motion.div
            animate={{
              y: [0, -3.5, 0],
              skewX: isSurgeActive ? [-10, -14, -10] : [-5, -7, -5],
            }}
            transition={{
              duration: isSurgeActive ? 0.18 : 0.32,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative flex flex-col items-center"
          >
            {/* Retro Stylized Green Runner SVG */}
            <svg width="32" height="42" viewBox="0 0 32 42" fill="none">
              {/* Head */}
              <circle
                cx="16"
                cy="8"
                r="5.5"
                fill={isSurgeActive ? '#F59E0B' : '#00E47C'}
              />
              <rect x="17" y="7" width="3" height="2" fill="#05070B" />

              {/* Headband / Visor */}
              <rect
                x="11"
                y="6"
                width="10"
                height="2"
                fill="#FFFFFF"
                opacity="0.8"
              />

              {/* Torso */}
              <path
                d="M 16 13 L 16 26"
                stroke={isSurgeActive ? '#F59E0B' : '#00E47C'}
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Arms (Pumping Marathon Arm Swing) */}
              <motion.path
                d="M 16 16 L 9 22 M 16 16 L 23 20"
                stroke={isSurgeActive ? '#F59E0B' : '#00E47C'}
                strokeWidth="2.8"
                strokeLinecap="round"
                animate={{
                  d: [
                    'M 16 16 L 8 22 M 16 16 L 24 18',
                    'M 16 16 L 24 22 M 16 16 L 8 18',
                  ],
                }}
                transition={{
                  duration: isSurgeActive ? 0.18 : 0.32,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />

              {/* Legs (Continuous Running Stride) */}
              <motion.path
                d="M 16 26 L 10 39 M 16 26 L 22 36"
                stroke={isSurgeActive ? '#F59E0B' : '#00E47C'}
                strokeWidth="3.2"
                strokeLinecap="round"
                animate={{
                  d: [
                    'M 16 26 L 9 39 M 16 26 L 23 35',
                    'M 16 26 L 23 39 M 16 26 L 9 35',
                  ],
                }}
                transition={{
                  duration: isSurgeActive ? 0.18 : 0.32,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              />
            </svg>

            {/* Runner Dynamic Ground Shadow */}
            <motion.div
              className="w-6 h-1 bg-emerald-500/30 rounded-full blur-[1px] mt-0.5"
              animate={{
                scaleX: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: isSurgeActive ? 0.18 : 0.32,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
