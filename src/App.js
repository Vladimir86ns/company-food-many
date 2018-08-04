import React, { Component } from 'react';
import ManyItems from './containers/Many-items/Many-items';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import {  BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route path='/home' component={ManyItems}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        <Redirect from="/" to="login" />
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
