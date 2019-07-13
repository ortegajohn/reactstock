import React from 'react';

const UserSignIn = (props) => {
        return(
            <div>
                <div className="form container">
                    <div className="row form-signin-container">
                        <div className="col-md-6 offset-md-3">
                            <form action="/signin" method="POST" className="form-signin" id="form_signin">
                                <h3 className="title-signin">Sign In Form</h3>
                                <div className="form-group">
                                    <input type="text" name="username" className="form-control" id="input_username_signin" placeholder="Username: " />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" id="input_password_signin" placeholder="Password: " />
                                </div>
                                <div className="form-group d-flex justify-content-center btn-container">
                                    <a href="../SignUp/signup" className="btn btn-primary">
                                        Go to sign up
                                    </a>
                                    <button onClick={props.signINFormSubmit} className="btn btn-success" id="btn_submit_signin">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default UserSignIn;