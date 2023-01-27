const Header = ( props ) => {
  return (
      <h1>{ props.Course }</h1>
  )
}
const Content = ( props ) => {
  return (
      <div>
          <Part osa={ props.parts[0].name } Exercises={ props.parts[0].Exercises }/>
          <Part osa={ props.parts[1].name } Exercises={ props.parts[1].Exercises }/>
          <Part osa={ props.parts[2].name } Exercises={ props.parts[2].Exercises }/>
      </div>
  )
}
const Total = ( props ) => {
  return (
      <p>Number of exercises { props.parts[0].Exercises + props.parts[1].Exercises + props.parts[2].Exercises } </p>
  )
}
const Part = ( props ) => {
  return (
      <p>{ props.osa } { props.Exercises }</p>
  )
}
const App = () => {
  const Course = {
      name: 'Half Stack application development',
      parts: [
          {
              name: 'Fundamentals of react',
              Exercises: 10
          },
          {
              name: 'Using props to pass data',
              Exercises: 7
          },
          {
              name: 'State of components',
              Exercises: 14
          }
      ]
  }
  return (
      <div>
          <Header Course={ Course.name } />
          <Content parts={ Course.parts } />
          <Total parts={ Course.parts } />
      </div>
  )
}

export default App
