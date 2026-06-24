    export default function Footer() {
    return (
        <footer className="px-6 py-8 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Nataraj K N. Built with React &amp; Tailwind.
            </p>
            <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
            Bengaluru, India
            </p>
        </div>
        </footer>
    );
    }