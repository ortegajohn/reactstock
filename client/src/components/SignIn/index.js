// import React from 'react';
import React, { Component } from "react";
import API from "../../utils/API";

let signinformusername = ""
let signinformpassword = ""



class UserSignIn extends Component {
    constructor() {
        super()
        this.state = {
            signinformusername,
            signinformpassword
        }
    }
    // const UserSignIn = (props) => {
        handleFormInputChange = event => {
            console.log("event.target.value: ", event.target.value)
            console.log("event.target.name: ", event.target.name)
            this.setState({ [event.target.name]: event.target.value }, () => {
              console.log("this.state.signupformusername: ", this.state.signinformusername)
              console.log("this.state.signupformpassword: ", this.state.signinformpassword)
            });
          }
        signINFormSubmit = event => {
            event.preventDefault()
            console.log("signINFormSubmit")
            let formdata = {
                username: this.state.signinformusername,
                password: this.state.signinformpassword
              }
              API.sendSignInForm(formdata).then(res => {
                this.props.history.push(`/`)
              })
              console.log("PLPLPLPLPLPL", this.props.isUserLoggedIn)
        
          }
    render() {


        return (
            <div>
                <div className="form container">
                    <div className="row form-signin-container">
                        <div className="col-md-6 offset-md-3">
                            <form action="/signin" method="POST" className="form-signin" id="form_signin">
                                <h3 className="title-signin">Sign In Form</h3>
                                <div className="form-group">
                                    <input onChange={this.handleFormInputChange} type="text" name="signinformusername" className="form-control" id="input_username_signin" placeholder="Username: " />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.handleFormInputChange} type="password" name="signinformpassword" className="form-control" id="input_password_signin" placeholder="Password: " />
                                </div>
                                <div className="form-group d-flex justify-content-center btn-container">
                                    <a href="./SignUp" className="btn btn-primary">
                                        Go to sign up
                                    </a>
                                    
                                    <button onClick={this.signINFormSubmit} className="btn btn-success" id="btn_submit_signin">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default UserSignIn;