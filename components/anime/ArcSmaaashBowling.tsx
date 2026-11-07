import React from 'react';
import { ThreeBowlingLane } from './ThreeBowlingLane';

interface ArcSmaaashBowlingProps {
  playStrike?: () => void;
  playClick?: () => void;
}

export const ArcSmaaashBowling: React.FC<ArcSmaaashBowlingProps> = ({ playStrike, playClick }) => {
  return (
    <section id="arc-bowling" className="relative py-24 px-4 sm:px-6 bg-[#07090E]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Arc Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-cyan-400 font-semibold text-sm mb-2">
              Episode Arc 2 · SMAAASH Entertainment
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              The Outbound Strike
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Sales &amp; Marketing Intern launching a new corporate entertainment service line. Unlocking direct revenue, cleansing lead databases, and executing on-ground field diagnostics.
            </p>
          </div>
        </div>

        {/* Playable 3D Bowling Lane */}
        <ThreeBowlingLane playStrike={playStrike} playClick={playClick} />

        {/* Historical Scorecard Proof Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="p-4 rounded-xl bg-[#0A0D15]">
            <span className="text-xs font-semibold text-cyan-400 block">Direct Launch Revenue</span>
            <div className="text-2xl font-black text-white mt-1">₹59,000</div>
            <p className="text-xs text-slate-400 mt-1">Generated in 2-month launch window</p>
          </div>
          <div className="p-4 rounded-xl bg-[#0A0D15]">
            <span className="text-xs font-semibold text-cyan-400 block">Lead Cleansing</span>
            <div className="text-2xl font-black text-white mt-1">1,200+</div>
            <p className="text-xs text-slate-400 mt-1">Prospects segmented with analytics</p>
          </div>
          <div className="p-4 rounded-xl bg-[#0A0D15]">
            <span className="text-xs font-semibold text-cyan-400 block">Quality Lift</span>
            <div className="text-2xl font-black text-white mt-1">+40%</div>
            <p className="text-xs text-slate-400 mt-1">Sales lead quality score improvement</p>
          </div>
          <div className="p-4 rounded-xl bg-[#0A0D15]">
            <span className="text-xs font-semibold text-cyan-400 block">Direct Outreach</span>
            <div className="text-2xl font-black text-white mt-1">260+ Ops</div>
            <p className="text-xs text-slate-400 mt-1">200+ cold calls &amp; 61 on-ground visits</p>
          </div>
        </div>
      </div>
    </section>
  );
};
