import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux';
import ItemDisplay from '../Item-show-single/Item-show-single';

class ItemDrink extends Component {

  render() {
    let allBurgerItems = (<div></div>);

    if (this.props.all.length > 0) {
      let category = this.props.categories.find(category => category.name === 'Drinks');

      allBurgerItems = this.props.all.map(function(item) {
        if (item.product_category_id === category.id) {
          return <ItemDisplay
            item={item}
            key={item.id}
            name={item.name}
            picture={item.picture}
            price={+parseFloat(item.price)}/>
        }
        return false;
      });
    }

    return (
      <Aux>
        {allBurgerItems}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
      all: state.itemsReducer.items,
      categories: state.categoriesReducer.categories,
  }
};

const mapDispatchToProps = dispatch => {
  return {
      //
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDrink);
