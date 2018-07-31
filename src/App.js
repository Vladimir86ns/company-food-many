import React, { Component } from 'react';
import ManyItems from './containers/Many-items/Many-items';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route path='/home' component={ManyItems}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
