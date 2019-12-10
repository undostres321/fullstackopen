import React from 'react'

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
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

export default Course