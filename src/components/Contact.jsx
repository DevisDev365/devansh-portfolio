import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import profileData from '../data/profile.json';

export const Skills = () => {
    return (
        <section id="skills" className="container" style={{ padding: '5rem 20px' }}>
            <h2 className="section-title">Skills & Achievements</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Core Competencies Section */}
                <div>
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-blue)', paddingLeft: '1rem' }}>Core Competencies</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {profileData.skills.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}
                            >
                                <span style={{ color: 'var(--accent-blue)' }}>▹</span>
                                <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Achievements Section */}
                <div>
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-blue)', paddingLeft: '1rem' }}>Key Achievements</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {profileData.achievements.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}
                            >
                                <span style={{ color: 'var(--accent-blue)' }}>▹</span>
                                <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Certifications Section */}
                <div>
                    <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-blue)', paddingLeft: '1rem' }}>Certifications</h3>
                    <ul style={{ listStyle: 'none' }}>
                        {profileData.certifications.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}
                            >
                                <span style={{ color: 'var(--accent-blue)' }}>▹</span>
                                <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export const Contact = () => {
    return (
        <footer id="contact" style={{ background: 'var(--glass-bg)', padding: '4rem 0 2rem', marginTop: '4rem', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h2 className="section-title" style={{ fontSize: '2rem' }}>Get In Touch</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2rem' }}>
                    Feel free to reach out for opportunities, collaborations, or just to say hi!
                </p>

                <div style={{ marginBottom: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Work Style</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>In-office first / Hybrid OK</p>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h4 style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>Preferred Industry</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Consulting, Strategy, SaaS, FinTech, AI</p>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
                    <a href={`mailto:${profileData.contact.email}`} className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <FaEnvelope size={20} color="var(--accent-blue)" />
                        {profileData.contact.email}
                    </a>
                    <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <FaLinkedin size={20} color="var(--accent-blue)" />
                        LinkedIn Profile
                    </a>
                    <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <FaPhone size={20} color="var(--accent-blue)" />
                        {profileData.contact.phone}
                    </div>
                    <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)' }}>
                        <FaMapMarkerAlt size={20} color="var(--accent-blue)" />
                        {profileData.contact.location}
                    </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    © {new Date().getFullYear()} {profileData.name}. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};
