    import ProjectCard from './ProjectCard';
    import { useReveal } from '../hooks/useReveal';

    const PROJECTS = [
    {
        title: 'Arca',
        file: 'arca/landing.jsx',
        year: '2025–2026',
        description:
        'A SaaS landing page built to feel premium from the first scroll — designed wireframe-first, then built out as a fully modular React app.',
        highlights: [
        'Scroll-triggered animations and a pricing toggle component',
        'Modular architecture split across 11 React components',
        'Designed UI/UX from wireframe through to production build',
        ],
        stack: ['React.js', 'CSS3', 'Component Architecture'],
    },
    {
        title: 'Mr. Frost',
        file: 'mr-frost/navbar.jsx',
        year: '2025–2026',
        description:
        'A holiday-themed recipe blog where the standout piece is the navigation system — built to feel as polished on mobile as on desktop.',
        highlights: [
        'Responsive navbar with hover effects and active link tracking',
        'Mobile hamburger menu built from scratch',
        'Full recipe blog layout in React.js',
        ],
        stack: ['React.js', 'HTML5', 'CSS3'],
    },
    {
        title: 'Anti-Collision System',
        file: 'anti_collision.ino',
        year: '2025',
        description:
        'A real-time obstacle detection system — the project that took problem-solving off the screen and into hardware.',
        highlights: [
        'Arduino Uno + ultrasonic sensors for live distance measurement',
        'Sensor-based decision logic to auto-trigger proximity alerts',
        'Hands-on with embedded systems and low-level C',
        ],
        stack: ['Arduino Uno', 'C', 'Ultrasonic Sensors'],
    },
    ];

    export default function Projects() {
    const headerRef = useReveal();

    return (
        <section id="work" className="px-6 py-28 max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal">
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Selected Work
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
            Three problems, three domains
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>
            Two web apps and one piece of hardware — different surfaces, same approach: understand the
            whole system before touching the UI.
            </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} delay={idx * 120} />
            ))}
        </div>
        </section>
    );
    }