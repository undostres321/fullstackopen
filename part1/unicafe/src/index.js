import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={ onClick }>{ text }</button>
)

const Statistics = ({good, bad, neutral}) => {
  if ((good === 0) && (neutral === 0) && (bad === 0)) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <div>good { good }</div>
      <div>neutral { neutral }</div>
      <div>bad { bad }</div>
      <div>all { good + neutral + bad }</div>
      <div>average { (good - bad) / (good + neutral + bad) }</div>
      <div>positive {good * 100 / (good + neutral + bad)} %</div>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlerClick = (value) => () => {
    switch (value) {
      case 'good':
        console.log('Good')
        setGood(good + 1)
        break
      case 'neutral':
        console.log('Neutral')
        setNeutral(neutral + 1)
        break
      case 'bad':
        console.log('Bad')
        setBad(bad + 1)
        break
    }
  }

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = { handlerClick('good') } text='Good'></Button>
      <Button onClick = { handlerClick('neutral') } text='Neutral'></Button>
      <Button onClick = { handlerClick('bad') } text='Bad'></Button>
      <h1>statistics</h1>
      <Statistics good={ good } bad={ bad } neutral={ neutral }></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)