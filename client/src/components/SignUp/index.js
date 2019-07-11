import React from 'react';
import  authentication  from '../../utils/API'


//     }
  
//     document.body.appendChild(form);
//     form.submit();
//   }
class UserSignUp extends React.Component {
    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
  
      for (let name of data.keys()) {
        const input = form.elements[name];
      }
      
      fetch({authentication}, {
        method: 'POST',
        body: data,
      });
    }

render() {
        return(
            <div>
                <div className="form container">
                    <div className="row form-signup-container">
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={this.handleSubmit}  className="form-signup" id="form_signup">
                                <h3 className="title-signup">Sign Up Form</h3>
                                <div className="form-group">
                                <input type="text" name="firstname" className="form-control" id="input_firstname_signup"
                        placeholder="First name: " />
                                    {/* <input onChange={props.handleFormInputChange} type="text" name="signupformfirstname" className="form-control" id="input_firstname_signup" placeholder="First name: " /> */}
                                </div>
                                <div className="form-group">
                                <input type="text" name="lastname" className="form-control" id="input_lastname_signup"
                        placeholder="Last name: "/>
                                    {/* <input onChange={props.handleFormInputChange} type="text" name="signupformlastname" className="form-control" id="input_lastname_signup" placeholder="Last name: "/>                                 */}
                                </div>
                                <div className="form-group">
                                <input type="text" name="username" className="form-control" id="input_username_signup"
                        placeholder="Username: "/>
                                    {/* <input onChange={props.handleFormInputChange} type="text" name="signupformusername" className="form-control" id="input_username_signup" placeholder="Username: "/>                                 */}
                                </div>
                                <div className="form-group">
                                <input type="password" name="password" className="form-control" id="input_password_signup"
                        placeholder="Password: "/>
                                    {/* <input onChange={props.handleFormInputChange} type="password" name="signupformpassword" className="form-control" id="input_password_signup" placeholder="Password: "/>                                 */}
                                </div>
                                <div className="form-group d-flex justify-content-center btn-container">
                                    <a href="./SignIn" className="btn btn-primary">
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
}
    
 export default UserSignUp;


