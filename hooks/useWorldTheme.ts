import { useState, useEffect } from 'react';

export type WorldThemeKey = 'hero' | 'imperial' | 'smaaash' | 'elevra' | 'projects' | 'side-quests' | 'gtm';

export interface WorldTheme {
  id: WorldThemeKey;
  name: string;
  bgHex: string;
  fgHex: string;
  accentHex: string;
  mutedHex: string;
  surfaceHex: string;
  borderHex: string;
  badgeLabel: string;
  navBg: string;
}

export const WORLD_THEMES: Record<string, WorldTheme> = {
  hero: {
    id: 'hero',
    name: 'Devansh Khanna · Profile',
    bgHex: '#F3EEE4', // warm paper cream
    fgHex: '#11110F', // ink
    accentHex: '#19C37D', // brand green
    mutedHex: '#66625B',
    surfaceHex: '#FFFFFF',
    borderHex: 'rgba(17, 17, 15, 0.12)',
    badgeLabel: 'Elevra Tech',
    navBg: 'rgba(243, 238, 228, 0.92)',
  },
  imperial: {
    id: 'imperial',
    name: 'Imperial Auto · 2022–23',
    bgHex: '#1747E0', // blueprint cobalt
    fgHex: '#F4F7FF', // white linework
    accentHex: '#FFD60A', // safety-yellow
    mutedHex: 'rgba(244, 247, 255, 0.75)',
    surfaceHex: '#1038B8',
    borderHex: 'rgba(244, 247, 255, 0.22)',
    badgeLabel: 'Imperial Auto',
    navBg: 'rgba(23, 71, 224, 0.92)',
  },
  smaaash: {
    id: 'smaaash',
    name: 'SMAAASH · 2025',
    bgHex: '#E5222B', // loud red
    fgHex: '#FFF8F0', // cream text
    accentHex: '#11110F', // black accent
    mutedHex: 'rgba(255, 248, 240, 0.8)',
    surfaceHex: '#11110F',
    borderHex: 'rgba(255, 248, 240, 0.2)',
    badgeLabel: 'SMAAASH',
    navBg: 'rgba(229, 34, 43, 0.92)',
  },
  elevra: {
    id: 'elevra',
    name: 'Elevra Tech · July 2026–Present',
    bgHex: '#EDE7FF', // soft lavender
    fgHex: '#11110F', // ink text
    accentHex: '#5B21B6', // deep purple
    mutedHex: '#534D66',
    surfaceHex: '#FFFFFF',
    borderHex: 'rgba(91, 33, 182, 0.16)',
    badgeLabel: 'Elevra Tech',
    navBg: 'rgba(237, 231, 255, 0.92)',
  },
  projects: {
    id: 'projects',
    name: 'Projects · AI & Automation',
    bgHex: '#11110F', // ink field (single dark chapter)
    fgHex: '#F3EEE4', // off-white
    accentHex: '#19C37D', // brand green
    mutedHex: '#8E8B82',
    surfaceHex: '#1C1C19',
    borderHex: 'rgba(243, 238, 228, 0.14)',
    badgeLabel: 'AI Projects',
    navBg: 'rgba(17, 17, 15, 0.92)',
  },
  gtm: {
    id: 'projects',
    name: 'Projects · AI & Automation',
    bgHex: '#11110F',
    fgHex: '#F3EEE4',
    accentHex: '#19C37D',
    mutedHex: '#8E8B82',
    surfaceHex: '#1C1C19',
    borderHex: 'rgba(243, 238, 228, 0.14)',
    badgeLabel: 'AI Projects',
    navBg: 'rgba(17, 17, 15, 0.92)',
  },
  'side-quests': {
    id: 'projects',
    name: 'Projects · Special Studies',
    bgHex: '#11110F',
    fgHex: '#F3EEE4',
    accentHex: '#19C37D',
    mutedHex: '#8E8B82',
    surfaceHex: '#1C1C19',
    borderHex: 'rgba(243, 238, 228, 0.14)',
    badgeLabel: 'AI Projects',
    navBg: 'rgba(17, 17, 15, 0.92)',
  },
};

export function useWorldTheme() {
  const [activeWorld, setActiveWorld] = useState<WorldThemeKey>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;

      const arcMap: { id: string; world: WorldThemeKey }[] = [
        { id: 'contact', world: 'projects' },
        { id: 'character-sheet', world: 'projects' },
        { id: 'side-quests', world: 'projects' },
        { id: 'arc-gtm', world: 'projects' },
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

  // Update dynamic CSS custom properties on documentElement for global syncing
  useEffect(() => {
    const theme = WORLD_THEMES[activeWorld] || WORLD_THEMES.hero;
    const root = document.documentElement;

    root.style.setProperty('--bg', theme.bgHex);
    root.style.setProperty('--fg', theme.fgHex);
    root.style.setProperty('--accent', theme.accentHex);
    root.style.setProperty('--muted', theme.mutedHex);
    root.style.setProperty('--surface', theme.surfaceHex);
    root.style.setProperty('--border', theme.borderHex);

    root.setAttribute('data-theme', theme.id);

    // Dynamic favicon
    const svgIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="8" fill="${theme.bgHex}"/>
        <circle cx="16" cy="16" r="8" fill="${theme.accentHex}"/>
        <text x="16" y="20" font-size="11" font-weight="bold" fill="${theme.fgHex}" text-anchor="middle" font-family="sans-serif">D</text>
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
    currentTheme: WORLD_THEMES[activeWorld] || WORLD_THEMES.hero,
  };
}
