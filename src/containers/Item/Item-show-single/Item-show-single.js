import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Item-show-single.css';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import *  as actionTypes from '../../../store/order/actions';
import { getCompanyProductImagePath } from '../../../utils';

class ItemShowSingle extends Component {

  render() {
    let showNameWithImage = (
      <Aux>
        <img
          src={getCompanyProductImagePath() + this.props.picture}
          alt={this.props.picture}
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

ItemShowSingle.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

const mapStateToProps = state => {
  return {
      orderIds: state.orderReducer.orderIds,
      user: state.userReducer.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    orderItem: (val) => dispatch({type: actionTypes.ADD_ITEM, val}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemShowSingle);
