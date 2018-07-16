import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import ManyItems from './containers/Many-items/Many-items';
import Aux from './hoc/Aux';
import './App.css';

class App extends Component {

  render() {
    return (
      <Aux>
        <Layout>
          <ManyItems />
        </Layout>
      </Aux>
    );
  }
}

export default App;
