import * as actionTypes from './actions';
import {updateObject} from '../utility';

const initialState = {
    items: {}
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_ITEMS:
      return updateObject(state, {items: action.val});
    default:
        return state;
  }
};

export default reducer;