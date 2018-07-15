import React from 'react';
import './Food-many.css';

const foodMany = () => {
    return (
        <div>
          <div className="foodMany">
            <h1 className="textMany">FOOD MENU</h1>
          </div>

          <div className="buttons">
            <a href="" className="btn first">All</a>
            <a href="" className="btn secound">Pizza</a>
            <a href="" className="btn">Drinks</a>
            <a href="" className="btn">Grill</a>
            <a href="" className="btn">Burger</a>
          </div>
        </div>
    );
}

export default foodMany;