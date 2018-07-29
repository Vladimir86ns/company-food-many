import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Login.css';

class Login extends Component {
  state = {  }
  render() {
    return (
      <Aux>
        <form style={{border: "1px solid #ccc"}}>
          <div className="container">
            <h1>Login</h1>

            <label for="pin"><b>Company PIN</b></label>
            <input type="text" placeholder="Enter Email" name="company_pin" />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" />

            <div className="clearfix">
              <button type="button" className="cancelbtn">Login</button>
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      </Aux>
     );
  }
}

export default Login;