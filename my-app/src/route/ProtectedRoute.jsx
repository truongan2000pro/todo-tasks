import React,{useContext} from 'react'
import { Route,Redirect } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const ProtectedRoute = ({component: Component,...rest}) => {
    const {userState:{isAuthen}} = useContext(AuthContext)
    console.log(isAuthen)
    return (
        <Route {...rest} render={(props)=>{
           if(isAuthen){
                
            return <Component {...rest}{...props}/>
           }
           else{
               return <Redirect to={{pathname:"/login"}}/>
           }
        }}/>
    )
}

export default ProtectedRoute
