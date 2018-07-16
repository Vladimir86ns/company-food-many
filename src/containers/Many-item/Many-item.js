import React, { Component } from 'react';
import './Many-item.css';
import PropTypes from 'prop-types';

class ManyItem extends Component {

  state = {
    togglePicture: true
  }

  togglePicture = () => {
    let old = this.state.togglePicture;
    this.setState({
      togglePicture: !old
    });
  };

  render() {
    let imageOrButtons = (
      <div>
        <button className="orderBtn">Kecap blagi</button>
        <button className="orderBtn">Kecap ljuti</button>
        <button className="orderBtn">Sa Majonez</button>
        <button className="orderBtn">Sa Origano</button>
        <button className="orderBtn">Tanja kora</button>
        <button className="orderBtn">Deblja kora</button>
        <button className="order orderBtn">Naruci</button>
        <button onClick={this.togglePicture} className="cancel orderBtn">Odlozi</button>
      </div>
    );

    if (this.state.togglePicture) {
      imageOrButtons = <img onClick={this.togglePicture} src={this.props.picture} style={{width:"100%"}} />;
    }

    return (
      <div className="column">
        <div className="card">
          {imageOrButtons}
          <div className="container">
            <h2>{this.props.name}</h2>
            <p>Price: {this.props.price} din</p>
          </div>
        </div>
    </div>
    );
  }
}

ManyItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ManyItem;