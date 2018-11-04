import * as actionTypes from './actionType';
import {updateObject} from '../store-utils';

const initialState = {
  categories: {}
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_PRODUCT_CATEGORIES:
      return updateObject(state, {categories: action.val});
    default:
      return state;
  }
};

export default reducer;