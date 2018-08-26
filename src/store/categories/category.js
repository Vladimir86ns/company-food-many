import * as actionType from './actionType';

export const getProductCategories = (value) => {
  return dispatch => {
    dispatch(
      {
        type: actionType.GET_PRODUCT_CATEGORIES,
        val: value
      }
    );
  };
}