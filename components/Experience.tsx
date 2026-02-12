import React, { useState } from 'react';
import { Reveal } from './ui/Reveal';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-6xl opacity-20 font-bold -ml-4">02</span>
            <div>
               <span className="text-accent font-mono text-sm tracking-wider uppercase block mb-1">The Journey</span>
               <h2 className="text-4xl font-bold text-white">Work Experience</h2>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-800 min-w-max h-fit sticky top-24">
            {EXPERIENCE.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-4 text-left font-mono text-sm transition-all duration-300 border-l-2 md:border-l-2 md:border-b-0 -mb-[2px] md:mb-0 md:-ml-[2px] whitespace-nowrap ${
                  activeTab === idx
                    ? 'border-primary text-primary bg-primary/10'
                    : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-white/5'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[400px] relative">
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 absolute top-0 left-0 w-full ${
                  activeTab === idx ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-4 absolute pointer-events-none'
                }`}
              >
                <Reveal width="100%">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                     <div>
                        <h3 className="text-2xl font-bold text-white">
                            {exp.role} 
                        </h3>
                        <p className="text-primary text-lg">@ {exp.company}</p>
                     </div>
                     <span className="font-mono text-xs text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-white/5">{exp.period}</span>
                  </div>
                  
                  <div className="space-y-8 mt-8">
                    {/* Business Challenge */}
                    <div className="bg-red-500/5 p-6 rounded-lg border-l-2 border-red-500 backdrop-blur-sm">
                      <h4 className="text-red-400 font-bold mb-2 text-xs uppercase tracking-wider">Business Challenge</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{exp.businessChallenge}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Solutions */}
                        <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Solutions
                        </h4>
                        <ul className="space-y-4">
                            {exp.solutions.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                                <span className="text-primary mt-1.5 text-[10px]">▹</span>
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                        </div>

                        {/* Impact */}
                        <div>
                        <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Impact
                        </h4>
                        <ul className="space-y-4">
                            {exp.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-300 font-medium text-sm">
                                <span className="text-green-500 mt-1.5 text-[10px]">▲</span>
                                <span>{item}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="pt-6 border-t border-slate-800/50 flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1 bg-slate-800/50 hover:bg-slate-700/50 transition-colors text-slate-400 rounded text-xs font-mono border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};