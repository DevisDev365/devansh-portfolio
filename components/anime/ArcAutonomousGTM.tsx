import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Radio,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Mail,
  Search,
  FileCheck,
} from 'lucide-react';
import { projects } from '../../content/portfolio-content.mjs';

interface ArcAutonomousGTMProps {
  playPulse?: () => void;
  playClick?: () => void;
}

export const ArcAutonomousGTM: React.FC<ArcAutonomousGTMProps> = ({ playPulse, playClick }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
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
      tool: 'googlePalmApi',
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
      detail: 'Credit-protected cascade deriving corporate email patterns, verified work emails, phone numbers, and confidence scores.',
    },
    {
      name: 'Executive Delivery',
      tool: 'Custom SMTP',
      detail: 'Generates responsive HTML executive dossier delivered to prospective clients in under 30 seconds.',
    },
  ];

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
    <section id="arc-gtm" className="relative py-24 px-4 sm:px-6 bg-[#07080C] text-slate-100 overflow-hidden">
      {/* Tri-color convergence glow in background */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Finale Arc · Autonomous AI &amp; Prototyping</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              GTM Intelligence Engine
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
              Rapid 0-to-1 prototype engineering. Autonomous n8n workflows, low-latency multimodal voice agents on GCP, and automated RevOps aggregators.
            </p>
          </div>

          {/* Prominent Live Demo Trigger */}
          {starProject.link && (
            <a
              href={starProject.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick && playClick()}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/20 shrink-0"
            >
              <span>{starProject.linkText || 'Test Live Interactive Engine'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Featured Star Project Card */}
        <div className="rounded-2xl bg-[#090D15] p-6 sm:p-8 mb-12 border border-emerald-500/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1.5 text-xs sm:text-sm">
                <span className="font-semibold text-emerald-400">Featured Star Project</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Self-Hosted n8n · Oracle Cloud VPS · Cloudflare Zero Trust</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight">
                Autonomous B2B GTM Lead Engine
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#111724] text-xs font-semibold text-slate-300">
                Turnaround: &lt; 30 Seconds
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                Zero Cost Per Seat
              </span>
            </div>
          </div>

          {/* Problem / Solution Contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
            <div className="p-5 rounded-xl bg-[#07090F] border border-white/5">
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                Systemic Friction:
              </span>
              <p className="text-slate-300 leading-relaxed">
                {starProject.businessProblem}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#07090F] border border-white/5">
              <span className="text-xs font-semibold text-emerald-400 block mb-1">
                Autonomous Architecture:
              </span>
              <p className="text-slate-200 leading-relaxed">
                Eliminates reliance on $10k+/yr enterprise data platforms by orchestrating Google SERP X-Ray, Hunter.io enrichment, and Gemini Flash Lite targeting behind Cloudflare Zero Trust.
              </p>
            </div>
          </div>

          {/* Interactive Pipeline Node Graph with Simulation Runner */}
          <div className="rounded-xl bg-[#07090F] p-5 sm:p-6 mb-8 border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <span>Autonomous 5-Step Pipeline Flow</span>
                <span className="text-emerald-400 text-xs font-mono">
                  {isSimulating ? `Executing Phase ${simStep + 1}...` : `Phase ${activeStep + 1} of 5`}
                </span>
              </div>

              {/* Simulation Action Buttons */}
              <div className="flex items-center gap-2">
                {!simulationComplete ? (
                  <button
                    onClick={runSimulation}
                    disabled={isSimulating}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isSimulating ? 'Simulating Pipeline...' : 'Run In-Page Simulation'}</span>
                  </button>
                ) : (
                  <button
                    onClick={resetSimulation}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Simulation</span>
                  </button>
                )}
              </div>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
              {pipelineSteps.map((s, idx) => {
                const isActive = isSimulating ? simStep === idx : activeStep === idx;
                const isPast = isSimulating ? simStep > idx : false;
                return (
                  <button
                    key={s.name}
                    onClick={() => handleStepClick(idx)}
                    className={`p-3 rounded-lg text-left transition-all ${
                      isActive
                        ? 'bg-emerald-500/20 border border-emerald-500/50 text-white shadow-lg shadow-emerald-500/10'
                        : isPast
                        ? 'bg-emerald-950/40 border border-emerald-500/20 text-emerald-300'
                        : 'bg-[#0A0E17] border border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-[11px] font-mono font-bold text-emerald-400 mb-0.5">
                      Phase {idx + 1}
                    </div>
                    <div className="text-xs font-bold leading-tight truncate">{s.name}</div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5 font-mono">
                      {s.tool}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Detail Card */}
            <div className="p-4 rounded-lg bg-[#0A0E17] border border-white/5 text-xs sm:text-sm">
              <div className="font-bold text-white mb-1">
                {pipelineSteps[isSimulating ? simStep : activeStep].name} —{' '}
                <span className="text-emerald-400 font-mono text-xs">
                  {pipelineSteps[isSimulating ? simStep : activeStep].tool}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {pipelineSteps[isSimulating ? simStep : activeStep].detail}
              </p>
            </div>

            {/* Simulated Live Output Preview Card */}
            <AnimatePresence>
              {simulationComplete && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 rounded-xl bg-[#0D1526] border border-emerald-500/40 text-xs"
                >
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-emerald-500/20">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold">
                      <FileCheck className="w-4 h-4" />
                      <span>Simulated Executive Dossier Generated (&lt; 28s)</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">STATUS: DELIVERED VIA SMTP</span>
                  </div>

                  <div className="space-y-2 text-slate-300">
                    <p>
                      <strong>Target Profile:</strong> VP of Supply Chain @ Tier-1 Robotics OEM (₹50 Cr+ ARR Tier)
                    </p>
                    <p>
                      <strong>Boolean Query:</strong>{' '}
                      <code className="text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded font-mono text-[11px]">
                        ("VP Supply Chain" OR "Head of SCM") AND ("Robotics" OR "Industrial") site:linkedin.com/in
                      </code>
                    </p>
                    <p>
                      <strong>Enriched Verification:</strong> Work Email Verified (96% Confidence) • Direct HQ Phone Located
                    </p>
                    <p className="text-slate-400 text-[11px] pt-1">
                      Ready to test on your own ICP? Click the primary button above to trigger the live production engine.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Hardened Infrastructure Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-slate-400 font-semibold mr-2">Infrastructure:</span>
            {starProject.techStack.map((tech: string) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded bg-[#07090F] border border-white/5 text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Secondary Prototypes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dual-Accent Voice AI Platform */}
          <div className="rounded-2xl bg-[#090D15] p-6 sm:p-8 flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-cyan-400">
                  Freelance Paid Project · 48h Turnaround
                </span>
                <span className="text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded">
                  GCP Cloud Run (0–5 Auto-scale)
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {voiceProject.title}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Commissioned by an academic researcher to architect a low-latency conversational AI agent testing accent perception across ~250+ participants. Powered by Gemini Multimodal Live API and Antigravity workflow logic.
              </p>

              {/* Accent Waveform Visualizer */}
              <div className="p-4 rounded-xl bg-[#07090F] mb-6 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <Radio className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Dual-Accent Voice Stream</span>
                  </span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => {
                        setActiveVoiceAccent('indian');
                        if (playClick) playClick();
                      }}
                      className={`text-xs px-2.5 py-1 rounded font-semibold transition-colors ${
                        activeVoiceAccent === 'indian'
                          ? 'bg-cyan-500 text-black'
                          : 'bg-white/5 text-slate-400 hover:text-white'
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
                          ? 'bg-cyan-500 text-black'
                          : 'bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      British Accent
                    </button>
                  </div>
                </div>

                {/* Animated Waveform Bars */}
                <div className="h-8 flex items-center justify-center gap-1">
                  {[40, 70, 90, 60, 30, 80, 100, 50, 65, 85, 45, 95, 35, 75, 55, 85].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`],
                      }}
                      transition={{
                        duration: 0.8 + (i % 4) * 0.2,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      }}
                      className="w-1.5 rounded-full bg-cyan-400/80"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 text-xs">
              <span className="text-slate-400 font-semibold mr-1">Stack:</span>
              {voiceProject.techStack.map((tech: string) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-[#07090F] text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* SaaS Market Pulse */}
          <div className="rounded-2xl bg-[#090D15] p-6 sm:p-8 flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-amber-400">
                  AI &amp; RevOps Market Intelligence
                </span>
                <span className="text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded">
                  80% Time Reduction
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {saasPulseProject.title}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Autonomous market intelligence pipeline using Python, Firecrawl API, and Gemini API to aggregate SaaS industry blogs, trending GitHub repositories, and Google Trends into interactive executive briefs every morning at 6:00 AM.
              </p>

              <div className="p-4 rounded-xl bg-[#07090F] space-y-2.5 mb-6 text-xs text-slate-300 border border-white/5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Eliminated 7+ manual browser tabs with a single automated brief</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Serverless cron via scheduled GitHub Actions with automated diffing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Integrated with Apple Shortcuts &amp; Resend API for zero-touch delivery</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              {saasPulseProject.link && (
                <a
                  href={saasPulseProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick && playClick()}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>{saasPulseProject.linkText || 'Watch LinkedIn Demo Video'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-semibold mr-1">Stack:</span>
                {saasPulseProject.techStack.slice(0, 5).map((tech: string) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-[#07090F] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
