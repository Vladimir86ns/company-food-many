import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import './Checking-order.css';
import Aux from '../../hoc/Aux';

class CheckingOrder extends Component {
  state = {
    allOrders: [],
    orderDetail: false,
    finishOrderIndex: [],
    allOrdersDone: false,
   }

  /**
   * Fetch all orders
   */
  componentDidMount() {

    if(this.checkUser()) {
      this.props.history.push("login")
    };

    let companyId = localStorage.getItem('company_id');

    axios.get('/company/' + companyId + '/get-orders')
      .then(
        response => {
          this.setState({allOrders: response.data})
      });
  }

  /**
   * Check user is logged
   */
  checkUser() {
    let token = localStorage.getItem('jwt');

    return token === null;
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

  render() {

    // Initialize single order details
    let orderDetail = (<div></div>);
    let orderButtonClose = (<button style={{backgroundColor : "red"}} >ITEMS ARE NOT FINISHED!</button>);

    // Display order details if is clicked on button
    if (this.state.orderDetail) {
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

      // if all items are done, display close button
      if (this.state.finishOrderIndex.length === items.length) {
        orderButtonClose = (<button onClick={this.refreshPage}>CLOSE ORDER</button>);
      }

      // display all order items
      orderDetail = (
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

    // Check fetching orders, and display if is more then 0.
    let orders = (<tr><td></td></tr>);

    if (this.state.allOrders.length > 0) {
       orders = this.state.allOrders.map((item, index) => {
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
                <th>Check Order</th>
              </tr>
              {orders}
            </tbody>
          </table>
        </div>
      );
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
    //
  }
};

const mapDispatchToProps = dispatch => {
  return {
    //
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckingOrder);