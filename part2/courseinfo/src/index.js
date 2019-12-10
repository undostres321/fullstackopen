import React from 'react';
import ReactDOM from 'react-dom';

const Course = (props) => {
    return (
        <>
            <Header course={props.course} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts} />
        </>
    )
}

const Header = (props) => {
    return (
        <>
            <h2>{props.course.name}</h2>
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
    const total = props.parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <>
            <p><b>total of {total} exercises</b></p>
        </>
    )
}

const App = () => {
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
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
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]

    const result = courses.map(course => <Course key={course.id} course={course} />)

    return (
        <div>
            <h1>Web development curriculum</h1>
            {result}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
