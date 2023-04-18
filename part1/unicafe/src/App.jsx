import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

import './App.css'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (event) => {
    switch (event.target.innerHTML) {
      case "Good": setGood(good + 1);
        break;
      case "Bad": setBad(bad + 1);
        break;
      case "Neutral": setNeutral(neutral + 1);
      default:
        break;
    }
  }

  // let total = good + bad + neutral;

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleClick} text="Good" />
      <Button handleClick={handleClick} text="Neutral" />
      <Button handleClick={handleClick} text="Bad" />

      <h2>Statistics</h2>
      {good || bad || neutral ?
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={(good + bad + neutral)}
        /> : <p>No feedback given.</p>}
    </div>
  )
}

export default App;
