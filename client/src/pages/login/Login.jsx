import { useContext, useState  } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
          <div className="wrapper">
              <img className="logo" 
              src="https://techbiote.com/wp-content/uploads/2022/01/MovieFlix.8a0c3687-1024x291.png" 
              alt=""
              />
          </div>
      </div>
      <div className="container">
          <form>
              <h1> Sign In </h1>
              <input type="email" placeholder="Email or Phone Number" onChange={(e)=>setEmail(e.target.value)}/>
              <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
              <button className="loninButton" onClick={handleLogin}> Sign In</button>
              <span>
                  New to Movieslix? <b> Sign Up Now </b>
              </span>
              <small>
                  This page is protected by Google reCAPTCHA to ensure you're not a bot.
                  <b> Learn more. </b>
              </small>
          </form>
      </div>
    </div>
  );
}
