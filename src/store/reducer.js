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

const reducer = (state = initialState,action) => {
    switch(action.type){
        default: return state;
    }
}

export default reducer;