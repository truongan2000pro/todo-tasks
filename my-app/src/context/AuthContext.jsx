import React,{createContext, useEffect} from 'react'
import { useReducer } from 'react'
import { AuthReducer } from '../reducer/AuthReducer'
import { signIn,signUp } from '../services/userServies'
import {USER_SIGNIN,USER_SIGNOUT,USER_SIGNUP} from '../reducer/Type'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
export const AuthContext = createContext()

const AuthContextProvider = ({children})=>{
    const cookie_key = 'token';
    let token = read_cookie(cookie_key)

    const [userState,dispatch] = useReducer(AuthReducer,{
        data:[],
    }) 
    
    async function signInHandler(userInput){
        let data = await signIn(userInput)
        if(data)
        {
            const dataToken = data.token
            token = bake_cookie(cookie_key, dataToken);
            dispatch({
                type: USER_SIGNIN,
                payload:data
            })
        }
        else{
            alert("Sai tài khoản hoặc mật khẩu , vui lòng kiểm tra lại")
        }

    }
    async function registerHandler(userInput){
        const data = await signUp(userInput)
        if(data.user){
            const dataToken = data.token
            token = bake_cookie(cookie_key, dataToken);
            dispatch({
                type: USER_SIGNUP,
                payload:data
            })
        }
        else{
            alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!")
        }
    }
    function signOutHandler(){
        delete_cookie(cookie_key);
        dispatch({
            type:USER_SIGNOUT,
            payload:[]
        })

    }
    const AuthContextData={
      signOutHandler,signInHandler,registerHandler,userState,cookie_key,token
    } 
    return (<AuthContext.Provider value ={AuthContextData} > {children} </AuthContext.Provider>)
}

export default AuthContextProvider
