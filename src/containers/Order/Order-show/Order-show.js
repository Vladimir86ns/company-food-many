import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Order-show.css';
import axios from '../../../axios';
import Aux from '../../../hoc/Aux';
import * as actionTypes from '../../../store/order/actions';

class Order extends Component {

  state = {
    errorMessage: ''
  }

  resetOrder = () => {
    this.props.resetOrder();
    this.props.history.push("all");
  }

  acceptOrder = () => {
    let companyId = localStorage.getItem('company_id');

    axios.post('company/' + companyId + '/order/', {
      order_ids: this.props.orderIds
    })
    .then(
      this.resetOrder
    )
    .catch(
      error => {
        this.setState({errorMessage: error.response.data.message})
      }
    );
  }

  render() {
    let errorMessage;

    if (this.state.errorMessage) {
      errorMessage = (this.state.errorMessage);
    }

    let allOrders = this.props.orderIds.map((id, index) => {
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
        <h3 style={{color: 'red'}}>{errorMessage}</h3>
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
        <button
          onClick={this.acceptOrder}
          style={{ marginLeft: '20%',  width: '40%'}}
        >Accept</button>
        <button
          onClick={this.resetOrder}
          style={{ background: 'red', marginLeft: '20%',  width: '40%'}}
        >Cancel</button>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
      all: state.itemsReducer.items,
      orderIds: state.orderReducer.orderIds,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (val) => dispatch({type: actionTypes.REMOVE_ITEM, val}),
    resetOrder: () => dispatch({type: actionTypes.RESET_ORDER_STORE}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
