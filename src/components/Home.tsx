import type { Quiz } from '../data/quizzes'

interface HomeProps {
  quizzes: Quiz[]
  totalQuestions: number
  onStart: (quiz: Quiz) => void
}

export function Home({ quizzes, totalQuestions, onStart }: HomeProps) {
  return (
    <div className="home">
      <section className="intro">
        <h2>Velkommen ombord</h2>
        <p>
          Reis gjennom Bibelens store fortellinger – fra skapelsen til den
          tidlige kirken. Velg en etappe og test kunnskapen din underveis.
        </p>
        <div className="intro-stats">
          <span>{quizzes.length} etapper</span>
          <span aria-hidden="true">·</span>
          <span>{totalQuestions} spørsmål</span>
        </div>
      </section>

      <ul className="quiz-list">
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <button className="quiz-card" onClick={() => onStart(quiz)}>
              <span className="quiz-card-emoji" aria-hidden="true">
                {quiz.emoji}
              </span>
              <span className="quiz-card-body">
                <span className="quiz-card-title">{quiz.title}</span>
                <span className="quiz-card-desc">{quiz.description}</span>
                <span className="quiz-card-meta">
                  {quiz.questions.length} spørsmål
                </span>
              </span>
              <span className="quiz-card-arrow" aria-hidden="true">
                →
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
