import React,{useContext} from 'react'
import { Route,Redirect,useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'


const ProtectedRoute = ({component: Component,...rest}) => {
    const {token} = useContext(AuthContext)
    return(
      <Route
      {...rest}
      render={props=>{
        if(token.length>0){
          return <Component {...props}/>
        }
        if(token.length==0 || !token.length){
          console.log("adadad")
          return(
            <Redirect
              to={{
                pathname:"/login"
              }}/>
          )
        }
      }}/>
    )
}

export default ProtectedRoute
