import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.8)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 1000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem'
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="glass-panel"
                        style={{
                            width: '100%',
                            maxWidth: '800px',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            position: 'relative',
                            padding: '2.5rem',
                            border: '1px solid var(--glass-border)',
                            background: 'rgba(15, 23, 42, 0.95)' // Darker, simpler background for readability
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--text-secondary)',
                                cursor: 'pointer',
                                fontSize: '1.5rem',
                                zIndex: 10
                            }}
                        >
                            <FaTimes />
                        </button>

                        {/* Header */}
                        <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{project.name}</h2>
                            {project.subtitle && <p style={{ color: 'var(--accent-blue)', fontSize: '1.1rem' }}>{project.subtitle}</p>}
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.6rem 1.2rem', borderRadius: '6px', background: 'var(--accent-blue)', color: 'white', textDecoration: 'none', fontWeight: 600 }}>
                                    Live Demo <FaExternalLinkAlt size={12} />
                                </a>
                            )}

                        </div>

                        {/* Main Content Details */}
                        {project.details && (
                            <div className="project-details-content">
                                {/* Technical Implementation */}
                                {project.details.technicalImplementation && (
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.2rem', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '0.8rem' }}>Technical Implementation</h3>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                            {Object.entries(project.details.technicalImplementation).map(([key, items]) => (
                                                <div key={key}>
                                                    <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.5rem', textTransform: 'capitalize' }}>
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </h4>
                                                    <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                        {items.map((item, i) => (
                                                            <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* System Architecture (Crypto Project) */}
                                {project.details.systemArchitecture && (
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.2rem', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '0.8rem' }}>System Architecture</h3>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                            {Object.entries(project.details.systemArchitecture).map(([key, items]) => (
                                                <div key={key}>
                                                    <h4 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: '0.5rem', textTransform: 'capitalize' }}>
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </h4>
                                                    <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                        {items.map((item, i) => (
                                                            <li key={i} style={{ marginBottom: '0.3rem' }}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Modules (Resume Enhancer) */}
                                {project.details.modules && (
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.2rem', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '0.8rem' }}>Core Modules</h3>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                            {project.details.modules.map((module, i) => (
                                                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.2rem', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                                                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{module.title}</h4>

                                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                                        {module.implementation && (
                                                            <div>
                                                                <h5 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Implementation</h5>
                                                                <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                                    {module.implementation.map((item, j) => (
                                                                        <li key={j} style={{ marginBottom: '0.2rem' }}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}

                                                        {module.automationFeatures && (
                                                            <div>
                                                                <h5 style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Automation Features</h5>
                                                                <ul style={{ paddingLeft: '1.2rem', margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                                                    {module.automationFeatures.map((item, j) => (
                                                                        <li key={j} style={{ marginBottom: '0.2rem' }}>{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Automation Capabilities (General) */}
                                {project.details.automationCapabilities && (
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem', fontSize: '1.2rem', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '0.8rem' }}>Automation Capabilities</h3>
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                            {project.details.automationCapabilities.map((cap, i) => (
                                                <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '6px' }}>
                                                    <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.4rem' }}>{cap.name}</strong>
                                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{cap.description}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Stack */}
                                {project.details.stack && (
                                    <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>TECH STACK</p>
                                        <p style={{ color: 'var(--accent-cyan)', fontSize: '1.1rem', fontWeight: 500 }}>{project.details.stack}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
