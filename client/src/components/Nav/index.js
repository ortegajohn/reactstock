// import React from "react";
import React, { Component } from "react";
import "./style.css";

let isloggedin = false
let logoutslashsignin = ""



class Nav extends Component {
    constructor() {
        super()
        this.state = {
            isloggedin: isloggedin
        }
    }
    // function Nav(props) {
    clicksignOUT = () => {
        if (!this.state.isloggedin) {
            this.setState({ isloggedin: true }, () => {
                console.log("this.state.isloggedin: ", this.state.isloggedin)
            })
        } else {
            this.setState({ isloggedin: false }, () => {
                console.log("this.state.isloggedin: ", this.state.isloggedin)
            })
        }
    }
    render() {
        if (!this.state.isloggedin) {
            logoutslashsignin =
                <div >
                    <li className="nav-item" onClick={this.clicksignOUT}>
                        {/* <a href="/signin" className="nav-link">Sign In</a> */}
                        <a href="#" className="nav-link" onClick={this.props.clicksignIN}>Sign In</a>
                    </li>
                    {/* <li className="nav-item"> */}
                    {/* <a href="/signin" className="nav-link">Sign In</a> */}
                    {/* <a href="#" className="nav-link" >Sign Out</a> */}
                    {/* </li> */}
                </div>
        } else {
            logoutslashsignin =
                <li className="nav-item">
                    {/* <a href="/logout" className="nav-link">Logout</a> */}
                    <a href="#" className="nav-link" onClick={this.clicksignOUT}>Logout</a>
                </li>
        };


        return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">iStock Login</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ml-auto">
                        {logoutslashsignin}
                        <li className="nav-item">
                            {/* <a href="/signup" className="nav-link" onClick={props.clicksignup}>Sign Up</a> */}
                            <a href="#" className="nav-link" onClick={this.props.clicksignup}>Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        )
    }

}


export default Nav;
