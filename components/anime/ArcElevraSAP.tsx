import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, CheckCircle2, ShieldCheck, ArrowRight, Layers } from 'lucide-react';

interface ArcElevraSAPProps {
  playPulse?: () => void;
  playClick?: () => void;
}

export const ArcElevraSAP: React.FC<ArcElevraSAPProps> = ({ playPulse, playClick }) => {
  const [selectedFriction, setSelectedFriction] = useState<number>(0);
  const [isOrbitPaused, setIsOrbitPaused] = useState<boolean>(false);
  const [orbitAngle, setOrbitAngle] = useState<number>(0);

  // Strictly authentic SAP Business One (SAP B1) Modules
  const b1Modules = [
    { id: 'sales', name: 'Sales – A/R', code: 'A/R', desc: 'Quotation to Invoice cycle' },
    { id: 'purchasing', name: 'Purchasing – A/P', code: 'A/P', desc: 'Procurement & vendor RFQ' },
    { id: 'inventory', name: 'Inventory', code: 'INV', desc: 'Warehouse & valuation' },
    { id: 'mrp', name: 'Production & MRP', code: 'MRP', desc: 'BOM & capacity planning' },
    { id: 'financials', name: 'Financials', code: 'FIN', desc: 'General ledger & journal' },
    { id: 'banking', name: 'Banking', code: 'BNK', desc: 'Payments & reconciliations' },
    { id: 'crm', name: 'CRM', code: 'CRM', desc: 'Pipeline & campaign tracking' },
    { id: 'service', name: 'Service & Add-ons', code: 'SRV', desc: 'SLA contracts & extensions' },
  ];

  // Enterprise Friction Diagnostics mapping to SAP B1 Solutions
  const frictionScenarios = [
    {
      id: 'inventory',
      title: 'Inventory Mismatch & Warehouse Stockouts',
      category: 'Supply Chain Bottleneck',
      activeModules: ['inventory', 'mrp'],
      diagnosis:
        'Discrepancy between actual shop-floor stock and recorded orders leading to delayed production fulfillment and emergency freight expenses.',
      b1Resolution:
        'Architected structured Item Master Data and automated Bill of Materials (BOM) tracking in SAP B1 with real-time minimum stock alerts, eliminating stockout friction.',
      impactMetric: 'Order Fulfillment Reliability & Real-Time Reorder Automation',
    },
    {
      id: 'quoting',
      title: 'Slow Quoting Cycles & RFQ Bottlenecks',
      category: 'Sales Pipeline Friction',
      activeModules: ['sales', 'purchasing'],
      diagnosis:
        'Sales teams spending 3+ days calculating multi-tier margins manually across complex enterprise product catalogs, losing deals to competitors.',
      b1Resolution:
        'Implemented standardized Sales Quotation → Sales Order conversion pipelines with pre-configured price lists and direct vendor purchase order links in SAP B1.',
      impactMetric: 'Accelerated Client Time-to-Value (TTV)',
    },
    {
      id: 'churn',
      title: 'Enterprise Account Churn & Unmonitored Health',
      category: 'Client Retention Risk',
      activeModules: ['crm', 'service'],
      diagnosis:
        'Lack of unified customer lifecycle tracking, leading to surprise escalations and renewals falling through without advance warning.',
      b1Resolution:
        'Instituted Account Health Scoring and regular Quarterly Business Review (QBR) cadences, mapping consultative proprietary add-ons to expand lifetime value (LTV).',
      impactMetric: 'Account Health Scoring & Proactive Renewal Management',
    },
    {
      id: 'reporting',
      title: 'Disconnected Financial & Cash Reconciliations',
      category: 'Executive Visibility Gap',
      activeModules: ['financials', 'banking'],
      diagnosis:
        'C-suite leaders operating on fragmented, week-old spreadsheet dumps rather than unified real-time cash flow and profitability statements.',
      b1Resolution:
        'Streamlined Chart of Accounts and banking statement reconciliation within SAP Business One, delivering instant executive trial balances and margin audits.',
      impactMetric: 'C-Suite Executive Alignment on Core ERP Add-ons',
    },
  ];

  const currentFriction = frictionScenarios[selectedFriction];

  // Orbital rotation loop
  useEffect(() => {
    if (isOrbitPaused) return;
    const interval = setInterval(() => {
      setOrbitAngle((prev) => (prev + 0.5) % 360);
    }, 40);
    return () => clearInterval(interval);
  }, [isOrbitPaused]);

  const handleSelectFriction = (idx: number) => {
    setSelectedFriction(idx);
    if (playPulse) playPulse();
    if (playClick) playClick();
  };

  return (
    <section id="arc-sap" className="relative py-24 px-4 sm:px-6 bg-[#080B12]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Arc Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-blue-400 font-semibold text-sm mb-2">
              Episode Arc 3 · Elevra Tech
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              The SAP B1 Orbital Hub
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Business Development Executive consulting enterprise clients on SAP Business One (SAP B1) implementations, requirement mapping, and consultative revenue expansion.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#0E1424] px-4 py-2 rounded-xl text-xs font-semibold text-blue-300 shrink-0">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Enterprise Account CS &amp; Retention</span>
          </div>
        </div>

        {/* Central SAP Business One Orbital Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Orbital Module Interactive Map */}
          <div
            data-ui
            className="lg:col-span-5 rounded-2xl bg-[#0B101C] p-6 border border-white/10"
            onMouseEnter={() => setIsOrbitPaused(true)}
            onMouseLeave={() => setIsOrbitPaused(false)}
          >
            <div className="flex items-center justify-between pb-3 mb-6">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-bold text-white">
                  SAP Business One Core
                </span>
              </div>
              <span className="text-xs text-slate-400">
                {isOrbitPaused ? 'Orbit Paused on Hover' : 'Rotating Orbital Mesh'}
              </span>
            </div>

            {/* Authentic SAP B1 Modules Grid with Link Pulses */}
            <div className="grid grid-cols-2 gap-2.5">
              {b1Modules.map((mod) => {
                const isLit = currentFriction.activeModules.includes(mod.id);
                return (
                  <motion.div
                    key={mod.id}
                    animate={{
                      scale: isLit ? 1.03 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className={`p-3.5 rounded-xl transition-colors ${
                      isLit
                        ? 'bg-blue-500/25 border border-blue-400/60'
                        : 'bg-[#0E1424] text-slate-300 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-bold ${isLit ? 'text-blue-300' : 'text-slate-400'}`}>
                        {mod.code}
                      </span>
                      {isLit && <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />}
                    </div>
                    <div className={`text-sm font-bold leading-tight ${isLit ? 'text-white' : 'text-slate-200'}`}>
                      {mod.name}
                    </div>
                    <div className="text-xs text-slate-400 leading-tight mt-1 truncate">
                      {mod.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Enterprise Friction Diagnostics */}
          <div data-ui className="lg:col-span-7 rounded-2xl bg-[#0B101C] p-6 sm:p-8 border border-white/10">
            <div className="text-xs font-semibold text-blue-400 mb-1">
              Interactive Diagnostic Engine
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Select an Enterprise Bottleneck to Inspect Solution
            </h3>

            {/* Friction Picker Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {frictionScenarios.map((scenario, idx) => {
                const isActive = selectedFriction === idx;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => handleSelectFriction(idx)}
                    className={`text-left p-3.5 rounded-xl text-xs font-semibold transition-colors ${
                      isActive
                        ? 'bg-blue-500/20 text-white border border-blue-500/40'
                        : 'bg-[#0E1424] text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    <div className="text-xs text-blue-400 font-medium mb-0.5">
                      {scenario.category}
                    </div>
                    <div className="truncate font-bold text-sm text-slate-200">{scenario.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Diagnostic Resolution Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFriction.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 rounded-xl bg-[#080B12] p-5"
              >
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-1">
                    Observed Enterprise Friction:
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "{currentFriction.diagnosis}"
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-blue-400 block mb-1">
                    Devansh's SAP B1 Consulting Solution:
                  </span>
                  <p className="text-sm text-white leading-relaxed font-medium">
                    {currentFriction.b1Resolution}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Validated Outcome: {currentFriction.impactMetric}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Elevra Tech Proof Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#0B101C]">
            <span className="text-xs font-semibold text-blue-400 block mb-1">Client Lifecycle</span>
            <div className="text-lg font-bold text-white">Account Health Scoring</div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Active lifecycle monitoring and structured QBR cadences for enterprise clients.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0B101C]">
            <span className="text-xs font-semibold text-blue-400 block mb-1">Revenue Expansion</span>
            <div className="text-lg font-bold text-white">Proprietary Add-on Upselling</div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Cross-selling custom extensions to expand account footprint and lifetime value (LTV).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0B101C]">
            <span className="text-xs font-semibold text-blue-400 block mb-1">Executive Buy-In</span>
            <div className="text-lg font-bold text-white">C-Suite Alignment</div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Directly translating technical ERP workflows into measurable commercial ROI for executives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
