import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import asyncComponent from '../../hoc/asyncComponent';
import axios from '../../axios';
import Aux from '../../hoc/Aux';
import { Switch, Route, Redirect} from 'react-router-dom';

const AsyncAll = asyncComponent(() => {
  return import('../../components/All/All');
});
const AsyncBurger = asyncComponent(() => {
  return import('../../components/Burger/Burger');
});
const AsyncPancake = asyncComponent(() => {
  return import('../../components/Pancake/Pancake');
});
const AsyncDrink = asyncComponent(() => {
  return import('../../components/Drink/Drink');
});
const AsyncPizza = asyncComponent(() => {
  return import('../../components/Pizza/Pizza');
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
          this.setState({companyProducts: response.data});
      });
  }

  checkUser() {
    let token = localStorage.getItem('jwt');

    return token === null;
  }

  render() {
    let layouts;

    if (this.state.companyProducts) {
      layouts = (
        <Aux>
          <Layout allCategories={this.state.companyProducts} />
          <Switch>
            <Route path={this.props.match.url + '/All'} component={AsyncAll}/>
            <Route path={this.props.match.url + '/Drink'} component={AsyncDrink}/>
            <Route path={this.props.match.url + '/Pancake'} component={AsyncPancake}/>
            <Route path={this.props.match.url + '/Pizza'} component={AsyncPizza}/>
            <Route path={this.props.match.url + '/Burger'} component={AsyncBurger}/>
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

export default Home;
