const BASE_URL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study"

export const API_ENDPOINTS = {
    PRODUCTS: {
        GET_PRODUCTS: {
            url: () => BASE_URL + `/products/`
        },
        GET_PRODUCT: {
            url: (payload) => BASE_URL + `/products/${payload.id}`
        },
        ADD_PRODUCT: {
            url: () => BASE_URL + `/products`
        },
        DELETE_PRODUCT: {
            url: (payload) => BASE_URL + `/products/${payload.id}`
        },
    },
    CATEGORIES: {
        GET_CATEGORIES: {
            url: () => BASE_URL + `/categories/`
        },
        GET_CATEGORY: {
            url: (payload) => BASE_URL + `/categories/${payload.id}`
        },
    }
}