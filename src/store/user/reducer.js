import * as actionTypes from './actions';
import {updateObject} from '../store-utils';

const initialState = {
  user: {}
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.GET_USER:
      return updateObject(state, {user: action.user});
    default:
      return state;
  }
};

export default reducer;