import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../content/portfolio-content.mjs';
import { Project } from '../types';
import { SKILL_LINKS } from '../constants';
import {
  ExternalLink,
  Sparkles,
  AlertCircle,
  Cpu,
  TrendingUp,
  CheckCircle2,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeCardView, setActiveCardView] = useState<Record<string, 'problem' | 'prototype' | 'impact'>>({});

  const filterTabs = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'freelance', label: '⭐ Freelance Paid Project' },
    { id: 'ai', label: 'AI & RevOps' },
    { id: 'analytics', label: 'Data Analytics' },
    { id: 'gtm', label: 'GTM Strategy' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'freelance') return project.isFreelancePaid;
    if (activeFilter === 'ai') return project.category.includes('AI') || project.category.includes('RevOps');
    if (activeFilter === 'analytics') return project.category.includes('Analytics');
    if (activeFilter === 'gtm') return project.category.includes('Whitespace') || project.category.includes('GTM');
    return true;
  });

  const getCardMode = (title: string): 'problem' | 'prototype' | 'impact' => {
    return activeCardView[title] || 'prototype';
  };

  const setCardMode = (title: string, mode: 'problem' | 'prototype' | 'impact') => {
    setActiveCardView((prev) => ({ ...prev, [title]: mode }));
  };

  return (
    <section id="projects" className="relative z-10 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Solution Workbench
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Technical Prototypes &amp; Consulting Work
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Every project diagnoses a real systemic friction, architects a working 0-to-1 prototype,
              and evaluates quantifiable commercial ROI.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-emerald-500 text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => {
            const mode = getCardMode(project.title);

            return (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35 }}
                className={`group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-md ${
                  project.isFreelancePaid
                    ? 'border-emerald-500/40 bg-gradient-to-b from-emerald-950/20 via-black/60 to-black/80 ring-1 ring-emerald-500/20 shadow-xl shadow-emerald-950/30'
                    : 'border-white/10 bg-gradient-to-b from-white/[0.04] to-black/60 hover:border-white/20'
                }`}
              >
                {/* Top Banner for Freelance Paid Project */}
                {project.isFreelancePaid && (
                  <div className="px-5 py-2.5 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 border-b border-emerald-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                      </span>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300">
                        Contracted Freelance Paid Project
                      </span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      Production GCP Deploy
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1">
                  {/* Category & Role */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {project.role}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Interactive Mode Toggle Bar */}
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-black/60 border border-white/10 mb-5">
                    <button
                      onClick={() => setCardMode(project.title, 'problem')}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        mode === 'problem'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>The Problem</span>
                    </button>

                    <button
                      onClick={() => setCardMode(project.title, 'prototype')}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        mode === 'prototype'
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Cpu className="w-3.5 h-3.5" />
                      <span>The Prototype</span>
                    </button>

                    <button
                      onClick={() => setCardMode(project.title, 'impact')}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        mode === 'impact'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Impact &amp; ROI</span>
                    </button>
                  </div>

                  {/* Dynamic Content Panel based on active mode */}
                  <div className="min-h-[170px]">
                    <AnimatePresence mode="wait">
                      {mode === 'problem' && (
                        <motion.div
                          key="problem"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="rounded-xl bg-amber-950/10 border border-amber-500/20 p-4 text-xs sm:text-sm text-amber-200/90 leading-relaxed"
                        >
                          <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold mb-1.5 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5" />
                            Business Bottleneck Identified
                          </div>
                          {project.businessProblem}
                        </motion.div>
                      )}

                      {mode === 'prototype' && (
                        <motion.div
                          key="prototype"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                        >
                          {project.solutionPrototype.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="font-mono text-emerald-400 text-xs shrink-0 mt-0.5">
                                [0{idx + 1}]
                              </span>
                              <span className="text-slate-300">{step}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {mode === 'impact' && (
                        <motion.div
                          key="impact"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-2 text-xs sm:text-sm leading-relaxed"
                        >
                          {project.impact.map((point, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 p-2 rounded-lg bg-emerald-500/[0.04] border border-emerald-500/10 text-slate-200"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => {
                      const link = SKILL_LINKS[tech];
                      return (
                        <a
                          key={tech}
                          href={link || '#'}
                          target={link ? '_blank' : undefined}
                          rel={link ? 'noopener noreferrer' : undefined}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors"
                        >
                          {tech}
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Link / Trigger */}
                {project.link && (
                  <div className="px-6 py-4 bg-black/40 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Live External Resource</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                    >
                      <span>{project.linkText || 'View Project'}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}

                {project.disclaimer && !project.link && (
                  <div className="px-6 py-3 bg-black/40 border-t border-white/10 text-[11px] font-mono text-slate-400">
                    ℹ️ {project.disclaimer}
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
