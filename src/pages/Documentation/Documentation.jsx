import { Link } from 'react-router-dom'
import { technologies } from '../../data/documentation/index.js'
import './Documentation.css'

export default function Documentation() {
    return (
        <main className="page">
            <h1>Documentation</h1>
            <p className="muted">Choisis une technologie pour commencer.</p>
            <div className="tech-grid">
                {technologies.map((tech) => (
                    <Link
                        key={tech.id}
                        to={`/documentation/${tech.id}`}
                        className="tech-card"
                        style={{ borderTopColor: tech.color }}
                    >
                        <h2>{tech.name}</h2>
                        <p>{tech.description}</p>
                        {tech.chapters.length === 0 && <span className="badge">Bientôt</span>}
                    </Link>
                ))}
            </div>
        </main>
    )
}