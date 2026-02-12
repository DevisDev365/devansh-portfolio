import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Background3D } from './components/Background3D';
import { SOCIALS } from './constants';
import { Github, Linkedin, Phone } from 'lucide-react';

const App: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'GitHub': return <Github size={20} />;
      case 'LinkedIn': return <Linkedin size={20} />;
      case 'Phone': return <Phone size={20} />;
      default: return null;
    }
  };

  return (
    // Removed overflow-x-hidden from here to ensure sticky positioning works correctly in children.
    // Overflow is handled by body class in index.html
    <div className="text-slate-300 min-h-screen font-sans selection:bg-primary/30 relative">
      <Background3D />
      <Navigation />

      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Story Markers / Socials */}
      <div className="hidden md:flex fixed bottom-12 left-12 flex-col items-center gap-6 z-50">
        <div className="flex flex-col gap-6">
          {SOCIALS.map(social => (
            <a
              key={social.name}
              href={social.url}
              className="text-slate-500 hover:text-primary hover:scale-125 transition-all duration-300"
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              {getIcon(social.name)}
            </a>
          ))}
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </div>

      <div className="hidden md:flex fixed bottom-12 right-12 flex-col items-center gap-6 z-50">
        <a
          href="mailto:devanshkhanna75@gmail.com"
          className="text-slate-500 hover:text-primary font-mono text-sm tracking-widest hover:-translate-y-1 transition-all duration-300 vertical-text"
          style={{ writingMode: 'vertical-rl' }}
        >
          devanshkhanna75@gmail.com
        </a>
        <div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default App;