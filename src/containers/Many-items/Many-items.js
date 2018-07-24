import React, { Component } from 'react';
import ManyItem from '../Many-item/Many-item';
import axios from '../../axios';

class ManyItems extends Component {

  state = {
    apiManyItems: [],
  }

  componentDidMount() {
    axios.get('/company/4/product/get_all').then(
      response => this.setState({apiManyItems: response.data.data})
    );
  }

  render() {

    const allItems = this.state.apiManyItems.map( item => {
      return (
        <ManyItem
          name={item.name}
          price={parseFloat(item.price)}
          picture={item.picture}
          key={item.id}/>
      )
    });

    return (
      <div>
        {allItems}
      </div>
    );
  }
}

export default ManyItems;
