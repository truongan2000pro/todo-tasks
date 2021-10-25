import {GET_TASKS,DELETE_TASK,UPDATE_TASK,POST_TASK} from "./Type"
export const TasksReducer = (state,action)=>{
    const {type, payload } = action

    switch (type){
        case GET_TASKS:
            return {
                ...state,
                data:payload
            }
            
        case POST_TASK:
            return state
        case DELETE_TASK:{
            return state
    }
        case UPDATE_TASK:{
            return state
            
        }
        default:
            return state
    }
}