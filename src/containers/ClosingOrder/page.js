import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './index';
import Aux from '../../hoc/Aux';

class ClosingOrder extends Component {

  state = {
    orderDetail: false,
   }

  /**
   * Fetch all orders
   */
  componentDidMount() {
    if(this.checkUser()) {
      this.props.history.push("login")
    };

    let companyId = localStorage.getItem('company_id');
    this.props.initOrders(companyId);
  }

  /**
   * Check user is logged
   */
  checkUser() {
    let token = localStorage.getItem('jwt');
    return token === null;
  }

  /**
   * Show order details, all items in order
   */
  orderDetail = (item) => {
    this.setState({
      orderDetail: item
    });
  }

  /**
   * Refresh the page
   */
  refreshPage = () => {
    window.location.reload()
  }

  render() {
    // Check fetching orders, and display if is more then 0.
    let orders = (<tr><td></td></tr>);

    if (this.props.allDoneOrders.length > 0) {
        orders = this.props.allDoneOrders.map((item, index) => {
        let countItem = JSON.parse(item.order_items).length;

          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.created_at}</td>
              <td>{countItem}</td>
              <td><button onClick={() => this.orderDetail(item)}>DETAILS</button></td>
              <td><button onClick={() => this.props.closeOrder(item.id)}>CLOSE</button></td>
            </tr>
          )
      });
    }

    // Initialize list of order
    let listOrders = (<div></div>);

    // If order details is empty, show list of all orders
    if (!this.state.orderDetail) {
      listOrders = (
        <div>
          <button onClick={this.refreshPage}>REFRESH</button>
          <table>
            <tbody>
              <tr>
                <th>#</th>
                <th>Order time</th>
                <th>Sum items</th>
                <th>Order Details</th>
                <th>Close Order</th>
              </tr>
              {orders}
            </tbody>
          </table>
        </div>
      );
    }

    // Initialize order details
    let orderDetail = (<div></div>);

    // Display order details if is clicked on details
    if (this.state.orderDetail) {
      let items = JSON.parse(this.state.orderDetail.order_items);
      orderDetail = items.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
          </tr>
        );
      })

      orderDetail = (
        <div>
          <button onClick={this.refreshPage}>BACK</button>
          <table>
            <tbody>
              <tr>
                <th>#</th>
                <th>Order time</th>
              </tr>
              {orderDetail}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <Aux>
        {listOrders}
        {orderDetail}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    allDoneOrders: state.closingOrders.allDoneOrders,
  }
};

const mapDispatchToProps = dispatch => {
  return {
      initOrders: (companyId) => dispatch(actionTypes.getAllDoneOrders(companyId)),
      closeOrder: (orderId) => dispatch(actionTypes.closeOrder(orderId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClosingOrder);