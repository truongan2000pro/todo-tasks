import {USER_DELETE,USER_GETALL,USER_SIGNIN,USER_SIGNUP,USER_UPDATE,USER_SIGNOUT} from "./Type"

export const AuthReducer = (state,action)=>{
    const {type, payload} = action

    switch (type){
        case USER_SIGNIN:
            
            return {
                ...state,
                data:payload,
                // token:playload.token
            }
            
        case USER_SIGNUP:
            
            return {
                ...state,
                data:payload,
                // token:playload.token
            }  
        case USER_SIGNOUT:
            
            return{
                ...state,
                data:payload
            }
        default:
            return state
    }
}