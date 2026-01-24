import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' }
    ];

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

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
            {/* Desktop Menu */}
            <div className="desktop-menu" style={{
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

            {/* Mobile Menu Toggle */}
            <button
                className="mobile-toggle"
                onClick={toggleMobileMenu}
                style={{
                    display: 'none', // Hidden by default, shown via CSS media query
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    zIndex: 1001,
                    position: 'absolute',
                    right: '1.5rem',
                    top: '1.5rem'
                }}
            >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Menu Overlay */}
            <div className="mobile-menu-overlay" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(5, 10, 20, 0.98)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'transform 0.3s ease-in-out',
                zIndex: 1000
            }}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={handleLinkClick}
                        style={{
                            color: 'var(--text-primary)',
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            textDecoration: 'none'
                        }}
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href="https://drive.google.com/file/d/1bo2yL6wUK3Hvedk8J6ANZwSLo-7sBxpm/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    style={{
                        padding: '0.8rem 1.5rem',
                        background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))',
                        color: '#fff',
                        borderRadius: '30px',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        border: 'none',
                        marginTop: '1rem',
                        textAlign: 'center'
                    }}
                >
                    Download Resume
                </a>
            </div>

            <style>{`
                @media (min-width: 769px) {
                    .mobile-menu-overlay {
                        display: none !important;
                    }
                }
                @media (max-width: 768px) {
                    .desktop-menu {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                    nav {
                        justify-content: space-between;
                        padding: 1rem 1.5rem;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
