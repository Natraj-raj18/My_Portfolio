    import { useEffect, useState } from 'react';

    const FULL_TEXT = 'Natraj KN';

    export default function Hero() {
    const [typed, setTyped] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
        i += 1;
        setTyped(FULL_TEXT.slice(0, i));
        if (i === FULL_TEXT.length) {
            clearInterval(interval);
            setTimeout(() => setShowAnswer(true), 400);
        }
        }, 110);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
        id="top"
        className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
        >
        <div className="font-mono text-sm md:text-base" style={{ color: 'var(--text-muted)' }}>
            <span style={{ color: 'var(--accent)' }}>Natraj@portfolio</span>:{' '}
            {typed}
            <span className="cursor-blink" style={{ color: 'var(--accent)' }}>
            |
            </span>
        </div>

        <div
            className={`mt-6 transition-opacity duration-700 ${
            showAnswer ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <h1 className="font-display font-semibold text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
            Nataraj K N
            </h1>
            <p
            className="font-display text-xl sm:text-2xl md:text-3xl mt-3"
            style={{ color: 'var(--accent)' }}
            >
            Full Stack Developer
            </p>
            <p
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed"
            style={{ color: 'var(--text-muted)' }}
            >
            I build interfaces in React and ship the logic behind them in Django and
            Python. Lately, that curiosity has stretched past the browser into
            sensors and circuits — proof that I like understanding a system end to
            end, not just the part that renders.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
                href="#work"
                onClick={(e) => {
                e.preventDefault();
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-mono text-sm uppercase tracking-wide px-6 py-3 rounded-full transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
            >
                View Projects →
            </a>
            <a
                href="#contact"
                onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="font-mono text-sm uppercase tracking-wide px-6 py-3 rounded-full border transition-colors duration-200"
                style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
                Get In Touch
            </a>
            </div>
        </div>
        </section>
    );
    }