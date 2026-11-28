import { Link } from 'react-router-dom'
import { quizzes } from '../../data/quizzes/index.js'
import useLocalStorage from '../../hooks/useLocalStorage.js'
import './Revision.css'

export default function Revision() {
    const [scores] = useLocalStorage('devhub-quiz-scores', {})

    return (
        <main className="page">
            <h1>Révision et quiz</h1>
            <p className="muted">Teste tes connaissances, recommence autant que tu veux.</p>
            <div className="tech-grid">
                {quizzes.map((quiz) => {
                    const best = scores[quiz.id]
                    const total = quiz.questions.length
                    return (
                        <Link
                            key={quiz.id}
                            to={`/revision/${quiz.id}`}
                            className="tech-card"
                            style={{ borderTopColor: quiz.color }}
                        >
                            <h2>{quiz.title}</h2>
                            <p>{quiz.description}</p>
                            <span className="badge">
                                {best !== undefined ? `Meilleur score : ${best}/${total}` : `${total} questions`}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}