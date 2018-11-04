import React, { Component } from 'react';
import Home from './containers/Home/Home';
import RegisterCompany from './containers/Register/Register-company/company-register';
import LoginCompany from './containers/Login/Login-company/login-company';
import RegisterEmployee from './containers/Register/Register-employee/employee-register';
import LoginEmployee from './containers/Login/Login-employee/login-employee';
import CheckingOrders from './containers/Order/Order-checking/page';
import ClosingOrder from './containers/Order/Order-closing/page';

import {  BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/company-register' component={RegisterCompany}/>
        <Route path='/company-login' component={LoginCompany}/>
        <Route path='/employee-register' component={RegisterEmployee}/>
        <Route path='/employee-login' component={LoginEmployee}/>
        <Route path='/checking-orders' component={CheckingOrders}/>
        <Route path='/closing-orders' component={ClosingOrder}/>
        <Redirect from="/" to="company-login" />
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
