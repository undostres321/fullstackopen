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
      <Statistic text='good' value={ good }></Statistic>
      <Statistic text='neutral' value={ neutral }></Statistic>
      <Statistic text='bad' value={ bad }></Statistic>
      <Statistic text='all' value={ good + neutral + bad }></Statistic>
      <Statistic text='average' value={ (good - bad) / (good + neutral + bad) }></Statistic>
      <Statistic text='positive' value={ good * 100 / (good + neutral + bad) }></Statistic>
    </div>
  )
}

const Statistic = ({text, value}) => (
  <div>{ text } { value }</div>
)

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
      default:
        console.log('Bad option')
        break;
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