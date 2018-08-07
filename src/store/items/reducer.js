import * as actionTypes from './actions';

const initialState = {
    items: {}
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ITEMS:
          return {
            ...state,
            items: action.val
        }
        default:
            return state;
    }
};

export default reducer;