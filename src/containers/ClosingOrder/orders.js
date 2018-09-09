import * as actionType from './actionType';
import axios from '../../axios';

export const getAllDoneOrders = (companyId) => {
  return dispatch => {
    axios.get('/company/' + companyId + '/get-done-orders')
    .then(
      response => {
        dispatch(
          {
            type: actionType.GET_ALL_DONE_ORDERS,
            val: response.data
          }
        );
    });
  };
}

export const closeOrder = (orderId) => {
  return (dispatch) => {
    let companyId = localStorage.getItem('company_id');
    axios.post('/company/' + companyId + '/order-close/' + orderId)
      .then( () => {
          window.location.reload();
        }
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