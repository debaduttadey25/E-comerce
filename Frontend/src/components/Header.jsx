import React from "react";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";

export const Header = ({watch,cart}) => {
  const navigate = useNavigate();
  return (
    <div className="main-div-header">
      <div className="main-div-left">
        Test1
      </div>
      <div className="main-div-right">
        <span>watchlist<sup></sup></span>
        <span onClick={()=>{navigate("/cart")}}>cart{cart!=0&&<sup>{cart}</sup>}</span>
      </div>
    </div>
  );
};
