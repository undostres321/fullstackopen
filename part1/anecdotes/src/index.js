import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
    <button onClick={ onClick }>{ text }</button>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(props.anecdotes.length + 1).join('0').split('').map(parseFloat))
    const idMax = votes.indexOf(Math.max(...votes))
    
    const handlerNextClick = (max) => () => {
        const value = Math.floor((Math.random() * max))
        setSelected(value)
    }

    const handlerVoteClick = () => () => {
        const newVotes = [...votes]
        newVotes[selected] += 1
        setVotes(newVotes)
    }

    return (
        <div>
            <h1>Anectode of the day</h1>
            <div>{props.anecdotes[selected]}</div>
            <div>has {votes[selected]} votes</div>
            <div>
                <Button onClick = {handlerVoteClick()} text = 'vote' ></Button>
                <Button onClick = {handlerNextClick(props.anecdotes.length)} text = 'next anecdote' ></Button>
            </div>
            
            <h1>Anectode with most votes</h1>
            <div>{props.anecdotes[idMax]}</div>
            <div>has {votes[idMax]} votes</div>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
