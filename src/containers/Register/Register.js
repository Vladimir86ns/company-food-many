import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import axios from '../../axios';
import './Register.css';

class Register extends Component {
  state = {
    email : '',
    password: '',
    pin: '',
    repeat_pin: '',
    errorMessage: ''
  }

  onLogin()
  {
    this.props.history.push("login")
  }

  onSubmit(e){
    e.preventDefault();
    const {email, password, pin, repeat_pin} = this.state ;

    axios.post('/register-company', {
      email,
      password,
      pin,
      repeat_pin
    })
      .then( response => {
        localStorage.setItem('jwt', response.data.jwt_token);
        this.props.history.push("home") ;
      })
      .catch( error => {
        console.log(error.response.data.message)
        this.setState({
          errorMessage: error.response.data.message
        })
      });
 }

 onChange(e){
    const {name, value} = e.target ;
    this.setState({[name]: value});
 }

  render() {
    let errorMessage;
    if (this.state.errorMessage) {
      errorMessage = (<h1 style={{color: 'red'}}>{this.state.errorMessage}</h1>);
    }
    return (
      <Aux>
        <form style={{border: "1px solid #ccc"}} method="GET" onSubmit= {this.onSubmit.bind(this)}>
          <div className="container">
            <h1>Register your company PIN</h1>
            <p>This account will use some of your employees.</p>
            <p>It will be good to create your company PIN. And you will be able after this to login with your email and company PIN.</p>
            {errorMessage}

            <label><b>Email</b></label>
            <input type="text" id="email" ref="email" placeholder="Enter same email as Owner" name="email" onChange={this.onChange.bind(this)} required />

            <label><b>Password</b></label>
            <input type="password" id="psw" ref="psw"  placeholder="Enter Password different then Owner" name="password" onChange={this.onChange.bind(this)} required />

            <label><b>Company PIN</b></label>
            <input type="password" id="pin" ref="psw-repeat"  placeholder="Company PIN" name="pin" onChange={this.onChange.bind(this)} required />

            <label><b>Repeat Company PIN</b></label>
            <input type="password" id="pin-repeat" ref="psw-repeat"  placeholder="Repeat Company PIN" name="repeat_pin" onChange={this.onChange.bind(this)} required />

            <div className="clearfix">
              <button type="button" className="cancelbtn" onClick={() => this.onLogin()}>Login</button>
              <button type="submit" className="signupbtn">Submit</button>
            </div>
          </div>
        </form>
      </Aux>
    );
  }
}

export default Register;