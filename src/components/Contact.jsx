import { FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub } from 'react-icons/fa';
import profileData from '../data/profile.json';

const Contact = () => {
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
                    <a href={`mailto:${profileData.contact.email}`} className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                        <FaEnvelope size={20} color="var(--accent-blue)" />
                        {profileData.contact.email}
                    </a>
                    <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                        <FaLinkedin size={20} color="var(--accent-blue)" />
                        LinkedIn
                    </a>
                    <a href={profileData.contact.github} target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
                        <FaGithub size={20} color="var(--accent-blue)" />
                        GitHub
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

export default Contact;
