import ListTaskItem from '../components/ListTaskItem'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import showArrow from '../redux/actions/arrow-actions'

const ListTask = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)

  const handleNewTask = (e) => {
    e.preventDefault()
    console.log("Hey")

    // dispatch arrow action
    dispatch(showArrow())
    navigate("/new-task")
  }

  return (
    <div className='list-task-container'>
        {tasks.map(task => (
          <ListTaskItem key={task.id} name={task.name} id={task.id}/>
        ))}
        <button className='cta-btn' onClick={handleNewTask}>
          New task
        </button>
    </div>
  )
}

export default ListTask
