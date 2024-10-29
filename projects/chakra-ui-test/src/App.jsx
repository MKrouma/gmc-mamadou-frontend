import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "./components/ui/button"
import { HStack } from "@chakra-ui/react"
import Header from './components/Header'
import Pricing from './components/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Pricing />
    </>
  )
}

export default App
