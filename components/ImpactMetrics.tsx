import React from 'react';
import { StatCounter } from './ui/StatCounter';

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="relative z-10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <h2 className="text-sm font-semibold tracking-wide text-slate-300">
              Empirical ROI and Verified Impact
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">Operating Metrics</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCounter
            prefix="₹"
            numericValue={5}
            suffix="Cr+"
            label="Expansion ARR"
            context="Strategic account expansion & consultative solution mapping across global OEM clients."
            badge="Revenue Scale"
          />
          <StatCounter
            numericValue={87}
            suffix="%"
            label="Reporting Cycle Reduction"
            context="Engineered custom VBA/SQL macros cutting OEM reporting from 4 hrs to 30 mins."
            badge="Process Speed"
          />
          <StatCounter
            numericValue={48}
            suffix="h"
            label="AI Prototype Delivery"
            context="Architected & deployed dual-accent Voice AI platform on GCP within contracted client SLA."
            badge="Rapid Turnaround"
          />
          <StatCounter
            numericValue={95}
            suffix="%+"
            label="Client Retention"
            context="Maintained across enterprise SAP Business One SaaS accounts via structured health scoring & QBRs."
            badge="Lifecycle Health"
          />
        </div>
      </div>
    </section>
  );
};
