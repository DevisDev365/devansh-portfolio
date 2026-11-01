import React from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../content/portfolio-content.mjs';
import { Trophy, Award, CheckCircle2, Star } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative z-10 py-20 px-4 sm:px-6 bg-black/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-emerald-400" />
            Accreditations &amp; Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Honors, Simulations &amp; Executive Credentials
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
            Recognized in national B-school business simulations, student leadership, and analytics credentials.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.map((item: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/60 backdrop-blur-md flex flex-col justify-between hover:border-emerald-500/40 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    HONOR 0{idx + 1}
                  </span>
                  <Award className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-medium text-slate-400 mb-3">{item.organization}</div>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Card */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-950/20 via-black/40 to-cyan-950/20 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">Professional Certifications</h3>
          </div>

          <div className="space-y-4">
            {certifications.map((cert: any, idx: number) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <h4 className="text-base font-bold text-white">{cert.title}</h4>
                  <p className="text-xs text-emerald-400 mt-0.5">{cert.issuer} • {cert.year}</p>
                  <p className="text-xs text-slate-400 mt-1">{cert.description}</p>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 self-start sm:self-auto shrink-0">
                  Verified Credential
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
