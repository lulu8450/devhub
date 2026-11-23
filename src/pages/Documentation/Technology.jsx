import { Link, Navigate, useParams } from 'react-router-dom'
import { technologies } from '../../data/documentation/index.js'
import CodeBlock from '../../components/code/CodeBlock.jsx'
import './Documentation.css'

export default function Technology() {
    const { techId, chapterId } = useParams()
    const tech = technologies.find((t) => t.id === techId)

    if (!tech) return <Navigate to="/documentation" replace />

    if (tech.chapters.length === 0) {
        return (
            <main className="page">
                <Link to="/documentation" className="back">← Documentation</Link>
                <h1>{tech.name}</h1>
                <p className="muted">Contenu bientôt disponible.</p>
            </main>
        )
    }

    const chapter =
        tech.chapters.find((c) => c.id === chapterId) ?? tech.chapters[0]

    return (
        <main className="page">
            <Link to="/documentation" className="back">← Documentation</Link>
            <h1>{tech.name}</h1>
            <div className="doc-layout">
                <nav className="chapter-list">
                    {tech.chapters.map((c) => (
                        <Link
                            key={c.id}
                            to={`/documentation/${tech.id}/${c.id}`}
                            className={c.id === chapter.id ? 'chapter active' : 'chapter'}
                        >
                            {c.title}
                        </Link>
                    ))}
                </nav>
                <article className="chapter-content">
                    <span className="badge">{chapter.level}</span>
                    <h2>{chapter.title}</h2>
                    <p>{chapter.explanation}</p>
                    <CodeBlock code={chapter.code} language={tech.name} />
                    <h3>Erreurs fréquentes</h3>
                    <ul>
                        {chapter.mistakes.map((m) => <li key={m}>{m}</li>)}
                    </ul>
                </article>
            </div>
        </main>
    )
}