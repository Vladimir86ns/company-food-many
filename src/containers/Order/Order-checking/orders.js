import * as actionType from './actionType';
import axios from '../../../axios';

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
  return (dispatch) => {
    let companyId = localStorage.getItem('company_id');
    axios.post('/company/' + companyId + '/order-done/' + itemId)
    .then(
      window.location.reload()
    )
    .catch( error => {
        if (error.response.data.status_code === 404) {
          dispatch(
            {
              type: actionType.CLOSE_ORDER_WITH_ERROR,
              val: error.response.data.message
            }
          )
        }
      }
    );
  };
}
