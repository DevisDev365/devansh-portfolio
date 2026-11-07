import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Activity,
  Droplets,
  Zap,
  Gauge,
  Lock,
  Unlock,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Globe,
} from 'lucide-react';

interface ArcImperialPipelineProps {
  playValve?: () => void;
  playClick?: () => void;
}

export const ArcImperialPipeline: React.FC<ArcImperialPipelineProps> = ({
  playValve,
  playClick,
}) => {
  // Clamped joint state: true = hose clamped on bent steel pipe with safe fluid flow
  const [isCoupled, setIsCoupled] = useState<boolean>(true);
  const [torqueCount, setTorqueCount] = useState<number>(1);
  const [pressureBar, setPressureBar] = useState<number>(10.0);
  const [flowSpeed, setFlowSpeed] = useState<number>(4.8);

  // Handle toggling the hose clamp & connection
  const toggleJoint = () => {
    if (playValve) playValve();
    if (playClick) playClick();
    if (isCoupled) {
      setIsCoupled(false);
      setPressureBar(0.0);
      setFlowSpeed(0.0);
    } else {
      setIsCoupled(true);
      setTorqueCount((prev) => prev + 1);
      setPressureBar(10.0);
      setFlowSpeed(4.8);
    }
  };

  const oemAccounts = [
    {
      id: 'hyzon',
      client: 'Hyzon Motors US',
      market: 'Export Key Account',
      sector: 'Hydrogen Mobility',
      application: 'High-Pressure Fuel & Hydrogen Conduit Assemblies',
      spec: 'PA12 Multilayer Nylon & Stainless Rigid Tube Hybrid · SAE J2044 Quick Coupler · Zero Vapor Permeation Barrier',
      lifecycle:
        'Managed complete commercial lifecycle from initial Faridabad plant audit representation and technical drawing validations to Incoterms modeling and US VP/GM commercial sign-off.',
    },
    {
      id: 'mitsubishi',
      client: 'Mitsubishi Logisnext US',
      market: 'Export Key Account',
      sector: 'Industrial Material Handling',
      application: 'High-Pressure Hydraulic Transmission & Return Assemblies',
      spec: 'Reinforced Braided Synthetic Elastomer Hose over Mandrel-Bent Steel Tube · Burst Rating > 35 Bar',
      lifecycle:
        'Structured multi-tier international RFQ cost-volume modeling, coordinating cross-border plant production schedules, Incoterms compliance, and overseas client communication.',
    },
    {
      id: 'kohler',
      client: 'Kohler Power India',
      market: 'Domestic Key Account',
      sector: 'Mission-Critical Energy Systems',
      application: 'Precision Diesel Fuel Rail Transmission Lines',
      spec: 'High-Temperature Heat-Shielded Bent Steel Rail Conduits · Flow Rate Telemetry Calibration',
      lifecycle:
        'Directed strategic client relationship management, scheduled delivery synchronization, technical drawing reviews, and series production handover.',
    },
  ];

  return (
    <section
      id="arc-pipeline"
      className="relative py-24 px-4 sm:px-6 bg-[#041521] text-slate-100 overflow-hidden transition-colors duration-500"
    >
      {/* Imperial Auto Engineering Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #269AE2 1px, transparent 1px), linear-gradient(to bottom, #269AE2 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Ambient Engineering Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#269AE2]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#1E5FD9]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header: Corporate Imperial Auto Identity */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2.5 text-[#269AE2] font-bold text-xs tracking-wider uppercase mb-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#269AE2] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#269AE2]" />
              </span>
              <span>Episode Arc 01 · Imperial Auto Industries</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Fluid Transmission Architecture
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Key Account Executive managing strategic OEM accounts. Engineering zero-permeation fuel transmission lines, hydraulic conduit assemblies, and commercial forecasting across ₹5+ Cr in expansion ARR.
            </p>
          </div>

          {/* Quick Joint Status Badge */}
          <div className="flex items-center gap-3.5 bg-[#081B2E] px-4 py-3 rounded-2xl border border-[#269AE2]/30 shrink-0 shadow-lg">
            <div className="text-right">
              <span className="text-[11px] text-[#269AE2] block font-mono font-semibold">
                Coupling Joint Telemetry
              </span>
              <strong className="text-xs text-white">
                {isCoupled ? 'Hermetic Seal · 10 Bar Safe' : 'Joint Disengaged · 0 Bar'}
              </strong>
            </div>
            <span
              className={`w-3.5 h-3.5 rounded-full ${
                isCoupled
                  ? 'bg-emerald-400 shadow-[0_0_12px_#34D399]'
                  : 'bg-amber-400 animate-pulse shadow-[0_0_10px_#FBBF24]'
              }`}
            />
          </div>
        </div>

        {/* PRIMARY SET PIECE: The Bent Steel Tube & Clamped Black Hose Assembly */}
        <div className="rounded-3xl bg-[#07192A]/90 p-6 sm:p-8 border border-[#269AE2]/35 shadow-2xl mb-12 backdrop-blur-sm">
          {/* Schematic Header Bar */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-[#269AE2]/20 text-xs gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#269AE2] font-black tracking-wider">
                ENGINEERING SCHEMATIC: IA-FTP-2024
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 font-medium hidden sm:inline">
                Mandrel-Bent Steel Tube + Clamped Elastomer Hose Junction
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0C243D] border border-[#269AE2]/30 text-[11px] text-slate-300 font-mono">
                <Activity className="w-3.5 h-3.5 text-[#269AE2]" />
                <span>DIN Spec: ±0.05mm</span>
              </div>

              <button
                onClick={toggleJoint}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#269AE2] hover:bg-[#1E85C7] text-white text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                title="Toggle Clamp & Hose Coupling"
              >
                {isCoupled ? (
                  <>
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Unclamp Joint</span>
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

          {/* Interactive Visual Canvas of the Bent Steel Pipe & Clamped Black Hose */}
          <div className="relative w-full rounded-2xl bg-[#040E19] border border-[#269AE2]/20 p-4 sm:p-6 overflow-hidden">
            {/* Background Grid inside the viewport */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #269AE2 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Mobile swipe hint */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2 sm:hidden">
              <span>← Pan to view full assembly →</span>
              <span className="text-[#269AE2]">10 Bar Clamped</span>
            </div>

            {/* SVG Apparatus */}
            <div className="relative w-full overflow-x-auto py-4">
              <svg
                viewBox="0 0 920 320"
                className="w-full h-auto min-w-[720px] select-none"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}
              >
                <defs>
                  {/* Metallic Steel Tube Gradients */}
                  <linearGradient id="steelTubeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                    <stop offset="12%" stopColor="#CBD5E1" />
                    <stop offset="45%" stopColor="#94A3B8" />
                    <stop offset="75%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#1E293B" />
                  </linearGradient>

                  <linearGradient id="steelHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#94A3B8" stopOpacity="0" />
                  </linearGradient>

                  {/* Vulcanized Black Hose Gradients */}
                  <linearGradient id="blackRubberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#374151" />
                    <stop offset="15%" stopColor="#1F2937" />
                    <stop offset="60%" stopColor="#111827" />
                    <stop offset="100%" stopColor="#0B0F17" />
                  </linearGradient>

                  {/* Stainless Steel Hose Clamp Gradient */}
                  <linearGradient id="clampBandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="30%" stopColor="#E2E8F0" />
                    <stop offset="70%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>

                  {/* Screw Housing Gradient */}
                  <linearGradient id="clampScrewGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F8FAFC" />
                    <stop offset="50%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>

                  {/* Luminous Imperial Cyan Fluid Gradient */}
                  <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#269AE2" stopOpacity="0.8" />
                    <stop offset="40%" stopColor="#38BDF8" stopOpacity="1" />
                    <stop offset="70%" stopColor="#00E47C" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#269AE2" stopOpacity="0.85" />
                  </linearGradient>

                  {/* Braided Texture for Rubber Hose */}
                  <pattern id="hoseTexture" width="16" height="16" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="16" y2="16" stroke="#4B5563" strokeWidth="1" opacity="0.25" />
                    <line x1="16" y1="0" x2="0" y2="16" stroke="#4B5563" strokeWidth="1" opacity="0.25" />
                  </pattern>

                  {/* Clamp Perforation Slots */}
                  <pattern id="clampSlots" width="12" height="28" patternUnits="userSpaceOnUse">
                    <rect x="3" y="8" width="5" height="12" rx="1.5" fill="#1E293B" />
                  </pattern>
                </defs>

                {/* 1. BENT STEEL PIPE (Rigid Mandrel-Bent Metal Conduit) */}
                <g id="bent-steel-tube">
                  {/* Flange Mount at Left Entry */}
                  <rect x="50" y="44" width="22" height="72" rx="4" fill="#94A3B8" stroke="#CBD5E1" strokeWidth="2" />
                  <circle cx="61" cy="58" r="4" fill="#334155" />
                  <circle cx="61" cy="102" r="4" fill="#334155" />

                  {/* Main Bent Steel Tube Outer Contour (48px OD) */}
                  <path
                    d="M 68 80
                       L 180 80
                       C 260 80, 270 180, 360 180
                       L 440 180"
                    fill="none"
                    stroke="url(#steelTubeGrad)"
                    strokeWidth="48"
                    strokeLinecap="butt"
                  />

                  {/* Specular Spine Highlight on Bent Steel Tube */}
                  <path
                    d="M 70 64
                       L 180 64
                       C 252 64, 260 164, 356 164
                       L 440 164"
                    fill="none"
                    stroke="url(#steelHighlight)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  {/* Dark Shadow Bottom Accent */}
                  <path
                    d="M 70 96
                       L 180 96
                       C 268 96, 278 196, 364 196
                       L 440 196"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />

                  {/* Steel Tube Machined Retention Bead (Raised lip at x=420) */}
                  <path
                    d="M 420 152 C 426 152, 430 158, 430 180 C 430 202, 426 208, 420 208 Z"
                    fill="#E2E8F0"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                  />

                  {/* Steel Tube End Lip */}
                  <rect x="436" y="156" width="6" height="48" rx="2" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />

                  {/* Internal Lumen Fluid Stream Path */}
                  {isCoupled && (
                    <g id="flowing-fluid-stream">
                      {/* Base Fluid Flow Track */}
                      <path
                        d="M 60 80
                           L 180 80
                           C 260 80, 270 180, 360 180
                           L 880 180"
                        fill="none"
                        stroke="url(#fluidGrad)"
                        strokeWidth="24"
                        strokeLinecap="round"
                        opacity="0.85"
                      />

                      {/* Animated Fluid Stream Highlights */}
                      <motion.path
                        d="M 60 80
                           L 180 80
                           C 260 80, 270 180, 360 180
                           L 880 180"
                        fill="none"
                        stroke="#E0F2FE"
                        strokeWidth="6"
                        strokeDasharray="24 36"
                        animate={{
                          strokeDashoffset: [0, -120],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      {/* Micro Particles of Pressurized Fluid */}
                      <motion.circle
                        r="3.5"
                        fill="#FFFFFF"
                        animate={{
                          cx: [70, 180, 260, 360, 480, 700, 880],
                          cy: [80, 80, 130, 180, 180, 180, 180],
                          opacity: [0, 1, 1, 1, 1, 1, 0],
                        }}
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <motion.circle
                        r="3"
                        fill="#38BDF8"
                        animate={{
                          cx: [70, 180, 260, 360, 480, 700, 880],
                          cy: [80, 80, 130, 180, 180, 180, 180],
                          opacity: [0, 1, 1, 1, 1, 1, 0],
                        }}
                        transition={{
                          duration: 1.6,
                          delay: 0.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      <motion.circle
                        r="4"
                        fill="#00E47C"
                        animate={{
                          cx: [70, 180, 260, 360, 480, 700, 880],
                          cy: [80, 80, 130, 180, 180, 180, 180],
                          opacity: [0, 1, 1, 1, 1, 1, 0],
                        }}
                        transition={{
                          duration: 1.6,
                          delay: 1.0,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </g>
                  )}
                </g>

                {/* 2. BLACK FLEXIBLE RUBBER HOSE */}
                <motion.g
                  id="black-rubber-hose"
                  animate={{
                    x: isCoupled ? 0 : 55,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 180,
                    damping: 22,
                  }}
                >
                  {/* Hose Outer Body (56px OD) */}
                  <rect
                    x="410"
                    y="152"
                    width="460"
                    height="56"
                    rx="6"
                    fill="url(#blackRubberGrad)"
                    stroke="#374151"
                    strokeWidth="2"
                  />

                  {/* Reinforcement Texture Layer */}
                  <rect
                    x="410"
                    y="152"
                    width="460"
                    height="56"
                    rx="6"
                    fill="url(#hoseTexture)"
                  />

                  {/* Hose Top Specular Rubber Highlight */}
                  <line
                    x1="412"
                    y1="156"
                    x2="868"
                    y2="156"
                    stroke="#4B5563"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.7"
                  />

                  {/* Technical Stencil Marking printed on rubber hose */}
                  <text
                    x="510"
                    y="184"
                    fill="#9CA3AF"
                    fontSize="10"
                    fontFamily="monospace"
                    letterSpacing="1.5"
                    opacity="0.8"
                  >
                    IMPERIAL AUTO • SAE J30R7 • 10 BAR W.P. • FLUID TRANSMISSION
                  </text>

                  {/* Internal Sleeve Flange Mouth */}
                  <rect
                    x="408"
                    y="150"
                    width="8"
                    height="60"
                    rx="3"
                    fill="#1F2937"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                  />

                  {/* Downstream Coupling Fitting at x=870 */}
                  <rect
                    x="866"
                    y="148"
                    width="24"
                    height="64"
                    rx="4"
                    fill="#64748B"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                  />
                  <line x1="878" y1="148" x2="878" y2="212" stroke="#334155" strokeWidth="2" />
                </motion.g>

                {/* 3. STAINLESS STEEL AUTOMOTIVE CLAMP */}
                <motion.g
                  id="automotive-hose-clamp"
                  animate={{
                    x: isCoupled ? 0 : 55,
                    scale: isCoupled ? 1 : 1.05,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 220,
                    damping: 24,
                  }}
                  className="cursor-pointer"
                  onClick={toggleJoint}
                >
                  {/* Clamp Stainless Steel Band Outer */}
                  <rect
                    x="432"
                    y="146"
                    width="28"
                    height="68"
                    rx="4"
                    fill="url(#clampBandGrad)"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />

                  {/* Perforation Slots */}
                  <rect
                    x="438"
                    y="152"
                    width="16"
                    height="56"
                    fill="url(#clampSlots)"
                    opacity="0.8"
                  />

                  {/* Clamp Screw Housing Block */}
                  <rect
                    x="426"
                    y="132"
                    width="40"
                    height="18"
                    rx="3"
                    fill="url(#clampScrewGrad)"
                    stroke="#E2E8F0"
                    strokeWidth="1.5"
                  />

                  {/* Hex Screw Drive Head */}
                  <rect
                    x="462"
                    y="135"
                    width="10"
                    height="12"
                    rx="1.5"
                    fill="#F1F5F9"
                    stroke="#64748B"
                    strokeWidth="1"
                  />
                  <line x1="467" y1="135" x2="467" y2="147" stroke="#1E293B" strokeWidth="1.5" />

                  {/* Animated Torque Indicator when clamping */}
                  {isCoupled && (
                    <motion.circle
                      cx="467"
                      cy="141"
                      r="12"
                      fill="none"
                      stroke="#269AE2"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      style={{ originX: '467px', originY: '141px' }}
                    />
                  )}
                </motion.g>

                {/* 4. HERMETIC SEAL & TELEMETRY CALLOUTS */}
                {isCoupled ? (
                  <g id="hermetic-seal-callout">
                    {/* Glowing Zero-Leak Halo at Seam */}
                    <circle cx="446" cy="180" r="42" fill="none" stroke="#269AE2" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
                    <circle cx="446" cy="180" r="50" fill="none" stroke="#00E47C" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

                    {/* Seal Verification Badge floating below joint */}
                    <rect x="365" y="240" width="162" height="30" rx="8" fill="#031C13" stroke="#059669" strokeWidth="1.5" />
                    <circle cx="380" cy="255" r="4" fill="#10B981" />
                    <text x="392" y="259" fill="#34D399" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      ZERO LEAK • 100% SEALED
                    </text>

                    {/* Callout Line from Joint to Badge */}
                    <line x1="446" y1="216" x2="446" y2="240" stroke="#059669" strokeWidth="1.5" strokeDasharray="2 2" />
                  </g>
                ) : (
                  <g id="disengaged-joint-callout">
                    {/* Disengaged Warning Line */}
                    <rect x="375" y="240" width="150" height="30" rx="8" fill="#2A1604" stroke="#D97706" strokeWidth="1.5" />
                    <circle cx="390" cy="255" r="4" fill="#F59E0B" />
                    <text x="402" y="259" fill="#FBBF24" fontSize="10" fontFamily="monospace" fontWeight="bold">
                      CLAMP RELEASED (0 BAR)
                    </text>
                    <line x1="446" y1="216" x2="446" y2="240" stroke="#D97706" strokeWidth="1.5" strokeDasharray="2 2" />
                  </g>
                )}

                {/* Component Engineering Labels */}
                <g opacity="0.9">
                  <line x1="160" y1="52" x2="160" y2="28" stroke="#269AE2" strokeWidth="1" />
                  <line x1="160" y1="28" x2="80" y2="28" stroke="#269AE2" strokeWidth="1" />
                  <text x="80" y="22" fill="#93C5FD" fontSize="10" fontFamily="monospace">
                    MANDREL-BENT STEEL TUBE (DIN 2391)
                  </text>
                </g>

                <g opacity="0.9">
                  <line x1="446" y1="130" x2="446" y2="105" stroke="#CBD5E1" strokeWidth="1" />
                  <line x1="446" y1="105" x2="360" y2="105" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="360" y="99" fill="#E2E8F0" fontSize="10" fontFamily="monospace">
                    STAINLESS WORM-DRIVE CLAMP (5.2 N·m)
                  </text>
                </g>

                <g opacity="0.9">
                  <line x1="680" y1="150" x2="680" y2="105" stroke="#94A3B8" strokeWidth="1" />
                  <line x1="680" y1="105" x2="770" y2="105" stroke="#94A3B8" strokeWidth="1" />
                  <text x="680" y="99" fill="#CBD5E1" fontSize="10" fontFamily="monospace">
                    MULTILAYER ELASTOMER HOSE (SAE J30R7)
                  </text>
                </g>
              </svg>
            </div>

            {/* Live Interactive Telemetry Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#269AE2]/20 mt-2">
              <div className="p-3 rounded-xl bg-[#081829] border border-[#269AE2]/25">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                  <span>SYSTEM PRESSURE</span>
                  <Gauge className="w-3.5 h-3.5 text-[#269AE2]" />
                </div>
                <div className="text-lg font-black font-mono text-white flex items-baseline gap-1">
                  <span>{pressureBar.toFixed(1)}</span>
                  <span className="text-xs text-[#269AE2]">BAR</span>
                </div>
                <span className={`text-[10px] font-bold ${isCoupled ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {isCoupled ? '• Rated Nominal' : '• Depressurized'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#081829] border border-[#269AE2]/25">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                  <span>CLAMP TORQUE</span>
                  <Wrench className="w-3.5 h-3.5 text-[#269AE2]" />
                </div>
                <div className="text-lg font-black font-mono text-white flex items-baseline gap-1">
                  <span>{isCoupled ? '5.2' : '0.0'}</span>
                  <span className="text-xs text-[#269AE2]">N·m</span>
                </div>
                <span className={`text-[10px] font-bold ${isCoupled ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {isCoupled ? '• DIN Compliant' : '• Released'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#081829] border border-[#269AE2]/25">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                  <span>LEAK SENSOR</span>
                  <Droplets className="w-3.5 h-3.5 text-[#269AE2]" />
                </div>
                <div className="text-lg font-black font-mono text-white flex items-baseline gap-1">
                  <span>{isCoupled ? '0.00' : 'N/A'}</span>
                  <span className="text-xs text-[#269AE2]">PPM</span>
                </div>
                <span className={`text-[10px] font-bold ${isCoupled ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {isCoupled ? '• Zero Permeation' : '• No Pressure'}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#081829] border border-[#269AE2]/25">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                  <span>FLUID VELOCITY</span>
                  <Zap className="w-3.5 h-3.5 text-[#269AE2]" />
                </div>
                <div className="text-lg font-black font-mono text-white flex items-baseline gap-1">
                  <span>{flowSpeed.toFixed(1)}</span>
                  <span className="text-xs text-[#269AE2]">m/s</span>
                </div>
                <span className={`text-[10px] font-bold ${isCoupled ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {isCoupled ? '• Laminar Flow' : '• Static'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic OEM Key Accounts Portfolio (3 Accounts Side-by-Side without Individual Metric Conflation) */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#269AE2]" />
              <span>Strategic OEM Key Accounts Portfolio:</span>
            </div>
            <span className="text-xs text-[#269AE2] font-mono">3 Strategic Accounts Managed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {oemAccounts.map((account) => (
              <div
                key={account.id}
                className="p-6 rounded-2xl bg-[#07192A] border border-[#269AE2]/30 shadow-xl flex flex-col justify-between transition-all hover:border-[#269AE2]/60 hover:shadow-2xl hover:shadow-[#269AE2]/10"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-[#269AE2]/20 text-[#7DD3FC] border border-[#269AE2]/40">
                      {account.market}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {account.sector}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-white mb-1.5">
                    {account.client}
                  </h4>

                  <div className="text-xs font-bold text-[#269AE2] mb-3 leading-snug">
                    {account.application}
                  </div>

                  <div className="text-xs text-slate-300 font-mono mb-4 leading-relaxed bg-[#04111D] p-3 rounded-xl border border-white/5">
                    <span className="text-slate-400 block text-[10px] uppercase font-sans font-bold mb-1">
                      Engineered Assembly Specification:
                    </span>
                    {account.spec}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#269AE2]/15 text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block mb-0.5">Account Lifecycle Ownership:</strong>
                  {account.lifecycle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborative Portfolio Business Impact (Across All Accounts) */}
        <div className="space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#269AE2]" />
            <span>Collaborative Business &amp; Operational Impact (Portfolio-Wide):</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#07192A] border border-[#269AE2]/30 shadow-lg">
              <span className="text-xs font-semibold text-[#269AE2] block mb-1">Commercial Velocity</span>
              <div className="text-3xl font-black text-white font-mono">₹5Cr+</div>
              <div className="text-xs font-bold text-slate-200 mt-1">Expansion ARR Managed</div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Generated across key enterprise OEM accounts through consultative solution mapping, RFQ margin optimization, and multi-stakeholder alignment.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#07192A] border border-[#269AE2]/30 shadow-lg">
              <span className="text-xs font-semibold text-[#269AE2] block mb-1">Process Automation</span>
              <div className="text-3xl font-black text-white font-mono">87%</div>
              <div className="text-xs font-bold text-slate-200 mt-1">ERP Reporting Time Cut</div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Engineered custom automated VBA &amp; ERP macros to generate standardized client workbooks, reducing reporting cycles from 4 hours down to 30 minutes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#07192A] border border-[#269AE2]/30 shadow-lg">
              <span className="text-xs font-semibold text-[#269AE2] block mb-1">Delivery Execution</span>
              <div className="text-3xl font-black text-white font-mono">100%</div>
              <div className="text-xs font-bold text-slate-200 mt-1">SLA Delivery Compliance</div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Maintained strict on-time delivery compliance and zero account churn across all strategic global OEM prototype and series shipments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
