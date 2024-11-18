import { useState, useEffect } from 'react'
import { Container, Box, Flex } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import TaskList from './pages/TaskList'
import TaskForm from './pages/TaskForm'
import TaskItem from './pages/TaskItem'
import tasksData from './data/tasks'

const App = () => {
  const [taskStorage, setTaskStorage] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks")) ?? tasksData
    } catch {
      return []
    }
  })
  console.log("Task storage : ", taskStorage)

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(taskStorage)), [taskStorage])

  const addTask = (newTask) => {
    setTaskStorage((currTask) => {
      return {...currTask, id: currTask.length + 1, status: "incomplete"}
    })
  }

  const deleteTask = (id) => {
    setTaskStorage((currTask) => {
      return currTask.filter(task => task.id !== parseInt(id))
    })
  }

  const completeTask = (id) => {
    setTaskStorage((currTask) => {
      return currTask.map(task => 
        task.id === parseInt(id) 
          ? { ...task, status: "completed" }
          : task
      );
    });
  };

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
          <Route path="/" element={<TaskList taskStorage={taskStorage}/>} />
          <Route path="/add-new" element={<TaskForm addTask={addTask} />} />
          <Route 
            path="/detail/:id" 
            element={
              <TaskItem taskStorage={taskStorage} deleteTask={deleteTask} completeTask={completeTask}
            />} 
          />    
        </Routes>
      </Box>
    </Container>
  )
}

export default App
