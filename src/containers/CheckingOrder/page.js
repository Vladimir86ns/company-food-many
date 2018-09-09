import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkUser, getCompanyId } from '../../store/utility';
import * as actionTypes from '.';
import './style.css';
import Aux from '../../hoc/Aux';


class CheckingOrder extends Component {
  state = {
    orderDetail: false,
    finishOrderIndex: []
   }

  /**
   * Fetch all orders
   */
  componentDidMount() {
    checkUser();
    let companyId = getCompanyId();
    this.props.initOrders(companyId);
  }

  /**
   * Refresh the page
   */
  refreshPage = () => {
    window.location.reload()
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
   * Check item which is finish
   */
  finishSingleItem = (index) => {
    let allIndex = this.state.finishOrderIndex;
    allIndex.push(index);

    this.setState({
      finishOrderIndex: allIndex
    });
  }

  /**
   * Get all orders in progress.
   */
  getAllOrders() {
    return this.props.allOrders.map((item, index) => {
      let countItem = JSON.parse(item.order_items).length;
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.created_at}</td>
            <td>{countItem}</td>
            <td><button onClick={() => this.orderDetail(item)}>Details</button></td>
          </tr>
        )
    });
  }

  /**
   * Get table list orders.
   */
  getListOrdersTable(orders) {
    return (
      <div>
        <button onClick={this.refreshPage}>REFRESH</button>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Order time</th>
              <th>Sum items</th>
              <th>Check Order</th>
            </tr>
            {orders}
          </tbody>
        </table>
      </div>
    );
  }

  /**
   * Get all details from one order.
   */
  getOrderDetails() {
    let items = JSON.parse(this.state.orderDetail.order_items);

    let allOrderDetails = items.map((item, index) => {
      // Toggle button if order is in progress or done
      let button;

      // if order is done display Done button
      if (this.state.finishOrderIndex.includes(index)) {
        button = (<td><button >Done</button></td>)
      } else {
        button = (<td><button style={{backgroundColor: 'red'}} onClick={() => this.finishSingleItem(index)}>Progress</button></td>)
      }

      return (
        <tr key={index}>
        <td>{index + 1}</td>
        <td>{item[0]}</td>
        <td>{item[1]}</td>
        {button}
      </tr>
      );
    })

    // display all order items
    return this.getListOrderDetailsTable(allOrderDetails, items);
  }

  /**
   * Get table list order details.
   */
  getListOrderDetailsTable(allOrderDetails, items) {
    // Initialize close button
    let orderButtonClose = this.checkCloseButton(items);

    return (
      <div>
        <button onClick={this.refreshPage}>BACK TO ORDERS</button>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Size</th>
              <th>Check Order</th>
            </tr>
            {allOrderDetails}
          </tbody>
        </table>
        {orderButtonClose}
      </div>
    );
  }

  /**
   * If all items are done, display close button, otherwise,
   * items are not finished.
   */
  checkCloseButton(items) {
    // if all items are done, display close button
    if (this.state.finishOrderIndex.length === items.length) {
      return (<button onClick={() => this.props.closeOrder(this.state.orderDetail.id)}>CLOSE ORDER</button>);
    }

    return (<button style={{backgroundColor : "red"}} >ITEMS ARE NOT FINISHED!</button>);
  }

  render() {
    // Initialize single order details
    let orderDetail = (<div></div>);

    // Display order details if is clicked on button
    if (this.state.orderDetail) {
      orderDetail = this.getOrderDetails();
    }

    let orders = (<tr><td></td></tr>);

    // Check fetching orders, and display if is more then 0.
    if (this.props.allOrders.length > 0) {
       orders = this.getAllOrders();
    }

    // Initialize list of order
    let listOrders = (<div></div>);

    // If order details is empty, show list of all orders
    if (!this.state.orderDetail) {
      listOrders = this.getListOrdersTable(orders);
    }

    return (
      <Aux>
        {orderDetail}
        {listOrders}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    allOrders: state.checkingOrders.allOrders,
  }
};

const mapDispatchToProps = dispatch => {
  return {
      initOrders: (companyId) => dispatch(actionTypes.getAllOrders(companyId)),
      closeOrder: (orderId) => dispatch(actionTypes.closeOrder(orderId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckingOrder);