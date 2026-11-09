import React, { useState } from 'react';
import { portfolioIdentity } from '../content/portfolio-content.mjs';
import { RESUME_URL, PERSONAL_EMAIL } from '../constants';
import { Mail, Phone, Linkedin, Github, Download, Copy, Check, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative z-10 pt-16 pb-12 px-4 sm:px-6 bg-[#08090D] border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Main Callout */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider uppercase">
                Open for Strategic Mandates &amp; Enterprise Roles
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading tracking-tight text-white leading-tight">
              Let&apos;s Solve Systemic Problems &amp;{' '}
              <span className="text-emerald-400">
                Expand Revenue.
              </span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Available for enterprise SAP Business One consulting, GTM outbound intelligence advisory, and commercial revenue expansion mandates.
            </p>

            {/* Quick 1-Click Copy Email & Direct Mail CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e121d] border border-white/10 hover:border-emerald-500/40 text-slate-200 hover:text-white transition-colors text-xs font-medium cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono">{PERSONAL_EMAIL}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PERSONAL_EMAIL}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>

          {/* Direct Channels Card */}
          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#0e121d] p-5 space-y-2.5">
            <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-400 mb-1">
              Direct Channels &amp; Credentials
            </div>

            <a
              href={portfolioIdentity.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#08090D] border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Linkedin className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-medium">LinkedIn Profile</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            <a
              href={portfolioIdentity.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#08090D] border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Github className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-medium">GitHub Repository</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            <a
              href={portfolioIdentity.phoneUrl}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#08090D] border border-white/5 hover:border-emerald-500/30 text-slate-300 hover:text-white transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-medium">{portfolioIdentity.phone}</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/25 border border-emerald-500/40 hover:border-emerald-500/70 text-emerald-300 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Download className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm font-semibold">Download Full Resume (PDF)</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Sleek Signature Nameplate */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-white">
              DEVANSH KHANNA
            </div>
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-400 mt-1 font-mono">
              <span className="text-emerald-400 font-semibold">Business Development · Enterprise Solutions</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>New Delhi, India</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-1.5 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <a
                href="https://portfolio.devanshkhanna.online/llms.txt"
                className="hover:text-slate-300 underline underline-offset-2 font-mono"
              >
                llms.txt
              </a>
              <span className="text-slate-700">|</span>
              <a
                href="https://portfolio.devanshkhanna.online/portfolio.md"
                className="hover:text-slate-300 underline underline-offset-2 font-mono"
              >
                portfolio.md
              </a>
            </div>
            <div className="text-[11px] text-slate-600">
              © {new Date().getFullYear()} Devansh Khanna. Designed for 8–10s recruiter clarity.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
