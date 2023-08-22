import React, { useRef, useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "axios"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStartClick = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinishClick = async () => {
    setPassword(passwordRef.current.value)
    setUserName(usernameRef.current.value)
    const userData = {
      username : userName,
      email,
      password
    }
    console.log(userData)
    try{
      const res = await axios.post("http://localhost:8000/api/auth/register", userData);
      console.log(res.data)
    }
    catch(err){
      console.log(err, "\n" ,err.response.data)
    }
  }


  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">


        <Link to={"/"}>
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            className="logo"
            alt=""
          />
          </Link>


          <Link to={"/login"}>
          <button className="loginButton">
            Sign In
            </button>
          </Link>
          
          
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {!email 
        ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStartClick}>
              Get Started
            </button>
          </div>
        ) 
        : (
          <div className="userform">
            <input type="text" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinishClick}>
              Start
            </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Register;
