import { useMemo, useState } from 'react'
import { quizzes, type Quiz } from './data/quizzes'
import { Home } from './components/Home'
import { QuizView } from './components/QuizView'
import { Results } from './components/Results'

type Screen =
  | { name: 'home' }
  | { name: 'quiz'; quiz: Quiz }
  | { name: 'results'; quiz: Quiz; score: number }

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' })

  const totalQuestions = useMemo(
    () => quizzes.reduce((sum, q) => sum + q.questions.length, 0),
    [],
  )

  return (
    <div className="app">
      <header className="app-header" onClick={() => setScreen({ name: 'home' })} role="banner">
        <span className="app-logo" aria-hidden="true">📖</span>
        <div>
          <h1>Bibelreisen</h1>
          <p className="app-tagline">En historisk reise gjennom Bibelen</p>
        </div>
      </header>

      <main className="app-main">
        {screen.name === 'home' && (
          <Home
            quizzes={quizzes}
            totalQuestions={totalQuestions}
            onStart={(quiz) => setScreen({ name: 'quiz', quiz })}
          />
        )}

        {screen.name === 'quiz' && (
          <QuizView
            quiz={screen.quiz}
            onFinish={(score) =>
              setScreen({ name: 'results', quiz: screen.quiz, score })
            }
            onQuit={() => setScreen({ name: 'home' })}
          />
        )}

        {screen.name === 'results' && (
          <Results
            quiz={screen.quiz}
            score={screen.score}
            onRetry={() => setScreen({ name: 'quiz', quiz: screen.quiz })}
            onHome={() => setScreen({ name: 'home' })}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Bibelreisen · laget for læring og glede</p>
      </footer>
    </div>
  )
}
