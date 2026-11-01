import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Cpu, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ConsultingLogic: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const pillars = [
    {
      step: '01',
      title: 'Diagnose Systemic Friction',
      subtitle: 'Uncover Hidden Operational Waste',
      icon: Search,
      color: 'emerald',
      description:
        'Consulting begins with pure analytical logic. Before writing code or proposing software, I audit manual workflows, pricing discrepancies, and operational bottlenecks across ERP, OEM, and sales pipelines.',
      bullets: [
        'Mapped manual OEM reporting bottlenecks: 4 hours of weekly Excel drag per account.',
        'Identified 40% lead quality drop-off in entertainment sales outreach.',
        'Audited Gen-Z streetwear price inflation (₹8k–₹15k) revealing multi-crore Indian market whitespace.',
      ],
      proofPoint: 'Every technical project starts with an audited commercial bottleneck.',
    },
    {
      step: '02',
      title: 'Rapid Prototype Architecture',
      subtitle: 'Build Working 0-to-1 Prototypes in Days',
      icon: Cpu,
      color: 'cyan',
      description:
        'Instead of delivering static slide decks, I build functional, cloud-deployed prototypes that prove technical viability and demonstrate immediate business value.',
      bullets: [
        'Voice AI Platform: Architected Gemini Live API + Antigravity logic deployed on GCP in 48 hours for 250+ users.',
        'SaaS Market Pulse: Serverless Python + Firecrawl diffing engine replacing 7 manual daily browser tabs.',
        'Red Tape Anime: Directed generative AI design pipelines & trend modeling to prove accessible streetwear viability.',
      ],
      proofPoint: 'Proving solutions with working software accelerates stakeholder conviction 10x.',
    },
    {
      step: '03',
      title: 'Commercial Execution & Scale',
      subtitle: 'Translate Prototypes into Recurring ARR',
      icon: TrendingUp,
      color: 'emerald',
      description:
        'A prototype only matters if it impacts the P&L. I consult C-suite stakeholders, align product fit with SAP Business One configurations, and drive structured revenue expansion.',
      bullets: [
        'Generated ₹5+ Crore in expansion ARR across global OEM accounts at Imperial Auto.',
        'Achieved 95%+ client retention across enterprise SaaS accounts at Elevra Tech.',
        'Unlocked ₹59K in direct launch revenue for SMAAASH within a 2-month launch sprint.',
      ],
      proofPoint: 'Measurable P&L outcomes, SLA compliance, and zero account churn.',
    },
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24 border-y border-white/5 bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            The Consulting Differentiator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Consulting is Pure Logic.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Prototypes Prove It.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            I don’t just advise from slides. I diagnose the core business friction, engineer the
            functional prototype to validate the solution, and execute the enterprise expansion strategy.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={pillar.step}
                onClick={() => setActiveStep(idx)}
                className={`relative text-left p-5 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? 'border-emerald-500/60 bg-emerald-950/20 shadow-lg shadow-emerald-950/30 ring-1 ring-emerald-500/40'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold tracking-wider ${
                      isActive ? 'text-emerald-400' : 'text-slate-500'
                    }`}
                  >
                    PHASE {pillar.step}
                  </span>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? 'text-emerald-400' : 'text-slate-500'
                    }`}
                  />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{pillar.title}</h3>
                <p className="text-xs text-slate-400">{pillar.subtitle}</p>

                {isActive && (
                  <motion.div
                    layoutId="activePillarTab"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-b-xl"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6 sm:p-8 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    STEP {pillars[activeStep].step}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {pillars[activeStep].title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {pillars[activeStep].description}
                </p>

                <div className="space-y-2.5 pt-2">
                  {pillars[activeStep].bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 rounded-xl border border-white/10 bg-black/60 p-5 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
                  <span>Logic Proof Point</span>
                  <span className="text-emerald-400">Validated</span>
                </div>
                <blockquote className="text-sm font-medium text-slate-200 italic border-l-2 border-emerald-400 pl-3">
                  "{pillars[activeStep].proofPoint}"
                </blockquote>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Methodology</span>
                  <span className="font-mono text-emerald-400">0-to-1 Prototyping</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
