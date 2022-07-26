import CONSTANTS from './constants'

export const setLoading = (payload) => {
    return {
        type: CONSTANTS.SET_LOADING,
        payload
    }
}

export const getProducts = (payload) => {
    return {
        type: CONSTANTS.GET_PRODUCTS,
        payload
    }
}