import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux';
import axios from '../../../axios';
import ManyItem from '../Item-show-single/Item-show-single';
import * as actionTypes from '../../../store/items/actions';

class ItemAll extends Component {

  componentDidMount()
  {
    let companyId = localStorage.getItem('company_id');

    axios.get('/company/products/' + companyId)
      .then(
        response => {
          this.props.fetchItems(response.data);
      });
  }

  render() {

    let allItems = (<div></div>);
    if (this.props.all.length > 0) {
      allItems = this.props.all.map(function(item) {
        return <ManyItem
          item={item}
          key={item.id}
          name={item.name}
          picture={item.picture}
          price={+parseFloat(item.price)}/>
      });
    }

    return (
      <Aux>
        {allItems}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
      all: state.itemsReducer.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
      fetchItems: (val) => dispatch({type: actionTypes.GET_ITEMS, val}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemAll);
