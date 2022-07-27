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

export const getCategories = (payload) => {
    return {
        type: CONSTANTS.GET_CATEGORIES,
        payload
    }
}

export const setSelectedCategory = (payload) => {
    return {
        type: CONSTANTS.SET_SELECTED_CATEGORY,
        payload
    }
}

export const getCategory = (payload) => {
    return {
        type: CONSTANTS.GET_CATEGORY,
        payload
    }
}

export const getProductData = (payload) => {
    return {
        type: CONSTANTS.GET_PRODUCT,
        payload
    }
}

export const filterProducts = (payload) => {
    return {
        type: CONSTANTS.FILTER_PRODUCTS,
        payload
    }
}

export const filterByCategory = (payload) => {
    return {
        type: CONSTANTS.FILTER_BY_CATEGORY,
        payload
    }
}

export const addProduct = (payload) => {
    return {
        type: CONSTANTS.ADD_PRODUCT,
        payload
    }
}

export const deleteProduct = (payload) => {
    return {
        type: CONSTANTS.DELETE_PRODUCT,
        payload
    }
}

export const resetProductData = () => {
    return {
        type: CONSTANTS.RESET_PRODUCT_DATA
    }
}