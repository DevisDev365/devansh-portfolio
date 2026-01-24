import { motion } from 'framer-motion';
import profileData from '../data/profile.json';

const About = () => {
    return (
        <section id="about" className="container" style={{ padding: '6rem 1rem' }}>
            <h2 className="section-title">About Me</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel"
                >
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        {profileData.summary}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        {[
                            { title: 'Background', content: profileData.about.background },
                            { title: 'Focus Areas', content: profileData.about.focus },
                            { title: 'Current Role', content: profileData.about.role },
                            { title: 'Value Proposition', content: profileData.about.value_proposition }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3 style={{ fontSize: '1.2rem', color: 'var(--white)', marginBottom: '0.5rem' }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{item.content}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
