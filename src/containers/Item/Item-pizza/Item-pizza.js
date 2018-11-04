import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux';
import uniqBy from 'lodash/uniqBy'
import ManyItem from '../Display/Display';

class ItemPizza extends Component {

  render() {
    let allBurgerItems = (<div></div>);

    if (this.props.all.length > 0) {
      let category = this.props.categories.find(category => category.name === 'ItemPizza');

      let uniqPizzaNames = uniqBy(this.props.all, 'name');

      allBurgerItems = uniqPizzaNames.map(function(item) {
        if (item.product_category_id === category.id) {
          return <ManyItem
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemPizza);
