import { motion } from 'framer-motion';
import profileData from '../data/profile.json';

const Hero = () => {
    return (
        <section className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', textAlign: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        position: 'absolute',
                        inset: '-5px',
                        background: 'linear-gradient(45deg, var(--accent-blue), var(--accent-gold))',
                        borderRadius: '50%',
                        filter: 'blur(10px)',
                        opacity: 0.7
                    }}></div>
                    <img
                        src={`${import.meta.env.BASE_URL}profile.png`}
                        alt={profileData.name}
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid var(--bg-color)',
                            position: 'relative',
                            zIndex: 2
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '0.5rem', background: 'linear-gradient(to right, #fff, var(--accent-blue))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', left: 'auto', transform: 'none' }}>
                        {profileData.name}
                    </h1>
                    <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', color: 'var(--accent-gold)', marginBottom: '1rem', fontWeight: 600 }}>
                        {profileData.tagline}
                    </h2>
                    <p style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
                        {profileData.summary}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem', maxWidth: '800px' }}>
                        {profileData.target_roles.map((role, index) => (
                            <span key={index} style={{
                                fontSize: '0.9rem',
                                padding: '0.2rem 0.8rem',
                                borderRadius: '20px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-secondary)'
                            }}>
                                {role}
                            </span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                        <a href="#projects" className="glass-panel" style={{ padding: '0.8rem 2rem', borderRadius: '50px', color: 'var(--accent-blue)', fontWeight: 600 }}>
                            View Projects
                        </a>
                        <a href="#contact" style={{ padding: '0.8rem 2rem', borderRadius: '50px', border: '1px solid var(--text-secondary)', color: 'var(--text-primary)' }}>
                            Contact Me
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
