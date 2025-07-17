import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landingpage.css";
export const Landingpage = () => {
   const navigate = useNavigate();




 
  return (
    <div className="landigpage-main-div">
      <div className="p-div">
        <div className="welcome-tag">Welcome to </div>
        <div className="Platform">Our Platform</div>
        <div className="para-landingpage">
          Join thousands of users and discover amazing features. Get started
          today with your free account.
        </div>
        <div className="button-landingpage">
          <div className="button">Sign Up</div>
          <div className="button" onClick={()=>(navigate('/login'))}>Login</div>
        </div>
      </div>
      <div className="container-div">
        <div className="cards-landingpage">
          <div className="circle">1</div>
          <div className="cards-landingpage-heading">Easy Setup</div>
          <div>
            Get started in minutes with our simple registration process.
          </div>
        </div>
        <div className="cards-landingpage">
          <div className="circle">2</div>
          <div className="cards-landingpage-heading">Secure</div>
          <div>
            Your data is protected with industry-leading security measures.
          </div>
        </div>

        <div className="cards-landingpage">
          <div className="circle">3</div>
          <div className="cards-landingpage-heading">24/7 Support</div>
          <div>Our team is here to help you whenever you need assistance</div>
        </div>
      </div>
    </div>
  );
};
