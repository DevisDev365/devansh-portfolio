import { motion } from 'framer-motion';
import profileData from '../data/profile.json';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', textAlign: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'relative' }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div
                        animate={{
                            background: [
                                'linear-gradient(45deg, var(--accent-blue), var(--accent-cyan))',
                                'linear-gradient(225deg, var(--accent-blue), var(--accent-cyan))',
                                'linear-gradient(45deg, var(--accent-blue), var(--accent-cyan))'
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        style={{
                            position: 'absolute',
                            inset: '-5px',
                            borderRadius: '50%',
                            filter: 'blur(10px)',
                            opacity: 0.7
                        }}
                    ></motion.div>
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
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="section-title"
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '0.5rem', background: 'linear-gradient(to right, #fff, var(--accent-blue))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', left: 'auto', transform: 'none' }}
                    >
                        {profileData.name}
                    </motion.h1>
                    <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', color: 'var(--accent-cyan)', marginBottom: '1rem', fontWeight: 600 }}>
                        {profileData.tagline}
                    </motion.h2>
                    <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: 'var(--text-secondary)', fontWeight: 300, maxWidth: '800px', margin: '0 auto', padding: '0 1rem', lineHeight: '1.6' }}>
                        {profileData.introduction}
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            className="glass-panel"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent-blue)" }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                color: 'white',
                                fontWeight: 600,
                                background: 'var(--accent-blue)',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'inline-block'
                            }}
                        >
                            View Projects
                        </motion.a>
                        <motion.a
                            href="https://drive.google.com/file/d/1bo2yL6wUK3Hvedk8J6ANZwSLo-7sBxpm/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px var(--accent-cyan)" }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 2.5rem',
                                borderRadius: '50px',
                                border: '1px solid var(--accent-cyan)',
                                color: 'var(--accent-cyan)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                background: 'transparent',
                                display: 'inline-block'
                            }}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
