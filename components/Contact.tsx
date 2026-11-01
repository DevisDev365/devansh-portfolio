import React, { useState } from 'react';
import { portfolioIdentity, socials } from '../content/portfolio-content.mjs';
import { RESUME_URL, PERSONAL_EMAIL, SECONDARY_EMAIL } from '../constants';
import { Mail, Phone, Linkedin, Github, Download, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative z-10 py-20 px-4 sm:px-6 border-t border-white/10 bg-black/80">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Callout */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let's Solve Systemic Problems &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Expand Revenue.
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Available for enterprise SAP consulting, rapid AI prototyping advisory, and commercial
              revenue expansion mandates.
            </p>

            {/* Quick 1-Click Copy Email Button */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-white transition-all text-sm font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-mono text-xs">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="font-mono text-xs">{PERSONAL_EMAIL}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_EMAIL}`}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>

          {/* Quick Channels Card */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4 backdrop-blur-md">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Direct Contact Channels
            </div>

            <div className="space-y-2.5">
              <a
                href={portfolioIdentity.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a
                href={portfolioIdentity.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">GitHub Repository</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a
                href={portfolioIdentity.phoneUrl}
                className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium">{portfolioIdentity.phone}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-300 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold">Download Full Resume (Google Drive)</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} {portfolioIdentity.name}. Built with React, TypeScript &amp; Framer Motion.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://portfolio.devanshkhanna.online/llms.txt" className="hover:text-slate-300 underline underline-offset-2">
              llms.txt
            </a>
            <a href="https://portfolio.devanshkhanna.online/portfolio.md" className="hover:text-slate-300 underline underline-offset-2">
              portfolio.md
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
