import * as actionType from './actionType';
import axios from '../../axios';

export const getProductCategories = (companyId) => {
  return dispatch => {
    axios.get('/company/get-product-categories/' + companyId)
    .then(
      response => {
        dispatch(
          {
            type: actionType.GET_PRODUCT_CATEGORIES,
            val: response.data
          }
        );
    });
  };
}