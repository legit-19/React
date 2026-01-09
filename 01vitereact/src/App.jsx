
import Chai from './chai.jsx'
function App() {
  const username = "Dharmil Patel"
  return (
    <>
      <Chai/>
      <h1>hey this is a new line {username}</h1> {/* {username} It is a expression means You can declare variables inside JSX expressions. {}in which not function or code can be use.only for javascript output can declare*/}
      <p>this is a paragraph</p>
    </>
  )
}

export default App
