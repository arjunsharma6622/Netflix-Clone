import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className='loginContainer'>
        <div className='loginHeader'>
          <h2>Admin Login</h2>
        </div>
        <form action="" className="loginForm">
          <div className='loginFormItem'>
            <input type="text" className="loginInput" placeholder='Email' />
          </div>
          <div className='loginFormItem'>
            <input type="password" className="loginInput" placeholder='Password' />
          </div>
          <div className='loginFormItem'>
            <button className='loginButton'>Login</button>
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
