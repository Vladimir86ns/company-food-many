import * as actionTypes from './actionType';
import {updateObject} from '../../../store/store-utils';

const initialState = {
  allDoneOrders: [],
  closeOrderError: false
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_ALL_DONE_ORDERS:
      return updateObject(state, {allDoneOrders: action.val});
    case actionTypes.CLOSE_ORDER_WITH_ERROR:
      return updateObject(state, {closeOrderError: action.val});
    default:
      return state;
  }
};

export default reducer;
