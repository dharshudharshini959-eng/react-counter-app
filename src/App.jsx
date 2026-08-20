
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const changeCount = (amount) => {
    setCount((currentCount) => currentCount + amount)
  }

  return (
    <main className="counter-page">
      <section className="counter-card" aria-labelledby="counter-title">
        
        <h1 id="counter-title">Counter Lab</h1>
        <p className="description">A small interaction built with the <code>useState</code> hook.</p>

        <div className="counter-display" aria-live="polite">
          <span className="counter-label">Current value</span>
          <strong>{count}</strong>
        </div>

        <div className="counter-controls">
          <button type="button" onClick={() => changeCount(-step)} aria-label={`Decrease by ${step}`}>
            -
          </button>
          <button type="button" onClick={() => changeCount(step)} aria-label={`Increase by ${step}`}>
            +
          </button>
        </div>

        <label className="step-control" htmlFor="step">
          Step value
          <input
            id="step"
            type="number"
            min="1"
            max="10"
            value={step}
            onChange={(event) => setStep(Math.max(1, Math.min(10, Number(event.target.value) || 1)))}
          />
        </label>

        <button className="reset-button" type="button" onClick={() => setCount(0)}>
          Reset counter
        </button>
      </section>
    </main>
  )
}

export default App
