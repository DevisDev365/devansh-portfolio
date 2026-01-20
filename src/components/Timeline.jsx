import { motion } from 'framer-motion';
import profileData from '../data/profile.json';

const TimelineItem = ({ data, isLeft, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-end' : 'flex-start',
                paddingBottom: '3rem',
                position: 'relative',
                width: '50%'
            }}
            className={isLeft ? 'timeline-left' : 'timeline-right'}
        >
            <div className="glass-panel" style={{ width: '80%', position: 'relative' }}>
                <h3 style={{ color: 'var(--accent-gold)' }}>{data.role || data.course}</h3>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{data.company || data.college}</h4>
                <span style={{ fontSize: '0.9rem', color: 'var(--accent-blue)', display: 'block', marginBottom: '1rem' }}>
                    {data.period || data.year}
                </span>
                {data.description && (
                    <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                        {data.description.map((desc, i) => (
                            <li key={i} style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--glass-border)' }}>
                                {desc}
                            </li>
                        ))}
                    </ul>
                )}
                {data.score && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Score: {data.score}</p>}
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    // Combine and sort by "order" field
    const combinedData = [
        ...profileData.experience.map(i => ({ ...i, type: 'work' })),
        ...profileData.education.map(i => ({ ...i, type: 'education' }))
    ].sort((a, b) => (a.order || 99) - (b.order || 99));

    return (
        <section id="experience" className="container" style={{ padding: '5rem 20px' }}>
            <h2 className="section-title">Timeline</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Central Line */}
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--glass-border)', transform: 'translateX(-50%)' }}></div>

                {combinedData.map((item, index) => (
                    <div key={`item-${index}`} style={{ width: '100%', display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}>
                        <TimelineItem data={item} isLeft={index % 2 === 0} index={index} />
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Timeline;
