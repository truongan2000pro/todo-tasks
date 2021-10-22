import {USER_DELETE,USER_GETALL,USER_SIGNIN,USER_SIGNUP,USER_UPDATE} from "./Type"

export const AuthReducer = (state,action)=>{
    const {type, payload:{data,isAuthen} } = action

    switch (type){
        case USER_SIGNIN:
            return {
                ...state,
                data,
                isAuthen
            }
            
        
        default:
            return state
    }
}