import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCountUp } from '../../hooks/useCountUp';

interface AnimatedStatProps {
  val: string;       // e.g. "₹5+ Crore" or "87% Faster"
  label: string;
  desc: string;
  icon: React.ReactNode;
}

// Extract leading number from a string like "87%" or "12%" or "5+"
const parseNumber = (val: string): { prefix: string; num: number; suffix: string } => {
  const match = val.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { prefix: '', num: 0, suffix: val };
  return { prefix: match[1], num: parseInt(match[2]), suffix: match[3] };
};

export const AnimatedStat: React.FC<AnimatedStatProps> = ({ val, label, desc, icon }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const { prefix, num, suffix } = parseNumber(val);
  const count = useCountUp(num, 1400, isIntersecting);

  return (
    <div
      ref={elementRef}
      className="bg-[#0F0F0F] border border-white/5 p-6 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors group"
    >
      <div className="mb-3 p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">{icon}</div>
      <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">
        {prefix}{count}{suffix}
      </h4>
      <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-slate-600 font-mono text-[10px]">{desc}</p>
    </div>
  );
};
