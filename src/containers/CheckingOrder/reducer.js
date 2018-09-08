import * as actionTypes from './actionType';
import {updateObject} from '../../store/utility';

const initialState = {
  allOrders: []
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_ALL_ORDERS:
      return updateObject(state, {allOrders: action.val});
    default:
      return state;
  }
};

export default reducer;