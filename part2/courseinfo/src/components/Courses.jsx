const Header = ({name}) => {
    return (
        <h1>{name}</h1>
    )
}

const Part = ({part}) => {
    return (
        <li>{part.name} {part.exercises}</li>
    )
}

const Content = ({parts}) => {
    return (
        <>
            {
                parts.map((part) => (
                    <Part key={part.id} part={part}></Part>
                ))
            }
            <b>total of {parts.map(part => part.exercises).reduce((s, p) => (s + p))} exercises</b>
        </>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header name={course.name}></Header>
            <Content parts={course.parts}></Content>
        </>
    )
}

const Courses = ({courses}) => {
    return (
        <>
            {
                courses.map((course) => <Course key={course.id} course={course}></Course>)
            }
        </>
    )
}

export default Courses