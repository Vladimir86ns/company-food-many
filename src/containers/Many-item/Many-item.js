import React, { Component } from 'react';
import './Many-item.css';
import PropTypes from 'prop-types';

class ManyItem extends Component {

  state = {
    togglePicture: true,
    toggleActiveClass: false,
    pizzaExtras: {
      kecapBlagi: 'Kecap blagi',
      kecapLjuti: 'Kecap ljuti',
      saMajonezom: 'Sa Majonez',
      saOriginam: 'Sa Origano',
      tanjaKora: 'Tanja kora',
      deblaKora: 'Deblja kora',
    },
    singleOrder: {
      kecapBlagi: false,
      kecapLjuti: false,
      saMajonezom: false,
      saOriginam: false,
      tanjaKora: false,
      deblaKora: false,
    }
  }

  togglePicture = () => {
    let old = this.state.togglePicture;
    this.setState({
      togglePicture: !old
    });
  };

  toggleActiveClass = (type) => {
    switch (type) {
      case 'kecapBlagi':
        this.updateSingleOrder(type);
        break;
      case 'kecapLjuti':
        this.updateSingleOrder(type);
        break;
      case 'saMajonezom':
        this.updateSingleOrder(type);
        break;
      case 'saOriginam':
        this.updateSingleOrder(type);
        break;
      case 'tanjaKora':
        this.updateSingleOrder(type);
        break;
      case 'deblaKora':
        this.updateSingleOrder(type);
      break;
      }
  };

  updateSingleOrder = (type) => {
    const oldValue = this.state.singleOrder[type];
    const updatedOrder = {
      ...this.state.singleOrder
    }
    updatedOrder[type] = !oldValue;

    this.setState({
      singleOrder: updatedOrder
    })
  }

  render() {

    let imageOrButtons = (
      <div>
        {
          Object.keys(this.state.pizzaExtras).map((key, index) => {
            let type = this.state.pizzaExtras[key];
            let buttonClass = 'orderBtn';

            if (this.state.singleOrder[key]) {
              buttonClass = 'orderBtn active';
            }

            return <button
              key={index}
              onClick={() => this.toggleActiveClass(key)}
              className={buttonClass}
              >{type}</button>
          })
        }
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