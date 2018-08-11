import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Order.css';
import Aux from '../../hoc/Aux';
import * as actionTypes from '../../store/order/actions';

class Order extends Component {

  render() {
    let allOrders = this.props.ordersIds.map((id, index) => {
      let item = this.props.all.find( item => item.id === id);
      if (item) {
        return (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td><button onClick={() => this.props.removeItem({index: index, price: item.price})} style={{ background: 'red'}}>X</button></td>
          </tr>
        )
      }
      return false;
    });

    return (
      <Aux>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Cancel</th>
            </tr>
            {allOrders}
          </tbody>
        </table>
        <button style={{ marginLeft: '20%',  width: '40%'}}>Accept</button>
        <button style={{ background: 'red', marginLeft: '20%',  width: '40%'}}>Cancel</button>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
      all: state.itemsReducer.items,
      ordersIds: state.orderReducer.orderIds,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (val) => dispatch({type: actionTypes.REMOVE_ITEM, val}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);