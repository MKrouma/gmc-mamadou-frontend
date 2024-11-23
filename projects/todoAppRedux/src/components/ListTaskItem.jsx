import '../App.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import showArrow from '../redux/actions/arrow-actions'

const ListTaskItem = ({id, name}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const HandleShowTask = (e) => {
    e.preventDefault()
    dispatch(showArrow())
    navigate(`/task/${id}`)
  }

  return (
    <div className="ltc-task">
        <div className="lt-name" onClick={HandleShowTask}>
            <p>{name}</p>
        </div>
        <div className="lt-complete">
            <button>
                <i className="fa-regular fa-circle-check fa-xl"></i>
            </button>
        </div>
    </div>
  )
}

export default ListTaskItem
