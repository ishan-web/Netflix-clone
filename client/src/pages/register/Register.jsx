import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const history = useHistory();

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    };
    const handleFinish = async (e) => {
        e.preventDefault();
        setPassword(passwordRef.current.value);
        setUsername(usernameRef.current.value);
        try {
          await axios.post("auth/register", { email,username, password });
          history.push("/login");
        } catch (err) {}
      };
  return (
    <div className="register">
      <div className="top">
          <div className="wrapper">
              <img className="logo" 
              src="https://techbiote.com/wp-content/uploads/2022/01/MovieFlix.8a0c3687-1024x291.png" 
              alt=""
              />
              <Link to="/login">
                  <button className="loginButton">
                      Sign In
                    </button>
              </Link>
          </div>
      </div>
      <div className="container">
          <h1>Unlimited Movies, TV Series, and More.</h1>
          <h2> Watch Anywhere, Anytime</h2>
          <p>
              Ready to watch? Enter your Email to Create or Get a Membership.
          </p>
          {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
