import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Many-item.css';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import *  as actionTypes from '../../store/order/actions';

import {
  APP_URL,
  UPLOAD_COMPANY_PRODUCT_PATH
} from '../../constants';

class ManyItem extends Component {

 render() {
    let showNameWithImage = (
      <Aux>
        <img
          src={APP_URL + UPLOAD_COMPANY_PRODUCT_PATH + '/4/' + this.props.picture}
          alt="mozdaNema"
          style={{height:"200px", width:"200px", marginLeft:"20%"}}/>
        <div className="container">
          <h2>{this.props.name}</h2>
          <p>Price: {this.props.price} din</p>
          <button onClick={() => this.props.orderItem(this.props.item)}>Add</button>
        </div>
      </Aux>);

    return (
      <div className="column">
        <div className="card">
          {showNameWithImage}
        </div>
      </div>
    );
  }
}

ManyItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

const mapStateToProps = state => {
  return {
      orderIds: state.orderReducer.orderIds,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    orderItem: (val) => dispatch({type: actionTypes.ADD_ITEM, val}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ManyItem);