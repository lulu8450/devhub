import { Link } from 'react-router-dom'
import { technologies } from '../../data/documentation/index.js'
import useLocalStorage from '../../hooks/useLocalStorage.js'
import '../Documentation/Documentation.css'

export default function Favorites() {
    const [favorites] = useLocalStorage('devhub-favorites', [])

    const items = favorites
        .map((key) => {
            const [techId, chapterId] = key.split('/')
            const tech = technologies.find((t) => t.id === techId)
            const chapter = tech?.chapters.find((c) => c.id === chapterId)
            return tech && chapter ? { key, tech, chapter } : null
        })
        .filter(Boolean)

    return (
        <main className="page">
            <h1>Favoris</h1>
            <p className="muted">Les chapitres que tu veux retrouver vite.</p>

            {items.length === 0 ? (
                <p className="muted">
                    Aucun favori pour l'instant. Ouvre un chapitre et clique sur « Ajouter aux favoris ».
                </p>
            ) : (
                <div className="tech-grid">
                    {items.map(({ key, tech, chapter }) => (
                        <Link
                            key={key}
                            to={`/documentation/${tech.id}/${chapter.id}`}
                            className="tech-card"
                            style={{ borderTopColor: tech.color }}
                        >
                            <h2>{chapter.title}</h2>
                            <p>{tech.name}</p>
                        </Link>
                    ))}
                </div>
            )}
        </main>
    )
}