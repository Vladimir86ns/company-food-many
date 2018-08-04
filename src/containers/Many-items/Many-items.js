import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import axios from '../../axios';

class ManyItems extends Component {

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

    axios.get('/company/get-product-category/' + companyId)
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
        <Layout allCategories={this.state.companyProducts}>
          {/* {allItems} */}
        </Layout>
      );
    }

    return (
      <div>
        {layouts}
      </div>
    );
  }
}

export default ManyItems;
