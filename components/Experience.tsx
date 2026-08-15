import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/RevealMotion';
import { TerminalLabel } from './ui/TerminalLabel';
import { EXPERIENCE, SKILL_LINKS } from '../constants';
import { Briefcase, Building2, MapPin, Calendar, ArrowUpRight, TrendingUp, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <Reveal sweep>
          <div className="flex items-center gap-4 mb-16 md:mb-20">
            <span className="text-primary font-mono text-6xl opacity-20 font-bold -ml-4">02</span>
            <div>
              <TerminalLabel text="Career Milestones" className="mb-1" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Work Experience</h2>
              <p className="text-slate-400 text-sm md:text-base mt-1">
                Enterprise SaaS consulting, RevOps execution, and ₹5Cr+ client lifecycle ownership.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Continuous Vertical Timeline Stream (Zero Clicks Required) */}
        <div className="relative">
          
          {/* Vertical Timeline Spine Line */}
          <div className="absolute left-4 md:left-8 top-4 bottom-8 w-px bg-gradient-to-b from-primary via-primary/30 to-slate-800 hidden sm:block"></div>

          <div className="space-y-12 md:space-y-16">
            {EXPERIENCE.map((exp, idx) => {
              const isCurrent = exp.period.includes('Present');

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative sm:pl-16 md:pl-20"
                >
                  {/* Timeline Milestone Node */}
                  <div className="absolute left-0 top-6 hidden sm:flex items-center justify-center">
                    <div className={`w-8 md:w-10 h-8 md:h-10 rounded-full border-2 flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                      isCurrent
                        ? 'border-primary bg-primary/20 shadow-[0_0_20px_rgba(0,228,124,0.4)] text-primary'
                        : 'border-slate-700 bg-black/80 text-slate-400 hover:border-primary/50'
                    }`}>
                      {isCurrent ? <Sparkles size={16} className="animate-pulse" /> : <Briefcase size={14} />}
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={`group rounded-2xl border bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                    isCurrent
                      ? 'border-primary/40 hover:border-primary bg-gradient-to-b from-primary/[0.04] to-transparent shadow-primary/5'
                      : 'border-white/10 hover:border-white/20'
                  }`}>
                    
                    {/* Header: Role, Company & Status */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/30 animate-pulse">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              CURRENT ROLE
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-1.5 text-primary font-medium">
                            <Building2 size={16} />
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline flex items-center gap-1 text-primary hover:text-white transition-colors"
                              >
                                {exp.company}
                                <ArrowUpRight size={14} />
                              </a>
                            ) : (
                              <span>{exp.company}</span>
                            )}
                          </div>

                          {(exp as any).location && (
                            <div className="flex items-center gap-1 text-slate-500 font-mono text-xs">
                              <MapPin size={13} />
                              <span>{(exp as any).location}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Date Chip */}
                      <div className="flex items-center gap-2 self-start md:self-auto px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 shrink-0">
                        <Calendar size={13} className="text-primary" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Business Challenge Box */}
                    <div className="mt-6 p-4 md:p-5 rounded-xl bg-red-500/[0.04] border-l-2 border-red-400/60 border border-red-500/10">
                      <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                        <AlertCircle size={14} />
                        <span>Business Challenge & Scope</span>
                      </div>
                      <p className="text-slate-300 text-sm md:text-[15px] leading-relaxed">
                        {exp.businessChallenge}
                      </p>
                    </div>

                    {/* 2-Column: Solutions & Impact */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                      
                      {/* Solutions Delivered */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2 font-bold mb-4">
                          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                          Solutions & Responsibilities
                        </h4>
                        <ul className="space-y-3.5">
                          {exp.solutions.map((sol, sIndex) => (
                            <li key={sIndex} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                              <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
                              <span>{sol}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Quantifiable Impact */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-green-400 flex items-center gap-2 font-bold mb-4">
                          <span className="w-2 h-2 rounded-full bg-green-400"></span>
                          Key Business Impact
                        </h4>
                        <ul className="space-y-3.5">
                          {exp.impact.map((imp, iIndex) => (
                            <li key={iIndex} className="flex items-start gap-3 text-slate-200 text-sm font-medium leading-relaxed bg-green-500/[0.03] p-3 rounded-lg border border-green-500/10 hover:border-green-500/20 transition-colors">
                              <TrendingUp size={16} className="text-green-400 mt-0.5 shrink-0" />
                              <span>{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Skill Tags */}
                    <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-500 mr-2 uppercase tracking-wider">Competencies:</span>
                      {exp.skills.map((skill, sIdx) => {
                        const url = SKILL_LINKS[skill];
                        const content = (
                          <span className="px-3 py-1 bg-white/5 hover:bg-primary/10 transition-colors text-slate-300 hover:text-primary rounded-lg text-xs font-mono border border-white/5 hover:border-primary/30">
                            {skill}
                          </span>
                        );
                        return url ? (
                          <a key={sIdx} href={url} target="_blank" rel="noopener noreferrer">
                            {content}
                          </a>
                        ) : (
                          <React.Fragment key={sIdx}>{content}</React.Fragment>
                        );
                      })}
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};