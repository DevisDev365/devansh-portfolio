import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge, CheckCircle2, Activity, Cpu, RotateCw } from 'lucide-react';

interface ArcImperialPipelineProps {
  playValve?: () => void;
  playClick?: () => void;
}

export const ArcImperialPipeline: React.FC<ArcImperialPipelineProps> = ({ playValve, playClick }) => {
  const [valveRotation, setValveRotation] = useState<number>(0);
  const [flowSpeed, setFlowSpeed] = useState<number>(1); // 1 = normal, 2 = high, 0.5 = low
  const [activeClient, setActiveClient] = useState<number>(0);

  const clients = [
    {
      id: 'hyzon',
      name: 'Hyzon Motors US',
      market: 'Export OEM (Hydrogen Commercial Vehicles)',
      mandate: 'End-to-end commercial lifecycle ownership from plant audit to VP/GM signoff.',
      deliverables: 'Custom Incoterm evaluation, production schedules, and automated KPI reporting.',
      metric: 'Export Account Retention & Zero SLA Breaches',
    },
    {
      id: 'mitsubishi',
      name: 'Mitsubishi Logisnext US',
      market: 'Export OEM (Material Handling Equipment)',
      mandate: 'High-volume international RFQ modeling and multi-plant SLA coordination.',
      deliverables: 'Data-driven pricing forecasting margin models with zero delivery churn.',
      metric: '+12% Pricing Margin Accuracy',
    },
    {
      id: 'kohler',
      name: 'Kohler Power India',
      market: 'Domestic Enterprise (Power Systems)',
      mandate: 'Strategic domestic account expansion and consultative product fit.',
      deliverables: '87% time reduction in repetitive ERP reporting via custom automated macros.',
      metric: '87% ERP Reporting Time Cut (4 hrs → 30 mins)',
    },
  ];

  const rotateValve = () => {
    if (playValve) playValve();
    setValveRotation((prev) => prev + 90);
    setFlowSpeed((prev) => (prev >= 2 ? 0.75 : prev + 0.5));
  };

  const current = clients[activeClient];

  return (
    <section id="arc-pipeline" className="relative py-24 px-4 sm:px-6 bg-[#080B10]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Arc Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-amber-400 font-semibold text-sm mb-2">
              Episode Arc 1 · Imperial Auto Industries
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              The Industrial Pipeline
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Key Account Executive managing strategic OEM accounts. Engineering automated data pipelines and commercial forecasting across ₹5+ Cr in expansion ARR.
            </p>
          </div>

          {/* Interactive Handwheel Valve Controller */}
          <div data-ui className="flex items-center gap-4 bg-[#0E131E] p-3 rounded-2xl border border-white/10 shrink-0">
            <button
              onClick={rotateValve}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
              title="Click or Drag to Rotate Hydraulic Valve"
            >
              {/* Rotating Mechanical Wheel SVG */}
              <motion.div
                animate={{ rotate: valveRotation }}
                transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                className="w-5 h-5 flex items-center justify-center"
              >
                <RotateCw className="w-4 h-4" />
              </motion.div>
              <span>Rotate Valve: {flowSpeed > 1.2 ? 'High Flow (100% SLA)' : 'Standard Flow'}</span>
            </button>
          </div>
        </div>

        {/* Industrial Pipeline Mechanical Set-Piece */}
        <div data-ui className="relative mb-16 rounded-2xl bg-[#0A0D15] p-6 sm:p-8 border border-white/10 overflow-hidden">
          {/* Blueprint Grid Lines & Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="text-sm font-bold text-slate-200">
                Hydraulic Conduit &amp; OEM Client Distribution Circuit
              </span>
            </div>
            <div className="text-xs text-slate-400">
              Velocity Factor: <strong className="text-amber-400 font-semibold">{flowSpeed.toFixed(1)}x</strong>
            </div>
          </div>

          {/* SVG Pipeline Canvas with Specular Highlights and Rivets */}
          <div className="relative py-6">
            <svg
              className="w-full h-36 sm:h-44 overflow-visible"
              viewBox="0 0 960 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Metallic Pipe Gradient */}
                <linearGradient id="pipeSteel" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="25%" stopColor="#94A3B8" />
                  <stop offset="50%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>

                {/* Copper Fluid Core Gradient */}
                <linearGradient id="fluidCopper" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="50%" stopColor="#D97706" />
                  <stop offset="100%" stopColor="#78350F" />
                </linearGradient>

                {/* Flange Collar Gradient */}
                <linearGradient id="flangeCollar" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#64748B" />
                  <stop offset="50%" stopColor="#1E293B" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>
              </defs>

              {/* Main Conduit Body */}
              <rect x="40" y="55" width="880" height="30" rx="4" fill="url(#pipeSteel)" />

              {/* Glowing Copper Core Fluid Channel */}
              <rect x="40" y="65" width="880" height="10" fill="url(#fluidCopper)" opacity="0.9" />

              {/* Fluid Motion Streamer */}
              <motion.line
                x1="40"
                y1="70"
                x2="920"
                y2="70"
                stroke="#FEF3C7"
                strokeWidth="4"
                strokeDasharray="20 40"
                strokeLinecap="round"
                animate={{
                  strokeDashoffset: [0, -180],
                }}
                transition={{
                  duration: 2 / flowSpeed,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* Specular Highlight along top edge */}
              <line x1="40" y1="56" x2="920" y2="56" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />

              {/* Bolted Flanges with Rivets at Junctions */}
              {[120, 360, 600, 840].map((fx) => (
                <g key={fx}>
                  <rect x={fx - 6} y="48" width="12" height="44" rx="2" fill="url(#flangeCollar)" stroke="#334155" strokeWidth="1.5" />
                  <circle cx={fx} cy="52" r="2" fill="#FEF3C7" />
                  <circle cx={fx} cy="68" r="2" fill="#FEF3C7" />
                  <circle cx={fx} cy="86" r="2" fill="#FEF3C7" />
                </g>
              ))}

              {/* Hydraulic Branch Hoses connecting to Clients */}
              {/* Terminal 1 Branch: x=240 */}
              <path d="M 240 85 L 240 140" stroke="url(#pipeSteel)" strokeWidth="14" strokeLinecap="round" />
              <path d="M 240 85 L 240 140" stroke="#F59E0B" strokeWidth="4" strokeDasharray="8 12" />

              {/* Terminal 2 Branch: x=480 */}
              <path d="M 480 85 L 480 140" stroke="url(#pipeSteel)" strokeWidth="14" strokeLinecap="round" />
              <path d="M 480 85 L 480 140" stroke="#F59E0B" strokeWidth="4" strokeDasharray="8 12" />

              {/* Terminal 3 Branch: x=720 */}
              <path d="M 720 85 L 720 140" stroke="url(#pipeSteel)" strokeWidth="14" strokeLinecap="round" />
              <path d="M 720 85 L 720 140" stroke="#F59E0B" strokeWidth="4" strokeDasharray="8 12" />

              {/* Steam puff animation at safety valve */}
              <motion.circle
                cx="360"
                cy="44"
                r="4"
                fill="#FFFFFF"
                animate={{
                  cy: [44, 20],
                  r: [3, 9],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            </svg>

            {/* Interactive Client Terminals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {clients.map((client, idx) => {
                const isActive = activeClient === idx;
                return (
                  <button
                    key={client.id}
                    onClick={() => {
                      setActiveClient(idx);
                      if (playClick) playClick();
                    }}
                    className={`text-left p-4 rounded-xl transition-colors border ${
                      isActive
                        ? 'border-amber-500/60 bg-amber-500/15 text-white'
                        : 'border-white/10 bg-[#0E131E] text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-amber-400">
                        {client.name.split(' ')[0]} Branch
                      </span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                    </div>
                    <div className="text-sm font-bold text-white mb-1">{client.name}</div>
                    <div className="text-xs text-slate-400 mb-2">{client.market}</div>
                    <div className="text-xs text-slate-200 leading-relaxed pt-2">
                      {client.mandate}
                    </div>
                    <div className="text-xs text-amber-300 font-semibold mt-2">
                      Key Result: {client.metric}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3 Physical Dial Pressure Gauges with Spring-Overshoot Needles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gauge 1: ₹5Cr+ Expansion ARR */}
          <div data-ui className="p-6 rounded-2xl bg-[#0A0D15] border border-white/10 flex flex-col items-center text-center">
            <div className="relative w-28 h-28 mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {/* Dial Frame */}
                <circle cx="50" cy="50" r="44" fill="#0B0F17" stroke="#334155" strokeWidth="4" />
                <path d="M 20 75 A 36 36 0 1 1 80 75" fill="none" stroke="#F59E0B" strokeWidth="5" strokeDasharray="140" strokeDashoffset="20" strokeLinecap="round" />
                {/* Needle with spring overshoot */}
                <motion.line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="20"
                  stroke="#FEF3C7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{ rotate: [ -45, 65, 55 ] }}
                  transition={{ type: 'spring', stiffness: 90, damping: 8, delay: 0.2 }}
                  style={{ originX: '50px', originY: '50px' }}
                />
                <circle cx="50" cy="50" r="5" fill="#F59E0B" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-amber-400 mb-1">Commercial Pipeline ARR</span>
            <div className="text-3xl font-black text-white">₹5 Cr+</div>
            <p className="mt-1 text-xs text-slate-400">Expansion ARR generated across key OEM accounts</p>
          </div>

          {/* Gauge 2: 87% ERP Reporting Time Cut */}
          <div data-ui className="p-6 rounded-2xl bg-[#0A0D15] border border-white/10 flex flex-col items-center text-center">
            <div className="relative w-28 h-28 mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="44" fill="#0B0F17" stroke="#334155" strokeWidth="4" />
                <path d="M 20 75 A 36 36 0 1 1 80 75" fill="none" stroke="#F59E0B" strokeWidth="5" strokeDasharray="140" strokeDashoffset="18" strokeLinecap="round" />
                <motion.line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="20"
                  stroke="#FEF3C7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{ rotate: [ -45, 80, 72 ] }}
                  transition={{ type: 'spring', stiffness: 90, damping: 8, delay: 0.3 }}
                  style={{ originX: '50px', originY: '50px' }}
                />
                <circle cx="50" cy="50" r="5" fill="#F59E0B" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-amber-400 mb-1">Process Cycle Optimization</span>
            <div className="text-3xl font-black text-white">87%</div>
            <p className="mt-1 text-xs text-slate-400">Reporting time cut from 4 hrs to 30 mins via custom macros</p>
          </div>

          {/* Gauge 3: 100% SLA Compliance */}
          <div data-ui className="p-6 rounded-2xl bg-[#0A0D15] border border-white/10 flex flex-col items-center text-center">
            <div className="relative w-28 h-28 mb-4">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="44" fill="#0B0F17" stroke="#334155" strokeWidth="4" />
                <path d="M 20 75 A 36 36 0 1 1 80 75" fill="none" stroke="#F59E0B" strokeWidth="5" strokeDasharray="140" strokeDashoffset="0" strokeLinecap="round" />
                <motion.line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="20"
                  stroke="#FEF3C7"
                  strokeWidth="3"
                  strokeLinecap="round"
                  animate={{ rotate: [ -45, 95, 88 ] }}
                  transition={{ type: 'spring', stiffness: 90, damping: 8, delay: 0.4 }}
                  style={{ originX: '50px', originY: '50px' }}
                />
                <circle cx="50" cy="50" r="5" fill="#F59E0B" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-amber-400 mb-1">Contract Compliance</span>
            <div className="text-3xl font-black text-white">100% SLA</div>
            <p className="mt-1 text-xs text-slate-400">Zero delivery churn across global OEM shipments</p>
          </div>
        </div>
      </div>
    </section>
  );
};
