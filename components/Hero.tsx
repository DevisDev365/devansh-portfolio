import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioIdentity } from '../content/portfolio-content.mjs';
import { RESUME_URL } from '../constants';
import { ArrowRight, Download, Sparkles, Building2, Terminal, BarChart3 } from 'lucide-react';
import { RetroGreenRunner } from './anime/RetroGreenRunner';
import { useTextScramble } from '../hooks/useTextScramble';

interface HeroProps {
  playClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ playClick }) => {
  const [activePersona, setActivePersona] = useState<number>(0);
  const { displayText: scrambledFirst, scramble: scrambleFirst } = useTextScramble('DEVANSH');
  const { displayText: scrambledLast, scramble: scrambleLast } = useTextScramble('KHANNA');

  const personas = [
    {
      id: 'sap',
      tabLabel: 'Enterprise SAP Consulting',
      icon: Building2,
      headingHighlight: 'SAP Solution Consulting',
      description:
        'Consulting enterprise clients on SAP Business One (SAP B1) implementations, conducting requirement mapping, presenting proprietary add-ons, and driving consultative revenue expansion.',
      metrics: '₹5Cr+ Expansion ARR • Multi-Stakeholder Alignment • SAP Business One',
    },
    {
      id: 'ai',
      tabLabel: 'Rapid AI Prototyping',
      icon: Terminal,
      headingHighlight: 'Rapid AI Prototyping',
      description:
        'Architecting real-time multimodal conversational agents and autonomous data pipelines using Gemini Live API, Antigravity, and GCP auto-scaling within strict 48-hour client SLAs.',
      metrics: '48h Prototype SLA • GCP Cloud Run • 250+ User Testing',
    },
    {
      id: 'revops',
      tabLabel: 'Data & RevOps Intelligence',
      icon: BarChart3,
      headingHighlight: 'Commercial Intelligence',
      description:
        'Engineering custom automated data pipelines, VBA/SQL macros, and empirical market models to eliminate repetitive reporting drag and identify uncaptured market demand.',
      metrics: '87% Reporting Time Cut • 40% Lead Quality Lift • Trends Modeling',
    },
  ];

  const current = personas[activePersona];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101420] border border-emerald-500/30 mb-5"
        >
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-emerald-300">
            Business Development Executive – SAP Consulting @ Elevra Tech
          </span>
        </motion.div>

        {/* Monumental Name with text-scramble on hover and responsive clamp */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="font-black tracking-tight text-white mb-4 uppercase leading-[0.92] select-none text-[clamp(2.5rem,8.5vw,7.5rem)] cursor-pointer"
          onMouseEnter={() => {
            scrambleFirst();
            scrambleLast();
          }}
          title="Hover to scramble"
        >
          <span className="inline-block sm:mr-4 text-emerald-400">{scrambledFirst}</span>
          <span className="inline-block text-white">{scrambledLast}</span>
        </motion.h1>

        {/* Old School Animation: Small Green Figure Running to Goal Post */}
        <RetroGreenRunner playClick={playClick} />

        {/* Persona Mode Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0e121d] border border-white/10 mb-8 max-w-2xl mx-auto"
        >
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            const isActive = activePersona === idx;
            return (
              <button
                key={persona.id}
                onClick={() => {
                  setActivePersona(idx);
                  if (playClick) playClick();
                }}
                className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-white bg-white/10 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                <span>{persona.tabLabel}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Dynamic Persona Thesis */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto mb-10 text-center"
          >
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal mb-3 px-2">
              Turning complex business bottlenecks into{' '}
              <span className="text-emerald-400 font-semibold">
                {current.headingHighlight}
              </span>
              , rapid functional prototypes, and scalable commercial revenue.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed mb-4 px-4">
              {current.description}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e121d] border border-white/10 text-xs font-semibold text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{current.metrics}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#arc-gtm"
            onClick={() => playClick && playClick()}
            className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Test Autonomous Lead Engine</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#arc-pipeline"
            onClick={() => playClick && playClick()}
            className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#0e121d] border border-white/10 hover:border-white/25 text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            <span>Explore Career Arcs</span>
          </a>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick && playClick()}
            className="flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#0e121d] border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-colors"
          >
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Character Dossier (CV)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
