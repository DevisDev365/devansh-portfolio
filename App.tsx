import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { useSoundFX } from './hooks/useSoundFX';
import { InteractiveCanvas } from './components/ui/InteractiveCanvas';
import { Preloader } from './components/anime/Preloader';
import { EpisodeDock } from './components/anime/EpisodeDock';
import { Hero } from './components/Hero';
import { ArcImperialPipeline } from './components/anime/ArcImperialPipeline';
import { ArcSmaaashBowling } from './components/anime/ArcSmaaashBowling';
import { ArcElevraSAP } from './components/anime/ArcElevraSAP';
import { ArcAutonomousGTM } from './components/anime/ArcAutonomousGTM';
import { SideQuests } from './components/anime/SideQuests';
import { CharacterSheet } from './components/anime/CharacterSheet';

export const App: React.FC = () => {
  const { isMuted, toggleMute, playClick, playValve, playStrike, playPulse } = useSoundFX();

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

  // Easter egg: change tab title on window blur
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'Still watching? — Devansh Khanna';
      } else {
        document.title = 'Devansh Khanna Portfolio';
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="min-h-dvh bg-[#07080C] text-slate-200 selection:bg-emerald-500 selection:text-black font-sans relative overflow-x-hidden">
      {/* Interactive cursor-reactive particle canvas */}
      <InteractiveCanvas />

      {/* Sticky anime episode timeline bar */}
      <EpisodeDock
        isMuted={isMuted}
        onToggleSound={toggleMute}
        playClick={playClick}
      />

      {/* Main Episodic Narrative Flow */}
      <main className="relative z-10">
        {/* Episode 01 Hero */}
        <Hero playClick={playClick} />

        {/* Arc 01: Imperial Auto (The Industrial Pipeline) */}
        <ArcImperialPipeline playValve={playValve} playClick={playClick} />

        {/* Arc 02: SMAAASH Entertainment (The Outbound Strike) */}
        <ArcSmaaashBowling playStrike={playStrike} playClick={playClick} />

        {/* Arc 03: Elevra Tech (The SAP B1 Orbital Hub) */}
        <ArcElevraSAP playPulse={playPulse} playClick={playClick} />

        {/* Finale Arc: Autonomous AI & Prototyping Engine */}
        <ArcAutonomousGTM playPulse={playPulse} playClick={playClick} />

        {/* Side Quests & Credibility Strip (Brand Sentiment, Red Tape [X], Honors) */}
        <SideQuests playClick={playClick} />
      </main>

      {/* RPG Character Sheet & Command Deck Footer */}
      <CharacterSheet playClick={playClick} />
    </div>
  );
};

export default App;
