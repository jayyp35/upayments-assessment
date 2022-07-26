import CONSTANTS from "./constants";

const initialState = {
    loading: false,
    products: []
}

const setLoading = (state,action) => {
    return {
        ...state,
        loading: action.payload
    }
}

const getProductsSuccess = (state,action) => {
    return {
        ...state,
        loading: false,
        products: [...action.payload]
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case CONSTANTS.SET_LOADING: return setLoading(state,action);
        case CONSTANTS.GET_PRODUCTS_SUCCESS: return getProductsSuccess(state,action);
        default: return state;
    }
}

export default reducer;