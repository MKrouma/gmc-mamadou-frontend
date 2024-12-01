import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'

function App() {

  // throw Error("Oh no c'est gaté")

  return (
    <>
      <h1>Hello world!</h1>
      <Greeting name='Mamadou'/>
      <Counter />
    </>
  )
}

export default App
