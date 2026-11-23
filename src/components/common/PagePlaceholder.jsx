export default function PagePlaceholder({ title }) {
    return (
        <main style={{ padding: '2rem' }}>
            <h1>{title}</h1>
            <p style={{ color: 'var(--text-2)' }}>Page en construction.</p>
        </main>
    )
}