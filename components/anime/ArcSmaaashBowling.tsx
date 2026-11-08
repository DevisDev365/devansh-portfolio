import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Target, PhoneCall, Users, CheckCircle2 } from 'lucide-react';
import { ThreeBowlingLane } from './ThreeBowlingLane';

interface ArcSmaaashBowlingProps {
  playStrike?: () => void;
  playClick?: () => void;
}

export const ArcSmaaashBowling: React.FC<ArcSmaaashBowlingProps> = ({
  playStrike,
  playClick,
}) => {
  const [detailsOpen, setDetailsOpen] = useState<boolean>(false);
  const [strikeScored, setStrikeScored] = useState<boolean>(false);

  return (
    <section
      id="arc-bowling"
      className="relative bg-[#E5222B] text-[#FFF8F0] transition-colors duration-400 ease-out"
    >
      {/* Halftone dot pattern background */}
      <div className="absolute inset-0 texture-halftone pointer-events-none opacity-25" />

      {/* Main Section Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-8 relative z-10">
        {/* 1. Eyebrow: company · dates */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#11110F]" />
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FFF8F0] uppercase font-sans">
            SMAAASH Entertainment · 2025
          </span>
        </div>

        {/* 2. H2: REAL JOB TITLE */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-[#FFF8F0] leading-[0.95]">
          Sales &amp; Marketing Intern
        </h2>

        {/* 3. One-line summary */}
        <p className="text-base sm:text-xl text-[#FFF8F0]/90 font-normal max-w-3xl leading-relaxed mt-4 mb-8">
          Launched a corporate entertainment service line: cleaned the lead database, ran cold outreach and on-ground field diagnostics.
        </p>

        {/* 4. Max 3 Stat Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pb-8 border-b border-[#FFF8F0]/20">
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#11110F] tracking-tight">
              ₹59,000
            </div>
            <div className="text-xs sm:text-sm text-[#FFF8F0]/90 mt-1 font-medium">
              Direct revenue in the 2-month launch window
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#11110F] tracking-tight">
              1,200+
            </div>
            <div className="text-xs sm:text-sm text-[#FFF8F0]/90 mt-1 font-medium">
              Leads cleansed and segmented (+40% lead quality score)
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#11110F] tracking-tight">
              260+
            </div>
            <div className="text-xs sm:text-sm text-[#FFF8F0]/90 mt-1 font-medium">
              Outreach touches (200+ calls, 61 visits)
            </div>
          </div>
        </div>
      </div>

      {/* 5. Signature Visual (3D Bowling Lane with Direct Tap/Click to Strike) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 relative z-10">
        <ThreeBowlingLane
          playStrike={playStrike}
          playClick={playClick}
          onStrikeTriggered={() => setStrikeScored(true)}
        />
      </div>

      {/* 6. "Details" Accordion (Collapsed by Default, zero dead space) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 relative z-10">
        <div className="border border-[#FFF8F0]/25 rounded-2xl bg-[#11110F] text-[#FFF8F0] overflow-hidden shadow-xl">
          <button
            onClick={() => {
              setDetailsOpen(!detailsOpen);
              if (playClick) playClick();
            }}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/[0.04] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-[#E5222B]" />
              <span className="font-heading font-bold text-base sm:text-lg text-[#FFF8F0]">
                Outreach Methodology &amp; Commercial Diagnostics
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FFF8F0]/80">
              <span>{detailsOpen ? 'Hide Details' : 'View Details'}</span>
              {detailsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          <AnimatePresence>
            {detailsOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-[#FFF8F0]/15 px-6 py-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#E5222B] font-bold text-xs uppercase font-mono">
                      <Users className="w-4 h-4" />
                      <span>Data Cleansing</span>
                    </div>
                    <h4 className="text-base font-bold text-white font-heading">
                      Database Sanitization
                    </h4>
                    <p className="text-xs sm:text-sm text-[#FFF8F0]/80 leading-relaxed">
                      Re-engineered messy lead records into tiered corporate accounts, identifying decision-makers and eliminating duplicate contacts.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#E5222B] font-bold text-xs uppercase font-mono">
                      <PhoneCall className="w-4 h-4" />
                      <span>Cold Prospecting</span>
                    </div>
                    <h4 className="text-base font-bold text-white font-heading">
                      200+ Outbound Calls
                    </h4>
                    <p className="text-xs sm:text-sm text-[#FFF8F0]/80 leading-relaxed">
                      Engaged corporate HR and administrative heads across Delhi NCR to pitch group hospitality packages and team-building packages.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#E5222B] font-bold text-xs uppercase font-mono">
                      <Target className="w-4 h-4" />
                      <span>Ground Execution</span>
                    </div>
                    <h4 className="text-base font-bold text-white font-heading">
                      61 Direct On-Site Visits
                    </h4>
                    <p className="text-xs sm:text-sm text-[#FFF8F0]/80 leading-relaxed">
                      Conducted face-to-face enterprise visits to present customized package proposals, leading directly to initial closed bookings.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
