import * as actionTypes from './actions';
import remove from 'lodash/remove';

const initialState = {
    totalPrice: 0,
    orderIds: []
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.ADD_ITEM:

      let newPrice = state.totalPrice + +action.val.price;
      let ids = state.orderIds;
      ids.push(action.val.id);

      return {
        ...state,
        totalPrice: newPrice,
        orderIds: ids
    }

    case actionTypes.REMOVE_ITEM:
      newPrice = state.totalPrice - action.val.price;
      ids = remove(state.orderIds, function( id, index) {
        return  index !== action.val.index;
      });

    return {
      ...state,
      totalPrice: newPrice,
      orderIds: ids
    }

    case actionTypes.RESET_ORDER_STORE:
    newPrice = 0;
    ids = [];

    return {
      ...state,
      totalPrice: newPrice,
      orderIds: ids
    }
    default:
      return state;
  }
};

export default reducer;