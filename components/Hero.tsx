import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { RESUME_URL } from '../constants';
import { AnimeFocalHero } from './anime/AnimeFocalHero';

interface HeroProps {
  playClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ playClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 bg-[#F3EEE4] text-[#11110F] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between relative z-10">
        {/* Top: One-line Role Badge */}
        <div className="pt-2 sm:pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80">
            <span className="w-2 h-2 rounded-full bg-[#19C37D]" />
            <span className="text-xs sm:text-sm font-bold tracking-tight text-[#11110F]">
              Business Development Executive, Enterprise Solutions @ Elevra Tech
            </span>
          </div>
        </div>

        {/* Center: Massive Name + Overlapping Anime Focal Visual */}
        <div className="relative my-auto py-8 sm:py-12 flex flex-col items-center justify-center text-center">
          {/* Overlapping Anime Focal Illustration Breaking Out for Depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-90 sm:opacity-95">
            <AnimeFocalHero className="w-[300px] sm:w-[440px] lg:w-[500px]" />
          </div>

          {/* Huge Ink-Black Name Type */}
          <div className="relative z-10 select-none">
            <h1 className="font-heading font-black tracking-tighter uppercase text-[#11110F] leading-[0.88] text-[clamp(3.2rem,11.5vw,9.5rem)]">
              <span className="block">DEVANSH</span>
              <span className="block text-[#11110F]/90">KHANNA</span>
            </h1>
          </div>
        </div>

        {/* Bottom: One-line role affirmation + Two CTAs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6">
          <p className="text-sm sm:text-base text-[#66625B] max-w-md leading-relaxed font-normal">
            Specializing in enterprise SAP Business One consulting, requirement mapping, and autonomous AI workflow engines.
          </p>

          {/* Two CTAs: View work & Resume */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#arc-pipeline"
              onClick={() => playClick && playClick()}
              className="flex items-center gap-2 px-6 py-3 rounded bg-[#19C37D] hover:bg-[#15A869] text-[#11110F] font-bold text-xs sm:text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>View work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playClick && playClick()}
              className="flex items-center gap-2 px-5 py-3 rounded bg-white hover:bg-slate-50 text-[#11110F] font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
