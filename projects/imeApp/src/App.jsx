import { useState } from 'react'
import { Container, Box, Flex } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import TaskList from './pages/TaskList'
import TaskForm from './pages/TaskForm'
import TaskItem from './pages/TaskItem'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Container 
      m="5" 
      display="flex" flexDirection="column" 
      justifyContent="center" alignItems="center"
    >
      <Header />
      <Box 
        as="main"
        display="flex" flexDirection="column" 
        justifyContent="center" alignItems="center"
      >
        <Routes>
          <Route path="/" element={<TaskForm />} />
          <Route path="/list" element={<TaskList />} />
          <Route path="/detail" element={<TaskItem />} />    
        </Routes>
      </Box>
    </Container>
  )
}

export default App
