import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import asyncComponent from '../../hoc/asyncComponent';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';

import { Switch, Route, Redirect} from 'react-router-dom';
import * as actionTypes from '../../store/categories/index';

const AsyncAll = asyncComponent(() => {
  return import('../Item/Item-all/Item-all');
});
const AsyncBurger = asyncComponent(() => {
  return import('../Item/Item-burger/Item-burger');
});
const AsyncPancake = asyncComponent(() => {
  return import('../Item/Item-pancake/Item-pancake');
});
const AsyncDrink = asyncComponent(() => {
  return import('../Item/Item-drink/Item-drink');
});
const AsyncPizza = asyncComponent(() => {
  return import('../Item/Item-pizza/Item-pizza');
});
const AsyncSandwich = asyncComponent(() => {
  return import('../Item/Item-sandwich/Item-sandwich.js');
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
            <Route path={this.props.match.url + '/All'} component={AsyncAll}/>
            <Route path={this.props.match.url + '/Burgers'} component={AsyncBurger}/>
            <Route path={this.props.match.url + '/Item-pancake'} component={AsyncPancake}/>
            <Route path={this.props.match.url + '/Item-pizza'} component={AsyncPizza}/>
            <Route path={this.props.match.url + '/Drinks'} component={AsyncDrink}/>
            <Route path={this.props.match.url + '/Item-sandwich'} component={AsyncSandwich}/>
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
    initCategories: (companyId) => dispatch(actionTypes.getProductCategories(companyId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
