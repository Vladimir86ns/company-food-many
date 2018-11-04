import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './login-company.css';
import axios from '../../../axios';

import { ROUTE } from '../../../constants';
import { redirectToPage, checkUser } from '../../../utils';

class Login extends Component {

  state = {
    email: '',
    owner_company_password: '',
    errorMessage: ''
  }

  componentDidMount()
  {
    if (checkUser()) {
      redirectToPage(this.props, ROUTE.HOME);
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, owner_company_password } = this.state;

    axios.post('login-company', {
      email,
      owner_company_password
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

  render() {
    let errorMessage;

    if (this.state.errorMessage) {
      errorMessage = (this.state.errorMessage);
    }

    return (
      <Aux>
        <form style={{border: "1px solid #ccc"}} method="GET" onSubmit= {this.onSubmit.bind(this)}>
          <div className="container">
            <h1>Company Login</h1>
            <h3 style={{color: 'red'}}>{errorMessage}</h3>
            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" onChange={this.onChange.bind(this)}/>

            <label><b>Company Password</b></label>
            <input type="password" placeholder="Enter Company Password" name="owner_company_password" onChange={this.onChange.bind(this)}/>

            <div className="clearfix">
              <button type="submit" className="signupbtn">Login</button>
              <button type="button" className="cancelbtn" onClick={() => redirectToPage(this.props, ROUTE.COMPANY_REGISTER)}>Sign Up</button>
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

export default Login;