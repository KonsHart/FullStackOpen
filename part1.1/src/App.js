//Jaa kompnentteihin Header Content Total

const Header = (props) => {
  return (
      <h1>{props.text}</h1>
  )
}
const Content = (props) => {
  return (
      <p>{props.text} {props.num}</p> 
  )
}
const Total = (props) => {
  return (
      <p>Number of exercises {props.num}</p>
  )
}
const App = () => {
  return (
    <div>
      <Header text="Half Stack application development"/> 
      <Content text = 'Fundamentals of React' num={10}/>
      <Content text = 'Using props to pass data' num={7}/>
      <Content text = 'State of a component' num={14}/>
     <Total num ={10 + 7 + 14}/>
    </div>
  )
}



export default App
