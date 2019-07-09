import React from 'react';

const UserSignUp = () => {
        return(
            <div>
                <div className="form container">
                    <div className="row form-signup-container">
                        <div className="col-md-6 offset-md-3">
                            <form action="/signup" method="POST" className="form-signup" id="form_signup">
                                <h3 className="title-signup">Sign Up Form</h3>
                                <div class="form-group">
                                    <input type="text" name="firstname" className="form-control" id="input_firstname_signup" placeholder="First name: " />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="lastname" className="form-control" id="input_lastname_signup" placeholder="Last name: "/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="username" className="form-control" id="input_username_signup" placeholder="Username: "/>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" id="input_password_signup" placeholder="Password: "/>
                                </div>
                                <div className="form-group d-flex justify-content-center btn-container">
                                    <a href="/signin" class="btn btn-primary">
                                        Go to sign in
                                    </a>
                                    <button className="btn btn-success" id="btn_submit_signup">
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
    
export default UserSignUp;


