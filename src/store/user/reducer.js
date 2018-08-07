import * as actionTypes from './actions';

const initialState = {
    user: {}
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_USER:
          return {
            ...state,
            user: action.val
        }
        default:
            return state;
    }
};

export default reducer;