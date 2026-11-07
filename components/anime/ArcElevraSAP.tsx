import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  ShoppingCart,
  Boxes,
  Truck,
  Factory,
  Landmark,
  BarChart3,
  ArrowRight,
  Layers,
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

type ManagementNodeId = 'sales' | 'inventory' | 'purchasing' | 'production' | 'finance' | 'executive';

interface ManagementNode {
  id: ManagementNodeId;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  x: number; // SVG center coordinate
  y: number;
  dataInputs: string;
  siloProblem: string;
  connectedSync: string;
  connectedTo: ManagementNodeId[];
}

export const ArcElevraSAP: React.FC<ArcElevraSAPProps> = ({ playPulse, playClick }) => {
  const [selectedNode, setSelectedNode] = useState<ManagementNodeId>('sales');
  const [activeCycle, setActiveCycle] = useState<number>(0);

  const managementNodes: Record<ManagementNodeId, ManagementNode> = {
    sales: {
      id: 'sales',
      name: 'Sales & Demand Ingestion',
      category: 'Commercial Front',
      icon: ShoppingCart,
      x: 210,
      y: 130,
      dataInputs: 'Customer Inquiries · Digital Quotes · Sales Orders · Pricing Matrices',
      siloProblem: 'Sales teams sell out-of-stock items using outdated offline spreadsheets.',
      connectedSync: 'Every confirmed order instantly checks real-time warehouse stock, locks allocation, and triggers purchase requisitions if thresholds are low.',
      connectedTo: ['inventory', 'finance'],
    },
    inventory: {
      id: 'inventory',
      name: 'Inventory & Warehouse',
      category: 'Fulfillment',
      icon: Boxes,
      x: 130,
      y: 330,
      dataInputs: 'Multi-Bin Locations · Barcode Scans · Batch/Serial Numbers · Stock Levels',
      siloProblem: 'Warehouse operates on paper clipboards; goods go missing or sit unsold.',
      connectedSync: 'Every inbound receipt or dispatch scan instantly updates the central inventory ledger, adjusts valuation, and alerts production.',
      connectedTo: ['sales', 'production', 'purchasing'],
    },
    purchasing: {
      id: 'purchasing',
      name: 'Procurement & Sourcing',
      category: 'Supply Chain',
      icon: Truck,
      x: 790,
      y: 130,
      dataInputs: 'Vendor Master · Purchase Orders · Landed Costs · Inbound Shipments',
      siloProblem: 'Purchasing guesses raw material needs, causing stockouts or cash traps.',
      connectedSync: 'Automated MRP triggers purchase orders based on live sales demand and lead-time analytics, locking vendor pricing.',
      connectedTo: ['inventory', 'finance'],
    },
    production: {
      id: 'production',
      name: 'Production & MRP',
      category: 'Operations',
      icon: Factory,
      x: 270,
      y: 490,
      dataInputs: 'Bill of Materials (BOM) · Work Centers · Capacity Rules · Scrap Rates',
      siloProblem: 'Shop floor schedules runs blindly without knowing raw material arrival dates.',
      connectedSync: 'Production orders automatically deduct required materials from warehouse inventory and sync work-center load in real time.',
      connectedTo: ['inventory', 'finance'],
    },
    finance: {
      id: 'finance',
      name: 'Finance & General Ledger',
      category: 'Financial Core',
      icon: Landmark,
      x: 870,
      y: 330,
      dataInputs: 'Double-Entry Ledger · Bank Feeds · Tax Invoices · Accounts Receivable/Payable',
      siloProblem: 'Finance waits 3 weeks for manual reconciliations and chases missing invoices.',
      connectedSync: 'Every single operational event (dispatch, receipt, order) automatically posts balanced journal entries to the general ledger with zero manual data entry.',
      connectedTo: ['sales', 'purchasing', 'executive'],
    },
    executive: {
      id: 'executive',
      name: 'Executive BI & Control',
      category: 'Decision Hub',
      icon: BarChart3,
      x: 730,
      y: 490,
      dataInputs: 'Real-Time P&L · Gross Margin by SKU · Cash Runway · Operational Velocity',
      siloProblem: 'Leadership makes critical business decisions looking at 2-week-old historical Excel reports.',
      connectedSync: 'Live executive dashboards pull continuous margin, order velocity, and cost analytics from the living core database 24/7.',
      connectedTo: ['finance', 'sales'],
    },
  };

  const cycles = [
    {
      id: 0,
      title: 'Customer Demand Ingestion Cycle',
      description:
        'Customer orders arrive ➔ Core checks live inventory ➔ Locks stock allocation ➔ Triggers auto-replenishment PO in Procurement ➔ Posts to General Ledger.',
      activePath: ['sales', 'inventory', 'purchasing', 'finance'],
    },
    {
      id: 1,
      title: 'Inbound Receipt & Real-Time Valuation',
      description:
        'Vendor delivery scanned at dock ➔ Core updates bin inventory ➔ Landed cost calculated ➔ General Ledger asset balance adjusted automatically.',
      activePath: ['purchasing', 'inventory', 'finance'],
    },
    {
      id: 2,
      title: 'Production & Shop-Floor Synchronization',
      description:
        'Manufacturing job released ➔ Core deducts raw material stock ➔ Work center capacity locked ➔ Scrap and labor variance synced with Finance.',
      activePath: ['production', 'inventory', 'finance', 'executive'],
    },
  ];

  const currentCycle = cycles[activeCycle];
  const currentNode = managementNodes[selectedNode];

  const handleSelectNode = (nodeId: ManagementNodeId) => {
    if (playClick) playClick();
    if (playPulse) playPulse();
    setSelectedNode(nodeId);
  };

  const handleSelectCycle = (cycleIdx: number) => {
    if (playClick) playClick();
    if (playPulse) playPulse();
    setActiveCycle(cycleIdx);
    setSelectedNode(cycles[cycleIdx].activePath[0] as ManagementNodeId);
  };

  // Center coordinate of the Mind Map Hub
  const coreCenterX = 500;
  const coreCenterY = 300;

  return (
    <section
      id="arc-sap"
      className="relative py-24 px-4 sm:px-6 bg-[#FAFAFC] text-slate-900 transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle lavender and indigo mesh ambient highlights */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-100/70 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-indigo-100/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* World Transition Banner (White Page Flip) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-purple-700 font-bold text-xs tracking-wider uppercase mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
              <span>Episode Arc 03 · Elevra Tech Consulting</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              The Connected Enterprise
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              How I solve enterprise friction: transforming disconnected department silos and chaotic spreadsheets into a unified, living data core where every management function syncs in real time.
            </p>
          </div>

          {/* Core Architecture Badge */}
          <div className="flex items-center gap-3.5 bg-white p-3.5 rounded-2xl border border-purple-200 shadow-sm shrink-0">
            <div className="text-right">
              <span className="text-[11px] text-purple-700 block font-mono font-bold">
                SYSTEM ARCHITECTURE
              </span>
              <strong className="text-xs text-slate-800">
                Central Single Source of Truth
              </strong>
            </div>
            <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              <Database className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Executive Friction vs Solution Mindset Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-amber-200/60 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                The Problem I Solve in Growing Businesses:
              </span>
              <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                Departments operate as isolated islands: Sales sells stock the warehouse doesn&apos;t have, Purchasing orders on guesswork, and Finance spends 20 days manually reconciling offline Excel sheets.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200/80 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-200/60 flex items-center justify-center text-purple-800 shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-800 block">
                The Architecture I Deploy:
              </span>
              <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                An interconnected enterprise core where data enters once and automatically broadcasts real-time adjustments to sales, inventory, procurement, and financials without human friction.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Mind Map Controls: Real-Time Cycles */}
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span>Trace Real-Time Data Cycles Through The Core:</span>
            </span>
            <span className="text-xs font-mono text-purple-700 font-bold hidden sm:inline">
              Click cycle or click any node on the map
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {cycles.map((cycle, idx) => {
              const isActive = activeCycle === idx;
              return (
                <button
                  key={cycle.id}
                  onClick={() => handleSelectCycle(idx)}
                  className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-purple-700 border-purple-800 text-white shadow-lg shadow-purple-600/20'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase ${
                        isActive ? 'text-purple-200' : 'text-purple-700'
                      }`}
                    >
                      Cycle 0{idx + 1}
                    </span>
                    <RefreshCw className={`w-3.5 h-3.5 ${isActive ? 'animate-spin' : 'opacity-40'}`} />
                  </div>
                  <div className="text-xs font-black truncate">{cycle.title}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* PRIMARY SET PIECE: The Interconnected Enterprise Mind Map */}
        <div className="rounded-3xl bg-white border border-purple-200/80 p-4 sm:p-8 shadow-xl mb-8 relative overflow-hidden">
          {/* Subtle Grid Accent in Canvas */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle, #8B5CF6 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* SVG Mind Map Visual Canvas */}
          <div className="relative w-full overflow-x-auto py-2">
            <svg
              viewBox="0 0 1000 620"
              className="w-full h-auto min-w-[760px] select-none"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(109, 40, 217, 0.05))' }}
            >
              <defs>
                {/* Central Core Glowing Radial Gradient */}
                <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#6D28D9" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#6D28D9" stopOpacity="0" />
                </radialGradient>

                {/* Node Active Glow */}
                <radialGradient id="activeNodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                </radialGradient>

                {/* Data Packet Particle Gradient */}
                <linearGradient id="packetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="100%" stopColor="#6D28D9" />
                </linearGradient>
              </defs>

              {/* ---------------------------------------------------- */}
              {/* CONNECTING CONDUIT PATHS: Hub to Nodes & Node to Node */}
              {/* ---------------------------------------------------- */}
              <g id="conduit-links" strokeWidth="2">
                {Object.values(managementNodes).map((node) => {
                  const isNodeInActiveCycle = currentCycle.activePath.includes(node.id);
                  const isSelected = selectedNode === node.id;

                  // Curved link from central core to each node
                  return (
                    <g key={`hub-to-${node.id}`}>
                      {/* Base link conduit */}
                      <path
                        d={`M ${coreCenterX} ${coreCenterY} Q ${(coreCenterX + node.x) / 2} ${
                          (coreCenterY + node.y) / 2
                        } ${node.x} ${node.y}`}
                        fill="none"
                        stroke={isSelected ? '#6D28D9' : isNodeInActiveCycle ? '#8B5CF6' : '#E2E8F0'}
                        strokeWidth={isSelected ? 3.5 : isNodeInActiveCycle ? 2.5 : 1.5}
                        strokeDasharray={isSelected || isNodeInActiveCycle ? 'none' : '4 4'}
                        className="transition-colors duration-300"
                      />

                      {/* Animated data packet traveling between hub and active nodes */}
                      {(isSelected || isNodeInActiveCycle) && (
                        <motion.circle
                          r="4.5"
                          fill="url(#packetGrad)"
                          animate={{
                            cx: [coreCenterX, (coreCenterX + node.x) / 2, node.x, (coreCenterX + node.x) / 2, coreCenterX],
                            cy: [coreCenterY, (coreCenterY + node.y) / 2, node.y, (coreCenterY + node.y) / 2, coreCenterY],
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

                {/* Cross-Department Peripheral Conduits (connecting adjacent nodes) */}
                <path
                  d="M 210 130 C 130 180, 100 260, 130 330"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 130 330 C 160 410, 200 460, 270 490"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 790 130 C 850 180, 880 250, 870 330"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 870 330 C 850 410, 800 460, 730 490"
                  fill="none"
                  stroke="#E2E8F0"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </g>

              {/* ---------------------------------------------------- */}
              {/* CENTRAL ENTERPRISE CORE (Single Source of Truth)     */}
              {/* ---------------------------------------------------- */}
              <g id="central-core-hub">
                {/* Large Background Pulsing Aura */}
                <circle cx={coreCenterX} cy={coreCenterY} r="140" fill="url(#coreGlow)" />

                {/* Outer Concentric Animated Ring */}
                <motion.circle
                  cx={coreCenterX}
                  cy={coreCenterY}
                  r="78"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  style={{ originX: `${coreCenterX}px`, originY: `${coreCenterY}px` }}
                />

                {/* Inner Core Disc */}
                <circle
                  cx={coreCenterX}
                  cy={coreCenterY}
                  r="62"
                  fill="#6D28D9"
                  stroke="#EDE9FE"
                  strokeWidth="3.5"
                  className="shadow-2xl"
                />

                {/* Core Icons and Typography */}
                <text
                  x={coreCenterX}
                  y={coreCenterY - 14}
                  fill="#E9D5FF"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                  letterSpacing="1.2"
                >
                  LIVING DATABASE
                </text>
                <text
                  x={coreCenterX}
                  y={coreCenterY + 4}
                  fill="#FFFFFF"
                  fontSize="13"
                  fontWeight="900"
                  textAnchor="middle"
                  letterSpacing="0.5"
                >
                  ENTERPRISE CORE
                </text>
                <text
                  x={coreCenterX}
                  y={coreCenterY + 18}
                  fill="#C4B5FD"
                  fontSize="9"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  Single Source of Truth
                </text>

                {/* Status Indicator */}
                <circle cx={coreCenterX - 34} cy={coreCenterY + 34} r="3" fill="#10B981" />
                <text
                  x={coreCenterX - 26}
                  y={coreCenterY + 37}
                  fill="#D1FAE5"
                  fontSize="8"
                  fontFamily="monospace"
                >
                  REAL-TIME SYNC
                </text>
              </g>

              {/* ---------------------------------------------------- */}
              {/* ORBITING MANAGEMENT FUNCTION NODES                   */}
              {/* ---------------------------------------------------- */}
              {Object.values(managementNodes).map((node) => {
                const isSelected = selectedNode === node.id;
                const isNodeInActiveCycle = currentCycle.activePath.includes(node.id);
                const IconComponent = node.icon;

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer"
                    onClick={() => handleSelectNode(node.id)}
                  >
                    {/* Active Halo when selected */}
                    {isSelected && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="64"
                        fill="url(#activeNodeGlow)"
                        className="animate-pulse"
                      />
                    )}

                    {/* Node Card Container */}
                    <rect
                      x={node.x - 95}
                      y={node.y - 45}
                      width="190"
                      height="90"
                      rx="16"
                      fill={isSelected ? '#6D28D9' : isNodeInActiveCycle ? '#FAF5FF' : '#FFFFFF'}
                      stroke={isSelected ? '#4C1D95' : isNodeInActiveCycle ? '#A855F7' : '#E2E8F0'}
                      strokeWidth={isSelected ? 2.5 : isNodeInActiveCycle ? 2 : 1.5}
                      filter="drop-shadow(0 4px 8px rgba(0,0,0,0.06))"
                      className="transition-colors duration-200"
                    />

                    {/* Node Category Pill */}
                    <rect
                      x={node.x - 85}
                      y={node.y - 37}
                      width="96"
                      height="16"
                      rx="4"
                      fill={isSelected ? '#5B21B6' : '#F3E8FF'}
                    />
                    <text
                      x={node.x - 79}
                      y={node.y - 25}
                      fill={isSelected ? '#DDD6FE' : '#7E22CE'}
                      fontSize="8"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      {node.category.toUpperCase()}
                    </text>

                    {/* Node Title */}
                    <text
                      x={node.x - 85}
                      y={node.y - 4}
                      fill={isSelected ? '#FFFFFF' : '#0F172A'}
                      fontSize="11"
                      fontWeight="bold"
                    >
                      {node.name}
                    </text>

                    {/* Short Data Subtext */}
                    <text
                      x={node.x - 85}
                      y={node.y + 14}
                      fill={isSelected ? '#E9D5FF' : '#64748B'}
                      fontSize="8.5"
                      fontFamily="sans-serif"
                    >
                      Data in: {node.dataInputs.split('·')[0]}
                    </text>

                    {/* Live Sync Status indicator */}
                    <circle
                      cx={node.x - 74}
                      cy={node.y + 30}
                      r="3.5"
                      fill={isSelected ? '#34D399' : '#10B981'}
                    />
                    <text
                      x={node.x - 64}
                      y={node.y + 33}
                      fill={isSelected ? '#D1FAE5' : '#059669'}
                      fontSize="8"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      CONNECTED · LIVE
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Active Cycle Explanation Banner */}
          <div className="mt-4 p-4 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-ping" />
              <div className="text-xs font-mono font-bold text-purple-900">
                ACTIVE DATA CYCLE: {currentCycle.title.toUpperCase()}
              </div>
            </div>
            <p className="text-xs text-slate-700 max-w-xl font-medium leading-relaxed">
              {currentCycle.description}
            </p>
          </div>
        </div>

        {/* Selected Management Node Detail Panel */}
        <div className="rounded-3xl bg-white border border-purple-200 p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                <currentNode.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-purple-700 block">
                  {currentNode.category} · Interconnected Node
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  {currentNode.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                ✓ Synced With Core
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Column 1: How Data Enters This Function */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] font-mono font-bold text-slate-500 uppercase block mb-1.5">
                How Data Enters the System:
              </span>
              <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                {currentNode.dataInputs}
              </p>
            </div>

            {/* Column 2: The Business Silo Problem Before */}
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-slate-800">
              <span className="text-[11px] font-mono font-bold text-rose-700 uppercase block mb-1.5">
                Disconnected Silo Problem:
              </span>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                {currentNode.siloProblem}
              </p>
            </div>

            {/* Column 3: How the Interconnected Core Solves It */}
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 text-slate-800">
              <span className="text-[11px] font-mono font-bold text-purple-700 uppercase block mb-1.5">
                How Data Syncs Across All Functions:
              </span>
              <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                {currentNode.connectedSync}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
