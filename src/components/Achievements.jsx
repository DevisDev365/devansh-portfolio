import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import profileData from '../data/profile.json';

const Achievements = () => {
    return (
        <section id="achievements" className="container" style={{ padding: '5rem 20px' }}>
            <h2 className="section-title">Achievements</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {profileData.achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="glass-panel"
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1.5rem',
                            padding: '2rem'
                        }}
                    >
                        <div style={{
                            background: 'rgba(251, 191, 36, 0.1)',
                            padding: '1rem',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <FaTrophy size={24} color="var(--accent-gold)" />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--white)' }}>{item.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>{item.organization}</p>
                            {item.description && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.description}</p>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
