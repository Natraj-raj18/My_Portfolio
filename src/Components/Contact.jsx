    import { useReveal } from '../hooks/useReveal';

    export default function Contact() {
    const ref = useReveal();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;
        const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:natrajkn18@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="px-6 py-28 max-w-6xl mx-auto">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-16">
            <div>
            <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
                Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 leading-tight">
                Let's build
                <br />
                something.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Open to full stack and frontend roles, freelance work, or just a good
                conversation about code. I usually reply within a day.
            </p>

            <div className="mt-10 space-y-3">
                <ContactLink
                label="Email"
                value="natrajkn18@gmail.com"
                href="mailto:natrajkn18@gmail.com"
                />
                <ContactLink
                label="LinkedIn"
                value="linkedin.com/in/nataraj-kn"
                href="https://www.linkedin.com/in/nataraj-kn"
                />
                <ContactLink label="LeetCode" value="Natrajkn18" href="https://leetcode.com/Natrajkn18" />
                <ContactLink label="Location" value="Bengaluru, India" />
            </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Field label="Name" name="name" type="text" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            <div>
                <label className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                Message
                </label>
                <textarea
                name="message"
                required
                rows={5}
                placeholder="What are you building?"
                className="mt-2 w-full px-4 py-3 rounded-lg border text-sm bg-transparent resize-none focus:outline-none"
                style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
                />
            </div>
            <button
                type="submit"
                className="mt-2 font-mono text-sm uppercase tracking-wide px-6 py-3 rounded-full self-start transition-transform duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
            >
                Send Message →
            </button>
            </form>
        </div>
        </section>
    );
    }

    function Field({ label, name, type, placeholder }) {
    return (
        <div>
        <label className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            {label}
        </label>
        <input
            type={type}
            name={name}
            required
            placeholder={placeholder}
            className="mt-2 w-full px-4 py-3 rounded-lg border text-sm bg-transparent focus:outline-none"
            style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
        />
        </div>
    );
    }

    function ContactLink({ label, value, href }) {
    const content = (
        <div className="flex items-baseline justify-between border-b py-3" style={{ borderColor: 'var(--border)' }}>
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            {label}
        </span>
        <span className="text-sm" style={{ color: href ? 'var(--accent)' : 'var(--text)' }}>
            {value}
        </span>
        </div>
    );

    if (!href) return content;

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
        </a>
    );
    }