import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

// Decode scramble animation hook (ported from GLM 5.2 code)
function useDecodeText(text: string, trigger: boolean) {
  const [displayText, setDisplayText] = useState('');
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    if (!trigger) return;

    interface QueueItem {
      from: string;
      to: string;
      start: number;
      end: number;
      char?: string;
    }

    const queue: QueueItem[] = [];
    for (let i = 0; i < text.length; i++) {
      const start = Math.floor(Math.random() * 30);
      const end = start + Math.floor(Math.random() * 30);
      queue.push({ from: '', to: text[i], start, end });
    }

    let frame = 0;
    let animId: number;

    function update() {
      let output = '';
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const { to, start, end } = queue[i];
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!queue[i].char || Math.random() < 0.28) {
            queue[i].char = chars[Math.floor(Math.random() * chars.length)];
          }
          output += queue[i].char;
        } else {
          output += queue[i].from;
        }
      }
      setDisplayText(output);
      if (complete === queue.length) return;
      frame++;
      animId = requestAnimationFrame(update);
    }
    update();

    return () => { if (animId) cancelAnimationFrame(animId); };
  }, [trigger, text]);

  return displayText;
}

// Component to render decode text with colored scramble chars
function DecodeText({ text, className }: { text: string; className?: string }) {
  const [trigger, setTrigger] = useState(false);
  const [displayChars, setDisplayChars] = useState<{ char: string; isScramble: boolean }[]>([]);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    setTrigger(true);
  }, []);

  useEffect(() => {
    if (!trigger) return;

    interface QueueItem {
      from: string;
      to: string;
      start: number;
      end: number;
      char?: string;
    }

    const queue: QueueItem[] = [];
    for (let i = 0; i < text.length; i++) {
      const start = Math.floor(Math.random() * 30);
      const end = start + Math.floor(Math.random() * 30);
      queue.push({ from: '', to: text[i], start, end });
    }

    let frame = 0;
    let animId: number;

    function update() {
      const output: { char: string; isScramble: boolean }[] = [];
      let complete = 0;
      for (let i = 0; i < queue.length; i++) {
        const { to, start, end } = queue[i];
        if (frame >= end) {
          complete++;
          output.push({ char: to, isScramble: false });
        } else if (frame >= start) {
          if (!queue[i].char || Math.random() < 0.28) {
            queue[i].char = chars[Math.floor(Math.random() * chars.length)];
          }
          output.push({ char: queue[i].char!, isScramble: true });
        } else {
          output.push({ char: ' ', isScramble: false });
        }
      }
      setDisplayChars(output);
      if (complete === queue.length) return;
      frame++;
      animId = requestAnimationFrame(update);
    }
    update();

    return () => { if (animId) cancelAnimationFrame(animId); };
  }, [trigger, text]);

  return (
    <span className={className}>
      {displayChars.map((c, i) => (
        c.isScramble
          ? <span key={i} style={{ color: '#00E47C' }}>{c.char}</span>
          : <span key={i}>{c.char}</span>
      ))}
    </span>
  );
}

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative">
      <div className="max-w-7xl mx-auto w-full z-10 pt-20">
        <motion.div className="space-y-6" variants={stagger} initial="hidden" animate="show">

          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-mono text-primary tracking-wider">SYSTEM ONLINE</span>
            </div>
            <p className="font-mono text-slate-400 text-md md:text-lg mb-2 tracking-wide">
              Hello, I am
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mix-blend-screen mb-4">
              <DecodeText text="Devansh" />
              <span className="block text-slate-600"><DecodeText text="Khanna." /></span>
            </h1>
            <div className="h-8 md:h-12 overflow-hidden mb-4">
              <img
                src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&size=24&pause=1000&color=00E47C&center=false&vCenter=true&width=600&lines=MBA+%2B+Python+%3D+Business+Solutions;Where+Boardrooms+Meet+Backends;Turning+Data+into+Decisions;Building+Solutions+That+Actually+Ship"
                alt="Typing Animation"
                className="h-full w-auto"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl md:text-4xl font-light text-slate-400 max-w-2xl leading-relaxed mb-6">
              Business Solutions Architect.
            </h2>
            <div className="flex flex-wrap gap-3 mb-8 opacity-80 hover:opacity-100 transition-opacity">
              <a href="https://www.linkedin.com/in/devansh-khanna-618606178/" target="_blank" rel="noreferrer">
                <img src="https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" className="h-7" />
              </a>
              <a href="mailto:devanshkhanna75@gmail.com">
                <img src="https://img.shields.io/badge/Email-Reach_Out-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" className="h-7" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-4 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1SMNtQ3_G9JwO0-VmzdGXndOEXV7K_TyQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-slate-700 hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
              <span className="relative text-slate-300 group-hover:text-white font-mono text-sm flex items-center gap-2">
                <FileText size={16} /> DOWNLOAD_RESUME.pdf
              </span>
            </a>
          </motion.div>

        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 animate-bounce text-slate-500 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest vertical-text" style={{ writingMode: 'vertical-rl' }}>Scroll to Begin</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
};