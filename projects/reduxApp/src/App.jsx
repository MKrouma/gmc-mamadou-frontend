import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import changeName from './redux/actions/user-actions'

function App() {
  const dispatch = useDispatch()
  const name = useSelector(state => state.users.name)

  const handleChangeName = (e) => {
    e.preventDefault()
    const data = {
      name : "Kouyate Karim Abdoul-Aziz",
    }
    dispatch(changeName(data))
  }

  return (
    <>
      <p style={{marginBottom:"20px"}}>My name is <b>{name}</b></p>
      <button onClick={handleChangeName}>Change name</button>
    </>
  )
}

export default App
