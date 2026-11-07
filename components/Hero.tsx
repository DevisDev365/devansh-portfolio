import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RESUME_URL } from '../constants';
import { ArrowRight, Download, Sparkles, Building2, Terminal, BarChart3, ChevronRight } from 'lucide-react';
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
      headingHighlight: 'Enterprise Solution Architecture',
      description:
        'Consulting enterprise clients on SAP Business One (SAP B1) implementations, resolving operational inventory and invoicing bottlenecks, presenting proprietary add-ons, and driving consultative revenue expansion.',
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

  const arcPreviews = [
    {
      id: 'arc-pipeline',
      arcNum: 'ARC 01',
      title: 'Fuel Transmission Lines',
      company: 'Imperial Auto Industries',
      stat: '₹5Cr+ ARR • 87% Speedup',
      color: '#1E5BFF',
      borderClass: 'hover:border-blue-500/50',
      badgeClass: 'bg-blue-500/20 text-blue-300',
    },
    {
      id: 'arc-bowling',
      arcNum: 'ARC 02',
      title: 'The Outbound Strike',
      company: 'SMAAASH Entertainment',
      stat: '₹59K Launch • 1,200+ Leads',
      color: '#E4002B',
      borderClass: 'hover:border-red-500/50',
      badgeClass: 'bg-red-500/20 text-red-300',
    },
    {
      id: 'arc-sap',
      arcNum: 'ARC 03',
      title: 'Enterprise Problem Engine',
      company: 'Elevra Tech Consulting',
      stat: 'Operational Flow • Add-Ons',
      color: '#8B5CF6',
      borderClass: 'hover:border-purple-500/50',
      badgeClass: 'bg-purple-500/20 text-purple-300',
    },
  ];

  return (
    <section className="relative min-h-[720px] lg:min-h-[85vh] lg:max-h-[960px] flex items-center justify-center pt-20 sm:pt-24 pb-16 px-4 sm:px-6 z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101420] border border-emerald-500/30 mb-5">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-emerald-300">
            Business Development Executive – Enterprise Solutions @ Elevra Tech
          </span>
        </div>

        {/* Monumental Name with text-scramble on hover and responsive clamp */}
        <h1
          className="font-black tracking-tight text-white mb-4 uppercase leading-[0.92] select-none text-[clamp(2.5rem,8.5vw,7.5rem)] cursor-pointer"
          onMouseEnter={() => {
            scrambleFirst();
            scrambleLast();
          }}
          title="Hover to scramble"
        >
          <span className="block sm:inline-block sm:mr-4 text-emerald-400">{scrambledFirst}</span>
          <span className="block sm:inline-block text-white">{scrambledLast}</span>
        </h1>

        {/* Continuous Retro Green Marathon Runner (Endless marathon, zero jarring reset) */}
        <RetroGreenRunner playClick={playClick} />

        {/* Persona Mode Switcher */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-[#0e121d] border border-white/10 mb-8 max-w-2xl mx-auto">
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
        </div>

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
              Transforming complex business friction into{' '}
              <span className="text-emerald-400 font-semibold">
                {current.headingHighlight}
              </span>
              , rapid functional prototypes, and validated commercial revenue.
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
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#arc-gtm"
            onClick={() => playClick && playClick()}
            className="flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20"
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
        </div>

        {/* Manga Arc Quick-Jump Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-4xl mx-auto text-left">
          {arcPreviews.map((preview) => (
            <a
              key={preview.id}
              href={`#${preview.id}`}
              onClick={() => playClick && playClick()}
              className={`group p-3.5 rounded-xl bg-[#0A0D15] border border-white/10 ${preview.borderClass} transition-all hover:-translate-y-0.5`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${preview.badgeClass}`}>
                  {preview.arcNum}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
              </div>
              <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                {preview.title}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {preview.company}
              </div>
              <div className="text-[10px] text-slate-500 mt-2 font-mono">
                {preview.stat}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
