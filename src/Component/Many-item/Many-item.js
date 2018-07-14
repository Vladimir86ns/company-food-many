import React from 'react';
import './Many-item.css';

const manyItem = (props) => {
  return (
    <div className="column">
      <div className="card">
        <img src="http://zoebingleypullin.com/wp-content/uploads/sites/4/2017/05/500x500xMung-bean-500x500.jpg.pagespeed.ic.jOSsRJ0PQ5.jpg" alt="Mike" style={{width:"100%"}} />
        <div className="container">
          <h2>{props.name}</h2>
          <p>Price: <bold>{props.price}</bold> din</p>
        </div>
      </div>
    </div>
  );
}

export default manyItem;