import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { bio, education } from '../content/portfolio-content.mjs';
import { Users2, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'collaborators' | 'education'>('overview');

  return (
    <section id="about" className="relative z-10 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About &amp; Core Strategic Focus
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Bridging enterprise ERP consulting, AI-driven prototyping, and consultative revenue operations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 p-1.5 rounded-2xl bg-[#0e121d] border border-white/10 max-w-md mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === 'overview'
                ? 'bg-emerald-500 text-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('collaborators')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === 'collaborators'
                ? 'bg-emerald-500 text-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Ideal Collaborators
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors ${
              activeTab === 'education'
                ? 'bg-emerald-500 text-black'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Education &amp; Leadership
          </button>
        </div>

        {/* Dynamic Tab Body */}
        <div className="rounded-2xl border border-white/10 bg-[#0e121d] p-6 sm:p-8">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {bio.heading}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                {bio.introduction.map((para: string, i: number) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Core Competencies Matrix */}
              <div className="pt-6 space-y-4">
                <div className="text-sm font-bold text-slate-300">
                  Competency Domains
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bio.coreCompetencies.map((comp: any, idx: number) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#08090D] border border-white/10 hover:border-emerald-500/30 transition-colors"
                    >
                      <h4 className="text-sm font-bold text-emerald-400 mb-2">{comp.category}</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {comp.skills.map((skill: string, sIdx: number) => (
                          <span
                            key={sIdx}
                            className="text-xs px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'collaborators' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ideal Ecosystem Partners</h3>
                <p className="text-sm text-slate-400">
                  Who benefits most from this intersection of enterprise SAP consulting, rapid AI prototyping, and revenue operations:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {bio.idealCollaborators.map((collab: string, idx: number) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-white/10 bg-[#08090D] flex items-start gap-3 hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-emerald-400 font-bold mb-1">
                        PARTNER COHORT {idx + 1}
                      </div>
                      <p className="text-sm text-slate-200 font-medium leading-relaxed">{collab}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'education' && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="space-y-6">
                {education.map((edu: any, idx: number) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-white/10 bg-[#08090D] space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                        <p className="text-sm text-emerald-400">{edu.institution}</p>
                      </div>
                      <span className="text-xs text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-md self-start sm:self-auto border border-white/5 font-semibold">
                        Graduated {edu.year}
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      {edu.details.map((detail: string, dIdx: number) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
