export default function addTask(data) {
    return {
        type : "ADD_TASK",
        payload : data
    }
}

export function deleteTask(data) {
    return {
        type : "DELETE_TASK",
        payload : data
    }
}

export function completeTask(data) {
    return {
        type : "COMPLETE_TASK",
        payload : data
    }
}

export function unCompleteTask(data) {
    return {
        type : "UNCOMPLETE_TASK",
        payload : data
    }
}
