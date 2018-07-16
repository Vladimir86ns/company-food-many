import React from 'react';
import './Layout.css';
import Aux from '../../hoc/Aux';

const layout = () => (
  <Aux>
    <div className="foodMany">
      <h1 className="textMany">FOOD MENU</h1>
    </div>

    <div className="buttons">
      <a href="" className="btn first">All</a>
      <a href="" className="btn secound">Pizza</a>
      <a href="" className="btn">Drink</a>
      <a href="" className="btn">Pancake</a>
      <a href="" className="btn">Burger</a>
    </div>
  </Aux>
);

export default layout;