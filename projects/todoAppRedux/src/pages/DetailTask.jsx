import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, completeTask, unCompleteTask } from '../redux/actions/task-actions'
import { hideArrow } from '../redux/actions/arrow-actions'

const DetailTask = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {id} = useParams()
    const task = useSelector(state => state.tasks.find(task => task.id === parseInt(id)))

    // Derived state
    const isDone = task.isDone
    const completedStyle = isDone
    ? {
        container : "dtc-uc-task",
        name : "dtct-uc-name",
        description : "dtct-uc-description",
    }
    : {
        container : "",
        name : "", 
        description : ""
    }

    const buttonNameList = ["Edit", "Complete", "Delete"]

    const handleTaskButton = (e) => {
        e.preventDefault()
        const buttonType = e.target.value
        console.log("Hey, i'm here as btn : ", buttonType)

        if (buttonType === "Delete") {
            alert("Please confirm delete action ?")
            dispatch(deleteTask(task))
            dispatch(hideArrow())
            navigate("/")
        }

        if (buttonType === "Complete") {
            dispatch(completeTask(task))
        }

        if (buttonType === "Uncomplete") {
            console.log("Hey i'm here x 2")
            dispatch(unCompleteTask(task))
        }
    }

    if (!task) return <h3>No task item found at this address.</h3>

    return (
        <div className='detail-task-container'>
            
            <div className={`dtc-task ${completedStyle.container}`}>
                <p className={`dtct-name ${completedStyle.name}`}>{task.name}</p>
                <p className={`dtct-description ${completedStyle.description}`}>{task.description}</p>
            </div>
            <div className="command-task">

                {!isDone && (
                    buttonNameList.map(buttonName => (
                        <button 
                            key={buttonName}
                            className='cta-btn c-task-btn'
                            onClick={handleTaskButton}
                            value={buttonName}
                        >
                            {buttonName}
                        </button>
                    ))
                )}

                {isDone && (
                    <button 
                    className='cta-btn c-task-btn c-task-uc-btn'
                    onClick={handleTaskButton}
                    value="Uncomplete"
                    >
                        Uncompleted
                    </button>
                )}
                
                
            </div>
        </div>
    )
}

export default DetailTask
