import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Login.css';

class Login extends Component {

  onSignUp() {
    this.props.history.push("register")
  }

  render() {
    return (
      <Aux>
        <form style={{border: "1px solid #ccc"}}>
          <div className="container">
            <h1>Login</h1>

            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" />

            <label><b>PIN</b></label>
            <input type="password" placeholder="Enter PIN" name="company_pin" />

            <div className="clearfix">
              <button type="button" className="cancelbtn">Login</button>
              <button type="submit" className="signupbtn" onClick={() => this.onSignUp()}>Sign Up</button>
            </div>
          </div>
        </form>
      </Aux>
     );
  }
}

export default Login;