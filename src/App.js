import React, { Component } from 'react';
import FoodMany from './Component/Food-many/Food-many';
import ManyItem from './Component/Many-item/Many-item';
import './App.css';

class App extends Component {

  state = {
    manyItems: [
      {id: 1, name: 'Kapricoza', price: 250, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
      {id: 2, name: 'Madjarica', price: 350, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
      {id: 3, name: 'Domaca', price: 400, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
      {id: 4, name: 'Sa sirom', price: 100, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
      {id: 5, name: 'Vegeterijanka', price: 250, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
      {id: 6, name: 'Specijalitet', price: 300, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
      {id: 7, name: 'Slatka', price: 250, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
      {id: 8, name: 'Extra cheese', price: 700, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
      {id: 9, name: 'Best of house', price: 250, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
      {id: 10, name: 'Sa lubenicom', price: 200, picture:"http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg"},
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
