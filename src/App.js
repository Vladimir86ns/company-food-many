import React, { Component } from 'react';
import ManyItems from './containers/Many-items/Many-items';
import SignUp from './containers/SignUp/SignUp';
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
    <Router>
      <Switch>
        <Route path='/home' component={ManyItems}/>
        <Route path='/register' component={SignUp}/>
      </Switch>
    </Router>
    );
  }
}

export default App;
