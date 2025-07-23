import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Loginpage.css";
export const Loginpage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const hadelClick = () => {
    console.log(email);
    console.log(password);
    console.log(rememberMe);

    if (email === "deb@test.com") {
      navigate("/product");
    } else {
      setTimeout(() => {
        setError(true);
      }, 3000);
    }
    console.log(error, "error");
  };

  return (
    <div className="loginpage-main-div">
      <div className="loginpage-container">
        <div className="loginpage-header">
          <span className="wel-text">Welcome Back</span>
          <span className="wel-para">
            Sign in to your account to continue shopping
          </span>
        </div>
        <div className="label-input">
          <span>Email Address</span>
          <input
            type="text"
            className="input-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="label-input">
          <span>Password</span>
          <input
            type="password"
            className="input-email"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="remember-me">
          <div>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span> Remember Me</span>
          </div>
          <div>
            <span>Forgot Password?</span>
          </div>
        </div>
        <div className="login-button" onClick={hadelClick}>
          Login
        </div>
        {error && <div className="popup-error">Incorrect email id</div>}
      </div>
    </div>
  );
};
