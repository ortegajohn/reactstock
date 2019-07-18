import React from "react";
// import { url } from "inspector";
import Background from '../../images/Logo.jpg';
import "./style.css";

function Jumbotron({ children }) {
  return (
    
    <div
      style={{ height: 300, clear: "both", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${Background})`}}
      className="jumbotron" 
    >
      {children}
    </div>
    
  );
}

export default Jumbotron;