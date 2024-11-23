import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import showArrow from '../redux/actions/arrow-actions'
import { completeTask, unCompleteTask } from '../redux/actions/task-actions'

const ListTaskItem = ({id, name}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const task = useSelector(state => state.tasks.find(task => task.id === parseInt(id)))
  console.log("I'm the task : ", task)

  // Derived state
  const isDone = task.isDone
  const completedStyle = isDone
  ? {
      container : "ltc-uc-task",
      icon : "lt-uc-complete"
  }
  : {
      container : "",
      icon : ""
  }

  const handleShowTask = (e) => {
    e.preventDefault()
    dispatch(showArrow())
    navigate(`/task/${id}`)
  }

  const handleCompletTask = () => {
    dispatch(completeTask(task))
  }

  const handleUnCompletTask = () => {
    dispatch(unCompleteTask(task))
  }

  return (
    <div className={`ltc-task ${completedStyle.container}`}>
        <div className="lt-name" onClick={handleShowTask}>
            <p>{name}</p>
        </div>
        <div className={`lt-complete ${completedStyle.icon}`}>
          {!isDone && (
            <button onClick={handleCompletTask}>
              <i className="fa-regular fa-circle-check fa-xl"></i>
            </button>
          )}

          {isDone && (
            <button onClick={handleUnCompletTask}>
              <i className="fa-solid fa-ban fa-xl"></i>
            </button>
          )}
            
        </div>
    </div>
  )
}

export default ListTaskItem
