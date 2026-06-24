    import { useEffect, useState } from 'react';

    const LINKS = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
    ];

    export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
            });
        },
        { rootMargin: '-40% 0px -50% 0px' }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleNavClick = (id) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'py-3' : 'py-5'
        }`}
        style={{
            backgroundColor: scrolled ? 'rgba(11,13,16,0.85)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
        >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
            <button
            onClick={() => handleNavClick('top')}
            className="font-mono text-sm tracking-tight"
            style={{ color: 'var(--text)' }}
            aria-label="Back to top"
            >
            Natraj<span style={{ color: 'var(--accent)' }}> kn</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
            {LINKS.map((link) => (
                <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="font-mono text-xs tracking-wide uppercase transition-colors duration-200"
                style={{
                    color: active === link.id ? 'var(--accent)' : 'var(--text-muted)',
                }}
                >
                {link.label}
                </button>
            ))}
            <a
                href="/Nataraj_KN_Resume.pdf"
                download
                className="font-mono text-xs uppercase tracking-wide px-4 py-2 rounded-full border transition-colors duration-200"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            >
                Resume
            </a>
            </div>

            <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            >
            <span
                className="block w-6 h-px transition-transform duration-200"
                style={{
                backgroundColor: 'var(--text)',
                transform: menuOpen ? 'rotate(45deg) translateY(5px)' : 'none',
                }}
            />
            <span
                className="block w-6 h-px transition-opacity duration-200"
                style={{ backgroundColor: 'var(--text)', opacity: menuOpen ? 0 : 1 }}
            />
            <span
                className="block w-6 h-px transition-transform duration-200"
                style={{
                backgroundColor: 'var(--text)',
                transform: menuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none',
                }}
            />
            </button>
        </nav>

        {menuOpen && (
            <div
            className="md:hidden mt-4 px-6 pb-6 flex flex-col gap-4"
            style={{ backgroundColor: 'var(--bg)' }}
            >
            {LINKS.map((link) => (
                <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="font-mono text-sm uppercase tracking-wide text-left py-2"
                style={{ color: active === link.id ? 'var(--accent)' : 'var(--text-muted)' }}
                >
                {link.label}
                </button>
            ))}
            <a
                href="/Nataraj_KN_Resume.pdf"
                download
                className="font-mono text-sm uppercase tracking-wide px-4 py-2 rounded-full border text-center"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            >
                Resume
            </a>
            </div>
        )}
        </header>
    );
    }