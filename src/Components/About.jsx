    import { useReveal } from '../hooks/useReveal';

    const TIMELINE = [
    {
        role: 'Front-End Developer Intern',
        org: 'Goodwill Enterprises',
        period: '2025',
        points: [
        'Built and styled 5+ responsive web pages using HTML5 and CSS3, improving cross-device compatibility',
        'Redesigned key UI components to improve layout clarity and reduce user friction',
        'Implemented reusable, accessible interface patterns following modern web standards',
        'Collaborated using Git in a structured development environment',
        ],
    },
    {
        role: 'Python Full Stack Developer Certification',
        org: 'Pentagon Space',
        period: '2025-2026',
        points: [
        'Deepening backend fundamentals across Python and Django',
        'Pairing certification work with daily DSA practice on LeetCode',
        ],
    },
    {
        role: 'B.Sc, Computer Science & Electronics',
        org: 'Nrupathunga University',
        period: '2025 · CGPA 8.28/10',
        points: [],
    },
    ];

    export default function About() {
    const introRef = useReveal();

    return (
        <section id="about" className="px-6 py-28 max-w-6xl mx-auto">
        <div ref={introRef} className="reveal grid md:grid-cols-[1fr_1.4fr] gap-12">
            <div>
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                About
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 leading-tight">
                Backend logic,
                <br />
                frontend feel.
            </h2>
            </div>

            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            I'm a full stack developer who got into this by wanting interfaces to feel
            right — then realized the interesting problems are usually one layer
            down. I work comfortably across React.js on the front end and Django and
            Python on the back end, and I'm just as happy debugging a CSS grid as I
            am wiring sensor logic on an Arduino. I hold a BSc in Computer Science
            &amp; Electronics, completed a front-end internship at Goodwill
            Enterprises, and spend my downtime on LeetCode sharpening the DSA side of
            the craft.
            </p>
        </div>

        <div className="mt-20 space-y-0">
            {TIMELINE.map((item, idx) => {
            return <TimelineRow key={item.role} item={item} delay={idx * 100} isLast={idx === TIMELINE.length - 1} />;
            })}
        </div>
        </section>
    );
    }

    function TimelineRow({ item, delay, isLast }) {
    const ref = useReveal();
    return (
        <div
        ref={ref}
        className={`reveal grid md:grid-cols-[220px_1fr] gap-4 md:gap-12 py-8 ${
            !isLast ? 'border-b' : ''
        }`}
        style={{ borderColor: 'var(--border)', animationDelay: `${delay}ms` }}
        >
        <div className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
            {item.period}
        </div>
        <div>
            <h3 className="font-display text-lg font-semibold">{item.role}</h3>
            <p className="text-sm mt-1" style={{ color: 'var(--accent)' }}>
            {item.org}
            </p>
            {item.points.length > 0 && (
            <ul className="mt-4 space-y-2">
                {item.points.map((point, i) => (
                <li key={i} className="text-sm leading-relaxed flex gap-2" style={{ color: 'var(--text)' }}>
                    <span style={{ color: 'var(--accent)' }}>▸</span>
                    <span>{point}</span>
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>
    );
    }