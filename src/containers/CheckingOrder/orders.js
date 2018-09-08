import * as actionType from './actionType';
import axios from '../../axios';

export const getAllOrders = (companyId) => {
  return dispatch => {
    axios.get('/company/' + companyId + '/get-orders')
    .then(
      response => {
        dispatch(
          {
            type: actionType.GET_ALL_ORDERS,
            val: response.data
          }
        );
    });
  };
}

export const closeOrder = (itemId) => {
  return dispatch => {
    let companyId = localStorage.getItem('company_id');
    axios.post('/company/' + companyId + '/order-done/' + itemId)
    .then(
      window.location.reload()
    )
    .catch( error => {
        console.log(error.response.data.message)
      }
    );
  };
}