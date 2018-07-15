import React from 'react';
import './Many-item.css';

const manyItem = (props) => (
  <div className="column">
    <div className="card">
      <img src={props.picture} alt="Mike" style={{width:"100%"}} />
      <div className="container">
        <h2>{props.name}</h2>
        <p>Price: {props.price} din</p>
      </div>
    </div>
  </div>
);

export default manyItem;