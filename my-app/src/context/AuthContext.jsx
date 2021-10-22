import React,{createContext} from 'react'
import { useReducer } from 'react'
import { AuthReducer } from '../reducer/AuthReducer'
import { signIn,signUp } from '../services/userServies'

export const AuthContext = createContext()

const AuthContextProvider = ({children})=>{
    
    const [userState,dispatch] = useReducer(AuthReducer,{
        data:[],
        isAuthen:false
    }) 
   
   
    const AuthContextData={
        signIn,signUp,userState
    } 
    return (<AuthContext.Provider value ={AuthContextData} > {children} </AuthContext.Provider>)
}

export default AuthContextProvider
