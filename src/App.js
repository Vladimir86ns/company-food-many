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
        <Route path='/Home' component={ManyItems}/>
        <Route path='/Register' component={Register}/>
        <Route path='/Login' component={Login}/>
        <Redirect from="/" to="Login" />
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
