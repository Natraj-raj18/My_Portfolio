    import { useReveal } from '../hooks/useReveal';

    export default function ProjectCard({ project, delay = 0 }) {
    const ref = useReveal();

    return (
        <div
        ref={ref}
        className="reveal group rounded-xl overflow-hidden border transition-transform duration-300 hover:-translate-y-1"
        style={{
            borderColor: 'var(--border)',
            backgroundColor: 'var(--surface)',
            animationDelay: `${delay}ms`,
        }}
        >
        {/* Fake editor tab bar */}
        <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-elevated)' }}
        >
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5C5F66' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5C5F66' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'var(--accent)' }} />
            <span
            className="ml-3 font-mono text-xs truncate"
            style={{ color: 'var(--text-muted)' }}
            >
            {project.file}
            </span>
        </div>

        <div className="p-6 flex flex-col h-full">
            <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-xl font-semibold">{project.title}</h3>
            <span className="font-mono text-xs whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
                {project.year}
            </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            {project.description}
            </p>

            <ul className="mt-4 space-y-1.5">
            {project.highlights.map((h, idx) => (
                <li key={idx} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--text)' }}>
                <span style={{ color: 'var(--accent)' }}>▸</span>
                <span>{h}</span>
                </li>
            ))}
            </ul>

            <div className="mt-5 pt-4 border-t flex flex-wrap gap-2" style={{ borderColor: 'var(--border)' }}>
            {project.stack.map((tech) => (
                <span
                key={tech}
                className="font-mono text-xs px-2.5 py-1 rounded-md"
                style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--accent-dim)' }}
                >
                {tech}
                </span>
            ))}
            </div>
        </div>
        </div>
    );
    }