import { Link } from 'react-router-dom'
import { technologies } from '../../data/documentation/index.js'
import { quizzes } from '../../data/quizzes/index.js'
import useLocalStorage from '../../hooks/useLocalStorage.js'
import '../Documentation/Documentation.css'
import './Progress.css'

export default function Progress() {
    const [read, setRead] = useLocalStorage('devhub-chapters-read', {})
    const [scores, setScores] = useLocalStorage('devhub-quiz-scores', {})

    const courses = technologies.filter((t) => t.chapters.length > 0)

    const reset = () => {
        if (window.confirm('Effacer ta progression et tes scores ? Tes favoris sont conservés.')) {
            setRead({})
            setScores({})
        }
    }

    return (
        <main className="page">
            <h1>Ma progression</h1>
            <p className="muted">Tes données restent dans ce navigateur.</p>

            <h2 className="progress-title">Cours</h2>
            <div className="progress-list">
                {courses.map((tech) => {
                    const total = tech.chapters.length
                    const done = tech.chapters.filter((c) => read[`${tech.id}/${c.id}`]).length
                    return (
                        <div key={tech.id} className="progress-item">
                            <div className="progress-head">
                                <Link to={`/documentation/${tech.id}`}>{tech.name}</Link>
                                <span className="muted">{done} / {total} chapitres lus</span>
                            </div>
                            <div className="progress-track">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${(done / total) * 100}%`, background: tech.color }}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

            <h2 className="progress-title">Quiz</h2>
            <div className="progress-list">
                {quizzes.map((quiz) => {
                    const best = scores[quiz.id]
                    return (
                        <div key={quiz.id} className="progress-item">
                            <div className="progress-head">
                                <Link to={`/revision/${quiz.id}`}>{quiz.title}</Link>
                                <span className="muted">
                                    {best !== undefined
                                        ? `Meilleur score : ${best} / ${quiz.questions.length}`
                                        : 'Pas encore tenté'}
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button className="reset-btn" onClick={reset}>Réinitialiser ma progression</button>
        </main>
    )
}