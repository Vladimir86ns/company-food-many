import * as actionTypes from './actionType';
import {updateObject} from '../../store/utility';

const initialState = {
  allDoneOrders: []
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_ALL_DONE_ORDERS:
      return updateObject(state, {allDoneOrders: action.val});
    default:
      return state;
  }
};

export default reducer;