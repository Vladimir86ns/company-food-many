import * as actionTypes from './actions';
import {updateObject} from '../utility';

const initialState = {
  user: {}
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_USER:
      return updateObject(state, {user: action.val});
    default:
      return state;
  }
};

export default reducer;