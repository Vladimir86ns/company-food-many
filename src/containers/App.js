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
      {id: 7, name: 'Burger', price: 250, category: 'burger', picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/SignatureBurgersalacartec184f4.jpg"},
      {id: 8, name: 'Cheese Burger', price: 250, category: 'burger', picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/SignatureBurgersalacartec184f4.jpg"},
      {id: 9, name: 'Big Burger', price: 250, category: 'burger', picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/SignatureBurgersalacartec184f4.jpg"},
      {id: 10, name: 'House Burger', price: 250, category: 'burger', picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/SignatureBurgersalacartec184f4.jpg"},
      {id: 11, name: 'King Burger', price: 250, category: 'burger', picture:"https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/SignatureBurgersalacartec184f4.jpg"},
      {id: 12, name: 'Banana Pancake', price: 250, category: 'pancake', picture:"https://bigoven-res.cloudinary.com/image/upload/perfectly-fluffy-pancakes-gf-8188e5.jpg"},
      {id: 13, name: 'Coko Pancake', price: 250, category: 'pancake', picture:"https://bigoven-res.cloudinary.com/image/upload/perfectly-fluffy-pancakes-gf-8188e5.jpg"},
      {id: 14, name: 'Vanila Pancake', price: 250, category: 'pancake', picture:"https://bigoven-res.cloudinary.com/image/upload/perfectly-fluffy-pancakes-gf-8188e5.jpg"},
      {id: 15, name: 'Hum Pancake', price: 250, category: 'pancake', picture:"https://bigoven-res.cloudinary.com/image/upload/perfectly-fluffy-pancakes-gf-8188e5.jpg"},
      {id: 16, name: 'Cocos Pancake', price: 250, category: 'pancake', picture:"https://bigoven-res.cloudinary.com/image/upload/perfectly-fluffy-pancakes-gf-8188e5.jpg"},
      {id: 11, name: 'Strawberry', price: 250, category: 'drink', picture:"https://lh3.googleusercontent.com/EknzEtIAKfI2Rcy8mPEVqKBVDfGKA8PB2zIFtODDB1kbZA4VMbZQptRGeYXArbqJA5p4eUjP1Q07aIDghdym"},
      {id: 11, name: 'Orange', price: 250, category: 'drink', picture:"https://static.pulse.ng/img/incoming/origs6686932/2246361302-w644-h960/Sex-on-the-beach-cocktail.jpg"},
      {id: 11, name: 'Green', price: 250, category: 'drink', picture:"https://lh6.ggpht.com/7a-SkcaXYVDE850jHOTXRv371pIhwK_EVzDCdfuL1r9vBUt2NjF75zKvCJH1o4haLdBZVGK7ru1LOVuwWCDVQg"},
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
