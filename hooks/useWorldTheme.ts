import { useState, useEffect } from 'react';

export type WorldThemeKey = 'hero' | 'imperial' | 'smaaash' | 'elevra' | 'gtm' | 'side-quests';

export interface WorldTheme {
  id: WorldThemeKey;
  name: string;
  bgClass: string;
  accentHex: string;
  accentTextClass: string;
  accentBgClass: string;
  accentBorderClass: string;
  badgeLabel: string;
}

export const WORLD_THEMES: Record<WorldThemeKey, WorldTheme> = {
  hero: {
    id: 'hero',
    name: 'Episode 01: Manga Ink',
    bgClass: 'bg-[#0A0A0A]',
    accentHex: '#00E47C',
    accentTextClass: 'text-emerald-400',
    accentBgClass: 'bg-emerald-500',
    accentBorderClass: 'border-emerald-500/30',
    badgeLabel: 'Episode 01 · Prologue',
  },
  imperial: {
    id: 'imperial',
    name: 'Arc 1: Fluid Transmission Architecture',
    bgClass: 'bg-[#041521]',
    accentHex: '#269AE2',
    accentTextClass: 'text-[#269AE2]',
    accentBgClass: 'bg-[#269AE2]',
    accentBorderClass: 'border-[#269AE2]/30',
    badgeLabel: 'Arc 1 · Imperial Auto',
  },
  smaaash: {
    id: 'smaaash',
    name: 'Arc 2: Neon Strike Arcade',
    bgClass: 'bg-[#0B0B0C]',
    accentHex: '#E4002B',
    accentTextClass: 'text-red-500',
    accentBgClass: 'bg-red-600',
    accentBorderClass: 'border-red-500/30',
    badgeLabel: 'Arc 2 · SMAAASH GTM',
  },
  elevra: {
    id: 'elevra',
    name: 'Arc 3: Enterprise Solutions',
    bgClass: 'bg-[#FAFAFC]',
    accentHex: '#6D28D9',
    accentTextClass: 'text-purple-600',
    accentBgClass: 'bg-purple-600',
    accentBorderClass: 'border-purple-300',
    badgeLabel: 'Arc 3 · Elevra Tech',
  },
  gtm: {
    id: 'gtm',
    name: 'Finale: Autonomous AI',
    bgClass: 'bg-[#07080C]',
    accentHex: '#10B981',
    accentTextClass: 'text-emerald-400',
    accentBgClass: 'bg-emerald-500',
    accentBorderClass: 'border-emerald-500/30',
    badgeLabel: 'Finale Arc · GTM Lead Engine',
  },
  'side-quests': {
    id: 'side-quests',
    name: 'Side Quests & Credentials',
    bgClass: 'bg-[#080B10]',
    accentHex: '#F59E0B',
    accentTextClass: 'text-amber-400',
    accentBgClass: 'bg-amber-500',
    accentBorderClass: 'border-amber-500/30',
    badgeLabel: 'Side Quests & Honors',
  },
};

export function useWorldTheme() {
  const [activeWorld, setActiveWorld] = useState<WorldThemeKey>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 260;

      const arcMap: { id: string; world: WorldThemeKey }[] = [
        { id: 'character-sheet', world: 'side-quests' },
        { id: 'side-quests', world: 'side-quests' },
        { id: 'arc-gtm', world: 'gtm' },
        { id: 'arc-sap', world: 'elevra' },
        { id: 'arc-bowling', world: 'smaaash' },
        { id: 'arc-pipeline', world: 'imperial' },
      ];

      for (const item of arcMap) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveWorld(item.world);
          return;
        }
      }

      setActiveWorld('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update dynamic favicon color and document title prefix based on active world
  useEffect(() => {
    const theme = WORLD_THEMES[activeWorld];
    
    // Update favicon dynamically with theme color dot
    const svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="#0A0A0A"/>
        <circle cx="16" cy="16" r="8" fill="${theme.accentHex}"/>
        <text x="16" y="20" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="sans-serif">D</text>
      </svg>
    `.trim();

    let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = `data:image/svg+xml,${encodeURIComponent(svgIcon)}`;
  }, [activeWorld]);

  return {
    activeWorld,
    currentTheme: WORLD_THEMES[activeWorld],
  };
}
