import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import CheckingOrders from './containers/CheckingOrder/Checking-order';
import ClosingOrder from './containers/ClosingOrder/page';

import {  BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route path='/Home' component={Home}/>
        <Route path='/Register' component={Register}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Checking-orders' component={CheckingOrders}/>
        <Route path='/Closing-orders' component={ClosingOrder}/>
        <Redirect from="/" to="Login" />
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
