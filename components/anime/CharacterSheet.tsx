import React, { useState } from 'react';
import { Download, Phone, Linkedin, Github, Check, Copy, ExternalLink, Mail, MapPin } from 'lucide-react';
import { portfolioIdentity } from '../../content/portfolio-content.mjs';
import { RESUME_URL } from '../../constants';

interface CharacterSheetProps {
  playClick?: () => void;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = ({ playClick }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = () => {
    if (playClick) playClick();
    navigator.clipboard.writeText(portfolioIdentity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative pt-16 pb-10 px-4 sm:px-6 bg-[#0E0E0C] text-[#F3EEE4] border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Command Deck Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#19C37D] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#19C37D] uppercase tracking-wider">
                Enterprise Mandates &amp; Inquiries
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-[#F3EEE4] tracking-tight leading-snug">
              Ready to Expand Enterprise Revenue &amp; Automate Pipeline Velocity?
            </h2>

            <p className="text-sm sm:text-base text-[#8E8B82] leading-relaxed max-w-md">
              Available for enterprise SAP Business One commercial consulting, consultative solution prospecting, and custom AI outbound workflows.
            </p>

            {/* Instant Actions: Copy Email, Phone, Download Resume */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#1A1A18] hover:bg-[#252522] text-white font-medium text-xs sm:text-sm transition-colors border border-white/10 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono">devansh.khanna24@dsb.edu.in</span>
                  </>
                )}
              </button>

              <a
                href={portfolioIdentity.phoneUrl}
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#1A1A18] hover:bg-[#252522] text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition-colors border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono">+91 9870316839</span>
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick && playClick()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#19C37D] hover:bg-[#16aa6c] text-[#11110F] font-bold text-xs sm:text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Social Links & Crawlability Resources */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-start justify-end gap-8 text-xs pt-2 lg:pt-0">
            <div className="space-y-3">
              <span className="font-bold text-white/90 uppercase tracking-wider font-mono text-[11px] block">
                Network &amp; Profiles
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href={portfolioIdentity.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-[#19C37D] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
                <a
                  href={portfolioIdentity.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-[#19C37D] transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub Repositories</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <span className="font-bold text-white/90 uppercase tracking-wider font-mono text-[11px] block">
                Machine &amp; AI Access
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="font-mono">llms.txt</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
                <a
                  href="/portfolio.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="font-mono">portfolio.md</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sleek Signature Plate (Replaces the empty faint watermark) */}
        <div className="pt-8 pb-4 border-t border-white/10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 select-none">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xl sm:text-2xl font-black font-heading tracking-tight text-white">
                DEVANSH KHANNA
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#19C37D]/20 text-[#19C37D] border border-[#19C37D]/30">
                VERIFIED CANDIDATE
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mt-1 font-mono">
              <span>Business Development Executive</span>
              <span>·</span>
              <span>Elevra Tech</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>New Delhi, India</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-1 text-[11px] text-slate-500 font-mono">
            <div>MBA &apos;26 (Data Analytics &amp; Operations) · Delhi School of Business</div>
            <div>© {new Date().getFullYear()} Devansh Khanna. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
