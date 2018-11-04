import React, { Component } from 'react';
import Home from './containers/Home/Home';
import RegisterCompany from './containers/Register/Register-company/company-register';
import LoginCompany from './containers/Login/Login-company/login-company';
import RegisterEmployee from './containers/Register/Register-employee/employee-register';
import LoginEmployee from './containers/Login/Login-employee/login-employee';
import OrdersChecking from './containers/Order/Order-checking/page';
import OrderClosing from './containers/Order/Order-closing/page';
import OrderChooseType from './containers/Order/Order-choose-type/Order-choose-type';

import {  BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import { ROUTE } from './constants'
import './App.css';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route path={ ROUTE.HOME } component={Home}/>
        <Route path={ ROUTE.REGISTER_COMPANY } component={RegisterCompany}/>
        <Route path={ ROUTE.LOGIN_COMPANY } component={LoginCompany}/>
        <Route path={ ROUTE.REGISTER_EMPLOYEE }  component={RegisterEmployee}/>
        <Route path={ ROUTE.LOGIN_EMPLOYEE } component={LoginEmployee}/>
        <Route path={ ROUTE.ORDER_CHECKING } component={OrdersChecking}/>
        <Route path={ ROUTE.ORDER_CLOSING } component={OrderClosing}/>
        <Route path={ ROUTE.ORDER_CHOOSE_TYPE } component={OrderChooseType}/>
        <Redirect from="/" to={ ROUTE.LOGIN_COMPANY } />
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
