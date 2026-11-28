import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { quizzes } from '../../data/quizzes/index.js'
import useLocalStorage from '../../hooks/useLocalStorage.js'
import './Revision.css'

export default function QuizPage() {
    const { quizId } = useParams()
    const quiz = quizzes.find((q) => q.id === quizId)

    if (!quiz) return <Navigate to="/revision" replace />

    // key : repart de zéro quand on change de quiz
    return <Quiz key={quiz.id} quiz={quiz} />
}

function Quiz({ quiz }) {
    const [scores, setScores] = useLocalStorage('devhub-quiz-scores', {})
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState(null)
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)

    const total = quiz.questions.length
    const question = quiz.questions[current]
    const answered = selected !== null

    const choose = (index) => {
        if (answered) return
        setSelected(index)
        if (index === question.answer) setScore(score + 1)
    }

    const next = () => {
        if (current + 1 < total) {
            setCurrent(current + 1)
            setSelected(null)
            return
        }
        const best = Math.max(scores[quiz.id] ?? 0, score)
        setScores({ ...scores, [quiz.id]: best })
        setFinished(true)
    }

    const restart = () => {
        setCurrent(0)
        setSelected(null)
        setScore(0)
        setFinished(false)
    }

    if (finished) {
        return (
            <main className="page">
                <Link to="/revision" className="back">← Révision</Link>
                <h1>{quiz.title}</h1>
                <div className="quiz-result">
                    <p className="quiz-score">{score} / {total}</p>
                    <p className="muted">
                        {score === total ? 'Parfait, bravo !' : 'Relis les explications et réessaie.'}
                    </p>
                    <button className="quiz-btn" onClick={restart}>Recommencer</button>
                </div>
            </main>
        )
    }

    return (
        <main className="page">
            <Link to="/revision" className="back">← Révision</Link>
            <h1>{quiz.title}</h1>
            <p className="muted">Question {current + 1} sur {total}</p>
            <div className="quiz-bar">
                <div className="quiz-bar-fill" style={{ width: `${(current / total) * 100}%` }} />
            </div>

            <h2 className="quiz-question">{question.question}</h2>
            <div className="quiz-choices">
                {question.choices.map((choice, index) => {
                    let state = ''
                    if (answered && index === question.answer) state = 'correct'
                    else if (answered && index === selected) state = 'wrong'
                    return (
                        <button
                            key={choice}
                            className={`quiz-choice ${state}`}
                            onClick={() => choose(index)}
                            disabled={answered}
                        >
                            {choice}
                        </button>
                    )
                })}
            </div>

            {answered && (
                <div className="quiz-explanation">
                    <p>
                        <strong>{selected === question.answer ? 'Bonne réponse !' : 'Pas tout à fait.'}</strong>{' '}
                        {question.explanation}
                    </p>
                    <button className="quiz-btn" onClick={next}>
                        {current + 1 < total ? 'Question suivante' : 'Voir mon score'}
                    </button>
                </div>
            )}
        </main>
    )
}