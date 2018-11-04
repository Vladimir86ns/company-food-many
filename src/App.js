import React, { Component } from 'react';
import Home from './containers/Home/Home';
import RegisterCompany from './containers/Register/Register-company/company-register';
import LoginCompany from './containers/Login/Login-company/login-company';
import RegisterEmployee from './containers/Register/Register-employee/employee-register';
import LoginEmployee from './containers/Login/Login-employee/login-employee';
import CheckingOrders from './containers/Order/Order-checking/page';
import ClosingOrder from './containers/Order/Order-closing/page';

import {  BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { ROUTE } from './constants'
import './App.css';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route path={ ROUTE.HOME } component={Home}/>
        <Route path={ ROUTE.COMPANY_REGISTER } component={RegisterCompany}/>
        <Route path={ ROUTE.COMPANY_LOGIN } component={LoginCompany}/>
        <Route path={ ROUTE.EMPLOYEE_REGISTER }  component={RegisterEmployee}/>
        <Route path={ ROUTE.EMPLOYEE_LOGIN } component={LoginEmployee}/>
        <Route path={ ROUTE.ORDER_CHECKING } component={CheckingOrders}/>
        <Route path={ ROUTE.ORDER_CLOSING } component={ClosingOrder}/>
        <Redirect from="/" to={ ROUTE.COMPANY_LOGIN } />
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
