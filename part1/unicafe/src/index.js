import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={ onClick }>{ text }</button>
)

const Average = ({good, bad, neutral}) => {
  if ((good === 0) && (neutral === 0) && (bad === 0)) {
    return (
      <div>average 0</div>
    )
  }
  return (
    <div>average { (good - bad) / (good + neutral + bad) }</div>
  )
}

const PositivePercentage = ({good, bad, neutral}) => {
  if ((good === 0) && (neutral === 0) && (bad === 0)) {
    return (
      <div>positive 0</div>
    )
  }
  return (
    <div>positive {good * 100 / (good + neutral + bad)} %</div>
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
      <div>good { good }</div>
      <div>neutral { neutral }</div>
      <div>bad { bad }</div>
      <div>all { good + neutral + bad }</div>
      <Average good={ good } bad={ bad } neutral={ neutral }></Average>
      <PositivePercentage good={ good } bad={ bad } neutral={ neutral }></PositivePercentage>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)