const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}
const Part = (props) => {
	return <p>{props.part.name} {props.part.exercises}</p>
}

const Content = (props) => {
	return (
		props.parts.map(el => <Part key={el.name} part={el} />)
	)
}

const Total = (props) => {
	return (
		<p>Number of exercises {props.parts.reduce((acc, value) => acc + value.exercises, 0)}</p>
	)
}


const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
			name: 'Fundamentals of React',
			exercises: 10
			},
			{
			name: 'Using props to pass data',
			exercises: 7
			},
			{
			name: 'State of a component',
			exercises: 14
			}
		]
	}

	return (
		<div>
			<Header course={course.name} />
			<Content  parts={course.parts} />
			<Total  parts={course.parts} />
		</div>
	)
}

export default App
