import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { useState } from 'react';
import profileData from '../data/profile.json';
import ProjectModal from './ProjectModal';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="container" style={{ padding: '5rem 20px' }}>
            <h2 className="section-title">Featured Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                {profileData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10, boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="glass-panel"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'all 0.3s ease',
                            padding: '2rem'
                        }}
                    >
                        <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)', marginBottom: '1rem' }}>
                            <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-primary)' }}>{project.name}</h3>
                            {project.subtitle && <p style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', marginTop: '0.2rem' }}>{project.subtitle}</p>}
                        </div>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}>{project.description}</p>

                        <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                            {project.keyFeatures && (
                                <div style={{ marginBottom: '1rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--white)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Key Features</h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {project.keyFeatures.map((feature, i) => (
                                            <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.3rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                                                <span style={{ color: 'var(--accent-cyan)', marginTop: '4px' }}>▹</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {project.impact && (
                                <div style={{ marginTop: '1rem', padding: '0.8rem', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '8px', borderLeft: '3px solid var(--accent-blue)' }}>
                                    <span style={{ fontWeight: 600, color: 'var(--accent-blue)', fontSize: '0.9rem' }}>Impact: </span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{project.impact}</span>
                                </div>
                            )}
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            {project.techStack && project.techStack.map((tech, i) => (
                                <a
                                    key={i}
                                    href={tech.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontSize: '0.75rem',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '12px',
                                        background: 'var(--glass-highlight)',
                                        color: 'var(--text-secondary)',
                                        border: '1px solid var(--glass-border)',
                                        textDecoration: 'none',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {tech.name}
                                </a>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            {project.details && (
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    style={{
                                        flex: 1,
                                        background: 'transparent',
                                        color: 'var(--text-primary)',
                                        border: '1px solid var(--glass-border)',
                                        padding: '0.6rem',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        minWidth: '140px',
                                        transition: 'background 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
                                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                                >
                                    View Details <FaInfoCircle size={12} />
                                </button>
                            )}

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        flex: 1,
                                        textAlign: 'center',
                                        background: 'var(--accent-blue)',
                                        color: 'white',
                                        padding: '0.6rem',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem',
                                        minWidth: '140px'
                                    }}
                                >
                                    Live Project <FaExternalLinkAlt size={12} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
