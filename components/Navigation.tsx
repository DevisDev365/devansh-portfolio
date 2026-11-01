import React, { useState, useEffect } from 'react';
import { portfolioIdentity } from '../content/portfolio-content.mjs';
import { RESUME_URL } from '../constants';
import { Download, Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Accreditations', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 py-4 pointer-events-none">
      <nav
        className={`max-w-5xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-300 pointer-events-auto ${
          scrolled
            ? 'bg-black/75 border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80'
            : 'bg-black/40 border-white/10 backdrop-blur-md'
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold font-mono text-sm flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-black transition-all">
            DK
          </span>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
              {portfolioIdentity.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400 leading-none">
              Elevra Tech • SAP Consulting
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-black text-xs font-semibold font-mono transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume (CV)</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-emerald-400" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 p-4 rounded-2xl bg-black/95 border border-white/15 backdrop-blur-2xl shadow-2xl pointer-events-auto space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-500 text-black font-semibold text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (Google Drive)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
