import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, RotateCw, Wrench, AlertCircle, ArrowRight } from 'lucide-react';

interface ArcImperialPipelineProps {
  playValve?: () => void;
  playClick?: () => void;
}

export const ArcImperialPipeline: React.FC<ArcImperialPipelineProps> = ({ playValve, playClick }) => {
  // Connection states for 3 OEM fuel transmission lines
  const [connectedLines, setConnectedLines] = useState<{ [key: string]: boolean }>({
    hyzon: true,
    mitsubishi: true,
    kohler: true,
  });

  const [bleederTightened, setBleederTightened] = useState<boolean>(true);
  const [bleederClickCount, setBleederClickCount] = useState<number>(0);

  const lines = [
    {
      id: 'hyzon',
      client: 'Hyzon Motors US',
      application: 'Hydrogen & High-Pressure Fuel Conduit',
      spec: 'PA12 Multilayer Nylon · Zero Vapor Permeation · SAE J2044 Quick-Connect',
      impact: 'End-to-end commercial lifecycle ownership from plant audit to VP/GM signoff.',
      metric: '₹5Cr+ Expansion ARR Managed',
      color: '#1E5BFF',
    },
    {
      id: 'mitsubishi',
      client: 'Mitsubishi Logisnext US',
      application: 'Hydraulic & Fuel Return Assembly',
      spec: 'Reinforced Braided Synthetic Rubber · Burst Rating > 35 Bar',
      impact: 'High-volume international RFQ modeling and multi-plant SLA coordination.',
      metric: '100% SLA Delivery Compliance',
      color: '#00E47C',
    },
    {
      id: 'kohler',
      client: 'Kohler Power India',
      application: 'Precision Diesel Fuel Rail Transmission',
      spec: 'High-Temperature Heat-Shielded Conduit · Automated Flow Tracking',
      impact: 'Engineered automated VBA/ERP macros slashing reporting time from 4h to 30m.',
      metric: '87% ERP Reporting Time Cut',
      color: '#F59E0B',
    },
  ];

  const toggleConnection = (id: string) => {
    if (playValve) playValve();
    if (playClick) playClick();
    setConnectedLines((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleTorqueBleeder = () => {
    if (playValve) playValve();
    setBleederClickCount((prev) => prev + 1);
    setBleederTightened(true);
  };

  const allConnected = Object.values(connectedLines).every(Boolean);

  return (
    <section id="arc-pipeline" className="relative py-24 px-4 sm:px-6 bg-[#071A3D] text-slate-100 overflow-hidden">
      {/* Blueprint Drafting Grid Background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #60A5FA 1px, transparent 1px), linear-gradient(to bottom, #60A5FA 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Arc Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>Episode Arc 01 · Imperial Auto Industries</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Fuel Transmission Architecture
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Key Account Executive managing strategic OEM accounts. Engineering zero-permeation fuel transmission lines, hydraulic conduit assemblies, and commercial forecasting across ₹5+ Cr in expansion ARR.
            </p>
          </div>

          {/* Quick-Connect Status Badge */}
          <div className="flex items-center gap-3 bg-[#0A2558] p-3 rounded-2xl border border-blue-400/30 shrink-0">
            <div className="text-right">
              <span className="text-[11px] text-blue-200 block">Conduit Manifold Status</span>
              <strong className="text-xs text-white">
                {allConnected ? '3/3 Lines Sealed (10 Bar)' : 'Coupling Disconnected'}
              </strong>
            </div>
            <span
              className={`w-3.5 h-3.5 rounded-full ${
                allConnected ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-amber-400 animate-pulse'
              }`}
            />
          </div>
        </div>

        {/* Technical Blueprint Conduit Set-Piece */}
        <div className="rounded-2xl bg-[#09214D]/90 p-6 sm:p-8 border border-blue-400/30 shadow-2xl mb-12">
          {/* Blueprint Header Callouts */}
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-blue-400/20 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-blue-300 font-bold">SCHEMATIC: FLUID-TRANS-2024</span>
              <span className="text-blue-200/40">•</span>
              <span className="text-slate-300">Multilayer Nylon Fuel Conduits &amp; Quick Couplers</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <span className="font-mono">TOLERANCE: ±0.05mm</span>
              <button
                onClick={handleTorqueBleeder}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-600/50 hover:bg-blue-600 text-blue-200 text-[11px] font-semibold transition-colors"
                title="Click to calibrate SAE bleeder valve"
              >
                <Wrench className="w-3 h-3 text-blue-300" />
                <span>Torque Inspection Nut</span>
              </button>
            </div>
          </div>

          {/* Interactive Fuel Lines Coupling Manifold */}
          <div className="space-y-6">
            <div className="text-xs font-semibold text-blue-200 mb-2">
              Interactive OEM Quick-Connect Couplers (Click to Connect/Disconnect):
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {lines.map((line) => {
                const isConnected = connectedLines[line.id];
                return (
                  <div
                    key={line.id}
                    onClick={() => toggleConnection(line.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      isConnected
                        ? 'bg-[#0E2F6F] border-blue-400/60 shadow-lg'
                        : 'bg-[#071633] border-white/10 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-white">{line.client}</span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          isConnected
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        }`}
                      >
                        {isConnected ? 'Coupled · 10 Bar' : 'Disconnected'}
                      </span>
                    </div>

                    <div className="text-xs text-blue-300 font-semibold mb-1">
                      {line.application}
                    </div>

                    <div className="text-[11px] text-slate-300 font-mono mb-3 leading-tight">
                      {line.spec}
                    </div>

                    {/* Animated Fuel Flow Indicator */}
                    <div className="h-2 rounded-full bg-[#05132B] overflow-hidden relative mb-3">
                      {isConnected && (
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full"
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          style={{ width: '60%' }}
                        />
                      )}
                    </div>

                    <div className="text-[11px] text-slate-300">
                      <strong>Impact:</strong> {line.impact}
                    </div>

                    <div className="mt-3 pt-2 border-t border-blue-400/20 flex items-center justify-between text-xs">
                      <span className="text-blue-300 font-mono font-bold">{line.metric}</span>
                      <span className="text-[10px] text-slate-400">
                        {isConnected ? 'Click to Decouple' : 'Click to Snap Coupler'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Schematic Drawing of Braided Fuel Line & Pressure Distribution */}
          <div className="mt-8 pt-6 border-t border-blue-400/20">
            <div className="relative py-2">
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 800 80" fill="none">
                <defs>
                  {/* Braided Hose Pattern */}
                  <pattern id="braidedPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 0 0 L 10 10 M 10 0 L 0 10" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
                  </pattern>

                  {/* High-Pressure Fuel Gradient */}
                  <linearGradient id="fuelStream" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E5BFF" />
                    <stop offset="50%" stopColor="#00E47C" />
                    <stop offset="100%" stopColor="#38BDF8" />
                  </linearGradient>
                </defs>

                {/* Main Hose Outer Jacket */}
                <rect x="20" y="24" width="760" height="32" rx="6" fill="#0C2554" stroke="#60A5FA" strokeWidth="1.5" />
                <rect x="20" y="24" width="760" height="32" rx="6" fill="url(#braidedPattern)" />

                {/* Core Fuel Core */}
                <rect x="30" y="34" width="740" height="12" rx="3" fill="#05142E" />

                {/* Animated Pulsing Fluid Core if connected */}
                {allConnected && (
                  <motion.rect
                    x="30"
                    y="36"
                    width="740"
                    height="8"
                    rx="2"
                    fill="url(#fuelStream)"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}

                {/* Quick-Connect Coupler Hardware Flanges */}
                <rect x="60" y="18" width="16" height="44" rx="2" fill="#93C5FD" stroke="#1E3A8A" strokeWidth="1" />
                <rect x="280" y="18" width="16" height="44" rx="2" fill="#93C5FD" stroke="#1E3A8A" strokeWidth="1" />
                <rect x="520" y="18" width="16" height="44" rx="2" fill="#93C5FD" stroke="#1E3A8A" strokeWidth="1" />
                <rect x="740" y="18" width="16" height="44" rx="2" fill="#93C5FD" stroke="#1E3A8A" strokeWidth="1" />

                {/* Dimension Callouts */}
                <line x1="68" y1="72" x2="748" y2="72" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" />
                <text x="408" y="78" fill="#93C5FD" fontSize="10" fontFamily="monospace" textAnchor="middle">
                  SAE J2044 QUICK-CONNECT CONDUIT SPAN (ZERO PERMEATION BARRIER)
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* 3 Live Verified Pressure Gauges / Impact Instrumentation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#09214D] border border-blue-400/30">
            <span className="text-xs font-semibold text-blue-300 block mb-1">Commercial Velocity</span>
            <div className="text-3xl font-black text-white">₹5Cr+</div>
            <p className="text-xs text-slate-300 mt-1">Expansion ARR managed across Tier-1 OEM accounts</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#09214D] border border-blue-400/30">
            <span className="text-xs font-semibold text-blue-300 block mb-1">Process Automation</span>
            <div className="text-3xl font-black text-white">87%</div>
            <p className="text-xs text-slate-300 mt-1">Time reduction in repetitive ERP reporting (4 hrs → 30 mins)</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#09214D] border border-blue-400/30">
            <span className="text-xs font-semibold text-blue-300 block mb-1">Delivery Execution</span>
            <div className="text-3xl font-black text-white">100%</div>
            <p className="text-xs text-slate-300 mt-1">Strict SLA adherence on international prototype and series shipments</p>
          </div>
        </div>
      </div>
    </section>
  );
};
