import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Download, ArrowUpRight } from 'lucide-react';
import { RESUME_URL } from '../../constants';
import { useWorldTheme } from '../../hooks/useWorldTheme';

interface EpisodeDockProps {
  isMuted: boolean;
  onToggleSound: () => void;
  playClick?: () => void;
}

export const EpisodeDock: React.FC<EpisodeDockProps> = ({ isMuted, onToggleSound, playClick }) => {
  const { activeWorld, currentTheme } = useWorldTheme();
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const navItems = [
    { id: 'arc-pipeline', label: 'Imperial Auto', targetWorld: 'imperial' },
    { id: 'arc-bowling', label: 'SMAAASH', targetWorld: 'smaaash' },
    { id: 'arc-sap', label: 'Elevra Tech', targetWorld: 'elevra' },
    { id: 'arc-gtm', label: 'AI Projects', targetWorld: 'projects' },
    { id: 'contact', label: 'Contact', targetWorld: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
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
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-colors duration-400 ease-out border-b"
      style={{
        backgroundColor: currentTheme.navBg,
        borderColor: 'var(--border)',
        color: 'var(--fg)',
      }}
    >
      {/* Scroll timeline progress indicator */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-25"
        style={{ backgroundColor: 'var(--border)' }}
      >
        <div
          className="h-full origin-left transition-transform duration-100"
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
            backgroundColor: 'var(--accent)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Left: Devansh Khanna + Active Chapter Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <span
              className="font-heading font-black text-sm tracking-tight transition-colors duration-300"
              style={{ color: 'var(--fg)' }}
            >
              DEVANSH KHANNA
            </span>
            <span
              className="hidden sm:inline-block text-[11px] font-bold px-2.5 py-0.5 rounded uppercase tracking-wider transition-all duration-300"
              style={{
                backgroundColor: 'var(--fg)',
                color: 'var(--bg)',
              }}
            >
              {currentTheme.badgeLabel}
            </span>
          </a>
        </div>

        {/* Center: Five Primary Nav Items (Job Title First) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              (item.id === 'arc-pipeline' && activeWorld === 'imperial') ||
              (item.id === 'arc-bowling' && activeWorld === 'smaaash') ||
              (item.id === 'arc-sap' && activeWorld === 'elevra') ||
              (item.id === 'arc-gtm' && (activeWorld === 'projects' || activeWorld === 'gtm')) ||
              (item.id === 'contact' && (activeWorld === 'side-quests' || activeWorld === 'contact'));

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive ? 'font-bold' : 'opacity-70 hover:opacity-100'
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: 'var(--fg)',
                        color: 'var(--bg)',
                      }
                    : {
                        color: 'var(--fg)',
                      }
                }
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Sound Toggle + Resume */}
        <div className="flex items-center gap-2">
          {/* Audio FX Toggle (Default OFF) */}
          <button
            onClick={() => {
              onToggleSound();
              if (playClick && isMuted) playClick();
            }}
            aria-label={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-semibold border transition-all duration-200 cursor-pointer"
            style={{
              borderColor: 'var(--border)',
              backgroundColor: !isMuted ? 'var(--accent)' : 'transparent',
              color: !isMuted ? '#11110F' : 'var(--fg)',
            }}
          >
            {!isMuted ? (
              <>
                <Volume2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sound ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 opacity-60" />
                <span className="hidden sm:inline opacity-70">Sound OFF</span>
              </>
            )}
          </button>

          {/* Resume Link */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playClick && playClick()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded font-bold text-xs transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#11110F',
            }}
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
