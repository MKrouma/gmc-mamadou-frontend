const initiateState = {
    isShow : false
}

export default function arrowReducer(state = initiateState, action) {
    switch (action.type) {
        case "SHOW_ARROW" : {
            return {...state, isShow: action.payload}
        }

        case "HIDE_ARROW" : {
            return {...state, isShow: action.payload}
        }

        default : {
            return state
        }
    }
}