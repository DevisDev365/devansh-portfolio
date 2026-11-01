import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
  badge?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  numericValue,
  prefix = '',
  suffix = '',
  label,
  context,
  badge,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1400; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * numericValue));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group relative rounded-xl border border-white/10 bg-[#0e121d] p-5 transition-colors hover:border-emerald-500/40 hover:bg-[#131826]"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-slate-400">
          {badge || 'Validated Impact'}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
      </div>

      <div className="flex items-baseline space-x-0.5">
        <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {prefix}
          {count}
          {suffix}
        </span>
      </div>

      <div className="mt-1 text-sm font-semibold text-slate-200">{label}</div>
      <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
        {context}
      </p>

      {/* Subtle indicator bar on hover */}
      <div className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-emerald-500 transition-transform duration-300 group-hover:scale-x-100 rounded-b-xl" />
    </motion.div>
  );
};
