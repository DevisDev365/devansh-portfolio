import { motion } from 'framer-motion';
import profileData from '../data/profile.json';

const Skills = () => {
    return (
        <section id="skills" className="container" style={{ padding: '5rem 20px' }}>
            <h2 className="section-title">Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                {Object.entries(profileData.skills).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel"
                    >
                        <h3 style={{
                            color: 'var(--accent-cyan)',
                            marginBottom: '1.5rem',
                            paddingBottom: '0.5rem',
                            borderBottom: '1px solid var(--glass-border)',
                            textTransform: 'uppercase',
                            fontSize: '1rem',
                            letterSpacing: '1px'
                        }}>
                            {category}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                            {skills.map((skill, i) => (
                                <motion.a
                                    key={i}
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ scale: 1.1, background: 'rgba(255, 255, 255, 0.1)' }}
                                    style={{
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '6px',
                                        fontSize: '0.9rem',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--glass-border)',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        display: 'inline-block'
                                    }}
                                >
                                    {skill.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
