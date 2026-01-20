import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable elements
            const target = e.target;
            setIsHovering(
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('glass-panel')
            );
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: 'transparent',
            border: '2px solid var(--accent-blue)',
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: 'rgba(0, 242, 255, 0.1)',
            border: '2px solid var(--accent-gold)',
        }
    };

    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 1
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            opacity: 0.5
        }
    };

    return (
        <>
            <motion.div
                className="cursor"
                variants={variants}
                animate={isHovering ? 'hover' : 'default'}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />
            <motion.div
                variants={dotVariants}
                animate={isHovering ? 'hover' : 'default'}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'var(--accent-blue)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 10000
                }}
            />
            <style>{`
        body { cursor: none; }
        a, button, .glass-panel { cursor: none; }
        @media (max-width: 768px) {
            .cursor { display: none; }
            body { cursor: auto; }
            a, button, .glass-panel { cursor: pointer; }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
