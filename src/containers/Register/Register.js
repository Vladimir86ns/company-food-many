import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import axios from '../../axios';
import './Register.css';

import *  as actionTypes from '../../store/user/actions';
import { ROUTE } from '../../constants';
import { redirectToPage } from '../../utils';

class Register extends Component {
  state = {
    email : '',
    password: '',
    pin: '',
    repeat_pin: '',
    errorMessage: ''
  }

  onLogin() {
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
        localStorage.setItem('company_id', response.data.company_id);
        this.props.history.push("home") ;
        this.props.getUser(response.data);
      })
      .catch( error => {
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
            <h1>Company Register</h1>
            <p>This account will use some of your employees.</p>
            <p>It will be good to create your company password. And you will be able after this to login with your email and company password.</p>
            {errorMessage}

            <label><b>Email</b></label>
            <input type="text" id="email" ref="email" placeholder="Enter same email as Owner" name="email" onChange={this.onChange.bind(this)} required />

            <label><b>Password</b></label>
            <input type="password" id="psw" ref="psw"  placeholder="Enter Password as Owner" name="password" onChange={this.onChange.bind(this)} required />

            <label><b>New Company Password</b></label>
            <input type="password" id="pin" ref="psw-repeat"  placeholder="New Company Password" name="pin" onChange={this.onChange.bind(this)} required />

            <label><b>Repeat Company Password</b></label>
            <input type="password" id="pin-repeat" ref="psw-repeat"  placeholder="Repeat Company password" name="repeat_pin" onChange={this.onChange.bind(this)} required />

            <div className="clearfix">
              <button type="button" className="cancelbtn" onClick={() => this.onLogin()}>Login</button>
              <button type="submit" className="signupbtn">Submit</button>
            </div>
          </div>
        </form>

        <div className="container">
          <div className="clearfix">
            <h1>Employee Login</h1>
            <button type="submit" className="signupbtn" onClick={ () => redirectToPage(this.props, ROUTE.EMPLOYEE_LOGIN)}>Login as a Employee</button>
            <button type="button" className="cancelbtn" onClick={ () => redirectToPage(this.props, ROUTE.EMPLOYEE_REGISTER)}>Sign Up as a Employee</button>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
      //
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (user) => dispatch({type: actionTypes.GET_USER, user}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);