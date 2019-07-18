import React from 'react';
import API from "../../utils/API";
// import routes from  "../../utils/API" 


//     }

//     document.body.appendChild(form);
//     form.submit();
//   }
let signupformfirstname = ""
let signupformlastname = ""
let signupformusername = ""
let signupformpassword = ""

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            signupformfirstname,
            signupformlastname,
            signupformusername,
            signupformpassword
        }
    }

    // handleSubmit(event) {
    //   event.preventDefault();
    //   const form = event.target;
    //   const data = new FormData(form);

    //   for (let name of data.keys()) {
    //     const input = form.elements[name];
    //   }

    //   fetch({routes}, {
    //     method: 'POST',
    //     body: data,
    //   });
    // }
    handleFormInputChange = event => {
        console.log("event.target.value: ", event.target.value)
        console.log("event.target.name: ", event.target.name)
        this.setState({ [event.target.name]: event.target.value }, () => {
            console.log("this.state.signupformfirstname: ", this.state.signupformfirstname)
            console.log("this.state.signupformlastname: ", this.state.signupformlastname)
            console.log("this.state.signupformusername: ", this.state.signupformusername)
            console.log("this.state.signupformpassword: ", this.state.signupformpassword)
        });
    }

    signUpFormSubmit = event => {
        event.preventDefault()
        console.log("signUpFormSubmit: ")
        let formdata = {
            firstname: this.state.signupformfirstname,
            lastname: this.state.signupformlastname,
            username: this.state.signupformusername,
            password: this.state.signupformpassword
        }
        API.sendSignUpForm(formdata).then(res => {
            this.props.history.push(`/`)
          })

    };

    render() {
        // const SignUp = props => {
        return (
            <div>
                <div className="form container">
                    <div className="row form-signup-container">
                        <div className="col-md-6 offset-md-3">
                            <form className="form-signup" id="form_signup">
                                <h3 className="title-signup">Sign Up Form</h3>
                                <div className="form-group">
                                    {/* <input type="text" name="firstname" className="form-control" id="input_firstname_signup"
                        placeholder="First name: " /> */}
                                    <input onChange={this.handleFormInputChange} type="text" name="signupformfirstname" className="form-control" id="input_firstname_signup" placeholder="First name: " />
                                </div>
                                <div className="form-group">
                                    {/* <input type="text" name="lastname" className="form-control" id="input_lastname_signup"
                        placeholder="Last name: "/> */}
                                    <input onChange={this.handleFormInputChange} type="text" name="signupformlastname" className="form-control" id="input_lastname_signup" placeholder="Last name: " />
                                </div>
                                <div className="form-group">
                                    {/* <input type="text" name="username" className="form-control" id="input_username_signup"
                        placeholder="Username: "/> */}
                                    <input onChange={this.handleFormInputChange} type="text" name="signupformusername" className="form-control" id="input_username_signup" placeholder="Username: " />
                                </div>
                                <div className="form-group">
                                    {/* <input type="password" name="password" className="form-control" id="input_password_signup"
                        placeholder="Password: "/> */}
                                    <input onChange={this.handleFormInputChange} type="password" name="signupformpassword" className="form-control" id="input_password_signup" placeholder="Password: " />
                                </div>
                                <div className="form-group d-flex justify-content-center btn-container">
                                    <a href="./SignIn" className="btn btn-primary">
                                        Go to sign in
                                    </a>
                                   
                                        <button onClick={this.signUpFormSubmit} className="btn btn-success" id="btn_submit_signup">
                                            Submit
                                        </button>
                                    
                                    {/* <a href="/" className="btn btn-success" onClick={this.signUpFormSubmit}>
                                    Submit Link
                                    </a> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
