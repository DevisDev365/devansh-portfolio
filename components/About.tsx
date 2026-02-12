import React from 'react';
import { Reveal } from './ui/Reveal';
import { BIO, EDUCATION, TECHNICAL_SKILLS } from '../constants';
import { Code2, Users, GraduationCap, Trophy, TrendingUp, Clock, Target, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono text-6xl opacity-20 font-bold -ml-4">01</span>
            <div>
              <span className="text-accent font-mono text-sm tracking-wider uppercase block mb-1">The Origin</span>
              <h2 className="text-4xl font-bold text-white">About Me</h2>
            </div>
          </div>
        </Reveal>

        {/* Impact Dashboard - Graphics from README */}
        <Reveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: "Revenue Managed", val: "₹5+ Crore", icon: <TrendingUp className="text-green-500" />, desc: "Portfolio Value" },
              { label: "Workflow Automation", val: "87% Faster", icon: <Clock className="text-blue-500" />, desc: "Time Reduction" },
              { label: "Pricing Accuracy", val: "12% Up", icon: <Target className="text-red-500" />, desc: "Improvement" },
              { label: "Competition Rank", val: "Top 20", icon: <Trophy className="text-yellow-500" />, desc: "Nationally (1200+)" }
            ].map((stat, i) => (
              <div key={i} className="bg-[#0F0F0F] border border-white/5 p-6 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors group">
                <div className="mb-3 p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">{stat.icon}</div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.val}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-slate-600 font-mono text-[10px]">{stat.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Intro & Tech Stack */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <Reveal delay={200}>
              <div className="prose prose-invert text-slate-400 text-lg leading-relaxed p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-colors">
                {BIO.introduction.map((para, idx) => (
                  <p key={idx} className="mb-4 last:mb-0">{para}</p>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            {/* Tech Stack / Tools - Enhanced with Badges */}
            <Reveal delay={400}>
              <div className="bg-[#0a0a0a]/80 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-colors shadow-2xl">
                <h3 className="text-white font-mono text-lg mb-6 flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary">
                    <Code2 size={20} />
                  </div>
                  Technical Arsenal
                </h3>
                <p className="text-xs text-slate-500 mb-6 italic border-l-2 border-slate-700 pl-3">
                  "I use these to build business solutions—I'm not just writing code."
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
                <div className="mt-8 space-y-3 font-mono text-xs text-slate-500">
                  <div className="flex justify-between"><span>Business Strategy</span> <span className="text-green-500">██████████ 100%</span></div>
                  <div className="flex justify-between"><span>Data Analytics</span> <span className="text-blue-500">█████████░ 95%</span></div>
                  <div className="flex justify-between"><span>Python Auto</span> <span className="text-blue-400">████████░░ 80%</span></div>
                </div>
              </div>
            </Reveal>

            {/* Who I Work Best With */}
            <Reveal delay={500}>
              <div className="bg-[#0a0a0a]/80 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-primary/50 transition-colors shadow-2xl">
                <h3 className="text-white font-mono text-lg mb-6 flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-lg text-accent">
                    <Users size={20} />
                  </div>
                  Collaborators
                </h3>
                <ul className="space-y-3">
                  {BIO.idealCollaborators.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm group">
                      <span className="text-primary mt-1 group-hover:text-accent transition-colors">▹</span> {item}
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
                      <p className="text-slate-400 font-mono text-sm">{edu.institution}</p>
                      <span className="text-xs font-mono text-slate-600 border border-slate-800 px-2 py-0.5 rounded">{edu.year}</span>
                    </div>
                    {edu.gpa && <p className="text-accent text-xs mb-3">{edu.gpa}</p>}
                    <ul className="space-y-2">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-slate-500 text-sm">• {detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="text-primary" /> Trophy Case
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {/* Trophy 1 */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-4 rounded-lg border border-yellow-500/20 flex items-center gap-4">
                  <div className="bg-yellow-500/20 p-2 rounded-full text-yellow-500">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">AIMA Management Games</h4>
                    <p className="text-xs text-slate-400">Top 20 / 1200+ Teams (National)</p>
                  </div>
                </div>

                {/* Trophy 2 */}
                <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-lg border border-blue-500/20 flex items-center gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-full text-blue-500">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Youth's Voice (BCC&I)</h4>
                    <p className="text-xs text-slate-400">2nd Runner Up - Sustainability Strategy</p>
                  </div>
                </div>

                {/* Leadership Box */}
                <div className="bg-[#112240] p-6 rounded-lg border border-white/5 mt-4 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users size={80} />
                  </div>
                  <h4 className="text-white font-bold mb-1">INVICTUS Club Coordinator</h4>
                  <div className="flex gap-2 mb-3">
                    <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded">66% Reach Growth</span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">5x Engagement</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Leading data-driven culture and organizing events at DSB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* GitHub Snake Animation */}
        <Reveal delay={200}>
          <div className="mt-16 border-t border-white/5 pt-16">
            <h3 className="text-center text-slate-500 font-mono text-sm mb-8">MY CONTRIBUTION GRAPH</h3>
            <div className="flex justify-center grayscale hover:grayscale-0 transition-all duration-500">
              <picture>
                <source media="(prefers-color-scheme: dark)" srcSet="https://raw.githubusercontent.com/DevisDev365/DevisDev365/output/github-snake-dark.svg" />
                <source media="(prefers-color-scheme: light)" srcSet="https://raw.githubusercontent.com/DevisDev365/DevisDev365/output/github-snake.svg" />
                <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/DevisDev365/DevisDev365/output/github-snake.svg" className="w-full max-w-4xl opacity-80 hover:opacity-100" />
              </picture>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};