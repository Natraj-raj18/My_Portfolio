    import { useReveal } from '../hooks/useReveal';

    const TICKER_ITEMS = [
    'Python', 'JavaScript', 'React.js', 'Django', 'MySQL', 'Git',
    'HTML5', 'CSS3', 'OOP', 'DSA', 'GitHub', 'Excel',
    ];

    const CATEGORIES = [
    { label: 'Languages', items: ['Python', 'JavaScript'] },
    { label: 'Frontend', items: ['React.js', 'HTML5', 'CSS3'] },
    { label: 'Backend', items: ['Django','Express.js'] },
    { label: 'Database', items: ['MySQL'] },
    { label: 'Tools', items: ['Git', 'GitHub', 'Excel'] },
    { label: 'Core Concepts', items: ['OOP', 'Data Structures & Algorithms'] },
    ];

    export default function Skills() {
    const headerRef = useReveal();
    const tickerList = [...TICKER_ITEMS, ...TICKER_ITEMS];

    return (
        <section id="skills" className="py-28">
        <div ref={headerRef} className="reveal px-6 max-w-6xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Stack
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">
            What I actually use
            </h2>
        </div>

        {/* Build-log ticker */}
        <div
            className="mt-12 py-4 overflow-hidden border-y"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
        >
            <div className="flex whitespace-nowrap animate-ticker w-max">
            {tickerList.map((item, idx) => (
                <span key={idx} className="font-mono text-sm px-6" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--accent)' }}>$</span>{item}
                </span>
            ))}
            </div>
        </div>

        <div className="mt-16 px-6 max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, idx) => (
            <CategoryBlock key={cat.label} cat={cat} delay={idx * 80} />
            ))}
        </div>
        </section>
    );
    }

    function CategoryBlock({ cat, delay }) {
    const ref = useReveal();
    return (
        <div ref={ref} className="reveal" style={{ animationDelay: `${delay}ms` }}>
        <h3 className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            {cat.label}
        </h3>
        <ul className="mt-3 space-y-2">
            {cat.items.map((item) => (
            <li key={item} className="font-display text-lg">
                {item}
            </li>
            ))}
        </ul>
        </div>
    );
    }