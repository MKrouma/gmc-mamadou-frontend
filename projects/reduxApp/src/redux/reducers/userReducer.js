const initiateState = {
    name : "Krouma Mamadou",
}

export default function userReducer(state = initiateState, action) {
    switch (action.type) {
        case "CHANGE_NAME" : {
            console.log("Changed")
            return action.payload 
        }

        default : {
            return state
        }
    }
}