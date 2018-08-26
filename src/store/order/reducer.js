import * as actionTypes from './actions';
import remove from 'lodash/remove';

const initialState = {
    totalPrice: 0,
    orderIds: []
};

/**
 * Order reducer
 * @param {object} state
 * @param {object} action
 */
const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.ADD_ITEM:
      return addItem(state, action);
    case actionTypes.REMOVE_ITEM:
      return removeItem(state, action);
    case actionTypes.RESET_ORDER_STORE:
      return resetOrderStore(state);
     default:
      return state;
  }
};

/**
 * Add new item
 * @param {object} state
 * @param {object} action
 */
const addItem = (state, action) => {
  let newPrice = state.totalPrice + +action.val.price;
  let ids = state.orderIds;
  ids.push(action.val.id);

  return {
    ...state,
    totalPrice: newPrice,
    orderIds: ids
  }
}

/**
 * Remove item
 */
const removeItem = (state, action) => {
  let newPrice = state.totalPrice - action.val.price;
  let ids = remove(state.orderIds, function( id, index) {
    return  index !== action.val.index;
  });

  return {
    ...state,
    totalPrice: newPrice,
    orderIds: ids
  }
}

/**
 * Reset order store
 */
const resetOrderStore = (state) => {
  let newPrice = 0;
  let ids = [];

  return {
    ...state,
    totalPrice: newPrice,
    orderIds: ids
  }
}

export default reducer;