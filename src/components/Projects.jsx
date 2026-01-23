import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import profileData from '../data/profile.json';

const Projects = () => {
    return (
        <section id="projects" className="container" style={{ padding: '5rem 20px' }}>
            <h2 className="section-title">Featured Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {profileData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="glass-panel"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{project.name}</h3>
                        </div>
                        <p style={{ color: 'var(--accent-gold)', marginBottom: '0.5rem', fontWeight: 600 }}>{project.role}</p>
                        {project.period && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{project.period}</p>}

                        <div style={{ flex: 1 }}>
                            {project.details && (
                                <>
                                    <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>Problem: </span>
                                        <span style={{ color: 'var(--text-secondary)' }}>{project.details.problem}</span>
                                    </div>
                                    <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>Approach: </span>
                                        <span style={{ color: 'var(--text-secondary)' }}>{project.details.approach}</span>
                                    </div>
                                    <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>Outcome: </span>
                                        <span style={{ color: 'var(--text-secondary)' }}>{project.details.outcome}</span>
                                    </div>
                                </>
                            )}
                        </div>

                        <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'flex-end' }}>
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid var(--accent-blue)',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '4px',
                                        color: 'var(--accent-blue)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem'
                                    }}
                                    className="project-link"
                                >
                                    View Project <FaExternalLinkAlt size={12} />
                                </a>
                            ) : (
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Internal Project</span>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
