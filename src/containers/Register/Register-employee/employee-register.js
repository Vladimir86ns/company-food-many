import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import axios from '../../../axios';
import './employee-register.css';
import { ROUTE } from '../../../constants';
import { redirectToPage } from '../../../utils';

class Register extends Component {
  state = {
    email : '',
    password: '',
    employee_password: '',
    repeat_employee_password: '',
    errorMessage: ''
  }

  onLogin() {
    this.props.history.push("login")
  }

  onSubmit(e){
    e.preventDefault();
    const {email, password, employee_password, repeat_employee_password} = this.state ;

    axios.post('/employee/register-employee', {
      email,
      password,
      employee_password,
      repeat_employee_password
    })
      .then( response => {
        localStorage.setItem('jwt', response.data.jwt_token);
        localStorage.setItem('company_id', response.data.company_id);
        localStorage.setItem('employee_id', response.data.id);
        this.props.history.push('checking-orders');
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
            <h1>Employee register</h1>
            <p>This account is for employee</p>
            {errorMessage}

            <label><b>Email</b></label>
            <input type="text" id="email" ref="email" placeholder="Enter same email as Owner" name="email" onChange={this.onChange.bind(this)} required />

            <label><b>Password</b></label>
            <input type="password" id="psw" ref="psw"  placeholder="Enter Password different then Owner" name="password" onChange={this.onChange.bind(this)} required />

            <label><b>New Employee Company password</b></label>
            <input type="password" id="pin" ref="psw-repeat"  placeholder="Employee Company password" name="employee_password" onChange={this.onChange.bind(this)} required />

            <label><b>Repeat Employee Company password</b></label>
            <input type="password" id="pin-repeat" ref="psw-repeat"  placeholder="Repeat Employee Company password" name="repeat_employee_password" onChange={this.onChange.bind(this)} required />

            <div className="clearfix">
              <button type="button" className="cancelbtn" onClick={() => this.onLogin()}>Login</button>
              <button type="submit" className="signupbtn">Submit</button>
            </div>
          </div>
        </form>

        <div className="container">
          <div className="clearfix">
            <h1>Company Login</h1>
            <button type="submit" className="signupbtn" onClick={ () => redirectToPage(this.props, ROUTE.COMPANY_LOGIN)}>Login as a Company</button>
            <button type="button" className="cancelbtn" onClick={ () => redirectToPage(this.props, ROUTE.COMPANY_REGISTER)}>Sign Up as a Company</button>
          </div>
        </div>
      </Aux>
    );
  }
}

export default Register;