import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import asyncComponent from '../../hoc/asyncComponent';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect} from 'react-router-dom';
import * as actionTypes from '../../store/categories/index';

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
    this.props.initCategories(companyId);
  }

  checkUser() {
    let token = localStorage.getItem('jwt');

    return token === null;
  }

  render() {
    let layouts = (<h1>Connection failed!</h1>);
    if (this.props.categories.length > 0) {
      layouts = (
        <Aux>
          <Layout allCategories={this.props.categories} />
          <Switch>
            <Route path={this.props.match.url + '/all'} component={AsyncAll}/>
            <Route path={this.props.match.url + '/burger'} component={AsyncDrink}/>
            <Route path={this.props.match.url + '/pancake'} component={AsyncPancake}/>
            <Route path={this.props.match.url + '/pizza'} component={AsyncPizza}/>
            <Route path={this.props.match.url + '/drink'} component={AsyncBurger}/>
            <Route path={this.props.match.url + '/order'} component={AsyncOrder}/>
            <Redirect from="/home" to="/home/all" />
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
    initCategories: (companyId) => dispatch(actionTypes.getProductCategories(companyId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
