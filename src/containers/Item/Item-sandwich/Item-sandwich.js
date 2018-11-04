import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux';
import ManyItem from '../Item-show-single/Item-show-single';

class ItemSandwich extends Component {

  render() {
    let allSandwichItems = (<div></div>);

    if (this.props.all.length > 0) {
      let category = this.props.categories.find(category => category.name === 'Sandwich');

      allSandwichItems = this.props.all.map(function(item) {
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
        {allSandwichItems}
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemSandwich);
