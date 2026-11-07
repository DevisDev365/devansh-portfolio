import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Radio,
  CheckCircle2,
} from 'lucide-react';
import { projects } from '../../content/portfolio-content.mjs';

interface ArcAutonomousGTMProps {
  playPulse?: () => void;
  playClick?: () => void;
}

export const ArcAutonomousGTM: React.FC<ArcAutonomousGTMProps> = ({ playPulse, playClick }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeVoiceAccent, setActiveVoiceAccent] = useState<'british' | 'indian'>('indian');

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

  return (
    <section id="arc-gtm" className="relative py-24 px-4 sm:px-6 bg-[#06080D]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-emerald-400 font-semibold text-sm mb-2">
              Finale Arc · Autonomous AI &amp; Prototyping
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              GTM Intelligence Engine
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
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
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <span>{starProject.linkText || 'Test Live Interactive Engine'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Featured Star Project */}
        <div data-ui className="rounded-2xl bg-[#090D15] p-6 sm:p-8 mb-12 border border-emerald-500/30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1.5 text-sm">
                <span className="font-semibold text-emerald-400">Featured Star Project</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">Self-Hosted n8n · Oracle VPS · Cloudflare Zero Trust</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight">
                Autonomous B2B GTM Lead Engine
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-[#111724] text-xs font-semibold text-slate-300">
                Turnaround: &lt; 30 Seconds
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#111724] text-xs font-semibold text-emerald-300">
                Zero Cost Per Seat
              </span>
            </div>
          </div>

          {/* Problem / Solution Contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
            <div className="p-5 rounded-xl bg-[#07090F]">
              <span className="text-xs font-semibold text-slate-400 block mb-1">
                Systemic Friction:
              </span>
              <p className="text-slate-300 leading-relaxed">
                {starProject.businessProblem}
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#07090F]">
              <span className="text-xs font-semibold text-emerald-400 block mb-1">
                Autonomous Architecture:
              </span>
              <p className="text-slate-200 leading-relaxed">
                Eliminates reliance on $10k+/yr enterprise data platforms by orchestrating Google SERP X-Ray, Hunter.io enrichment, and Gemini Flash Lite targeting behind Cloudflare Zero Trust.
              </p>
            </div>
          </div>

          {/* Interactive Pipeline Node Graph */}
          <div data-ui className="rounded-xl bg-[#07090F] p-5 sm:p-6 mb-6 border border-white/10">
            <div className="text-sm font-semibold text-slate-300 mb-4 flex items-center justify-between">
              <span>Interactive 5-Step Pipeline Flow (Click Step to Inspect)</span>
              <span className="text-emerald-400 text-xs">Phase {activeStep + 1} of 5</span>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
              {pipelineSteps.map((s, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={s.name}
                    onClick={() => handleStepClick(idx)}
                    className={`p-3 rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-emerald-500/20 text-white'
                        : 'bg-[#0A0E17] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-semibold text-emerald-400 mb-0.5">Phase {idx + 1}</div>
                    <div className="text-sm font-bold leading-tight truncate">{s.name}</div>
                    <div className="text-xs text-slate-400 truncate mt-0.5">{s.tool}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Details */}
            <div className="p-4 rounded-lg bg-[#0A0E17] text-sm">
              <div className="font-bold text-white mb-1">
                {pipelineSteps[activeStep].name} — <span className="text-emerald-400 text-xs">{pipelineSteps[activeStep].tool}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {pipelineSteps[activeStep].detail}
              </p>
            </div>
          </div>

          {/* Hardened Infrastructure Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <span className="text-xs text-slate-400 font-semibold mr-2">Infrastructure:</span>
            {starProject.techStack.map((tech: string) => (
              <span key={tech} className="text-xs px-2.5 py-1 rounded bg-[#07090F] text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Secondary Prototypes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dual-Accent Voice AI Platform */}
          <div data-ui className="rounded-2xl bg-[#090D15] p-6 sm:p-8 flex flex-col justify-between border border-white/10">
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
              <div data-ui className="p-4 rounded-xl bg-[#07090F] mb-6 border border-white/10">
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
                        height: [ `${height * 0.3}%`, `${height}%`, `${height * 0.4}%` ],
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
          <div data-ui className="rounded-2xl bg-[#090D15] p-6 sm:p-8 flex flex-col justify-between border border-white/10">
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

              <div className="p-4 rounded-xl bg-[#07090F] space-y-2.5 mb-6 text-xs text-slate-300">
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
