import React, { useState } from 'react';
import { Download, Phone, Linkedin, Github, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { portfolioIdentity } from '../../content/portfolio-content.mjs';
import { RESUME_URL } from '../../constants';

interface CharacterSheetProps {
  playClick?: () => void;
}

export const CharacterSheet: React.FC<CharacterSheetProps> = ({ playClick }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const attributes = [
    {
      skill: 'SAP Business One Architecture',
      level: 'Level 94',
      progress: 94,
      desc: 'Requirement mapping, consultative add-on fit, lifecycle management, and proactive account health scoring.',
    },
    {
      skill: 'AI Workflow Architecture & n8n',
      level: 'Level 92',
      progress: 92,
      desc: 'Autonomous lead engines, Gemini Live API conversational voice agents, and GCP auto-scaling in 48 hours.',
    },
    {
      skill: 'Empirical RevOps & Data Analytics',
      level: 'Level 90',
      progress: 90,
      desc: '87% time cuts in ERP reporting, quantitative RFQ margin forecasting (+12%), and SQL/Excel automation.',
    },
    {
      skill: 'Consultative BD & Outbound GTM',
      level: 'Level 88',
      progress: 88,
      desc: 'Key account growth (₹5Cr ARR), C-suite alignment, 200+ cold outreach calls, and 1,200+ leads cleansed.',
    },
  ];

  const copyEmail = () => {
    if (playClick) playClick();
    navigator.clipboard.writeText(portfolioIdentity.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative py-24 px-4 sm:px-6 bg-[#05060A]">
      <div className="max-w-6xl mx-auto">
        {/* RPG Character Sheet Matrix */}
        <div data-ui className="mb-20 rounded-2xl bg-[#090D17] p-6 sm:p-10 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Player Character Sheet</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Specialized Competency Matrix
              </h3>
            </div>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick && playClick()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] active:scale-[0.98] shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Download Character Dossier (CV)</span>
            </a>
          </div>

          {/* Level Bars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {attributes.map((attr) => (
              <div key={attr.skill} className="p-4 rounded-xl bg-[#06080E] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-white">{attr.skill}</span>
                  <span className="text-emerald-400">{attr.level}</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-400 rounded-full"
                    style={{ width: `${attr.progress}%` }}
                  />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {attr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Command Deck Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Ready to Architect Scalable Systems?
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Available for enterprise SAP Business One consulting discussions, consultative business development mandates, and custom AI workflow automation projects.
            </p>

            {/* Instant Copy Email Action */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E1322] hover:bg-[#141B30] text-white font-semibold text-xs sm:text-sm transition-colors"
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
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E1322] hover:bg-[#141B30] text-slate-300 hover:text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span>+91 9870316839</span>
              </a>
            </div>
          </div>

          {/* Social Links & Crawlability Resources */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-start justify-end gap-6 text-xs">
            <div className="space-y-3">
              <span className="font-bold text-slate-400 block">
                Network Channels
              </span>
              <div className="flex flex-col gap-2">
                <a
                  href={portfolioIdentity.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
                <a
                  href={portfolioIdentity.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>GitHub Repositories</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <span className="font-bold text-slate-400 block">
                AI &amp; Crawler Access
              </span>
              <div className="flex flex-col gap-2">
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
        <div className="pt-12 pb-6 text-center select-none">
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
