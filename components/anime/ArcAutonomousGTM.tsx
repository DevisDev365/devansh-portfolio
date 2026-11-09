import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Play,
  RotateCcw,
  Sparkles,
  FileCheck,
  ChevronDown,
  ChevronUp,
  Cpu,
  Radio,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { projects } from '../../content/portfolio-content.mjs';

interface ArcAutonomousGTMProps {
  playPulse?: () => void;
  playClick?: () => void;
}

export const ArcAutonomousGTM: React.FC<ArcAutonomousGTMProps> = ({ playPulse, playClick }) => {
  const stepperRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const [activeVoiceAccent, setActiveVoiceAccent] = useState<'british' | 'indian'>('indian');

  // Simulation demo states
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationComplete, setSimulationComplete] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(0);

  const starProject = projects[0];
  const voiceProject = projects[1];
  const saasPulseProject = projects[2];

  const pipelineSteps = [
    {
      name: 'Smart ICP Intake',
      tool: '/form/trial-leads',
      detail: 'Standardized form collecting target industry, revenue tier (₹10Cr–₹200+Cr), and buyer persona.',
    },
    {
      name: 'Gemini Flash Lite',
      tool: 'Gemini Flash Lite API',
      detail: 'Synthesizes Boolean SERP queries, diagnoses industry pain points, and validates structured JSON.',
    },
    {
      name: 'SERP Reconnaissance',
      tool: 'Serper.dev API',
      detail: 'Scrapes Google search results to extract live executive LinkedIn URLs matching exact persona parameters.',
    },
    {
      name: 'Waterfall Enrichment',
      tool: 'Hunter.io API',
      detail: 'Credit-protected cascade deriving corporate email patterns, verified work emails, and confidence scores.',
    },
    {
      name: 'Executive Delivery',
      tool: 'Custom SMTP',
      detail: 'Generates responsive HTML executive dossier delivered directly to prospective clients in under 30 seconds.',
    },
  ];

  // Auto-play stepper as it enters the viewport
  useEffect(() => {
    const el = stepperRef.current;
    if (!el) return;

    let timer: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isSimulating) {
            timer = setInterval(() => {
              setActiveStep((prev) => (prev + 1) % pipelineSteps.length);
            }, 3000);
          } else {
            clearInterval(timer);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, [isSimulating, pipelineSteps.length]);

  const handleStepClick = (idx: number) => {
    setActiveStep(idx);
    if (playPulse) playPulse();
    if (playClick) playClick();
  };

  const runSimulation = () => {
    if (isSimulating) return;
    if (playClick) playClick();
    setIsSimulating(true);
    setSimulationComplete(false);
    setSimStep(0);

    const stepInterval = setInterval(() => {
      setSimStep((prev) => {
        if (prev >= 4) {
          clearInterval(stepInterval);
          setIsSimulating(false);
          setSimulationComplete(true);
          if (playPulse) playPulse();
          return 4;
        }
        return prev + 1;
      });
    }, 700);
  };

  const resetSimulation = () => {
    if (playClick) playClick();
    setIsSimulating(false);
    setSimulationComplete(false);
    setSimStep(0);
  };

  return (
    <section
      id="arc-gtm"
      className="relative bg-[#11110F] text-[#F3EEE4] transition-colors duration-400 ease-out py-24 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            {/* 1. Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#19C37D]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#19C37D] uppercase font-sans">
                Projects
              </span>
            </div>

            {/* 2. H2 = AI & Automation Projects */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-[#F3EEE4] leading-snug">
              AI &amp; Automation Projects
            </h2>

            {/* 3. One-line summary */}
            <p className="mt-4 text-[#8E8B82] text-base sm:text-lg max-w-2xl leading-relaxed">
              B2B outbound intelligence, real-time voice agents, and automated market monitoring pipelines.
            </p>
          </div>

          {/* Test Live Interactive Engine CTA */}
          {starProject.link && (
            <a
              href={starProject.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick && playClick()}
              className="flex items-center gap-2 px-5 py-3 rounded bg-[#19C37D] hover:bg-[#15A869] text-[#11110F] font-bold text-xs sm:text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] shrink-0 cursor-pointer"
            >
              <span>Test Live Interactive Engine</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* SIGNATURE VISUAL: Horizontal 5-Phase Stepper with Active Phase State */}
        <div
          ref={stepperRef}
          className="rounded-2xl bg-[#1C1C19] p-6 sm:p-8 mb-16 border border-[#F3EEE4]/15 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#F3EEE4]/10">
            <div>
              <span className="text-xs font-mono font-bold text-[#19C37D] uppercase tracking-wider block">
                PROJECT 01: SIGNATURE VISUAL
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white mt-1">
                GTM Lead Engine — 5-Phase Pipeline
              </h3>
            </div>

            {/* Simulation Trigger */}
            <div>
              {!simulationComplete ? (
                <button
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-[#19C37D] hover:bg-[#15A869] text-[#11110F] font-bold text-xs transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSimulating ? 'Simulating Pipeline...' : 'Run Simulation'}</span>
                </button>
              ) : (
                <button
                  onClick={resetSimulation}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Simulation</span>
                </button>
              )}
            </div>
          </div>

          {/* Stepper Bar (5 Phases) */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
            {pipelineSteps.map((s, idx) => {
              const currentStepIndex = isSimulating ? simStep : activeStep;
              const isActive = currentStepIndex === idx;
              const isPast = isSimulating ? simStep > idx : false;

              return (
                <button
                  key={s.name}
                  onClick={() => handleStepClick(idx)}
                  className={`p-3.5 rounded text-left transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#11110F] border-[#19C37D] text-white shadow-sm'
                      : isPast
                      ? 'bg-[#11110F]/60 border-[#19C37D]/30 text-[#19C37D]'
                      : 'bg-[#11110F]/30 border-white/5 text-[#8E8B82] hover:text-white'
                  }`}
                >
                  <div className="text-[11px] font-mono font-bold text-[#19C37D] mb-1">
                    Phase 0{idx + 1}
                  </div>
                  <div className="text-xs font-bold leading-tight">{s.name}</div>
                  <div className="text-[10px] text-[#8E8B82] font-mono mt-1 truncate">
                    {s.tool}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Phase Description Line */}
          <div className="p-4 rounded bg-[#11110F] border border-white/5 text-xs sm:text-sm">
            <div className="font-bold text-white mb-1">
              Phase 0{(isSimulating ? simStep : activeStep) + 1}:{' '}
              {pipelineSteps[isSimulating ? simStep : activeStep].name} —{' '}
              <span className="text-[#19C37D] font-mono text-xs">
                {pipelineSteps[isSimulating ? simStep : activeStep].tool}
              </span>
            </div>
            <p className="text-[#8E8B82] leading-relaxed">
              {pipelineSteps[isSimulating ? simStep : activeStep].detail}
            </p>
          </div>

          {/* Simulation Output Preview */}
          <AnimatePresence>
            {simulationComplete && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 p-4 rounded bg-[#11110F] border border-[#19C37D]/40 text-xs"
              >
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#19C37D]/20">
                  <div className="flex items-center gap-2 text-[#19C37D] font-bold">
                    <FileCheck className="w-4 h-4" />
                    <span>Executive Lead Dossier Delivered in 28 seconds</span>
                  </div>
                  <span className="text-[11px] text-[#8E8B82] font-mono">STATUS: 200 OK VIA SMTP</span>
                </div>
                <p className="text-slate-300">
                  Verified decision-maker contact details extracted and formatted into responsive executive dossier.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Infrastructure Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-6 mt-4 border-t border-[#F3EEE4]/10">
            <span className="text-xs text-[#8E8B82] font-bold uppercase font-mono mr-2">
              Infrastructure:
            </span>
            {['n8n', 'Gemini Flash Lite', 'Serper.dev', 'Hunter.io', 'Custom SMTP', 'Oracle Cloud VPS', 'Docker', 'Cloudflare Zero Trust'].map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded bg-[#11110F] text-[#F3EEE4]/90 border border-white/10 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* THREE PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: GTM Lead Engine */}
          <div className="rounded-2xl bg-[#1C1C19] p-6 border border-[#F3EEE4]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#19C37D] uppercase block mb-2">
                Project 01
              </span>
              <h3 className="text-xl font-heading font-black text-white mb-2">
                GTM Lead Engine
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8B82] leading-relaxed mb-6">
                Automated B2B prospecting pipeline running on self-hosted n8n. Takes target ICP inputs, queries Google SERP X-Ray, enriches emails via Hunter.io cascade, and delivers executive dossiers in under 30 seconds.
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-[#19C37D]">
                <span>n8n</span> · <span>Gemini Flash Lite</span> · <span>Serper.dev</span> · <span>Hunter.io</span> · <span>Custom SMTP</span>
              </div>
              {starProject.link && (
                <a
                  href={starProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick && playClick()}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#19C37D] hover:underline"
                >
                  <span>Test Live Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Card 2: Voice AI Platform */}
          <div className="rounded-2xl bg-[#1C1C19] p-6 border border-[#F3EEE4]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#19C37D] uppercase block mb-2">
                Project 02
              </span>
              <h3 className="text-xl font-heading font-black text-white mb-2">
                Voice AI Platform
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8B82] leading-relaxed mb-6">
                Freelance paid engagement delivering a real-time conversational dual-accent voice web application for an academic accent perception study of 250+ participants, deployed on GCP within a strict 48-hour client SLA.
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-[#19C37D]">
                <span>Freelance</span> · <span>GCP Cloud Run</span> · <span>Gemini Live API</span> · <span>48h Turnaround</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setActiveVoiceAccent('indian');
                    if (playClick) playClick();
                  }}
                  className={`text-xs px-2.5 py-1 rounded font-semibold transition-colors ${
                    activeVoiceAccent === 'indian'
                      ? 'bg-[#19C37D] text-[#11110F]'
                      : 'bg-white/5 text-[#8E8B82]'
                  }`}
                >
                  Indian Accent
                </button>
                <button
                  onClick={() => {
                    setActiveVoiceAccent('british');
                    if (playClick) playClick();
                  }}
                  className={`text-xs px-2.5 py-1 rounded font-semibold transition-colors ${
                    activeVoiceAccent === 'british'
                      ? 'bg-[#19C37D] text-[#11110F]'
                      : 'bg-white/5 text-[#8E8B82]'
                  }`}
                >
                  British Accent
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: SaaS Market Pulse */}
          <div className="rounded-2xl bg-[#1C1C19] p-6 border border-[#F3EEE4]/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-[#19C37D] uppercase block mb-2">
                Project 03
              </span>
              <h3 className="text-xl font-heading font-black text-white mb-2">
                SaaS Market Pulse
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8B82] leading-relaxed mb-6">
                Autonomous AI market intelligence aggregator for CS and RevOps teams. Scrapes blogs, trending GitHub repos, and news daily using Firecrawl and Python, generating executive briefings with Gemini.
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-[#19C37D]">
                <span>Python</span> · <span>Firecrawl</span> · <span>Gemini</span> · <span>80% Time Reduction</span>
              </div>
              {saasPulseProject.link && (
                <a
                  href={saasPulseProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick && playClick()}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#19C37D] hover:underline"
                >
                  <span>Watch Demo Video</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Details Accordion (Collapsed) */}
        <div className="border border-[#F3EEE4]/15 rounded-2xl bg-[#1C1C19] overflow-hidden">
          <button
            onClick={() => {
              setDetailsOpen(!detailsOpen);
              if (playClick) playClick();
            }}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/[0.04] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-[#19C37D]" />
              <span className="font-heading font-bold text-base sm:text-lg text-white">
                Technical Architecture &amp; Production Deployments
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#19C37D]">
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
                className="overflow-hidden border-t border-[#F3EEE4]/10 px-6 py-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                  <div className="space-y-2">
                    <span className="text-xs font-bold font-mono text-[#19C37D] uppercase block">
                      Autonomous Lead Engine Architecture
                    </span>
                    <p className="text-xs sm:text-sm text-[#8E8B82] leading-relaxed">
                      Hosted on an Oracle Cloud Ubuntu VPS behind Docker and Cloudflare Zero Trust. The workflow executes Boolean queries via Serper.dev, enriches verified emails with Hunter.io, and sends responsive HTML dossiers via custom domain SMTP.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold font-mono text-[#19C37D] uppercase block">
                      Conversational Voice Architecture
                    </span>
                    <p className="text-xs sm:text-sm text-[#8E8B82] leading-relaxed">
                      Built with Gemini Multimodal Live API and Antigravity workflow logic. Deployed on Google Cloud Run with 0-to-5 auto-scaling instances to ensure continuous low-latency WebSocket communication across academic participant cohorts.
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
