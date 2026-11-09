import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart,
  Boxes,
  Truck,
  Factory,
  FileCheck2,
  CheckCircle2,
  AlertCircle,
  Play,
  RotateCcw,
  Layers,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Landmark,
  Barcode,
} from 'lucide-react';

interface ArcElevraSAPProps {
  playPulse?: () => void;
  playClick?: () => void;
}

interface WorkflowStage {
  id: number;
  stageCode: string;
  moduleName: string;
  department: string;
  actionTitle: string;
  statusBadge: string;
  statusType: 'success' | 'warning' | 'info' | 'primary';
  icon: React.ComponentType<{ className?: string }>;
  keyMetrics: { label: string; value: string; highlight?: boolean }[];
  sapDocument: {
    docType: string;
    docNumber: string;
    party: string;
    financials: string;
    timestamp: string;
    details: string;
  };
  beforeSiloFriction: string;
  afterConnectedImpact: string;
}

export const ArcElevraSAP: React.FC<ArcElevraSAPProps> = ({ playPulse, playClick }) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 6 Lifecycle Stages of an Authentic Manufacturing ERP Pipeline
  const lifecycleStages: WorkflowStage[] = [
    {
      id: 0,
      stageCode: 'STEP 01',
      moduleName: 'Sales & Demand Intake',
      department: 'Commercial CRM',
      actionTitle: 'Customer Order Confirmation',
      statusBadge: 'ORDER CONFIRMED',
      statusType: 'info',
      icon: ShoppingCart,
      keyMetrics: [
        { label: 'Order ID', value: 'SO-4092' },
        { label: 'Customer', value: 'Precision Auto OEM' },
        { label: 'Requirement', value: '100 Units', highlight: true },
        { label: 'Contract Value', value: '₹4,50,000' },
      ],
      sapDocument: {
        docType: 'Sales Order (ORDR)',
        docNumber: 'SO-2026-4092',
        party: 'Precision Auto Components Ltd (GSTIN: 07AAACP1234M1Z5)',
        financials: 'Total: ₹4,50,000 (+18% GST) · Net: ₹5,31,000',
        timestamp: '09:15:22 IST · Automated EDI Ingestion',
        details: '100 Units of High-Pressure Hydraulic Fuel Line Assemblies (Part #HT-LINE-01). Payment Terms: Net 30.',
      },
      beforeSiloFriction:
        'Sales rep promises delivery date on a paper quote without knowing factory inventory. Out-of-stock items sold routinely.',
      afterConnectedImpact:
        'Confirmed digital sales order instantly locks pricing matrix, checks inventory allocation, and triggers downstream supply chain in 14ms.',
    },
    {
      id: 1,
      stageCode: 'STEP 02',
      moduleName: 'Inventory & Allocation',
      department: 'Warehouse Logistics',
      actionTitle: 'Multi-Bin Stock Evaluation',
      statusBadge: 'SHORTFALL FLAGGED: -60',
      statusType: 'warning',
      icon: Boxes,
      keyMetrics: [
        { label: 'Bin Location', value: 'WH-A/Rack-04' },
        { label: 'Stock On-Hand', value: '40 Units' },
        { label: 'Allocated', value: '40 Units' },
        { label: 'Net Shortfall', value: '-60 Units', highlight: true },
      ],
      sapDocument: {
        docType: 'Inventory Allocation Ledger (OITW)',
        docNumber: 'ALLOC-8841',
        party: 'Main Assembly Warehouse (Faridabad Facility)',
        financials: '40 Units Reserved (Valuation: ₹1,20,000) · 60 Units Unmet',
        timestamp: '09:15:24 IST · Live Bin Balance Checked',
        details: 'Stock query confirms only 40 finished units in bin WH-A/R04. System automatically routes 60-unit shortfall to MRP engine.',
      },
      beforeSiloFriction:
        'Warehouse uses physical clipboards. Discrepancies between physical stock and Excel files take weeks of manual counting to uncover.',
      afterConnectedImpact:
        'Live bin tracking reserves 40 units immediately and pushes exact component shortfall into automated MRP without human delay.',
    },
    {
      id: 2,
      stageCode: 'STEP 03',
      moduleName: 'Automated MRP & Sourcing',
      department: 'Procurement',
      actionTitle: 'Auto Purchase Order Issuance',
      statusBadge: 'AUTO-PO ISSUED',
      statusType: 'primary',
      icon: Truck,
      keyMetrics: [
        { label: 'PO Number', value: 'PO-8821' },
        { label: 'Supplier', value: 'Jindal Steel & Zenith' },
        { label: 'Raw Materials', value: 'Steel + EPDM Hose', highlight: true },
        { label: 'PO Value', value: '₹1,85,000' },
      ],
      sapDocument: {
        docType: 'Purchase Order (OPOR)',
        docNumber: 'PO-2026-8821',
        party: 'Zenith Rubber & Jindal Seamless Tubes',
        financials: 'Total PO Value: ₹1,85,000 · Tier-1 Contract Pricing',
        timestamp: '09:15:30 IST · MRP Engine Auto-Generated',
        details: 'BOM explosion orders 120m seamless steel tubing + 100m vulcanized EPDM elastomer hose + 200 torque worm-clamps.',
      },
      beforeSiloFriction:
        'Procurement officer guesses raw material quantities every Monday, risking severe factory stockouts or tying up cash in dead stock.',
      afterConnectedImpact:
        'Material Requirement Planning auto-explodes the Bill of Materials (BOM), locking contracted vendor volume discounts in seconds.',
    },
    {
      id: 3,
      stageCode: 'STEP 04',
      moduleName: 'Gate Entry & QC Receiving',
      department: 'Inward Quality & Receiving',
      actionTitle: 'Barcode Scan & Lab Clearance',
      statusBadge: 'QC CLEARED · 100% PASS',
      statusType: 'success',
      icon: FileCheck2,
      keyMetrics: [
        { label: 'Gate Entry ID', value: 'GE-4019' },
        { label: 'Dock Number', value: 'Inbound Dock 02' },
        { label: 'QC Test', value: 'Tensile & Burst: PASS', highlight: true },
        { label: 'Status', value: 'Ready for Assembly' },
      ],
      sapDocument: {
        docType: 'Goods Receipt PO (OPDN)',
        docNumber: 'GRPO-5510',
        party: 'Security Gate 01 & QA Metallurgy Lab',
        financials: 'Inward Stock Value: ₹1,85,000 Verified Against PO',
        timestamp: 'Next Day 08:30 IST · Inbound Scan Complete',
        details: 'Truck arrives; security scans delivery barcode. QA performs hydrostatic proof pressure & wall-thickness test. GRPO posted.',
      },
      beforeSiloFriction:
        'Inbound materials sit unchecked at security gate. Shop floor has no idea components arrived and halts scheduled production runs.',
      afterConnectedImpact:
        'Barcode scan at factory gate generates instant GRPO, updates raw inventory valuation, and triggers immediate green-light to assembly.',
    },
    {
      id: 4,
      stageCode: 'STEP 05',
      moduleName: 'Production & Assembly',
      department: 'Shop Floor Manufacturing',
      actionTitle: 'Work Order Execution & Testing',
      statusBadge: '100 UNITS READY',
      statusType: 'success',
      icon: Factory,
      keyMetrics: [
        { label: 'Work Order', value: 'WO-7712' },
        { label: 'Routing', value: 'Bending → Crimping' },
        { label: 'Pressure Test', value: '10.0 Bar Hermetic', highlight: true },
        { label: 'Total Ready', value: '100 / 100 Units' },
      ],
      sapDocument: {
        docType: 'Production Order (OWOR)',
        docNumber: 'WO-2026-7712',
        party: 'Assembly Cell 03 & Hydrostatic Test Bench',
        financials: 'Assembly Cost Absorbed: ₹32,000 · Scrap: 0.2% (Nominal)',
        timestamp: 'Day 2 14:45 IST · Final Inspection Handover',
        details: '60 additional assemblies completed, joined with 40 reserved units. 100 finished assemblies staged at outbound bay.',
      },
      beforeSiloFriction:
        'Shop floor runs jobs blindly without real-time costing, scrap tracking, or synchronization with customer delivery deadlines.',
      afterConnectedImpact:
        'BOM deductions happen in real time; completed work order auto-replenishes finished goods inventory and notifies dispatch.',
    },
    {
      id: 5,
      stageCode: 'STEP 06',
      moduleName: 'Dispatch & General Ledger',
      department: 'Finance & Logistics',
      actionTitle: 'E-Way Bill & GL Posting',
      statusBadge: 'DISPATCHED & GL BALANCED',
      statusType: 'success',
      icon: CheckCircle2,
      keyMetrics: [
        { label: 'Invoice No.', value: 'INV-9024' },
        { label: 'E-Way Bill', value: 'EWB-88102941' },
        { label: 'GL Recognition', value: '₹5,31,000 Balanced', highlight: true },
        { label: 'Execution Time', value: 'Zero Manual Entry' },
      ],
      sapDocument: {
        docType: 'A/R Tax Invoice (OINV)',
        docNumber: 'INV-2026-9024',
        party: 'Precision Auto OEM · Vehicle #HR-55-AJ-1092',
        financials: 'Dr Accounts Receivable: ₹5,31,000 | Cr Revenue: ₹4,50,000 | Cr GST: ₹81,000',
        timestamp: 'Day 2 16:30 IST · Delivery Outbound',
        details: 'E-Way bill generated via NIC portal API. Double-entry journal entry posted automatically to General Ledger. Cycle closed.',
      },
      beforeSiloFriction:
        'Finance waits 20 days for manual delivery challans, reconciles invoices on spreadsheets, and delays revenue recognition.',
      afterConnectedImpact:
        'Dispatch automatically triggers statutory e-Way bill and posts balanced journal entries to the financial ledger simultaneously.',
    },
  ];

  // Auto-play simulation loop
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= lifecycleStages.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2200);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, lifecycleStages.length]);

  const toggleSimulation = () => {
    if (playPulse) playPulse();
    if (playClick) playClick();
    if (activeStep >= lifecycleStages.length - 1) {
      setActiveStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const jumpToStep = (index: number) => {
    if (playClick) playClick();
    setIsPlaying(false);
    setActiveStep(index);
  };

  const currentStage = lifecycleStages[activeStep];

  return (
    <section
      id="arc-sap"
      className="relative bg-[#EDE7FF] text-[#11110F] transition-colors duration-400 ease-out"
    >
      {/* Subtle blueprint dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #5B21B6 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Main Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-8 relative z-10">
        {/* 1. Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#5B21B6]" />
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#5B21B6] uppercase font-sans">
            Elevra Tech · July 2026 – present
          </span>
        </div>

        {/* 2. H2: REAL JOB TITLE */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-[#11110F] leading-snug">
          Business Development Executive, Enterprise Solutions
        </h2>

        {/* 3. One-line summary */}
        <p className="text-base sm:text-lg text-[#534D66] font-normal max-w-3xl leading-relaxed mt-3 mb-6">
          SAP Business One prospecting and outreach automation, built around one idea: data enters once and every department stays in sync.
        </p>
      </div>

      {/* 5. SIGNATURE VISUAL: n8n-Style Interconnected ERP Lifecycle Canvas */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 relative z-10">
        <div className="relative w-full rounded-3xl bg-[#0F0E17] border border-[#5B21B6]/40 p-4 sm:p-7 shadow-2xl overflow-hidden text-white">
          {/* Canvas Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-heading font-bold text-white text-sm">
                SAP Business One · Live Lifecycle Simulation
              </span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="text-white/70 hidden sm:inline font-mono">
                Order SO-4092 Execution Pipeline
              </span>
            </div>

            {/* Simulation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleSimulation}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs font-bold transition-transform active:scale-95 cursor-pointer shadow-md"
              >
                <Play className={`w-3.5 h-3.5 ${isPlaying ? 'fill-white' : ''}`} />
                <span>{isPlaying ? 'Pause Simulation' : activeStep >= 5 ? 'Replay Pipeline' : 'Run Live Simulation'}</span>
              </button>

              <button
                onClick={() => jumpToStep(0)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white/80 text-xs font-medium transition-colors cursor-pointer"
                title="Reset to Step 1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            </div>
          </div>

          {/* Stepper Node Chain (Horizontal n8n-style Node Flow) */}
          <div className="py-6 overflow-x-auto">
            <div className="flex items-stretch gap-3 min-w-[880px] pb-2">
              {lifecycleStages.map((stage, idx) => {
                const isActive = activeStep === idx;
                const isCompleted = activeStep > idx;
                const IconComponent = stage.icon;

                return (
                  <div
                    key={stage.id}
                    onClick={() => jumpToStep(idx)}
                    className={`flex-1 min-w-[140px] rounded-2xl p-3.5 transition-all duration-200 cursor-pointer border flex flex-col justify-between relative select-none ${
                      isActive
                        ? 'bg-[#1C1A2E] border-[#A78BFA] shadow-lg shadow-[#5B21B6]/30 scale-[1.03]'
                        : isCompleted
                        ? 'bg-[#141320] border-[#10B981]/50 hover:border-[#10B981]'
                        : 'bg-[#13121E]/70 border-white/10 opacity-60 hover:opacity-100 hover:border-white/20'
                    }`}
                  >
                    {/* Connecting Chevron Arrow for n8n Flow */}
                    {idx < lifecycleStages.length - 1 && (
                      <div className="absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-[#0F0E17] border border-white/20 flex items-center justify-center text-[10px] text-white/50">
                        →
                      </div>
                    )}

                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className="text-[10px] font-mono font-bold text-white/60">
                          {stage.stageCode}
                        </span>
                        <div
                          className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                            isActive
                              ? 'bg-[#5B21B6] text-white'
                              : isCompleted
                              ? 'bg-[#10B981]/20 text-[#10B981]'
                              : 'bg-white/10 text-white/60'
                          }`}
                        >
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Stage Name */}
                      <h4 className="text-xs font-black font-heading text-white leading-snug">
                        {stage.moduleName}
                      </h4>
                      <p className="text-[10.5px] text-white/60 leading-tight mt-0.5">
                        {stage.department}
                      </p>
                    </div>

                    {/* Status Pill */}
                    <div className="mt-3 pt-2 border-t border-white/10">
                      <span
                        className={`text-[9.5px] font-bold font-mono px-2 py-0.5 rounded-full block text-center truncate ${
                          stage.statusType === 'warning'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : stage.statusType === 'success' || isCompleted
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        }`}
                      >
                        {isCompleted ? '✓ EXECUTED' : stage.statusBadge}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Active Stage Execution Panel */}
          <div className="bg-[#171526] rounded-2xl border border-white/15 p-4 sm:p-6 mt-2">
            {/* Header of Active Step */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#5B21B6] flex items-center justify-center text-white shrink-0 shadow-md">
                  {React.createElement(currentStage.icon, { className: 'w-5 h-5' })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#A78BFA] uppercase">
                      {currentStage.stageCode} · {currentStage.department}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        currentStage.statusType === 'warning'
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-emerald-500/20 text-emerald-300'
                      }`}
                    >
                      {currentStage.statusBadge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-black text-white mt-0.5">
                    {currentStage.actionTitle}
                  </h3>
                </div>
              </div>

              {/* Execution Speed */}
              <div className="text-right sm:border-l sm:border-white/10 sm:pl-4">
                <span className="text-[10px] font-mono text-white/50 uppercase block">
                  SAP Execution Telemetry
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  ⚡ Single Source Synchronized (18ms)
                </span>
              </div>
            </div>

            {/* Key Metrics Strip (Real Numbers for this stage) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              {currentStage.keyMetrics.map((metric, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border ${
                    metric.highlight
                      ? 'bg-[#5B21B6]/20 border-[#A78BFA]/40 shadow-sm'
                      : 'bg-white/[0.04] border-white/10'
                  }`}
                >
                  <span className="text-[10px] font-mono text-white/60 block uppercase">
                    {metric.label}
                  </span>
                  <div
                    className={`text-sm sm:text-base font-black font-heading mt-0.5 ${
                      metric.highlight ? 'text-amber-300' : 'text-white'
                    }`}
                  >
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Real SAP Document Voucher Strip */}
            <div className="bg-[#0D0C14] rounded-xl p-3.5 border border-white/10 font-mono text-xs mb-5">
              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] pb-2 border-b border-white/10 text-[#A78BFA]">
                <div className="flex items-center gap-2">
                  <Barcode className="w-3.5 h-3.5" />
                  <span className="font-bold">{currentStage.sapDocument.docType}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-white">{currentStage.sapDocument.docNumber}</span>
                </div>
                <div className="text-white/60 text-[10px]">
                  {currentStage.sapDocument.timestamp}
                </div>
              </div>
              <div className="pt-2 text-white/80 text-[11px] leading-relaxed">
                <strong className="text-white">Payload Detail: </strong>
                {currentStage.sapDocument.details}
              </div>
            </div>

            {/* Operational Transformation Comparison (Before vs After) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-amber-950/25 border border-amber-500/30">
                <span className="font-bold uppercase tracking-wider text-amber-400 text-[10px] flex items-center gap-1.5 mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Before: Manual Spreadsheet Friction</span>
                </span>
                <p className="text-amber-100/90 leading-relaxed">
                  {currentStage.beforeSiloFriction}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-500/30">
                <span className="font-bold uppercase tracking-wider text-emerald-400 text-[10px] flex items-center gap-1.5 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>After: SAP Business One Automation</span>
                </span>
                <p className="text-emerald-100/90 leading-relaxed font-medium">
                  {currentStage.afterConnectedImpact}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. "The Operational Silos vs The Solution I Position" */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#5B21B6]/20 flex items-start gap-3 shadow-sm">
            <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block font-heading">
                The Client Problem I Identify
              </span>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-snug">
                Growing mid-market enterprises lose margin to isolated teams: sales sells out-of-stock items, purchasing orders on guesswork, and finance spends weeks reconciling offline sheets.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#5B21B6]/20 flex items-start gap-3 shadow-sm">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block font-heading">
                The Enterprise Solution I Position
              </span>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5 leading-snug">
                Demonstrating how SAP Business One connects CRM, multi-bin warehousing, automated procurement, and financials into one single source of truth that scales with business growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 7. "Details" Accordion (Collapsed by Default) */}
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
