import React from 'react';
import { Reveal } from './ui/RevealMotion';
import { Card3D } from './ui/Card3D';
import { TerminalLabel } from './ui/TerminalLabel';
import { PROJECTS, SKILL_LINKS } from '../constants';
import { ArrowUpRight, Target, BrainCircuit, Sparkles, ExternalLink, Zap, CheckCircle } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  const isFreelance = (project as any).isFreelancePaid;

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border transition-all duration-500 shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 ${
      isFreelance 
        ? 'border-primary/40 hover:border-primary bg-gradient-to-b from-primary/[0.04] to-black/60 shadow-primary/5' 
        : 'border-white/10 hover:border-primary/40'
    }`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/60 z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 p-6 md:p-10">

        {/* Left Column: Header & Context */}
        <div className="md:w-1/3 flex flex-col justify-between shrink-0">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-mono tracking-widest text-primary border border-primary/30 rounded-full bg-primary/10 uppercase">
                {project.category}
              </span>
              {isFreelance && (
                <span className="inline-flex items-center gap-1 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-black bg-primary rounded-full uppercase shadow-md shadow-primary/30">
                  <Zap size={11} className="fill-current" /> Paid Client Project
                </span>
              )}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 font-mono text-xs md:text-sm mb-6">{project.role}</p>

            <div className="hidden md:flex flex-col gap-4 mt-8">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white bg-primary/10 hover:bg-primary/20 border border-primary/30 px-4 py-2.5 rounded-lg transition-all w-fit"
                >
                  <ArrowUpRight size={16} /> {(project as any).linkText || 'View Live Project'}
                </a>
              )}
            </div>
          </div>
          <span className="text-6xl font-bold text-white/5 font-mono select-none hidden md:block">0{index + 1}</span>
        </div>

        {/* Right Column: Details */}
        <div className="md:w-2/3 space-y-6 border-l-0 md:border-l border-white/5 md:pl-8">
          
          {/* Problem */}
          <div className="bg-red-500/[0.04] p-4 rounded-xl border-l-2 border-red-500/40">
            <h4 className="flex items-center gap-2 text-red-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
              <Target size={14} /> The Business Bottleneck
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.businessProblem}
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="flex items-center gap-2 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <BrainCircuit size={14} /> Consultative Solution & Architecture
            </h4>
            <ul className="space-y-3">
              {Array.isArray(project.solutionPrototype) ? project.solutionPrototype.map((sol: string, i: number) => (
                <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></span>
                  <span>{sol}</span>
                </li>
              )) : (
                <li className="text-slate-300 text-sm leading-relaxed">{project.solutionPrototype}</li>
              )}
            </ul>
          </div>

          {/* Impact */}
          <div className="pt-2">
            <h4 className="flex items-center gap-2 text-green-400 text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles size={14} /> Measurable Business Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {project.impact.map((imp: string, i: number) => (
                <div key={i} className="flex items-start gap-2 text-xs text-green-300 bg-green-500/[0.04] p-2.5 rounded-lg border border-green-500/10">
                  <span className="text-green-400 font-bold mt-0.5">▲</span>
                  <span className="leading-snug">{imp}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => {
                const url = SKILL_LINKS[tech];
                const content = (
                  <span className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-[11px] font-mono text-slate-400 hover:text-primary hover:border-primary/30 transition-colors">
                    {tech}
                  </span>
                );
                return url ? (
                  <a key={tech} href={url} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <React.Fragment key={tech}>{content}</React.Fragment>
                );
              })}
            </div>

            {project.disclaimer && (
              <p className="mt-4 text-[11px] font-mono text-slate-500 italic">
                * {project.disclaimer}
              </p>
            )}
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden pt-4 border-t border-white/5">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-black font-bold text-xs rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink size={14} /> {(project as any).linkText || 'View Live Project'}
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal sweep>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-primary font-mono text-6xl opacity-20 font-bold -ml-4">03</span>
            <div>
              <TerminalLabel text="Consultative Prototyping & AI Systems" className="mb-1" />
              <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Projects & Client Solutions</h2>
              <p className="text-slate-400 text-sm md:text-base mt-1">
                From diagnosing commercial bottlenecks to architecting rapid AI prototypes and contracted freelance deliverables.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Consulting Logic Callout Banner */}
        <Reveal delay={100}>
          <div className="mb-12 p-5 rounded-2xl bg-gradient-to-r from-primary/[0.08] via-white/[0.02] to-transparent border border-primary/20 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/20 text-primary shrink-0">
                <CheckCircle size={20} />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-white">The Consulting & Rapid Prototyping Edge</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  I don't just analyze data—I identify the market problem, architect the pure consulting logic, and deliver working production prototypes within days.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20 shrink-0">
              <Sparkles size={13} /> 4 Live Prototyped Solutions
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <Card3D>
                <ProjectCard project={project} index={idx} />
              </Card3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

