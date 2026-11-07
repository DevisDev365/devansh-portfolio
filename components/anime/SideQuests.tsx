import React from 'react';
import { ExternalLink, Trophy } from 'lucide-react';
import { projects } from '../../content/portfolio-content.mjs';

interface SideQuestsProps {
  playClick?: () => void;
}

export const SideQuests: React.FC<SideQuestsProps> = ({ playClick }) => {
  const brandSentimentProject = projects[3]; // Brand Sentiment Analysis
  const redTapeProject = projects[4]; // Red Tape [X] Anime Collection

  return (
    <section id="side-quests" className="relative py-24 px-4 sm:px-6 bg-[#07090F]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-slate-400 font-semibold text-sm mb-2">
            Special Operations · Empirical Studies &amp; Market Models
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            Side Quests &amp; Analytics Whitespace
          </h2>
          <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
            Exploratory quantitative studies: competitive social sentiment velocity across 650+ restaurant posts, and multi-crore Gen-Z market whitespace modeling.
          </p>
        </div>

        {/* Side Quests Projects Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Brand Sentiment Analysis */}
          <div data-ui className="rounded-2xl bg-[#0B0F1A] p-6 sm:p-8 flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-cyan-400">
                  Competitive Data Study
                </span>
                <span className="text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded">
                  650+ Posts Harvested
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {brandSentimentProject.title}
              </h3>

              <div className="text-xs font-semibold text-slate-400 mb-4">
                Role: {brandSentimentProject.role}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Harvested 650+ Instagram posts across McDonald's (251), KFC (251), and Domino's (154) over a 7-month horizon. Built Python processing scripts (Pandas, Seaborn) to map engagement rate velocity and peak conversion posting windows.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {brandSentimentProject.link && (
                <a
                  href={brandSentimentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick && playClick()}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{brandSentimentProject.linkText || 'View Google Colab Notebook'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {brandSentimentProject.techStack.map((tech: string) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-[#07090F] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Red Tape [X] Anime Collection */}
          <div data-ui className="rounded-2xl bg-[#0B0F1A] p-6 sm:p-8 flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-amber-400">
                  GTM Strategy &amp; Whitespace
                </span>
                <span className="text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded">
                  12.5x Demand Surge
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {redTapeProject.title}
              </h3>

              <div className="text-xs font-semibold text-slate-400 mb-4">
                Role: {redTapeProject.role}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Analyzed 5-year Google Trends trajectory revealing a 12.5x surge in anime streetwear demand across Indian metro hubs. Directed AI design pipelines to conceptualize an accessible ₹1.5k–₹3.5k sneaker collection with a 4-phase GTM roadmap.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {redTapeProject.link && (
                <a
                  href={redTapeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playClick && playClick()}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>{redTapeProject.linkText || 'Explore Campaign Showcase'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {redTapeProject.techStack.map((tech: string) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-[#07090F] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Credibility Strip & Honors */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-4 h-4 text-emerald-400" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider">
              Credibility Strip &amp; National Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* AIMA National Finalist */}
            <div className="p-5 rounded-xl bg-[#0B0F1A]">
              <div className="text-xs font-semibold text-emerald-400 mb-1">
                Top 20 Nationally
              </div>
              <div className="text-sm font-bold text-white mb-1">
                AIMA Student Management Games 2024
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regional 1st Runner-Up across 1,200+ B-school teams. Led team as CEO across corporate finance and operations simulations.
              </p>
            </div>

            {/* NIT Trichy Certification */}
            <div className="p-5 rounded-xl bg-[#0B0F1A]">
              <div className="text-xs font-semibold text-emerald-400 mb-1">
                NIT Trichy Certification
              </div>
              <div className="text-sm font-bold text-white mb-1">
                Data-Driven Decision Making
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Intensive certification covering advanced business modeling, relational SQL queries, and decision frameworks.
              </p>
            </div>

            {/* INVICTUS Club Coordinator */}
            <div className="p-5 rounded-xl bg-[#0B0F1A]">
              <div className="text-xs font-semibold text-emerald-400 mb-1">
                Club Coordinator (+66% Reach)
              </div>
              <div className="text-sm font-bold text-white mb-1">
                INVICTUS Data Analysis Club
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Delhi School of Business. Scaled reach by 66% and boosted event engagement 5x leading a 50-member student team.
              </p>
            </div>

            {/* BCC&I x NTPC */}
            <div className="p-5 rounded-xl bg-[#0B0F1A]">
              <div className="text-xs font-semibold text-emerald-400 mb-1">
                2nd Runner-Up
              </div>
              <div className="text-sm font-bold text-white mb-1">
                BCC&amp;I x NTPC Sustainability
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Recognized for developing comprehensive sustainable strategy models. Also participated in HP Power Lab simulation.
              </p>
            </div>
          </div>

          {/* Education Summary Line */}
          <div className="p-5 rounded-xl bg-[#0B0F1A] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              <span className="font-bold text-slate-200">MBA in Data Analytics &amp; Operations (Completed 2026):</span> Delhi School of Business, Delhi NCR
            </div>
            <div>
              <span className="font-bold text-slate-200">BBA (Completed 2022):</span> Chandigarh University, Punjab
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
