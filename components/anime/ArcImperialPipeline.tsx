import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Building2,
  Gauge,
  Activity,
  Droplets,
  Wrench,
} from 'lucide-react';
import { SHOW_CLIENT_NAMES } from '../../constants';

interface ArcImperialPipelineProps {
  playValve?: () => void;
  playClick?: () => void;
}

export const ArcImperialPipeline: React.FC<ArcImperialPipelineProps> = ({
  playValve,
  playClick,
}) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const [isCoupled, setIsCoupled] = useState<boolean>(true);
  const [torqueCount, setTorqueCount] = useState<number>(1);

  const toggleJoint = () => {
    if (playValve) playValve();
    if (playClick) playClick();
    setIsCoupled((prev) => {
      if (!prev) setTorqueCount((c) => c + 1);
      return !prev;
    });
  };

  const oemAccounts = [
    {
      id: 'us-h2',
      genericName: 'US hydrogen-mobility OEM',
      realName: 'Hyzon Motors US',
      market: 'Export Key Account',
      sector: 'Hydrogen Mobility',
      application: 'Fuel Transmission Lines',
      lifecycle:
        'Collaborated with OEM engineering to design and develop zero-permeation fuel pipeline structures, managing export deliveries.',
    },
    {
      id: 'us-mh',
      genericName: 'US material-handling OEM',
      realName: 'Mitsubishi Logisnext US',
      market: 'Export Key Account',
      sector: 'Material Handling',
      application: 'Hydraulic & Return Line Assemblies',
      lifecycle:
        'Structured multi-tier international RFQ cost-volume modeling, coordinating cross-border production schedules and Incoterms compliance.',
    },
    {
      id: 'in-power',
      genericName: 'Indian power-systems OEM',
      realName: 'Kohler Power India',
      market: 'Domestic Key Account',
      sector: 'Power Systems',
      application: 'High-Pressure Transmission Lines',
      lifecycle:
        'Directed strategic account relationship management, delivery synchronization, technical drawing reviews, and series production handover.',
    },
  ];

  return (
    <section
      id="arc-pipeline"
      className="relative bg-[#1747E0] text-[#F4F7FF] transition-colors duration-400 ease-out"
    >
      {/* Blueprint grid texture background */}
      <div className="absolute inset-0 texture-blueprint pointer-events-none opacity-20" />

      {/* Main Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-8 relative z-10">
        {/* 1. Eyebrow: company · dates in arc accent */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#FFD60A]" />
          <span className="text-xs sm:text-sm font-bold text-[#FFD60A] uppercase tracking-wider font-sans">
            Imperial Auto Industries · 2022–23
          </span>
        </div>

        {/* 2. H2: REAL JOB TITLE */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-[#F4F7FF] leading-snug">
          Key Account Executive
        </h2>
        <p className="text-xs sm:text-sm text-[#F4F7FF]/70 mt-1 mb-4 uppercase tracking-wider font-mono">
          Fluid Transmission Architecture
        </p>

        {/* 3. One-line summary */}
        <p className="text-base sm:text-xl text-[#F4F7FF]/90 font-normal max-w-3xl leading-relaxed mb-8">
          Managed strategic OEM accounts for fuel transmission lines and hydraulic assemblies across export and domestic markets.
        </p>

        {/* 4. Max 3 Stat Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-8 border-b border-[#F4F7FF]/15">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#FFD60A] tracking-tight">
              ₹5Cr+
            </div>
            <div className="text-xs sm:text-sm text-[#F4F7FF]/80 mt-1 font-medium">
              Expansion ARR managed
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#FFD60A] tracking-tight">
              3
            </div>
            <div className="text-xs sm:text-sm text-[#F4F7FF]/80 mt-1 font-medium">
              Strategic OEM accounts
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#FFD60A] tracking-tight">
              87%
            </div>
            <div className="text-xs sm:text-sm text-[#F4F7FF]/80 mt-1 font-medium">
              Less ERP reporting time
            </div>
          </div>
        </div>
      </div>

      {/* 5. Signature Visual (Compact, High-Contrast Industrial Apparatus) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 relative z-10">
        <div className="relative w-full rounded-2xl bg-[#0B2570] border border-[#FFD60A]/30 p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
          {/* Blueprint Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#F4F7FF]/15 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#FFD60A] font-mono">SCHEMATIC IA-2024</span>
              <span className="text-[#F4F7FF]/40 hidden sm:inline">|</span>
              <span className="text-[#F4F7FF]/90 hidden sm:inline font-medium">
                Mandrel-Bent Steel Tube + Clamped Elastomer Hose Assembly
              </span>
            </div>

            {/* Status Badge & Toggle Action */}
            <div className="flex items-center gap-3">
              <div
                className={`px-3 py-1 rounded text-xs font-bold transition-colors font-mono ${
                  isCoupled
                    ? 'bg-[#FFD60A] text-[#11110F]'
                    : 'bg-white/10 text-white'
                }`}
              >
                {isCoupled ? 'ZERO LEAK · HERMETIC (10.0 BAR)' : 'DISENGAGED · 0.0 BAR'}
              </div>

              <button
                onClick={toggleJoint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#F4F7FF] hover:bg-white text-[#1747E0] text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow"
              >
                {isCoupled ? (
                  <>
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Disengage Clamp</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-3.5 h-3.5" />
                    <span>Torque Clamp &amp; Seal</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* SVG Industrial Apparatus */}
          <div className="relative w-full py-4 flex items-center justify-center overflow-x-auto">
            <svg
              viewBox="0 0 920 320"
              className="w-full max-w-4xl h-auto min-w-[700px] select-none"
              style={{ filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.45))' }}
            >
              <defs>
                {/* Steel tube metallic gradient */}
                <linearGradient id="pipeSteelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                  <stop offset="15%" stopColor="#CBD5E1" />
                  <stop offset="50%" stopColor="#94A3B8" />
                  <stop offset="80%" stopColor="#475569" />
                  <stop offset="100%" stopColor="#1E293B" />
                </linearGradient>

                {/* Specular spine highlight */}
                <linearGradient id="steelHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#E2E8F0" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
                </linearGradient>

                {/* Vulcanized Rubber Hose Gradient - Dark Charcoal with clear highlights */}
                <linearGradient id="pipeRubberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="15%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#1E293B" />
                  <stop offset="85%" stopColor="#0F172A" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                {/* Stainless steel worm clamp band */}
                <linearGradient id="clampBandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="25%" stopColor="#F1F5F9" />
                  <stop offset="65%" stopColor="#CBD5E1" />
                  <stop offset="100%" stopColor="#64748B" />
                </linearGradient>

                {/* Clamp Screw Housing */}
                <linearGradient id="clampScrewGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#94A3B8" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>

                {/* Fluid stream gradient */}
                <linearGradient id="pipeFluidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="50%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#FFD60A" />
                </linearGradient>

                {/* Braided texture pattern for vulcanized rubber hose */}
                <pattern id="hoseTexture" width="16" height="16" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="16" y2="16" stroke="#64748B" strokeWidth="1" opacity="0.4" />
                  <line x1="16" y1="0" x2="0" y2="16" stroke="#64748B" strokeWidth="1" opacity="0.4" />
                </pattern>

                {/* Worm-drive perforation slots */}
                <pattern id="clampSlots" width="12" height="28" patternUnits="userSpaceOnUse">
                  <rect x="3" y="6" width="5" height="14" rx="1.5" fill="#1E293B" />
                </pattern>
              </defs>

              {/* 1. Rigid Mandrel-Bent Steel Tube */}
              <g id="steel-tube">
                {/* Flange Mount at Left Entry */}
                <rect x="44" y="44" width="22" height="72" rx="4" fill="#94A3B8" stroke="#F8FAFC" strokeWidth="2" />
                <circle cx="55" cy="58" r="4" fill="#1E293B" />
                <circle cx="55" cy="102" r="4" fill="#1E293B" />

                {/* Main Bent Steel Tube Contour (48px outer diameter) */}
                <path
                  d="M 66 80 L 180 80 C 260 80, 270 180, 360 180 L 450 180"
                  fill="none"
                  stroke="url(#pipeSteelGrad)"
                  strokeWidth="48"
                  strokeLinecap="butt"
                />

                {/* Specular Spine Highlight */}
                <path
                  d="M 68 64 L 180 64 C 252 64, 260 164, 356 164 L 450 164"
                  fill="none"
                  stroke="url(#steelHighlight)"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Shadow Underside */}
                <path
                  d="M 68 96 L 180 96 C 268 96, 278 196, 364 196 L 450 196"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.6"
                />

                {/* Retention Bead Ring (swaged lip at x=420) */}
                <path
                  d="M 420 152 C 426 152, 430 158, 430 180 C 430 202, 426 208, 420 208 Z"
                  fill="#E2E8F0"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                />
              </g>

              {/* 2. Pressurized Fluid Flow (Active when coupled) */}
              {isCoupled && (
                <g id="fluid-stream">
                  <path
                    d="M 60 80 L 180 80 C 260 80, 270 180, 360 180 L 880 180"
                    fill="none"
                    stroke="url(#pipeFluidGrad)"
                    strokeWidth="24"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  <motion.path
                    d="M 60 80 L 180 80 C 260 80, 270 180, 360 180 L 880 180"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="6"
                    strokeDasharray="24 36"
                    animate={{ strokeDashoffset: [0, -120] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                  />

                  {/* Micro particles */}
                  <motion.circle
                    r="4"
                    fill="#FFD60A"
                    animate={{
                      cx: [70, 180, 260, 360, 480, 700, 880],
                      cy: [80, 80, 130, 180, 180, 180, 180],
                      opacity: [0, 1, 1, 1, 1, 1, 0],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    r="3.5"
                    fill="#38BDF8"
                    animate={{
                      cx: [70, 180, 260, 360, 480, 700, 880],
                      cy: [80, 80, 130, 180, 180, 180, 180],
                      opacity: [0, 1, 1, 1, 1, 1, 0],
                    }}
                    transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </g>
              )}

              {/* 3. Vulcanized Flexible Rubber Hose (High-Contrast, Clear Visibility) */}
              <motion.g
                id="elastomer-hose"
                animate={{
                  x: isCoupled ? 0 : 55,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 22,
                }}
              >
                {/* Hose Outer Body (58px outer diameter) */}
                <rect
                  x="400"
                  y="151"
                  width="470"
                  height="58"
                  rx="6"
                  fill="url(#pipeRubberGrad)"
                  stroke="#475569"
                  strokeWidth="2.5"
                />

                {/* Braided Weave Texture Pattern */}
                <rect
                  x="400"
                  y="151"
                  width="470"
                  height="58"
                  rx="6"
                  fill="url(#hoseTexture)"
                  opacity="0.65"
                />

                {/* Hose Entrance Cuff Lip */}
                <rect
                  x="396"
                  y="147"
                  width="16"
                  height="66"
                  rx="3"
                  fill="#1E293B"
                  stroke="#94A3B8"
                  strokeWidth="2"
                />

                {/* Spec Label on Hose Body */}
                <text
                  x="560"
                  y="185"
                  fill="#94A3B8"
                  fontSize="10"
                  fontWeight="bold"
                  fontFamily="monospace"
                  letterSpacing="1.5"
                  opacity="0.85"
                >
                  SAE J30R9 · VULCANIZED EPDM ELASTOMER · IMPERIAL AUTO
                </text>
              </motion.g>

              {/* 4. Torqued Stainless Worm-Drive Clamp Band */}
              <motion.g
                id="worm-clamp"
                animate={{
                  x: isCoupled ? 0 : 55,
                  scale: isCoupled ? 1 : 1.05,
                }}
                style={{ transformOrigin: '445px 180px' }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 24,
                }}
              >
                {/* Main Stainless Clamp Band (76px Height) */}
                <rect
                  x="432"
                  y="142"
                  width="28"
                  height="76"
                  rx="4"
                  fill="url(#clampBandGrad)"
                  stroke="#F8FAFC"
                  strokeWidth="1.5"
                />

                {/* Worm-Drive Perforation Slots */}
                <rect
                  x="438"
                  y="146"
                  width="16"
                  height="68"
                  fill="url(#clampSlots)"
                  opacity="0.75"
                />

                {/* Clamp Screw Housing */}
                <rect
                  x="428"
                  y="130"
                  width="36"
                  height="18"
                  rx="3"
                  fill={isCoupled ? '#FFD60A' : '#E2E8F0'}
                  stroke="#0F172A"
                  strokeWidth="1.5"
                />

                {/* Slotted Screw Drive */}
                <line x1="436" y1="139" x2="456" y2="139" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="446" cy="139" r="2" fill="#0F172A" />

                {/* Torque Label Callout */}
                <text
                  x="446"
                  y="122"
                  textAnchor="middle"
                  fill={isCoupled ? '#FFD60A' : '#CBD5E1'}
                  fontSize="9"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  {isCoupled ? 'TORQUED: 5.5 Nm' : 'LOOSE: 0 Nm'}
                </text>
              </motion.g>
            </svg>
          </div>

          {/* Integrated Telemetry Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#F4F7FF]/15 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-[#FFD60A] shrink-0" />
              <div>
                <span className="text-[#F4F7FF]/60 block text-[10px] uppercase">Fluid Pressure</span>
                <span className="font-bold text-[#F4F7FF]">{isCoupled ? '10.0 Bar Safe' : '0.0 Bar Static'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#FFD60A] shrink-0" />
              <div>
                <span className="text-[#F4F7FF]/60 block text-[10px] uppercase">Tolerance</span>
                <span className="font-bold text-[#F4F7FF]">DIN ±0.05mm</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-[#FFD60A] shrink-0" />
              <div>
                <span className="text-[#F4F7FF]/60 block text-[10px] uppercase">Flow Velocity</span>
                <span className="font-bold text-[#F4F7FF]">{isCoupled ? '4.8 m/s Active' : 'Halted'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FFD60A] shrink-0" />
              <div>
                <span className="text-[#F4F7FF]/60 block text-[10px] uppercase">Joint Integrity</span>
                <span className="font-bold text-[#FFD60A]">{isCoupled ? 'Zero Leak Hermetic' : 'Disengaged'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. "Details" Accordion (Collapsed by Default, zero empty space gap) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 relative z-10">
        <div className="rounded-2xl bg-[#0B2570] border border-[#F4F7FF]/15 overflow-hidden shadow-lg">
          <button
            onClick={() => {
              setDetailsOpen(!detailsOpen);
              if (playClick) playClick();
            }}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/[0.04] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-5 h-5 text-[#FFD60A]" />
              <span className="font-heading font-bold text-base sm:text-lg text-[#F4F7FF]">
                Strategic OEM Account Engagements &amp; Technical Specifications
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FFD60A]">
              <span>{detailsOpen ? 'Hide Details' : 'View Details'}</span>
              {detailsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          <AnimatePresence>
            {detailsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-[#F4F7FF]/15 px-6 py-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {oemAccounts.map((account) => (
                    <div key={account.id} className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#FFD60A] font-bold">{account.market}</span>
                        <span className="text-[#F4F7FF]/60">{account.sector}</span>
                      </div>
                      <h4 className="text-base font-bold text-white font-heading">
                        {SHOW_CLIENT_NAMES ? account.realName : account.genericName}
                      </h4>
                      <p className="text-xs text-[#F4F7FF]/70 font-medium">
                        {account.application}
                      </p>
                      <p className="text-xs sm:text-sm text-[#F4F7FF]/85 leading-relaxed pt-1">
                        {account.lifecycle}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
