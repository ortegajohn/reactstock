import React from "react";
import "./style.css";

function Nav(props) {
    return (  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <a className="navbar-brand" href="/">iStock Login</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
            aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="/logout" className="nav-link">Logout</a>
                </li>
                <li className="nav-item">
                    <a href="/signin" className="nav-link">Sign In</a>
                </li>
                <li className="nav-item">
                    <a href="/signup" className="nav-link">Sing Up</a>
                </li>
            </ul>
        </div>
    </div>;
</nav>
    
    )
  }
  
  
  export default Nav;
  