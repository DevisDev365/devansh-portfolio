import React, { useState } from 'react';
import { Download, Phone, Linkedin, Github, Check, Copy, ExternalLink, Mail } from 'lucide-react';
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
    <footer id="contact" className="relative py-20 px-4 sm:px-6 bg-[#11110F] text-[#F3EEE4] border-t border-[#F3EEE4]/10">
      <div className="max-w-6xl mx-auto">
        {/* Command Deck Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-[#19C37D] uppercase tracking-wider block">
              Contact &amp; Engagement
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#F3EEE4] uppercase tracking-tight">
              Ready to Architect Scalable Systems?
            </h2>
            <p className="text-sm sm:text-base text-[#8E8B82] leading-relaxed max-w-md">
              Available for enterprise SAP Business One consulting discussions, consultative business development mandates, and custom AI workflow automation projects.
            </p>

            {/* Instant Copy Email Action & Phone */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E1322] hover:bg-[#141B30] text-white font-semibold text-xs sm:text-sm transition-colors border border-white/10"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>devansh.khanna24@dsb.edu.in</span>
                  </>
                )}
              </button>

              <a
                href={portfolioIdentity.phoneUrl}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E1322] hover:bg-[#141B30] text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-colors border border-white/10"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span>+91 9870316839</span>
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick && playClick()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV Dossier</span>
              </a>
            </div>
          </div>

          {/* Social Links & Crawlability Resources */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-start justify-end gap-8 text-xs">
            <div className="space-y-3">
              <span className="font-bold text-slate-300 block">
                Network Channels
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href={portfolioIdentity.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
                <a
                  href={portfolioIdentity.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub Repositories</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <span className="font-bold text-slate-300 block">
                AI &amp; Crawler Access
              </span>
              <div className="flex flex-col gap-2.5">
                <a
                  href="/llms.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>llms.txt (Full AI Context)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
                <a
                  href="/portfolio.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>portfolio.md (Markdown Dossier)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Monumental Footer Wordmark */}
        <div className="pt-12 pb-6 text-center select-none border-t border-white/5">
          <div className="text-[clamp(2rem,11vw,8rem)] font-black uppercase tracking-tight text-white/[0.06] leading-none">
            DEVANSH KHANNA
          </div>
          <p className="mt-4 text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Devansh Khanna · Built with Logic, React &amp; Precision
          </p>
        </div>
      </div>
    </footer>
  );
};
