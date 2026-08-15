import React from 'react';
import { Reveal } from './ui/RevealMotion';
import { SOCIALS, PERSONAL_EMAIL, SECONDARY_EMAIL } from '../constants';
import { Github, Linkedin, Phone, Mail, ExternalLink, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Phone': return <Phone size={20} />;
      case 'Email': return <Mail size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <section id="contact" className="pt-24 md:pt-32 pb-0 px-0 relative overflow-hidden">
      <div className="max-w-4xl mx-auto mb-20 px-6">
        <Reveal>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Let's Partner & Drive Measurable Value</h3>
          <div className="flex justify-center">
            <div className="bg-[#0a0a0a]/90 p-8 rounded-2xl border border-primary/20 w-full max-w-2xl shadow-xl shadow-primary/5 backdrop-blur-xl">
              <h4 className="text-primary font-mono text-sm font-bold mb-6 flex items-center gap-2">
                <Check size={18} /> Best aligned for:
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-primary font-bold">✓</span> Enterprise ERP & SAP consulting teams (SAP B1 / SAP S/4HANA)
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-primary font-bold">✓</span> Business Development & Sales leaders seeking pipeline expansion
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-primary font-bold">✓</span> RevOps & Operations teams wanting automated AI intelligence pipelines
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-primary font-bold">✓</span> Growth-stage B2B enterprises scaling strategic client acquisition
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-2xl mx-auto text-center flex flex-col items-center px-6 relative z-10">
        <Reveal delay={200}>
          <span className="text-primary font-mono text-xs mb-3 block uppercase tracking-widest">05. Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10">
            Open to high-impact SAP solution consulting, enterprise business development, and RevOps automation initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${PERSONAL_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-black font-bold hover:bg-primary/90 transition-all rounded-xl font-mono text-sm shadow-lg shadow-primary/20"
            >
              <Mail size={16} />
              Email Devansh
            </a>
            <a
              href="https://www.linkedin.com/in/devansh-khanna-618606178/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 text-slate-200 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all rounded-xl font-mono text-sm"
            >
              <Linkedin size={16} />
              LinkedIn Profile
              <ArrowUpRight size={14} />
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="mt-24 text-center text-slate-500 text-xs font-mono relative z-10 pb-8">
        <div className="flex justify-center gap-6 mb-4 md:hidden">
          {SOCIALS.map(social => (
            <a key={social.name} href={social.url} className="hover:text-primary transition-colors">
              {getIcon(social.name)}
            </a>
          ))}
        </div>
        <p className="hover:text-primary transition-colors cursor-default mb-1">
          © 2026 Devansh Khanna. All Rights Reserved.
        </p>
        <p className="text-slate-600 text-[11px]">
          Business Development Executive – SAP Consulting · Elevra Tech
        </p>
      </footer>

      {/* Waving Footer Graphic */}
      <div className="w-full mt-[-50px] md:mt-[-100px] opacity-20 pointer-events-none">
        <img
          src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer&text=&fontSize=0"
          className="w-full h-auto object-cover"
          alt="Footer Wave"
        />
      </div>
    </section>
  );
};

