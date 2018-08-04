import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Login.css';
import axios from '../../axios';

class Login extends Component {

  state = {
    email: '',
    company_pin: '',
    errorMessage: ''
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, company_pin } = this.state;

    axios.post('login-company', {
      email,
      company_pin
    })
      .then( response => {
        localStorage.setItem('jwt', response.data.jwt_token);
        localStorage.setItem('company_id', response.data.company_id);
        this.props.history.push("home") ;
      })
      .catch( error => {
        this.setState({errorMessage: error.response.data.message})
      })
  }

  onChange(e){
    const {name, value} = e.target ;
    this.setState({[name]: value});
 }

  onSignUp() {
    this.props.history.push("register")
  }

  render() {
    let errorMessage;

    if (this.state.errorMessage) {
      errorMessage = (this.state.errorMessage);
    }

    return (
      <Aux>
        <form style={{border: "1px solid #ccc"}} method="GET" onSubmit= {this.onSubmit.bind(this)}>
          <div className="container">
            <h1>Login</h1>
            <h3 style={{color: 'red'}}>{errorMessage}</h3>
            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" onChange={this.onChange.bind(this)}/>

            <label><b>PIN</b></label>
            <input type="password" placeholder="Enter PIN" name="company_pin" onChange={this.onChange.bind(this)}/>

            <div className="clearfix">
              <button type="submit" className="signupbtn">Login</button>
              <button type="button" className="cancelbtn" onClick={() => this.onSignUp()}>Sign Up</button>
            </div>
          </div>
        </form>
      </Aux>
     );
  }
}

export default Login;