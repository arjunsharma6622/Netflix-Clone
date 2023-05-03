import React, { useContext, useState } from 'react'
import "./Login.css"
import { AuthContext } from '../../context/authContext/AuthContext'
import { login } from '../../context/authContext/apiCalls'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isFetching, dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()
        login({email, password}, dispatch)
    }
  return (
    <div className='login'>
        <form action="" className="loginForm">
            <input 
                type="text" 
                placeholder='email' 
                className='loginInput' 
                onChange={(event) => setEmail(event.target.value)}
            />
            <input 
                type="password" 
                placeholder='password' 
                className='loginInput'
                onChange={(event) => setPassword(event.target.value)}
            />
            <button 
                className='loginButton'
                onClick={handleLogin}
                disabled={isFetching}
            >
                LOGIN
            </button>
        </form>
    </div>
  )
}

export default Login