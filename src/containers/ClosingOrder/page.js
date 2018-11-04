import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './index';
import Aux from '../../hoc/Aux';
import { checkUser, getCompanyId } from '../../utils';

class ClosingOrder extends Component {

  state = {
    orderDetail: false,
   }

  /**
   * Fetch all orders.
   */
  componentDidMount() {
    checkUser();
    let companyId = getCompanyId();
    this.props.initOrders(companyId);
  }

  /**
   * Show order details, all items in order.
   */
  orderDetail(item) {
    this.setState({
      orderDetail: item
    });
  }

  /**
   * Refresh the page.
   */
  refreshPage() {
    window.location.reload()
  }

  /**
   * Check has order and display all order which are done.
   */
  checkOrders() {
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

    return orders;
  }

  /**
   * Display button to refresh the page, or display error message from response
   */
  buttonRefreshOrDisplayErrorMessage() {
    let buttonRefreshAndCloseError = (<button onClick={this.refreshPage}>REFRESH</button>);

    // on closing order if is error, display message
    if (this.props.closeOrderError) {
      buttonRefreshAndCloseError = (
        <div>
          <h3 style={{color: 'red'}}>{this.props.closeOrderError}</h3>
          {buttonRefreshAndCloseError}
        </div>
      );
    }

    return buttonRefreshAndCloseError;
  }

  /**
   * Display list of all orders, if order detail is false.
   */
  getListOrders(buttonRefreshAndCloseError, orders) {
    return (
      <div>
        {buttonRefreshAndCloseError}
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

  /**
   * Display order detail, if order detail is true.
   */
  displayOrderDetail() {
    let orderDetail = (<div></div>);

    if (this.state.orderDetail) {
      let items = JSON.parse(this.state.orderDetail.order_items);
      orderDetail = items.map((item, index) => {
        return (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item[0]}</td>
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

    return orderDetail;
  }

  render() {
    // Check fetching orders, and display if is more then 0.
    let orders = this.checkOrders();

    // Initialize list of order.
    let listOrders = (<div></div>);

    // On closing order if has response error, display message, or just refresh button.
    let buttonRefreshAndCloseError = this.buttonRefreshOrDisplayErrorMessage();

    // If order details is empty, show list of all orders.
    if (!this.state.orderDetail) {
      listOrders = this.getListOrders(buttonRefreshAndCloseError, orders);
    }

    // Display order details if is clicked on order detail.
    let orderDetail = this.displayOrderDetail();

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
    closeOrderError: state.closingOrders.closeOrderError
  }
};

const mapDispatchToProps = dispatch => {
  return {
      initOrders: (companyId) => dispatch(actionTypes.getAllDoneOrders(companyId)),
      closeOrder: (orderId) => dispatch(actionTypes.closeOrder(orderId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClosingOrder);