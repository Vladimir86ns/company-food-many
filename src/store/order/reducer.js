import * as actionTypes from './actions';

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
    default:
      return state;
  }
};

export default reducer;