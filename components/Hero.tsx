import React from 'react';
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
              Devansh
              <span className="block text-slate-600">Khanna.</span>
            </h1>
            <div className="h-8 md:h-12 overflow-hidden mb-4">
              <img
                src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&size=24&pause=1000&color=3B82F6&center=false&vCenter=true&width=600&lines=MBA+%2B+Python+%3D+Business+Solutions;Where+Boardrooms+Meet+Backends;Turning+Data+into+Decisions;Building+Solutions+That+Actually+Ship"
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