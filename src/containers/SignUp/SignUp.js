import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './SignUp.css';

class SignUp extends Component {
  state = {  }
  render() {
    return (
      <Aux>
        <form style={{border: "1px solid #ccc"}}>
          <div className="container">
            <h1>Sign Up With New Password</h1>
            <p>Welcome NAME: example, This account will use some of your employees.</p>
            <p>It will be good to create with a new password (not the same as Owner).</p>
            <p>Fill up this form below and enter one more time same email.</p>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter same email as Owner" name="email" required />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password different then Owner" name="psw" required />

            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

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

export default SignUp;