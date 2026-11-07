import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Download, ArrowUpRight } from 'lucide-react';
import { RESUME_URL } from '../../constants';

interface EpisodeDockProps {
  isMuted: boolean;
  onToggleSound: () => void;
  playClick?: () => void;
}

export const EpisodeDock: React.FC<EpisodeDockProps> = ({ isMuted, onToggleSound, playClick }) => {
  const [activeArc, setActiveArc] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const arcs = [
    { id: 'arc-pipeline', label: 'Pipeline', title: 'Imperial Auto OEM' },
    { id: 'arc-bowling', label: 'Strike', title: 'SMAAASH GTM' },
    { id: 'arc-sap', label: 'SAP Core', title: 'Elevra Tech Consulting' },
    { id: 'arc-gtm', label: 'GTM Engine', title: 'Autonomous AI' },
    { id: 'side-quests', label: 'Side Quests', title: 'Research & Credentials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      const scrollPos = window.scrollY + 200;
      for (let i = arcs.length - 1; i >= 0; i--) {
        const el = document.getElementById(arcs[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveArc(arcs[i].id);
          return;
        }
      }
      setActiveArc('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (playClick) playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#07080C]/95">
      {/* Scroll timeline indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
        <div
          className="h-full bg-emerald-500 transition-transform duration-100 origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Left: Broadcast Title */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <span className="font-bold text-white text-sm tracking-tight group-hover:text-emerald-400 transition-colors">
              DEVANSH KHANNA
            </span>
            <span className="hidden md:inline-block text-xs font-semibold text-slate-300 bg-white/10 px-2 py-0.5 rounded">
              Episode 01
            </span>
          </a>
        </div>

        {/* Center: Arc Timeline Switcher (Desktop) */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {arcs.map((arc) => {
            const isActive = activeArc === arc.id;
            return (
              <button
                key={arc.id}
                onClick={() => scrollToSection(arc.id)}
                title={arc.title}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  isActive
                    ? 'text-emerald-300 bg-emerald-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {arc.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Sound Toggle + Resume */}
        <div className="flex items-center gap-2.5">
          {/* Native Web Audio FX Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              if (playClick && isMuted) playClick();
            }}
            aria-label={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              !isMuted
                ? 'text-emerald-300 bg-emerald-500/20'
                : 'text-slate-400 hover:text-white bg-white/10'
            }`}
          >
            {!isMuted ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline text-xs font-semibold">Sound ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden sm:inline text-xs font-semibold">Sound OFF</span>
              </>
            )}
          </button>

          {/* Resume Download */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick && playClick()}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
            <ArrowUpRight className="w-3 h-3 sm:hidden" />
          </a>
        </div>
      </div>
    </header>
  );
};
