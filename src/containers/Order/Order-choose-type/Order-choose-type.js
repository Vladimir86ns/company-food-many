import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Order-choose-type';
import { redirectToPage, checkUser, getEmployeeId } from '../../../utils';
import { ROUTE } from './../../../constants'

class OrderChooseType extends Component {

  componentDidMount()
  {
    if (!checkUser() && !getEmployeeId()) {
      redirectToPage(this.props, ROUTE.LOGIN_EMPLOYEE);
    };
  }

  render() {
    return (
      <Aux>
        <div className="container">
          <div className="clearfix">
            <h1>Choose order category</h1>
            <button type="submit" className="signupbtn" onClick={ () => redirectToPage(this.props, ROUTE.ORDER_CHECKING)}>CHECKING</button>
            <button type="button" className="signupbtn" onClick={ () => redirectToPage(this.props, ROUTE.ORDER_CLOSING)}>CLOSING</button>
          </div>
        </div>
      </Aux>
     );
  }
}

export default OrderChooseType;