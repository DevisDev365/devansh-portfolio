import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Linkedin, Mail } from 'lucide-react';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

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

const typeSentence = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.1,
    },
  },
};

const typeWord = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.4, ease: 'easeOut' } },
};

function RevealText({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  
  return (
    <motion.span
      className={className}
      variants={typeSentence}
      initial="hidden"
      animate="show"
      style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.3em' }}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={typeWord}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 relative">
      <div className="max-w-7xl mx-auto w-full z-10 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <span className="block text-slate-600"><DecodeText text="Khanna" /></span>
            </h1>
            <div className="h-8 md:h-12 flex items-center mb-4">
              <RevealText 
                text="Turning manual workflows into automated systems."
                className="font-mono text-xl md:text-2xl text-primary font-medium tracking-tight"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="https://www.linkedin.com/in/devansh-khanna-618606178/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all text-sm font-mono text-slate-300 hover:text-white group">
                <Linkedin size={16} className="text-[#0A66C2] group-hover:scale-110 transition-transform" /> Connect
              </a>
              <a href="mailto:devanshkhanna75@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all text-sm font-mono text-slate-300 hover:text-white group">
                <Mail size={16} className="text-[#EA4335] group-hover:scale-110 transition-transform" /> Reach Out
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="pt-4 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1MF3BBKMvM04cpVVf1md3y4dTLe2WsS9q/view?usp=sharing"
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

        {/* Right Side - Automation Feed */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:flex justify-end w-full"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Decorative background blurs */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-purple-500/10 rounded-full blur-3xl"></div>
            
            {/* Floating Card */}
            <div className="relative h-full w-full border border-white/5 bg-[#0a0a0a]/60 backdrop-blur-xl rounded-2xl p-6 flex flex-col shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <span className="text-xs font-mono text-primary tracking-widest uppercase">Live Automation Feed</span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
              </div>
              
              <div className="font-mono text-xs md:text-sm text-slate-400 flex-1 flex flex-col gap-4">
                
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Data Extraction</span>
                    <span className="text-green-400 text-[10px] px-2 py-0.5 bg-green-400/10 rounded-full">COMPLETED</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-full"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">AI Analysis</span>
                    <span className="text-primary text-[10px] px-2 py-0.5 bg-primary/10 rounded-full animate-pulse">PROCESSING</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-primary"
                      initial={{ width: "0%" }}
                      animate={{ width: "60%" }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 p-3 rounded-lg bg-white/5 border border-white/5 opacity-50">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Client Reporting</span>
                    <span className="text-slate-500 text-[10px] px-2 py-0.5 bg-white/5 rounded-full">QUEUED</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full"></div>
                </div>

              </div>
              
              <div className="mt-auto pt-4 border-t border-white/5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">System Status</span>
                  <span className="text-green-400 font-medium flex items-center gap-1">
                     <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> OPTIMIZED
                  </span>
                </div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -bottom-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-lg p-3 text-xs font-mono text-slate-300 shadow-xl"
            >
              + 400hrs saved
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 animate-bounce text-slate-500 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest vertical-text" style={{ writingMode: 'vertical-rl' }}>Scroll to Begin</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
};