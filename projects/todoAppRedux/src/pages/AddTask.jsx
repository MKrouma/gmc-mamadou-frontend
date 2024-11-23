import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { hideArrow } from '../redux/actions/arrow-actions'
import addTask from '../redux/actions/task-actions'


const STATUS = {
    IDDLE: "IDDLE",
    SUBMITTING: "SUBMITTING",
    SUBMITTED: "SUBMITTED",
    COMPLETED: "COMPLETED",
}

const AddTask = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(STATUS.IDDLE);

    // Derived state
    const data = { name, description }
    const errors = getErrors(data)
    const isValid = Object.keys(errors).length === 0

    console.log("Is valid : ", isValid)
    console.log("Errors : ", errors)

    const handleAddTask = (e) => {
        e.preventDefault()
        setStatus(STATUS.SUBMITTING)
        
        if (isValid) {
            setStatus(STATUS.COMPLETED)

            // Dispatch action
            dispatch(addTask(data));

            // Optionally clear the input fields
            setName('');
            setDescription('');

            dispatch(hideArrow())
            navigate("/")
        } else {
            setStatus(STATUS.SUBMITTED)
        }
        
    }

    function getErrors(data) {
        const validatorError = {}
        if (!data.name) validatorError.name = "Name is required!"
        if (!data.description) validatorError.description = "Description is required!"

        return validatorError
    }

    return (
        <div className='form-task-container'>

            {!isValid && status === STATUS.SUBMITTED && (
                <ul className='error-alert'>
                    {Object.keys(errors).map(key => (
                        <li key={key} role='alert'>{errors[key]}</li>
                    ))}
                </ul>
            )}

            <div className='ltc-name'>
                <p>Name</p>
                <textarea 
                    type="text" name="" id="" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className='ltc-name ltc-descr'>
                <p>Description</p>
                <textarea 
                    type="text" name="" id="" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className='ltc-cta'>
                <button className='cta-btn' onClick={handleAddTask}>
                    Add task
                </button>
            </div>
            
        </div>
    )
}

export default AddTask
