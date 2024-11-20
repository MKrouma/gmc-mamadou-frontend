import { ADD_ARTICLE } from "../constants/actions-types";


export const addPost = newPost => {
    return {
        type: ADD_ARTICLE,
        payload: newPost
    }
}