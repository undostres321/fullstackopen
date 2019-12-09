import React from 'react';
import ReactDOM from 'react-dom';

const Course = (props) => {
    return (
        <>
            <Header course={props.course} />
            <Content parts={props.course.parts} />
        </>
    )
}

const Header = (props) => {
    return (
        <>
            <h1>{props.course.name}</h1>
        </>
    )
}

const Content = (props) => {
    const result = props.parts.map(part => <Part key={part.id.toString()} part={part} />)
    return (
        <>
            {result}
        </>
    )
}

const Part = (props) => {
    return(
        <>
            <p>{props.part.name} {props.part.exercises}</p>
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
