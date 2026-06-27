import type { Quiz } from '../data/quizzes'

interface ResultsProps {
  quiz: Quiz
  score: number
  onRetry: () => void
  onHome: () => void
}

function feedbackFor(ratio: number): { title: string; message: string } {
  if (ratio === 1) {
    return {
      title: 'Mesterreisende! 🏆',
      message: 'Full pott – du kjenner denne etappen ut og inn.',
    }
  }
  if (ratio >= 0.6) {
    return {
      title: 'Godt reist! 🌟',
      message: 'Solid innsats. Ta en runde til for å pusse på detaljene.',
    }
  }
  return {
    title: 'En reise har begynt 🧭',
    message: 'Hver vandring starter med ett steg. Prøv igjen og lær mer!',
  }
}

export function Results({ quiz, score, onRetry, onHome }: ResultsProps) {
  const total = quiz.questions.length
  const ratio = total > 0 ? score / total : 0
  const { title, message } = feedbackFor(ratio)

  return (
    <div className="results">
      <div className="results-score">
        <span className="results-score-number">{score}</span>
        <span className="results-score-total">/ {total}</span>
      </div>
      <h2>{title}</h2>
      <p className="results-quiz-name">
        <span aria-hidden="true">{quiz.emoji}</span> {quiz.title}
      </p>
      <p>{message}</p>

      <div className="results-actions">
        <button className="primary-button" onClick={onRetry}>
          Prøv igjen
        </button>
        <button className="secondary-button" onClick={onHome}>
          Velg en annen etappe
        </button>
      </div>
    </div>
  )
}
