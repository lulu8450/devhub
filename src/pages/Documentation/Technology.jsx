import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckCircle, Star } from 'lucide-react'
import { technologies } from '../../data/documentation/index.js'
import CodeBlock from '../../components/code/CodeBlock.jsx'
import useLocalStorage from '../../hooks/useLocalStorage.js'
import './Documentation.css'

export default function Technology() {
    const { techId, chapterId } = useParams()
    const [read, setRead] = useLocalStorage('devhub-chapters-read', {})
    const [favorites, setFavorites] = useLocalStorage('devhub-favorites', [])
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

    const chapter = tech.chapters.find((c) => c.id === chapterId) ?? tech.chapters[0]
    const key = `${tech.id}/${chapter.id}`
    const isRead = Boolean(read[key])
    const isFavorite = favorites.includes(key)

    const toggleRead = () => setRead({ ...read, [key]: !isRead })
    const toggleFavorite = () =>
        setFavorites(isFavorite ? favorites.filter((f) => f !== key) : [...favorites, key])

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
                            <span>{c.title}</span>
                            {read[`${tech.id}/${c.id}`] && (
                                <CheckCircle size={16} className="chapter-done" />
                            )}
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
                    <div className="chapter-actions">
                        <button
                            className={isRead ? 'action-btn on' : 'action-btn'}
                            onClick={toggleRead}
                        >
                            <CheckCircle size={16} />
                            {isRead ? 'Chapitre lu' : 'Marquer comme lu'}
                        </button>
                        <button
                            className={isFavorite ? 'action-btn fav on' : 'action-btn fav'}
                            onClick={toggleFavorite}
                        >
                            <Star size={16} />
                            {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                        </button>
                    </div>
                </article>
            </div>
        </main>
    )
}