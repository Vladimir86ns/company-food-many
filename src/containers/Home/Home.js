import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import asyncComponent from '../../hoc/asyncComponent';
import axios from '../../axios';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom';
import * as actionTypes from '../../store/categories/actions';

const AsyncAll = asyncComponent(() => {
  return import('../../containers/All/All');
});
const AsyncBurger = asyncComponent(() => {
  return import('../../containers/Burger/Burger');
});
const AsyncPancake = asyncComponent(() => {
  return import('../../containers/Pancake/Pancake');
});
const AsyncDrink = asyncComponent(() => {
  return import('../../containers/Drink/Drink');
});
const AsyncPizza = asyncComponent(() => {
  return import('../../containers/Pizza/Pizza');
});
const AsyncOrder = asyncComponent(() => {
  return import('../../containers/Order/Order.js');
});

class Home extends Component {

  state = {
    apiManyItems: [],
    user: {},
    companyProducts: [],
  }

  componentDidMount() {

    if(this.checkUser()) {
      this.props.history.push("login")
    };

    let companyId = localStorage.getItem('company_id');

    axios.get('/company/get-product-categories/' + companyId)
      .then(
        response => {
          this.props.fetchCategories(response.data);
      });
  }

  checkUser() {
    let token = localStorage.getItem('jwt');

    return token === null;
  }

  render() {
    let layouts;
    if (this.props.categories.length > 0) {
      layouts = (
        <Aux>
          <Layout allCategories={this.props.categories} />
          <Switch>
            <Route path={this.props.match.url + '/All'} component={AsyncAll}/>
            <Route path={this.props.match.url + '/Burger'} component={AsyncDrink}/>
            <Route path={this.props.match.url + '/Pancake'} component={AsyncPancake}/>
            <Route path={this.props.match.url + '/Pizza'} component={AsyncPizza}/>
            <Route path={this.props.match.url + '/Drink'} component={AsyncBurger}/>
            <Route path={this.props.match.url + '/Order'} component={AsyncOrder}/>
            <Redirect from="/Home" to="/Home/All" />
          </Switch>
        </Aux>
      );
    }

    return (
      <div>
        {layouts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      categories: state.categoriesReducer.categories,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: (val) => dispatch({type: actionTypes.GET_PRODUCT_CATEGORIES, val}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
