import React from 'react';
import './Layout.css';
import { NavLink } from 'react-router-dom';
import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
    <div className="foodMany">
      <h1 className="textMany">FOOD MENU</h1>
    </div>

    <div className="buttons">
      <NavLink to="#" className="btn first">All</NavLink>
      {
        props.allCategories.map( product => {
          return (
            <NavLink key={product.id} to="#" className="btn">{product.name}</NavLink>
          )
        })
      }
    </div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;