import React from 'react';
import './Layout.css';
import { NavLink } from 'react-router-dom';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';

const layout = (props) => (
  <Aux>
    <div className="foodMany">
      <h1 className="textMany">FOOD MENU</h1>
      <h2>Total price: {props.order} din </h2>
    </div>

    <div className="buttons">
      <NavLink to="/Home/All" className="btn first">All</NavLink>
      {
        props.allCategories.map( product => {
          return (
            <NavLink
              key={product.id}
              to={'/Home/' + product.name}
              className="btn">{product.name}
            </NavLink>
          )
        })
      }
    </div>
    <main>
      {props.children}
    </main>
  </Aux>
);

const mapStateToProps = state => {
  return {
    order: state.orderReducer.totalPrice
  }
};

export default connect(mapStateToProps, null)(layout);