import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import './login.css';
import { login } from '../../context/authContext/apiCalls';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {isFetching, dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault();

        login({email, password}, dispatch)
    }

    return (
        <div className='login'>
            <div className='loginContainer'>
                <div className='loginHeader'>
                    <h2>Admin Login</h2>
                </div>
                <form action="" className="loginForm">
                    <div className='loginFormItem'>
                        <input type="text" className="loginInput" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='loginFormItem'>
                        <input type="password" className="loginInput" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='loginFormItem'>
                        <button style={isFetching ? {backgroundColor: 'gray'} : {}} className='loginButton' onClick={handleLogin} >{isFetching ? 'Loading...' : 'Login'}</button>
                    </div>
                </form>
                <div className='loginFooter'>
                    <p>&copy; 2023 Your Netflix Clone</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
