import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  ShoppingCart,
  Boxes,
  Truck,
  Factory,
  Landmark,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';

interface ArcElevraSAPProps {
  playPulse?: () => void;
  playClick?: () => void;
}

type NodeKey = 'sales' | 'inventory' | 'purchasing' | 'production' | 'finance' | 'executive';

interface EnterpriseNode {
  id: NodeKey;
  name: string;
  shortName: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  dataPayload: string;
  beforeProblem: string;
  afterSolution: string;
}

export const ArcElevraSAP: React.FC<ArcElevraSAPProps> = ({ playPulse, playClick }) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const [activeCycle, setActiveCycle] = useState<number>(0);
  const [selectedNode, setSelectedNode] = useState<NodeKey>('sales');

  // 3 Enterprise Cycles
  const cycles = [
    {
      id: 0,
      name: 'Order-to-Cash',
      subtitle: 'Commercial Ingestion → Stock Allocation → GL Recognition',
      flow: ['sales', 'inventory', 'finance'] as NodeKey[],
      desc: 'Sales order locks inventory allocation and posts revenue to general ledger instantly.',
      payloadTag: 'SO #4892 · Locked',
    },
    {
      id: 1,
      name: 'Procure-to-Pay',
      subtitle: 'Automated MRP → Dock Receipt → AP Reconciliation',
      flow: ['purchasing', 'inventory', 'finance'] as NodeKey[],
      desc: 'Automated MRP triggers POs, dock scan updates bin stock, and AP invoice balances.',
      payloadTag: 'PO #1042 · Balanced',
    },
    {
      id: 2,
      name: 'Plan-to-Produce',
      subtitle: 'BOM Routing → Material Issue → Work-Center Costing',
      flow: ['inventory', 'production', 'finance'] as NodeKey[],
      desc: 'BOM requirements deduct raw stock, track scrap rate, and sync work-center costing.',
      payloadTag: 'WO #8821 · Scrap 0.2%',
    },
  ];

  // 6 Enterprise Modular Nodes
  const nodes: Record<NodeKey, EnterpriseNode> = {
    sales: {
      id: 'sales',
      name: 'Sales & Demand Ingestion',
      shortName: 'Sales CRM',
      category: 'Commercial Front',
      icon: ShoppingCart,
      x: 180,
      y: 110,
      dataPayload: 'Quotes · Orders · Customer Master',
      beforeProblem: 'Sales rep commits delivery dates based on outdated offline Excel sheets; stockouts occur constantly.',
      afterSolution: 'Every confirmed sales order instantly verifies live bin allocations, reserves inventory, and alerts fulfillment.',
    },
    inventory: {
      id: 'inventory',
      name: 'Inventory & Multi-Bin Warehouse',
      shortName: 'Warehouse',
      category: 'Fulfillment',
      icon: Boxes,
      x: 130,
      y: 290,
      dataPayload: 'Multi-Bin · Barcode Scans · Stock Valuation',
      beforeProblem: 'Warehouse operates on paper clipboards; inventory discrepancies take weeks of manual audits to discover.',
      afterSolution: 'Inbound receipts and dispatch barcode scans immediately recalculate landed costs and update stock books.',
    },
    purchasing: {
      id: 'purchasing',
      name: 'Procurement & Automated MRP',
      shortName: 'Procurement',
      category: 'Supply Chain',
      icon: Truck,
      x: 820,
      y: 110,
      dataPayload: 'Vendor Master · Auto-PO · Landed Cost',
      beforeProblem: 'Procurement team relies on gut-feel ordering, creating cash traps and emergency freight surcharges.',
      afterSolution: 'Automated MRP scans live order backlog and lead times to generate purchase orders at optimal tiered pricing.',
    },
    production: {
      id: 'production',
      name: 'Production & BOM Routing',
      shortName: 'Manufacturing',
      category: 'Operations',
      icon: Factory,
      x: 230,
      y: 440,
      dataPayload: 'Bill of Materials · Routing · Capacity',
      beforeProblem: 'Assembly line starts without knowing whether critical fasteners or raw materials have cleared customs.',
      afterSolution: 'Production orders automatically pull from warehouse stock and synchronize machine load in real time.',
    },
    finance: {
      id: 'finance',
      name: 'Finance & Real-Time General Ledger',
      shortName: 'Finance GL',
      category: 'Financial Core',
      icon: Landmark,
      x: 870,
      y: 290,
      dataPayload: 'Double-Entry GL · AR/AP · Auto-Reconciliation',
      beforeProblem: 'Finance endures a grueling 20-day month-end close chasing paper delivery challans and misplaced bills.',
      afterSolution: 'Every dispatch, purchase, and payment triggers automated double-entry journal entries instantaneously.',
    },
    executive: {
      id: 'executive',
      name: 'Executive BI & Control Analytics',
      shortName: 'Executive BI',
      category: 'Decision Hub',
      icon: BarChart3,
      x: 770,
      y: 440,
      dataPayload: 'Real-Time P&L · SKU Margin · Operational Velocity',
      beforeProblem: 'C-suite reviews 2-week-old historical Excel spreadsheets, steering strategy with lagging metrics.',
      afterSolution: 'Live dashboards broadcast gross margin by customer, inventory turn velocity, and real-time cash runway 24/7.',
    },
  };

  const selectCycle = (idx: number) => {
    setActiveCycle(idx);
    if (playPulse) playPulse();
    if (playClick) playClick();
  };

  const selectNode = (id: NodeKey) => {
    setSelectedNode(id);
    if (playClick) playClick();
  };

  const currentCycle = cycles[activeCycle];
  const currentNode = nodes[selectedNode];

  const coreCenterX = 500;
  const coreCenterY = 275;

  return (
    <section
      id="arc-sap"
      className="relative bg-[#EDE7FF] text-[#11110F] transition-colors duration-400 ease-out"
    >
      {/* Blueprint Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, #5B21B6 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Main Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-8 relative z-10">
        {/* 1. Eyebrow: company · dates in arc accent */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#5B21B6]" />
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#5B21B6] uppercase font-sans">
            Elevra Tech · July 2026 – present
          </span>
        </div>

        {/* 2. H2: REAL JOB TITLE */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#11110F] leading-[0.95]">
          Business Development Executive, Enterprise Solutions
        </h2>

        {/* 3. One-line summary */}
        <p className="text-base sm:text-xl text-[#534D66] font-normal max-w-3xl leading-relaxed mt-4 mb-8">
          SAP Business One prospecting and outreach automation, built around one idea: data enters once and every department stays in sync.
        </p>

        {/* 4. Stats: Show the Three Cycle Names (No invented numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 border-b border-[#5B21B6]/20">
          {cycles.map((c, i) => (
            <button
              key={c.id}
              onClick={() => selectCycle(i)}
              className={`text-left p-4 rounded-2xl transition-all cursor-pointer border ${
                activeCycle === i
                  ? 'bg-white border-[#5B21B6] shadow-md shadow-[#5B21B6]/10 scale-[1.02]'
                  : 'bg-white/60 border-[#5B21B6]/15 hover:bg-white hover:border-[#5B21B6]/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#5B21B6] uppercase">
                <span>Enterprise Cycle 0{i + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#5B21B6]" />
              </div>
              <div className="text-lg sm:text-xl font-heading font-black text-[#11110F] mt-1.5">
                {c.name}
              </div>
              <p className="text-xs text-[#534D66] mt-1 leading-relaxed">
                {c.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* 5. Signature Visual: Connected Enterprise Architecture Interactive Set Piece */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 relative z-10">
        <div className="relative w-full rounded-3xl bg-white border border-[#5B21B6]/20 p-4 sm:p-7 shadow-2xl overflow-hidden flex flex-col justify-between">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#5B21B6]/15 text-xs">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#5B21B6]" />
              <span className="font-heading font-bold text-[#11110F] text-sm">
                Connected Enterprise Architecture Map
              </span>
              <span className="text-[#5B21B6]/30 hidden sm:inline">|</span>
              <span className="text-[#534D66] hidden sm:inline font-mono">
                Active Cycle: <strong className="text-[#5B21B6]">{currentCycle.name}</strong>
              </span>
            </div>

            {/* Cycle Selector Pills */}
            <div className="flex items-center gap-1.5">
              {cycles.map((cycle, idx) => (
                <button
                  key={cycle.id}
                  onClick={() => selectCycle(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeCycle === idx
                      ? 'bg-[#5B21B6] text-white shadow-sm'
                      : 'bg-[#EDE7FF] text-[#5B21B6] hover:bg-[#EDE7FF]/80'
                  }`}
                >
                  {cycle.name}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Interactive Architecture Map */}
          <div className="relative w-full py-2 flex items-center justify-center overflow-x-auto">
            <svg
              viewBox="0 0 1000 550"
              className="w-full max-w-4xl h-auto min-w-[760px] select-none"
              style={{ filter: 'drop-shadow(0 8px 20px rgba(91, 33, 182, 0.08))' }}
            >
              <defs>
                {/* Central Radial Pulse Gradient */}
                <radialGradient id="sapCoreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#5B21B6" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#7C3AED" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                </radialGradient>

                {/* Packet Glow */}
                <linearGradient id="sapPacketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#5B21B6" />
                </linearGradient>

                {/* Central Core Metallic Badge */}
                <linearGradient id="sapHubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6D28D9" />
                  <stop offset="50%" stopColor="#5B21B6" />
                  <stop offset="100%" stopColor="#4C1D95" />
                </linearGradient>
              </defs>

              {/* Ambient Radial Core Field */}
              <circle cx={coreCenterX} cy={coreCenterY} r="160" fill="url(#sapCoreGlow)" />

              {/* Connecting Conduits from Central Core to each Department Node */}
              <g id="conduit-links">
                {Object.values(nodes).map((node) => {
                  const isInCycle = currentCycle.flow.includes(node.id);
                  const isSelected = selectedNode === node.id;

                  // Curved bezier pathway from center to node
                  const midX = (coreCenterX + node.x) / 2;
                  const midY = (coreCenterY + node.y) / 2;
                  const pathD = `M ${coreCenterX} ${coreCenterY} Q ${midX} ${midY} ${node.x} ${node.y}`;

                  return (
                    <g key={`conduit-${node.id}`}>
                      {/* Conduit Line */}
                      <path
                        d={pathD}
                        fill="none"
                        stroke={isInCycle ? '#7C3AED' : isSelected ? '#5B21B6' : '#DDD6FE'}
                        strokeWidth={isInCycle ? 3.5 : isSelected ? 3 : 1.5}
                        strokeDasharray={isInCycle ? 'none' : '4 4'}
                        opacity={isInCycle || isSelected ? 0.9 : 0.4}
                        className="transition-colors duration-300"
                      />

                      {/* Traveling Data Packet for Active Cycle Nodes */}
                      {isInCycle && (
                        <motion.circle
                          r="5.5"
                          fill="url(#sapPacketGrad)"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          animate={{
                            cx: [coreCenterX, midX, node.x, midX, coreCenterX],
                            cy: [coreCenterY, midY, node.y, midY, coreCenterY],
                          }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Inter-Department Peripheral Rings (Connecting adjacent departments) */}
                <path
                  d="M 180 110 Q 130 200 130 290 Q 180 370 230 440"
                  fill="none"
                  stroke="#DDD6FE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
                <path
                  d="M 820 110 Q 870 200 870 290 Q 820 370 770 440"
                  fill="none"
                  stroke="#DDD6FE"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity="0.3"
                />
              </g>

              {/* Central Core: SAP Business One Living Single-Source-of-Truth Hub */}
              <g id="central-hub">
                {/* Pulsing Ripple Rings */}
                <motion.circle
                  cx={coreCenterX}
                  cy={coreCenterY}
                  r="74"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="1.5"
                  animate={{ r: [65, 82, 65], opacity: [0.6, 0.1, 0.6] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Solid Hub Disc */}
                <circle
                  cx={coreCenterX}
                  cy={coreCenterY}
                  r="62"
                  fill="url(#sapHubGrad)"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  filter="drop-shadow(0 6px 16px rgba(91, 33, 182, 0.35))"
                />

                {/* Central Inner Disc */}
                <circle
                  cx={coreCenterX}
                  cy={coreCenterY}
                  r="48"
                  fill="#EDE7FF"
                />

                {/* Central Hub Typography */}
                <text
                  x={coreCenterX}
                  y={coreCenterY - 10}
                  textAnchor="middle"
                  fill="#5B21B6"
                  fontSize="10"
                  fontWeight="800"
                  fontFamily="sans-serif"
                  letterSpacing="1.2"
                >
                  ENTERPRISE CORE
                </text>
                <text
                  x={coreCenterX}
                  y={coreCenterY + 8}
                  textAnchor="middle"
                  fill="#11110F"
                  fontSize="14"
                  fontWeight="900"
                  fontFamily="sans-serif"
                >
                  SAP B1
                </text>
                <text
                  x={coreCenterX}
                  y={coreCenterY + 22}
                  textAnchor="middle"
                  fill="#5B21B6"
                  fontSize="8"
                  fontWeight="700"
                  fontFamily="monospace"
                >
                  SINGLE SOURCE
                </text>
              </g>

              {/* 6 Outer Department Nodes */}
              {Object.values(nodes).map((node) => {
                const isSelected = selectedNode === node.id;
                const isInCycle = currentCycle.flow.includes(node.id);

                return (
                  <g
                    key={node.id}
                    onClick={() => selectNode(node.id)}
                    className="cursor-pointer"
                  >
                    {/* Active Halo */}
                    {(isSelected || isInCycle) && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="52"
                        fill="none"
                        stroke={isSelected ? '#5B21B6' : '#7C3AED'}
                        strokeWidth="2"
                        opacity={isSelected ? 0.8 : 0.4}
                      />
                    )}

                    {/* Node Base Disc */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="42"
                      fill={isSelected ? '#5B21B6' : isInCycle ? '#F5F3FF' : '#FFFFFF'}
                      stroke={isSelected ? '#4C1D95' : isInCycle ? '#7C3AED' : '#C4B5FD'}
                      strokeWidth={isSelected ? '3' : '2'}
                      filter="drop-shadow(0 4px 8px rgba(0,0,0,0.06))"
                    />

                    {/* Node Text Label */}
                    <text
                      x={node.x}
                      y={node.y - 4}
                      textAnchor="middle"
                      fill={isSelected ? '#FFFFFF' : '#11110F'}
                      fontSize="11"
                      fontWeight="800"
                      fontFamily="sans-serif"
                    >
                      {node.shortName}
                    </text>

                    {/* Department Category Mini Label */}
                    <text
                      x={node.x}
                      y={node.y + 12}
                      textAnchor="middle"
                      fill={isSelected ? '#E9D5FF' : '#5B21B6'}
                      fontSize="8.5"
                      fontWeight="700"
                      fontFamily="sans-serif"
                      letterSpacing="0.4"
                    >
                      {node.category}
                    </text>

                    {/* Status Dot */}
                    <circle
                      cx={node.x + 28}
                      cy={node.y - 28}
                      r="5"
                      fill={isInCycle ? '#10B981' : '#94A3B8'}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Department Inspection Panel: Before vs After Transformation */}
          <div className="mt-2 p-4 rounded-2xl bg-[#EDE7FF]/60 border border-[#5B21B6]/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-[#5B21B6]/15 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5B21B6]" />
                <span className="font-heading font-black text-[#11110F] text-sm">
                  {currentNode.name}
                </span>
                <span className="text-[#5B21B6] font-mono text-[11px] font-bold">
                  ({currentNode.category})
                </span>
              </div>
              <div className="text-[#534D66] font-mono text-xs">
                Payload: <strong className="text-[#5B21B6]">{currentNode.dataPayload}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
              <div className="p-3 rounded-xl bg-white/80 border border-amber-300/60">
                <span className="font-bold uppercase tracking-wider text-amber-800 text-[10px] block mb-1">
                  Before: Disconnected Silos
                </span>
                <p className="text-[#334155]">{currentNode.beforeProblem}</p>
              </div>

              <div className="p-3 rounded-xl bg-white/90 border border-emerald-400/60 shadow-sm">
                <span className="font-bold uppercase tracking-wider text-emerald-800 text-[10px] block mb-1">
                  After: SAP B1 Automated Core
                </span>
                <p className="text-[#11110F] font-medium">{currentNode.afterSolution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. "The Problem I Solve vs Architecture I Deploy" Boxes (Shortened to 2 lines each) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white/70 border border-[#5B21B6]/20 flex items-start gap-3 shadow-sm">
            <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block font-heading">
                The Problem I Solve
              </span>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-snug">
                Siloed departments sell out-of-stock items, purchase on guesswork, and waste weeks manually reconciling offline spreadsheets.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/70 border border-[#5B21B6]/20 flex items-start gap-3 shadow-sm">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block font-heading">
                The Architecture I Deploy
              </span>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-snug">
                An interconnected ERP core where data enters once and automatically broadcasts real-time adjustments across all company operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 7. "Details" Accordion (Collapsed by Default, zero empty space gap) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 relative z-10">
        <div className="rounded-2xl bg-white border border-[#5B21B6]/25 overflow-hidden shadow-lg">
          <button
            onClick={() => {
              setDetailsOpen(!detailsOpen);
              if (playClick) playClick();
            }}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#EDE7FF]/40 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-[#5B21B6]" />
              <span className="font-heading font-bold text-base sm:text-lg text-[#11110F]">
                Enterprise Prospecting &amp; SAP Solution Engineering Deep Dive
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#5B21B6]">
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
                className="overflow-hidden border-t border-[#5B21B6]/15 px-6 py-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-[#475569]">
                  <div className="space-y-2">
                    <h4 className="font-heading font-bold text-[#11110F] text-base">
                      Enterprise Pipeline Prospecting
                    </h4>
                    <p className="leading-relaxed">
                      Identified mid-market manufacturing and wholesale enterprises struggling with legacy software fragmentation. Tailored business value cases around inventory shrinkage and reporting bottlenecks.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-heading font-bold text-[#11110F] text-base">
                      Solution Architecture Mapping
                    </h4>
                    <p className="leading-relaxed">
                      Mapped customer operational workflows against standard SAP Business One modules (Finance, Purchasing, Sales, Production, and MRP) to scope turnkey enterprise rollouts.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-heading font-bold text-[#11110F] text-base">
                      Outreach Automation Tech Stack
                    </h4>
                    <p className="leading-relaxed">
                      Leveraged modern automation workflows and tailored pitch decks to scale executive outbound touchpoints while maintaining high-touch personalization for C-level buyers.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
