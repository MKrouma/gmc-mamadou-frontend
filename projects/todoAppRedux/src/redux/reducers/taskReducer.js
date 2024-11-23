import tasksData from "../../data/tasks"

export default function taskReducer(state = tasksData, action) {
    switch (action.type) {
        case "ADD_TASK" : {
            const newtask = {
                id : state.length+1,
                name : action.payload.name,
                description : action.payload.description,
                isDone : false
            }
            return [...state, newtask]
        }

        case "DELETE_TASK" : {
            return state.filter(task => task.id !== parseInt(action.payload.id))
        }

        case "COMPLETE_TASK" : {
            return state.map(task => 
                task.id === action.payload.id 
                ? { ...task, isDone: true }
                : task
            );
        }

        case "UNCOMPLETE_TASK" : {
            return state.map(task => 
                task.id === action.payload.id 
                ? { ...task, isDone: false }
                : task
            );
        }

        default : {
            return state
        }
    }
}