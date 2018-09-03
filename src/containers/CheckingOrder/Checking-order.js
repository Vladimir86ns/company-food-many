import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import './Checking-order.css';
import Aux from '../../hoc/Aux';

class CheckingOrder extends Component {
  state = {
    allOrders: [],
    orderDetail: false,
    finishOrderIndex: []
   }

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

  checkUser() {
    let token = localStorage.getItem('jwt');

    return token === null;
  }

  refreshPage = () => {
    window.location.reload()
  }

  orderDetail = (item) => {
    this.setState({
      orderDetail: item
    });
  }

  finishSingleItem = (index) => {
    let allIndex = this.state.finishOrderIndex;
    allIndex.push(index);

    this.setState({
      finishOrderIndex: allIndex
    });
  }

  render() {

    let orderDetail = (<div></div>);

    if (this.state.orderDetail) {
      let items = JSON.parse(this.state.orderDetail.order_items);
      let allOrderDetails = items.map((item, index) => {
      let button;
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
          <button onClick={this.refreshPage}>CLOSE ORDER</button>
        </div>
      );
    }

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

    let listOrders = (<div></div>);

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