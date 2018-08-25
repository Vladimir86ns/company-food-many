import * as actionTypes from './actionType';

const initialState = {
    categories: {}
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_PRODUCT_CATEGORIES:
          return {
            ...state,
            categories: action.val
        }
        default:
            return state;
    }
};

export default reducer;