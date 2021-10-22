import React from 'react'

const LoginForm = () => {
    return (
            <section className="login-container">
                <div className="login-wrapper">
                
                    <h2 >Log In</h2>
                    <form action="" className="login-form">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" />
                        <label htmlFor="password">Password</label>
                        <input name="password" type="password" />
                        <button type="submit">Log In </button>
                    </form>
    
                </div>    
            </section>
    )
}

export default LoginForm
