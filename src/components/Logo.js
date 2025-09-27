import React from "react";
import logoImg from "./logo.png"; 

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImg} alt="Wildfire Tracker Logo" />
    </div>
  );
};

export default Logo;
