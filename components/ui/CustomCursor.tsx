import React, { useEffect, useState } from 'react';
import { WorldThemeKey } from '../../hooks/useWorldTheme';

interface CustomCursorProps {
  activeWorld: WorldThemeKey;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ activeWorld }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse/trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          window.getComputedStyle(target).cursor === 'pointer';
        setIsPointer(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    document.documentElement.classList.add('has-custom-cursor');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // Chapter-specific cursor styles
  const renderCursorContent = () => {
    switch (activeWorld) {
      case 'imperial':
        return (
          <div
            className={`transition-transform duration-150 ${
              isPointer ? 'scale-125' : 'scale-100'
            }`}
          >
            {/* Blueprint technical reticle */}
            <div className="w-8 h-8 -translate-x-1/2 -translate-y-1/2 relative">
              <div className="absolute inset-0 border border-white/60 rounded-full" />
              <div className="absolute top-1/2 left-0 w-8 h-[1px] bg-white/40 -translate-y-1/2" />
              <div className="absolute left-1/2 top-0 h-8 w-[1px] bg-white/40 -translate-x-1/2" />
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-[#FFD60A] rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        );

      case 'smaaash':
        return (
          <div
            className={`transition-transform duration-150 ${
              isPointer ? 'scale-150' : 'scale-100'
            }`}
          >
            {/* Bold solid bowling ball arcade cursor */}
            <div className="w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#11110F] border-2 border-[#FFF8F0] shadow-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#FFF8F0] rounded-full" />
            </div>
          </div>
        );

      case 'elevra':
        return (
          <div
            className={`transition-transform duration-150 ${
              isPointer ? 'scale-125' : 'scale-100'
            }`}
          >
            {/* Enterprise ERP node connector */}
            <div className="w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#5B21B6] bg-white/80 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#5B21B6] rounded-full" />
            </div>
          </div>
        );

      case 'projects':
      case 'gtm':
        return (
          <div
            className={`transition-transform duration-150 ${
              isPointer ? 'scale-125' : 'scale-100'
            }`}
          >
            {/* Cyber green terminal reticle */}
            <div className="w-7 h-7 -translate-x-1/2 -translate-y-1/2 border border-[#19C37D] rounded-none flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#19C37D]" />
            </div>
          </div>
        );

      case 'hero':
      default:
        return (
          <div
            className={`transition-transform duration-150 ${
              isPointer ? 'scale-150 bg-black/10' : 'scale-100'
            }`}
          >
            {/* Ink ring on cream paper */}
            <div className="w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#11110F] bg-transparent flex items-center justify-center">
              <div className="w-1 h-1 bg-[#19C37D] rounded-full" />
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate3d(0,0,0)',
        willChange: 'transform',
      }}
    >
      {renderCursorContent()}
    </div>
  );
};
