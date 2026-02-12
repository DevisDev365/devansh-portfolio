import React from 'react';
import { Reveal } from './ui/Reveal';
import { SOCIALS } from '../constants';
import { Github, Linkedin, Phone, Mail, ExternalLink, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Phone': return <Phone size={20} />;
      default: return <ExternalLink size={20} />;
    }
  };

  return (
    <section id="contact" className="pt-24 md:pt-32 pb-0 px-0 relative overflow-hidden">
      <div className="max-w-4xl mx-auto mb-24 px-6">
        <Reveal>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Let's Solve Business Problems Together</h3>
          <div className="flex justify-center">
            <div className="bg-[#112240] p-8 rounded-lg border border-green-500/20 w-full max-w-2xl shadow-lg shadow-green-900/10">
              <h4 className="text-green-400 font-bold mb-6 flex items-center gap-2">
                <Check size={20} /> I work best with:
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-green-500">✓</span> Consulting firms needing rapid prototyping capabilities
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-green-500">✓</span> Strategy teams looking for AI-powered decision tools
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-green-500">✓</span> Operations leaders wanting data-driven optimization
                </li>
                <li className="flex gap-3 text-slate-300 text-sm">
                  <span className="text-green-500">✓</span> Startups in SaaS, FinTech, or AI spaces
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="max-w-2xl mx-auto text-center flex flex-col items-center px-6 relative z-10">
        <Reveal delay={200}>
          <span className="text-primary font-mono mb-4 block">04. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-12">
            In-office first / Hybrid OK. Open for Consulting, Strategy, Business Analytics, or Revenue Operations roles.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="mailto:devanshkhanna75@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary hover:bg-primary/10 transition-all rounded font-mono text-sm group"
            >
              <Mail size={16} className="group-hover:animate-bounce" />
              Say Hello
            </a>
            <a 
              href="tel:+919870316839"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all rounded font-mono text-sm"
            >
              <Phone size={16} />
              Call Me
            </a>
          </div>
        </Reveal>
      </div>

      <footer className="mt-24 text-center text-slate-500 text-sm font-mono relative z-10 pb-8">
        <div className="flex justify-center gap-6 mb-4 md:hidden">
          {SOCIALS.map(social => (
            <a key={social.name} href={social.url} className="hover:text-primary transition-colors">
              {getIcon(social.name)}
            </a>
          ))}
        </div>
        <p className="hover:text-primary transition-colors cursor-default mb-2">
          © 2026 Devansh Khanna. All Rights Reserved.
        </p>
        <p className="opacity-50">Vibe Coding & Management</p>
      </footer>
      
      {/* Waving Footer Graphic */}
      <div className="w-full mt-[-50px] md:mt-[-100px] opacity-20 pointer-events-none">
         <img 
            src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=footer&text=&fontSize=0" 
            className="w-full h-auto object-cover"
            alt="Footer Wave" 
         />
      </div>
    </section>
  );
};