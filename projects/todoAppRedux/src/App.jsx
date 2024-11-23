import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import Footer from './components/Footer'
import ListTask from './pages/ListTask'
import AddTask from './pages/AddTask'
import DetailTask from './pages/DetailTask'


function App() {
  const tasks = useSelector(state => state.tasks)
  console.log("Tasks yoyo : ", tasks)

  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<ListTask />}/>
        <Route path='/new-task' element={<AddTask />}/>
        <Route path='/task/:id' element={<DetailTask />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
