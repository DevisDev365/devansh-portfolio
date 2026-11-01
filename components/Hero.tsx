import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioIdentity } from '../content/portfolio-content.mjs';
import { RESUME_URL } from '../constants';
import { ArrowRight, Download, Sparkles, Building2, Terminal, BarChart3, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activePersona, setActivePersona] = useState<number>(0);

  const personas = [
    {
      id: 'sap',
      tabLabel: 'Enterprise SAP Consulting',
      icon: Building2,
      tagline: 'Enterprise SAP Business One & Revenue Expansion',
      headingHighlight: 'SAP Solution Consulting',
      description:
        'Consulting enterprise clients on SAP Business One (SAP B1) implementations, conducting requirement mapping, presenting proprietary add-ons, and driving consultative revenue expansion.',
      metrics: '₹5Cr+ Expansion ARR • 95%+ Retention • SAP B1 ERP',
      thesis: 'Aligning enterprise product configuration with client P&L to expand lifetime account value.',
    },
    {
      id: 'ai',
      tabLabel: 'Rapid AI Prototyping',
      icon: Terminal,
      tagline: '0-to-1 AI Solutions & Cloud Architecture',
      headingHighlight: 'Rapid AI Prototyping',
      description:
        'Architecting real-time multimodal conversational agents and autonomous data pipelines using Gemini Live API, Antigravity, and GCP auto-scaling within strict 48-hour client SLAs.',
      metrics: '48h Prototype SLA • GCP Cloud Run • 250+ User Testing',
      thesis: 'Deploying working cloud prototypes in days proves technical viability and creates instant stakeholder conviction.',
    },
    {
      id: 'revops',
      tabLabel: 'Data & RevOps Intelligence',
      icon: BarChart3,
      tagline: 'Operational Analytics & GTM Whitespace',
      headingHighlight: 'Commercial Intelligence',
      description:
        'Engineering custom automated data pipelines, VBA/SQL macros, and empirical market models to eliminate repetitive reporting drag and identify uncaptured market demand.',
      metrics: '87% Reporting Time Cut • 40% Lead Quality Lift • Trends Modeling',
      thesis: 'Empirical data analysis surfaces systemic friction and validates multi-crore market whitespace.',
    },
  ];

  const current = personas[activePersona];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium text-emerald-300">
            Business Development Executive – SAP Consulting @ Elevra Tech
          </span>
        </motion.div>

        {/* Name & Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          {portfolioIdentity.name}
        </motion.h1>

        {/* Dynamic Persona Mode Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 max-w-2xl mx-auto"
        >
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            const isActive = activePersona === idx;
            return (
              <button
                key={persona.id}
                onClick={() => setActivePersona(idx)}
                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{persona.tabLabel}</span>
                {isActive && (
                  <motion.div
                    layoutId="heroTabIndicator"
                    className="absolute inset-0 bg-white/10 border border-emerald-500/40 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Animated Persona Thesis Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto mb-10 text-center"
          >
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-4">
              Turning complex business problems into{' '}
              <span className="text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4">
                {current.headingHighlight}
              </span>
              , rapid functional prototypes, and scalable commercial revenue.
            </p>

            <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4">
              {current.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{current.metrics}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Solution Workbench</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#experience"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-white font-medium text-sm transition-all hover:border-white/20"
          >
            <span>View Experience</span>
          </a>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white font-medium text-sm transition-all hover:border-emerald-500/40"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Resume (CV)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
