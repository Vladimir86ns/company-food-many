import React, { Component } from 'react';
import FoodMany from '../components/Food-many/Food-many';
import ManyItem from '../components/Many-item/Many-item';
import './App.css';

class App extends Component {

  state = {
    manyItems: [
      {id: 1, name: 'Kapricoza', price: 250, category: 'pizza', picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
      {id: 2, name: 'Madjarica', price: 350, category: 'pizza',  picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
      {id: 3, name: 'Domaca', price: 400, category: 'pizza',  picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
      {id: 4, name: 'Sa sirom', price: 100, category: 'pizza',  picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
      {id: 5, name: 'Vegeterijanka', price: 250, category: 'pizza',  picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
      {id: 6, name: 'Specijalitet', price: 300, category: 'pizza',  picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
      {id: 7, name: 'Slatka', price: 250, category: 'pizza',  picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
      {id: 8, name: 'Extra cheese', price: 700, category: 'pizza',  picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
      {id: 9, name: 'Best of house', price: 250, category: 'pizza',  picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
      {id: 10, name: 'Sa lubenicom', price: 200, category: 'pizza',  picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/Hawaiiane0e765.jpg"},
    ]
  }

  render() {

    let manyItems = this.state.manyItems.map( item => {
      return (
        <ManyItem
          name={item.name}
          price={item.price}
          picture={item.picture}
          key={item.id}/>
      )
    })

    return (
      <div>
        <FoodMany />
        {manyItems}
      </div>
    );
  }
}

export default App;
