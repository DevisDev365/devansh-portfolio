import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useActiveSection } from '../hooks/useActiveSection';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter font-mono hover:text-primary transition-colors">
          &lt;Dev /&gt;
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors relative group"
                style={{ color: isActive ? '#3b82f6' : '' }}
              >
                <span className={isActive ? 'text-primary' : 'text-slate-400 hover:text-white'}>
                  {item.label}
                </span>
                <span className="absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 group-hover:w-full"
                  style={{ width: isActive ? '100%' : '0%' }}
                />
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 w-full h-px bg-primary"
                  />
                )}
              </a>
            );
          })}
          <a
            href="mailto:devanshkhanna75@gmail.com"
            className="px-5 py-2 text-xs font-mono border border-slate-700 rounded hover:bg-white hover:text-black transition-all duration-300"
          >
            Say Hello
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-white/5 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-lg font-medium ${activeSection === item.href.replace('#', '') ? 'text-primary' : 'text-slate-300 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:devanshkhanna75@gmail.com"
            className="text-lg font-medium text-primary hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Say Hello
          </a>
        </div>
      </div>
    </nav>
  );
};