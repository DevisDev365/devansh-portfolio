import React from 'react';
import { Reveal } from './ui/Reveal';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Building2 } from 'lucide-react';

const AchievementCard = ({ achievement, index }: { achievement: typeof ACHIEVEMENTS[0], index: number }) => {
    return (
        <div className="group p-6 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-primary/20 transition-all duration-300 hover:bg-white/5 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Trophy size={24} />
                </div>
                <span className="text-6xl font-bold text-white/5 font-mono select-none">0{index + 1}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                {achievement.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-4 uppercase tracking-wider">
                <Building2 size={12} />
                <span>{achievement.organization}</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
                {achievement.description}
            </p>
        </div>
    );
};

export const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex items-center gap-4 mb-16">
                        <span className="text-primary font-mono text-6xl opacity-20 font-bold -ml-4">04</span>
                        <div>
                            <span className="text-accent font-mono text-sm tracking-wider uppercase block mb-1">Recognition</span>
                            <h2 className="text-4xl font-bold text-white">Achievements</h2>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ACHIEVEMENTS.map((achievement, idx) => (
                        <Reveal key={idx} delay={idx * 100}>
                            <AchievementCard achievement={achievement} index={idx} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
