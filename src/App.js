import React, { Component } from 'react';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import CheckingOrders from './containers/CheckingOrder/page';
import ClosingOrder from './containers/ClosingOrder/page';

import {  BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Route path='/checking-orders' component={CheckingOrders}/>
        <Route path='/closing-orders' component={ClosingOrder}/>
        <Redirect from="/" to="login" />
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
