import React from 'react';
import { Reveal } from './ui/RevealMotion';
import { AnimatedStat } from './ui/AnimatedStat';
import { TerminalLabel } from './ui/TerminalLabel';
import { BIO, EDUCATION, TECHNICAL_SKILLS, CERTIFICATIONS } from '../constants';
import { Code2, Users, GraduationCap, Trophy, TrendingUp, Clock, Target, Award, BadgeCheck, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header */}
        <Reveal sweep>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono text-6xl opacity-20 font-bold -ml-4">01</span>
            <div>
              <TerminalLabel text="The Background" className="mb-1" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">About & Core Competencies</h2>
              <p className="text-slate-400 text-sm md:text-base mt-1">
                Bridging enterprise SAP consulting, business development, and AI workflow automation.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Impact Dashboard */}
        <Reveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Client Retention", val: "95%+", icon: <ShieldCheck className="text-emerald-400" />, desc: "Account Retention Rate" },
              { label: "Revenue Managed", val: "₹5+ Crore", icon: <TrendingUp className="text-primary" />, desc: "Managed OEM / ARR" },
              { label: "Workflow Automation", val: "87% Faster", icon: <Clock className="text-blue-400" />, desc: "ERP Cycle Time Cut" },
              { label: "National Rank", val: "Top 20", icon: <Trophy className="text-yellow-400" />, desc: "AIMA Games (1,200+ Teams)" }
            ].map((stat, i) => (
              <AnimatedStat key={i} {...stat} />
            ))}
          </div>
        </Reveal>

        {/* Bio & Core Competency Pillars */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <Reveal delay={200}>
              <div className="prose prose-invert text-slate-300 text-base md:text-lg leading-relaxed p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl">
                {BIO.introduction.map((para, idx) => (
                  <p key={idx} className="mb-4 last:mb-0 leading-relaxed text-slate-300">{para}</p>
                ))}
              </div>
            </Reveal>

            {/* Core Competency Frameworks from CV */}
            {(BIO as any).coreCompetencies && (
              <Reveal delay={300}>
                <div className="p-6 md:p-8 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 space-y-6">
                  <h3 className="text-white font-mono text-base font-bold flex items-center gap-2">
                    <Zap size={18} className="text-primary" />
                    Core Competency Frameworks
                  </h3>

                  <div className="space-y-4">
                    {(BIO as any).coreCompetencies.map((comp: any, idx: number) => (
                      <div key={idx} className="border-l-2 border-primary/40 pl-4 py-1">
                        <span className="text-xs font-mono font-bold text-primary uppercase tracking-wider block mb-1.5">
                          {comp.category}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {comp.skills.map((item: string, i: number) => (
                            <span key={i} className="text-[11px] font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <div className="space-y-8">
            {/* Tech Stack / Tools */}
            <Reveal delay={400}>
              <div className="bg-[#0a0a0a]/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors shadow-2xl">
                <h3 className="text-white font-mono text-lg mb-4 flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <Code2 size={20} />
                  </div>
                  Technical & Systems Arsenal
                </h3>
                <p className="text-xs text-slate-400 mb-6 italic border-l-2 border-slate-700 pl-3">
                  "I direct AI models and leverage data systems to build working business solutions."
                </p>
                <div className="flex flex-wrap gap-2">
                  {TECHNICAL_SKILLS.map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-105 transition-transform"
                    >
                      <img src={skill.badge} alt={skill.name} className="h-6 md:h-7 rounded shadow-sm" />
                    </a>
                  ))}
                </div>

                {/* Skill Proficiency Graphic representation */}
                <div className="mt-8 space-y-3 font-mono text-xs text-slate-400">
                  <div className="flex justify-between"><span>SAP Consulting & Solutions</span> <span className="text-emerald-400">██████████ 100%</span></div>
                  <div className="flex justify-between"><span>Enterprise ERP & RevOps</span> <span className="text-blue-400">█████████░ 95%</span></div>
                  <div className="flex justify-between"><span>AI Workflow Automation</span> <span className="text-purple-400">██████████ 100%</span></div>
                </div>
              </div>
            </Reveal>

            {/* Who I Work Best With */}
            <Reveal delay={500}>
              <div className="bg-[#0a0a0a]/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors shadow-2xl">
                <h3 className="text-white font-mono text-lg mb-6 flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-lg text-accent">
                    <Users size={20} />
                  </div>
                  Strategic Alignment & Collaborators
                </h3>
                <ul className="space-y-3.5">
                  {BIO.idealCollaborators.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm group">
                      <span className="text-primary mt-0.5 group-hover:text-accent transition-colors">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Education & Trophy Case */}
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent"></div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 pl-6">
                <GraduationCap className="text-primary" /> Education
              </h3>
              <div className="space-y-12 pl-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{edu.degree}</h4>
                    <div className="flex justify-between items-center mt-1 mb-2">
                      <p className="text-slate-300 font-mono text-sm">{edu.institution}</p>
                      <span className="text-xs font-mono text-slate-400 border border-slate-700 bg-slate-900/60 px-2 py-0.5 rounded">{edu.year}</span>
                    </div>
                    {edu.gpa && <p className="text-primary text-xs font-mono font-medium mb-3">{edu.gpa}</p>}
                    <ul className="space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-slate-400 text-sm leading-relaxed">• {detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-primary" /> Trophy Case & Recognition
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {/* Trophy 1 */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-4 rounded-xl border border-yellow-500/20 flex items-center gap-4">
                  <div className="bg-yellow-500/20 p-2.5 rounded-full text-yellow-400 shrink-0">
                    <Trophy size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">AIMA Student Management Games 2024</h4>
                    <p className="text-xs text-slate-300">National Finalist & Regional 1st Runner-Up (Top 20 / 1,200+ Teams)</p>
                  </div>
                </div>

                {/* Trophy 2 */}
                <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-xl border border-blue-500/20 flex items-center gap-4">
                  <div className="bg-blue-500/20 p-2.5 rounded-full text-blue-400 shrink-0">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Youth's Voice (BCC&I x NTPC)</h4>
                    <p className="text-xs text-slate-300">2nd Runner Up — Sustainable Strategy Framework</p>
                  </div>
                </div>

                {/* Leadership Box */}
                <div className="bg-[#112240]/80 p-6 rounded-xl border border-white/10 mt-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users size={80} />
                  </div>
                  <h4 className="text-white font-bold mb-1">INVICTUS Data Analysis Club Coordinator</h4>
                  <p className="text-xs text-primary font-mono mb-3">Delhi School of Business, Delhi NCR</p>
                  <div className="flex gap-2 mb-3">
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/30">66% Reach Growth</span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30">5x Engagement (50-member team)</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Spearheaded data analytics culture, live hackathons, and corporate workshops across university campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={100}>
          <div className="border-t border-white/5 pt-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <BadgeCheck className="text-primary" /> Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="bg-[#0F0F0F] border border-white/5 hover:border-primary/30 transition-colors p-5 rounded-xl flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{cert.title}</h4>
                    <p className="text-xs text-slate-500 font-mono mb-2">{cert.issuer} · {cert.year}</p>
                    {cert.description && <p className="text-slate-300 text-xs leading-relaxed">{cert.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};