import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experience } from '../content/portfolio-content.mjs';
import { Experience as ExperienceType } from '../types';
import { SKILL_LINKS } from '../constants';
import {
  Briefcase,
  Building,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState<number>(0);
  const currentExp: ExperienceType = experience[activeCompanyIndex];

  return (
    <section id="experience" className="relative z-10 py-20 px-4 sm:px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            Commercial Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Experience &amp; Account Track Record
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Driving revenue expansion, consulting on enterprise SAP Business One architectures, and
            automating operational workflows across global OEM &amp; SaaS ecosystems.
          </p>
        </div>

        {/* Interactive Layout: Company Tabs on Top / Left + Rich Content Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Company Selector Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {experience.map((item: ExperienceType, idx: number) => {
              const isActive = activeCompanyIndex === idx;
              return (
                <button
                  key={item.company}
                  onClick={() => setActiveCompanyIndex(idx)}
                  className={`text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 relative group ${
                    isActive
                      ? 'border-emerald-500/50 bg-emerald-950/20 shadow-lg shadow-emerald-950/20'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-base font-bold transition-colors ${
                        isActive ? 'text-emerald-300' : 'text-white group-hover:text-slate-200'
                      }`}
                    >
                      {item.company}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive
                          ? 'text-emerald-400 translate-x-1'
                          : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    />
                  </div>

                  <div className="text-xs font-medium text-slate-300 mb-2">{item.role}</div>

                  <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeExpBar"
                      className="absolute inset-y-0 left-0 w-1 bg-emerald-400 rounded-l-xl"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Experience Pane */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentExp.company}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/60 p-6 sm:p-8 backdrop-blur-md"
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-2xl font-bold text-white">{currentExp.company}</h3>
                      {currentExp.companyUrl && (
                        <a
                          href={currentExp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-emerald-400 transition-colors"
                          title="Visit Company Website"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-emerald-400">{currentExp.role}</div>
                  </div>

                  <div className="text-xs font-mono text-slate-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto">
                    {currentExp.period} • {currentExp.location}
                  </div>
                </div>

                {/* Business Challenge */}
                <div className="py-5 border-b border-white/10">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                    Strategic Mandate
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed italic bg-white/[0.02] p-3.5 rounded-xl border border-white/5">
                    "{currentExp.businessChallenge}"
                  </p>
                </div>

                {/* Solutions Delivered */}
                <div className="py-5 border-b border-white/10">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                    Core Solutions Executed
                  </div>
                  <div className="space-y-3">
                    {currentExp.solutions.map((sol: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Measurable Impact */}
                <div className="py-5 border-b border-white/10">
                  <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 font-semibold flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Validated Business Impact
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentExp.impact.map((imp: string, idx: number) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-200 font-medium leading-relaxed"
                      >
                        ⚡ {imp}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="pt-5">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                    Competencies &amp; Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentExp.skills.map((skill: string) => {
                      const link = SKILL_LINKS[skill];
                      return (
                        <a
                          key={skill}
                          href={link || '#'}
                          target={link ? '_blank' : undefined}
                          rel={link ? 'noopener noreferrer' : undefined}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/30 transition-colors"
                        >
                          {skill}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
