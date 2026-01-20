import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(5, 10, 20, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none'
        }}>
            <div style={{
                display: 'flex',
                gap: '2rem',
                background: scrolled ? 'transparent' : 'rgba(255, 255, 255, 0.03)',
                padding: scrolled ? '0' : '0.8rem 2rem',
                borderRadius: '50px',
                border: scrolled ? 'none' : '1px solid var(--glass-border)',
                backdropFilter: scrolled ? 'none' : 'blur(5px)'
            }}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        style={{
                            color: 'var(--text-primary)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            opacity: 0.8,
                            transition: 'opacity 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.opacity = '1'}
                        onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
