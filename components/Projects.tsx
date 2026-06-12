import React from 'react';
import { Reveal } from './ui/RevealMotion';
import { Card3D } from './ui/Card3D';
import { TerminalLabel } from './ui/TerminalLabel';
import { PROJECTS, SKILL_LINKS } from '../constants';
import { ArrowUpRight, Target, BrainCircuit } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0], index: number }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all duration-500 shadow-2xl hover:shadow-primary/20 hover:-translate-y-1">
      {/* Content Layout */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/60 z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row gap-8 p-6 md:p-10">

        {/* Left Column: Header & Context */}
        <div className="md:w-1/3 flex flex-col justify-between shrink-0">
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-[10px] font-mono tracking-widest text-accent border border-accent/20 rounded bg-accent/5 uppercase">
              {project.category}
            </span>
            <h3 className="text-3xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-slate-500 font-mono text-sm mb-6">{project.role}</p>

            <div className="hidden md:flex flex-col gap-4 mt-8">
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                  <ArrowUpRight size={16} /> View Prototype
                </a>
              )}
            </div>
          </div>
          <span className="text-6xl font-bold text-white/5 font-mono select-none hidden md:block">0{index + 1}</span>
        </div>

        {/* Right Column: Details */}
        <div className="md:w-2/3 space-y-8 border-l-0 md:border-l border-white/5 md:pl-8">
          {/* Problem */}
          <div className="bg-red-500/5 p-4 rounded-xl border-l-2 border-red-500/30">
            <h4 className="flex items-center gap-2 text-red-400 text-[10px] font-bold uppercase tracking-wider mb-2">
              <Target size={14} /> The Problem
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed italic opacity-90">
              "{project.businessProblem}"
            </p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="flex items-center gap-2 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-3">
              <BrainCircuit size={14} /> The Solution
            </h4>
            <ul className="space-y-3">
              {Array.isArray(project.solutionPrototype) ? project.solutionPrototype.slice(0, 3).map((sol: string, i: number) => (
                <li key={i} className="flex gap-3 text-slate-400 text-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></span>
                  <span className="leading-relaxed">{sol}</span>
                </li>
              )) : (
                <li className="text-slate-400 text-sm">{project.solutionPrototype}</li>
              )}
            </ul>
          </div>

          {/* Impact & Tech */}
          <div className="pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-4 mb-6">
              {project.impact.slice(0, 3).map((imp: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs text-green-300/90 bg-green-500/5 px-2 py-1 rounded border border-green-500/10">
                  <span>▲</span> {imp}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech: string) => {
                const url = SKILL_LINKS[tech];
                const content = (
                  <span className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] font-mono text-slate-500 hover:text-primary hover:border-primary/30 transition-colors">
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
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden gap-4 pt-4 border-t border-white/5">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white text-black rounded hover:bg-slate-200 transition-colors">
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal sweep>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-6xl opacity-20 font-bold -ml-4">03</span>
            <div>
              <TerminalLabel text="Selected Works" className="mb-1" />
              <h2 className="text-4xl font-bold text-white">Business Prototypes</h2>
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
