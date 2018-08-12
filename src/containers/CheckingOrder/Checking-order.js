import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios';
import './Checking-order.css';
import Aux from '../../hoc/Aux';

class CheckingOrder extends Component {
  state = {
    allOrders: []
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

  render() {
    let orders = (<tr><td></td></tr>);
    if (this.state.allOrders.length > 0) {
       orders = this.state.allOrders.map((item, index) => {
        let countItem = JSON.parse(item.order_items).length;
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.created_at}</td>
              <td>{countItem}</td>
              <td><button>Details</button></td>
            </tr>
          )
      });
    }

    return (
      <Aux>
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