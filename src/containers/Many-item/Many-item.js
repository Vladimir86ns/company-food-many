import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Many-item.css';
import PropTypes from 'prop-types';
import *  as actionTypes from '../../store/order/actions';

class ManyItem extends Component {

  state = {
    togglePicture: true,
    toggleActiveClass: false,
    showNameWithImage: true,
    pizzaExtras: {
      kecapBlagi: 'Kecap blagi',
      kecapLjuti: 'Kecap ljuti',
      saMajonezom: 'Sa Majonezom',
      saOriginam: 'Sa Origanom',
      tanjaKora: 'Tanja  Kora ',
      deblaKora: 'Deblja kora',
      m: 'Mala',
      s: 'Srednja',
      v: 'Velika',
      p: 'Porodicna',
    },
    singleOrder: {
      kecapBlagi: false,
      kecapLjuti: false,
      saMajonezom: false,
      saOriginam: false,
      tanjaKora: false,
      deblaKora: false,
      m: false,
      s: false,
      v: false,
      p: false,
    }
  }

  togglePicture = () => {
    let old = this.state.togglePicture;
    let showNameWithImage = this.state.showNameWithImage;
    this.setState({
      togglePicture: !old,
      showNameWithImage: !showNameWithImage,
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
      case 'm':
        this.updateSingleOrder(type);
        break;
      case 's':
        this.updateSingleOrder(type);
        break;
      case 'v':
        this.updateSingleOrder(type);
        break;
      case 'p':
        this.updateSingleOrder(type);
      break;
      default:
       return;
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
    let showNameWithImage = (
      <div></div>
    );

    if (this.state.showNameWithImage) {
      showNameWithImage = (
        <div className="container">
          <h2>{this.props.name}</h2>
          <p>Price: {this.props.price} din</p>
      </div>
      );
    }

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
        <div className="container">
            <h4>Price: {this.props.price} din</h4>
          </div>
      </div>
    );

    if (this.state.togglePicture) {
      imageOrButtons = <img onClick={() => this.props.orderItem(this.props.item)} src={this.props.picture} alt="mozdaNema" style={{width:"100%"}} />;
    }

    return (
      <div className="column">
        <div className="card">
          {imageOrButtons}
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

const mapDispatchToProps = dispatch => {
  return {
    orderItem: (val) => dispatch({type: actionTypes.ADD_ITEM, val}),
  }
};

export default connect(null, mapDispatchToProps)(ManyItem);