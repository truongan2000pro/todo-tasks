import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
const RegisterForm = (props) => {
  const {registerHandler,userState,token} = useContext(AuthContext)
  const [userValue, setUserValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  if(token.length>0){
    return <Redirect to={"/"} />;
}

  function handleUserInput(e) {
    // setUserValue(e.target.value);
    if (e.target.name == "email") {
      setUserValue(e.target.value);
    } else {
      setPasswordValue(e.target.value);
    }
  }
  async function handleSubmit(e){
      e.preventDefault()
      // if(token.length>0){
        // props.history.push("/")
      // }
      // else{
          const data = await registerHandler ({
          username:userValue,
          password:passwordValue
        })
      // }
      
  }
  return (
    <section className="login-container">
      <div   className="login-wrapper">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} action="" className="login-form">
          <label htmlFor="email">Email</label>
          <input
            value={userValue}
            onChange={handleUserInput}
            name="email"
            type="text"
          />
          <label htmlFor="password">Password</label>
          <input
            value={passwordValue}
            onChange={handleUserInput}
            name="password"
            type="password"
          />
          <button  type="submit">Sign Up </button>
          <a href="/login">To Login</a>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
