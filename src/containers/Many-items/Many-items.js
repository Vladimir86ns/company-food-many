import React, { Component } from 'react';
import ManyItem from '../Many-item/Many-item';
import axios from '../../axios';

class ManyItems extends Component {

  state = {
    apiManyItems: [],
    user: {}
  }

  componentDidMount() {
    axios.get('/company/4/product/get_all').then(
      response => this.setState({apiManyItems: response.data.data})
    );

    axios.post('/sign-up',{
      email: 'vladimirInvestments@gmail.com',
      password: 'test123!'
    }).then( response => {
      this.setState({user: response.data})
      localStorage.setItem('user', response.data.first_name)
    }
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
