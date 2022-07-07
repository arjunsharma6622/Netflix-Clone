import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            className="logo"
            alt=""
          />
  
        </div>
      </div>


      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="email or phone number"/>
          <input type="password" placeholder="password"/>
          <button className="loginButton">Sign In</button>
          <span>New to Netflix? <b>Signup now.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </small>
        </form>
      </div>
      </div>
  );
};

export default Login;
