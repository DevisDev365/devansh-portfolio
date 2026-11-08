import React, { useEffect, useState, useRef } from 'react';

interface AnimeFocalHeroProps {
  className?: string;
}

export const AnimeFocalHero: React.FC<AnimeFocalHeroProps> = ({ className = '' }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable parallax on mobile/touch
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 24;
      const y = (e.clientY / innerHeight - 0.5) * 24;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[480px] sm:max-w-[540px] drop-shadow-xl"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
          transition: 'transform 120ms ease-out',
        }}
      >
        {/* Layer 1: Manga Background Speed Lines & Framing Arc */}
        <g
          style={{
            transform: `translate3d(${mouseOffset.x * -0.3}px, ${mouseOffset.y * -0.3}px, 0)`,
            transition: 'transform 160ms ease-out',
          }}
        >
          {/* Halftone / Speed Line Radials in Ink */}
          <circle cx="300" cy="340" r="220" stroke="#11110F" strokeWidth="2.5" strokeDasharray="6 8" opacity="0.3" />
          <circle cx="300" cy="340" r="260" stroke="#11110F" strokeWidth="1" strokeDasharray="3 6" opacity="0.2" />
          <line x1="120" y1="120" x2="220" y2="220" stroke="#11110F" strokeWidth="2" opacity="0.35" />
          <line x1="480" y1="120" x2="380" y2="220" stroke="#11110F" strokeWidth="2" opacity="0.35" />
          <line x1="80" y1="340" x2="180" y2="340" stroke="#11110F" strokeWidth="2" opacity="0.35" />
          <line x1="520" y1="340" x2="420" y2="340" stroke="#11110F" strokeWidth="2" opacity="0.35" />
          {/* Green Geometric Technical Accent Marks */}
          <rect x="290" y="70" width="20" height="4" fill="#19C37D" />
          <rect x="298" y="62" width="4" height="20" fill="#19C37D" />
          <path d="M 160 520 L 140 560 L 180 560 Z" fill="#19C37D" opacity="0.8" />
        </g>

        {/* Layer 2: Main Manga / Anime Character Figure in Ink Linework */}
        <g
          style={{
            transform: `translate3d(${mouseOffset.x * 0.2}px, ${mouseOffset.y * 0.2}px, 0)`,
            transition: 'transform 120ms ease-out',
          }}
        >
          {/* Shoulders & High Collar Coat */}
          <path
            d="M 120 640 L 180 520 L 250 490 L 300 510 L 350 490 L 420 520 L 480 640 Z"
            fill="#11110F"
          />
          {/* Collar Details & Lapel Lines */}
          <path d="M 250 490 L 270 570 L 300 580 L 330 570 L 350 490" fill="#F3EEE4" stroke="#11110F" strokeWidth="4" />
          <line x1="300" y1="510" x2="300" y2="580" stroke="#11110F" strokeWidth="3" />

          {/* Neck & Jaw Contour */}
          <path
            d="M 270 430 L 270 490 L 330 490 L 330 430 Z"
            fill="#F3EEE4"
            stroke="#11110F"
            strokeWidth="4"
          />
          {/* Strong Angular Anime Jaw & Chin */}
          <path
            d="M 220 320 L 230 380 L 300 450 L 370 380 L 380 320"
            fill="#F3EEE4"
            stroke="#11110F"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />

          {/* Ears with Cyber Audio Transceiver */}
          <path d="M 215 325 C 205 330, 205 365, 225 375" fill="#F3EEE4" stroke="#11110F" strokeWidth="4" />
          <path d="M 385 325 C 395 330, 395 365, 375 375" fill="#F3EEE4" stroke="#11110F" strokeWidth="4" />
          {/* Cyber Ear Comm in Brand Green */}
          <rect x="200" y="338" width="12" height="22" rx="4" fill="#11110F" stroke="#19C37D" strokeWidth="2.5" />
          <circle cx="206" cy="349" r="3" fill="#19C37D" />

          {/* Face Details: Nose & Serious Mouth Linework */}
          <path d="M 300 360 L 294 382 L 304 384" stroke="#11110F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="284" y1="406" x2="316" y2="406" stroke="#11110F" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="292" y1="416" x2="308" y2="416" stroke="#11110F" strokeWidth="2.5" strokeLinecap="round" />

          {/* Hair Base Volume (Back Layers) */}
          <path
            d="M 180 340 L 160 270 L 190 240 L 180 180 L 230 160 L 250 110 L 310 100 L 370 120 L 410 160 L 440 210 L 420 270 L 440 340 L 410 330 L 390 280 L 360 280 L 330 290 L 300 280 L 270 290 L 240 280 L 210 290 Z"
            fill="#11110F"
          />

          {/* Sharp Spiky Anime Forefront Hair Strands */}
          <path
            d="M 210 200 L 240 310 L 260 250 L 285 320 L 305 240 L 325 315 L 345 255 L 375 305 L 385 220"
            fill="#11110F"
            stroke="#11110F"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </g>

        {/* Layer 3: Cybernetic Visor & High-Tech HUD Eyewear in Brand Green */}
        <g
          style={{
            transform: `translate3d(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px, 0)`,
            transition: 'transform 80ms ease-out',
          }}
        >
          {/* Eyewear Frame */}
          <path
            d="M 225 310 L 290 314 L 300 318 L 310 314 L 375 310 L 370 345 L 315 352 L 300 348 L 285 352 L 230 345 Z"
            fill="#11110F"
            stroke="#19C37D"
            strokeWidth="3.5"
          />
          {/* Visor Lens Glass with Green Luminous Sheen */}
          <path
            d="M 235 318 L 288 322 L 284 344 L 238 338 Z"
            fill="#19C37D"
            opacity="0.85"
          />
          <path
            d="M 312 322 L 365 318 L 362 338 L 316 344 Z"
            fill="#19C37D"
            opacity="0.85"
          />
          {/* Lens Specular Reflection Bars */}
          <line x1="244" y1="324" x2="256" y2="336" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="322" y1="324" x2="334" y2="336" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

          {/* Floating UI Reticle on Left Visor */}
          <circle cx="346" cy="330" r="4" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="2 2" />
        </g>

        {/* Layer 4: Manga Foreground Ink Screentone & Ink Splatters */}
        <g>
          {/* Cheek Hatching Shading */}
          <line x1="240" y1="365" x2="255" y2="375" stroke="#11110F" strokeWidth="2" opacity="0.6" />
          <line x1="245" y1="362" x2="260" y2="372" stroke="#11110F" strokeWidth="2" opacity="0.6" />
          <line x1="345" y1="375" x2="360" y2="365" stroke="#11110F" strokeWidth="2" opacity="0.6" />
          <line x1="340" y1="372" x2="355" y2="362" stroke="#11110F" strokeWidth="2" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};
