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
