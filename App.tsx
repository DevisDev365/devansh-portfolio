import React from 'react';
import { InteractiveCanvas } from './components/ui/InteractiveCanvas';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ImpactMetrics } from './components/ImpactMetrics';
import { ConsultingLogic } from './components/ConsultingLogic';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

export const App: React.FC = () => {
  return (
    <div className="min-h-dvh bg-[#08090D] text-slate-200 selection:bg-emerald-500 selection:text-black font-sans relative">
      {/* Interactive Cursor-Reactive Particle Canvas */}
      <InteractiveCanvas />

      {/* Floating Header Navigation */}
      <Navigation />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <ImpactMetrics />
        <ConsultingLogic />
        <Projects />
        <Experience />
        <About />
        <Achievements />
      </main>

      {/* Command Deck Footer */}
      <Contact />
    </div>
  );
};

export default App;
