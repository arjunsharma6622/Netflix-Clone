import React, { useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStartClick = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinishClick = () => {
    setPassword(passwordRef.current.value)
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            className="logo"
            alt=""
          />
          <button className="loginButton">Sign In</button>
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
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinishClick}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
