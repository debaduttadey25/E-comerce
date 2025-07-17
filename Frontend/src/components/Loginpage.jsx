import React, { useState } from "react";
import "../styles/Loginpage.css";
export const Loginpage = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="loginpage-main-div">
      <div className="loginpage-container">
        <div className="loginpage-header">
          <span >Welcome Back</span>
          <span>Sign in to your account to continue shopping</span>
        </div>
        <div>
          <span>Email Address</span>
          <input type="text" className="" />
        </div>
        <div>
          <span>Password</span>
          <input type="text" className="" />
        </div>
        <div>
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
      </div>
    </div>
  );
};
