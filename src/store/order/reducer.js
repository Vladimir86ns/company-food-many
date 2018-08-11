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
      let removeIds = remove(state.orderIds, function( id, index) {
        return  index !== action.val.index;
      });

    return {
      ...state,
      totalPrice: newPrice,
      orderIds: removeIds
  }
    default:
      return state;
  }
};

export default reducer;