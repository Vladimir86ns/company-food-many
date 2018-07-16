import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ManyItems from './containers/Many-items/Many-items';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Layout />
        <ManyItems />
      </div>
    );
  }
}

export default App;
