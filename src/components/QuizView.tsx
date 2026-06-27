import { useState } from 'react'
import type { Quiz } from '../data/quizzes'

interface QuizViewProps {
  quiz: Quiz
  onFinish: (score: number) => void
  onQuit: () => void
}

export function QuizView({ quiz, onFinish, onQuit }: QuizViewProps) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const question = quiz.questions[current]
  const isLast = current === quiz.questions.length - 1
  const answered = selected !== null
  const progress = Math.round((current / quiz.questions.length) * 100)

  function choose(index: number) {
    if (answered) return
    setSelected(index)
    if (index === question.correctIndex) {
      setScore((s) => s + 1)
    }
  }

  function next() {
    if (isLast) {
      onFinish(score)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
    }
  }

  function optionClass(index: number): string {
    if (!answered) return 'option'
    if (index === question.correctIndex) return 'option option-correct'
    if (index === selected) return 'option option-wrong'
    return 'option option-dimmed'
  }

  return (
    <div className="quiz-view">
      <div className="quiz-topbar">
        <button className="link-button" onClick={onQuit}>
          ← Avslutt
        </button>
        <span className="quiz-counter">
          {current + 1} / {quiz.questions.length}
        </span>
      </div>

      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <h2 className="quiz-title-small">
        <span aria-hidden="true">{quiz.emoji}</span> {quiz.title}
      </h2>

      <p className="question-text">{question.question}</p>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={optionClass(index)}
            onClick={() => choose(index)}
            disabled={answered}
          >
            {option}
          </button>
        ))}
      </div>

      {answered && (
        <div
          className={
            selected === question.correctIndex
              ? 'feedback feedback-correct'
              : 'feedback feedback-wrong'
          }
        >
          <strong>
            {selected === question.correctIndex ? 'Riktig! 🎉' : 'Ikke helt.'}
          </strong>
          {question.explanation && <p>{question.explanation}</p>}
          {question.reference && (
            <p className="feedback-ref">{question.reference}</p>
          )}
        </div>
      )}

      {answered && (
        <button className="primary-button" onClick={next}>
          {isLast ? 'Se resultat' : 'Neste spørsmål'}
        </button>
      )}
    </div>
  )
}
