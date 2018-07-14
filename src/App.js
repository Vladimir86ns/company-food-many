import React, { Component } from 'react';
import FoodMany from './Component/Food-many/Food-many';
import ManyItem from './Component/Many-item/Many-item';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <FoodMany />
        <ManyItem name="Kapricoza" price="250"/>
        <ManyItem name="Kapricoza" price="250"/>
        <ManyItem name="Kapricoza" price="250"/>
        <ManyItem name="Kapricoza" price="250"/>
        <ManyItem name="Kapricoza" price="250"/>
        <ManyItem name="Kapricoza" price="250"/>
        <ManyItem name="Kapricoza" price="250"/>
        <ManyItem name="Kapricoza" price="250"/>
        <ManyItem name="Kapricoza" price="250"/>
        <ManyItem name="Kapricoza" price="250"/>
      </div>
    );
  }
}

export default App;
