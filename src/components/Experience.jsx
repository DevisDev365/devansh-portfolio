import { motion } from 'framer-motion';
import profileData from '../data/profile.json';

const Experience = () => {
    return (
        <section id="experience" className="container" style={{ padding: '5rem 20px' }}>
            <h2 className="section-title">Work Experience</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
                {profileData.experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel"
                        style={{ padding: '2rem' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', marginBottom: '0.2rem' }}>{job.role}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)' }}>{job.company}</h4>
                            </div>
                            <span style={{
                                padding: '0.4rem 1rem',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '20px',
                                height: 'fit-content',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem'
                            }}>
                                {job.period}
                            </span>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {job.description.map((desc, i) => (
                                <li key={i} style={{
                                    marginBottom: '0.8rem',
                                    color: 'var(--text-secondary)',
                                    display: 'flex',
                                    gap: '0.8rem',
                                    fontSize: '1rem',
                                    lineHeight: '1.6'
                                }}>
                                    <span style={{ color: 'var(--accent-blue)', minWidth: '15px' }}>▹</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <h2 className="section-title" style={{ marginTop: '5rem' }}>Education</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                {profileData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-panel"
                        style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
                    >
                        <div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{edu.course}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{edu.college}</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{ display: 'block', color: 'var(--accent-blue)', fontWeight: 600 }}>{edu.year}</span>
                            {edu.score && <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{edu.score}</span>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
