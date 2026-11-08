import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useSoundFX } from './hooks/useSoundFX';
import { useWorldTheme } from './hooks/useWorldTheme';
import { EpisodeDock } from './components/anime/EpisodeDock';
import { Hero } from './components/Hero';
import { ArcImperialPipeline } from './components/anime/ArcImperialPipeline';
import { ArcSmaaashBowling } from './components/anime/ArcSmaaashBowling';
import { ArcElevraSAP } from './components/anime/ArcElevraSAP';
import { ArcAutonomousGTM } from './components/anime/ArcAutonomousGTM';
import { CharacterSheet } from './components/anime/CharacterSheet';
import { CustomCursor } from './components/ui/CustomCursor';

export const App: React.FC = () => {
  const { isMuted, toggleMute, playClick, playValve, playStrike, playPulse } = useSoundFX();
  const { activeWorld, currentTheme } = useWorldTheme();

  // Initialize Lenis smooth inertia scrolling on desktop
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 1024) return; // Native scrolling on mobile/tablet for high responsiveness

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Easter egg: change tab title on window blur, otherwise show active world
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Devansh Khanna · Portfolio';
      } else {
        document.title = `Devansh Khanna · ${currentTheme.name}`;
      }
    };
    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [currentTheme.name]);

  return (
    <div
      className="min-h-dvh font-sans relative overflow-x-hidden selection:bg-[var(--accent)] selection:text-black"
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--fg)',
        transition: 'background-color 400ms cubic-bezier(0.16, 1, 0.3, 1), color 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* 4–6% Grain overlay across the whole site */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Adaptive custom cursor per chapter */}
      <CustomCursor activeWorld={activeWorld} />

      {/* Persistent adaptive navigation */}
      <EpisodeDock
        isMuted={isMuted}
        onToggleSound={toggleMute}
        playClick={playClick}
      />

      {/* Main Episodic Narrative Flow */}
      <main className="relative z-10">
        {/* Hero Chapter: Warm Paper Cream #F3EEE4, Ink Linework, Green Accent */}
        <Hero playClick={playClick} />

        {/* Arc 1: Imperial Auto Industries (Blueprint Cobalt #1747E0, White Linework, Yellow Sealed) */}
        <ArcImperialPipeline playValve={playValve} playClick={playClick} />

        {/* Arc 2: SMAAASH Entertainment (Loud Red #E5222B, Black Lane, Cream Text) */}
        <ArcSmaaashBowling playStrike={playStrike} playClick={playClick} />

        {/* Arc 3: Elevra Tech (Soft Lavender #EDE7FF, Deep Purple #5B21B6, Ink Text) */}
        <ArcElevraSAP playPulse={playPulse} playClick={playClick} />

        {/* Arc 4: Projects (Ink #11110F Field, Green #19C37D - Single Dark Chapter) */}
        <ArcAutonomousGTM playPulse={playPulse} playClick={playClick} />
      </main>

      {/* Contact & Closing */}
      <CharacterSheet playClick={playClick} />
    </div>
  );
};

export default App;
