import * as actionTypes from './actionType';
import {updateObject} from '../../store/utility';

const initialState = {
  allOrders: []
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_ALL_ORDERS:
      return updateObject(state, {allOrders: action.val});
    case actionTypes.CLOSE_ORDER_WITH_ERROR:
      return updateObject(state, {closeOrderError: action.val});
    default:
      return state;
  }
};

export default reducer;