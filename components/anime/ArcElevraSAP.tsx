import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';

interface ArcElevraSAPProps {
  playPulse?: () => void;
  playClick?: () => void;
}

export const ArcElevraSAP: React.FC<ArcElevraSAPProps> = ({ playPulse, playClick }) => {
  const [activeFrictionIndex, setActiveFrictionIndex] = useState<number>(0);

  const frictionCases = [
    {
      id: 'inventory',
      problem: 'Stockout Panic & Inventory Desynchronization',
      frictionBadge: 'Supply Chain Friction',
      symptom:
        'Sales teams selling out-of-stock SKUs while the warehouse operates on stale clipboards, creating emergency air-freight costs and delivery disputes.',
      solution:
        'Structured real-time multi-bin Item Master rules, automated minimum-stock reorder triggers, and synced production demand forecasting.',
      result: 'Zero ghost inventory · Automated stock replenishment alerts',
      stages: ['Quotation Created', 'Stock Reserved', 'Auto-Pick Slip', 'Dispatched', 'Reconciled'],
    },
    {
      id: 'quoting',
      problem: 'Multi-Day Quoting & Margin Leakage',
      frictionBadge: 'Commercial Bottleneck',
      symptom:
        'Sales reps taking 72+ hours calculating complex tiered volume discounts and pricing spreadsheets manually, losing high-intent enterprise accounts.',
      solution:
        'Engineered dynamic pre-approved margin matrices and 1-click Quotation-to-Order conversion rules with automated discount guardrails.',
      result: 'Accelerated Quote-to-Contract turnaround · Margin protection',
      stages: ['Inquiry Logged', 'Tiered Pricing Checked', 'Order Confirmed', 'Credit Approved', 'Billed'],
    },
    {
      id: 'dispatch',
      problem: 'Unbilled Dispatches & Days Sales Outstanding Lag',
      frictionBadge: 'Cash Flow Drag',
      symptom:
        'Shipments leaving the plant without synchronized invoicing, leading to 45-day invoice reconciliation disputes and cash flow blindspots.',
      solution:
        'Connected warehouse dispatch scans directly to automated A/R invoice generation and instant customer billing notifications.',
      result: 'Slashed billing lag · Immediate revenue recognition',
      stages: ['Order Released', 'Barcode Scanned', 'Instant Invoice', 'Payment Link', 'Bank Synced'],
    },
    {
      id: 'audit',
      problem: 'Disconnected Financial & Audit Blindness',
      frictionBadge: 'Executive Visibility Gap',
      symptom:
        'C-suite making strategic decisions from 2-week-old Excel dumps while finance dreads quarterly statutory audit reconciliations.',
      solution:
        'Unified chart of accounts with live banking statement integration, providing instant executive trial balance and profit margin audits.',
      result: 'Real-time executive P&L visibility · 100% audit readiness',
      stages: ['Journal Entry', 'Tax Calculated', 'Audit Trail Logged', 'Bank Verified', 'P&L Updated'],
    },
  ];

  const currentCase = frictionCases[activeFrictionIndex];

  return (
    <section id="arc-sap" className="relative py-24 px-4 sm:px-6 bg-[#FAFAFC] text-slate-900 transition-colors duration-500 overflow-hidden">
      {/* Subtle Lavender Background Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/70 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* World Transition Banner (White Page Flip) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 text-purple-700 font-bold text-xs tracking-wider uppercase mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
              <span>Episode Arc 03 · Elevra Tech</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              Enterprise Problem Solving Engine
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
              Business Development Executive diagnosing systemic operational friction in growing enterprises. Transforming chaotic spreadsheets into unified, automated data pipelines and expanding consultative account value.
            </p>
          </div>

          {/* Velocity Score Badge */}
          <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-purple-200 shadow-sm shrink-0">
            <div className="text-right">
              <span className="text-[11px] text-slate-500 block font-medium">Enterprise Throughput</span>
              <strong className="text-sm text-purple-800 font-mono font-bold">
                Synchronized Data Lifecycle
              </strong>
            </div>
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Problem Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {frictionCases.map((fCase, idx) => {
            const isSelected = activeFrictionIndex === idx;
            return (
              <button
                key={fCase.id}
                onClick={() => {
                  setActiveFrictionIndex(idx);
                  if (playPulse) playPulse();
                  if (playClick) playClick();
                }}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-white border-purple-600 shadow-md shadow-purple-600/10'
                    : 'bg-slate-100/70 border-slate-200 hover:bg-white text-slate-600'
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${
                  isSelected ? 'text-purple-700' : 'text-slate-400'
                }`}>
                  {fCase.frictionBadge}
                </span>
                <span className={`text-xs font-bold leading-snug block ${
                  isSelected ? 'text-slate-900' : 'text-slate-700'
                }`}>
                  {fCase.problem}
                </span>
              </button>
            );
          })}
        </div>

        {/* Problem vs Solution Interactive Architecture Card */}
        <div className="rounded-2xl bg-white p-6 sm:p-8 border border-purple-200/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8">
            {/* The Symptom (Chaos Before) */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-slate-800">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>The Friction Before Consulting</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {currentCase.symptom}
              </p>
            </div>

            {/* Transition Arrow Indicator */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center text-purple-600 py-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 mb-1">
                Consultative Shift
              </span>
              <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-purple-700" />
              </div>
            </div>

            {/* The Solution (Architected Execution) */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-purple-50/80 border border-purple-200 text-slate-800">
              <div className="flex items-center gap-2 text-purple-800 font-bold text-xs uppercase mb-2">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span>The Engineered Operational Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {currentCase.solution}
              </p>
              <div className="mt-3 pt-2 border-t border-purple-200/60 text-xs font-bold text-purple-800">
                {currentCase.result}
              </div>
            </div>
          </div>

          {/* Animated 5-Stage Synchronized Document Lifecycle */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-700 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span>Automated 5-Stage Transaction Flow (Quotation to Cash):</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {currentCase.stages.map((stage, sIdx) => (
                <div
                  key={stage}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center relative overflow-hidden"
                >
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-purple-600"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: sIdx * 0.12, duration: 0.3 }}
                  />
                  <div className="text-[10px] font-mono text-purple-700 font-bold mb-1">
                    STAGE 0{sIdx + 1}
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {stage}
                  </div>
                  <div className="mt-1 flex items-center justify-center text-[10px] text-emerald-700 font-semibold gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Synchronized</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
