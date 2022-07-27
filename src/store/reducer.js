import CONSTANTS from "./constants";

const initialState = {
    loading: false,
    products: [],
    filteredProducts: [],

    loadingCategories: false,
    categories: [{
        id: 0,
        label: "All",
        value: "All"
    }],
    selectedCategory: null,

    loadingProduct: false,
    productData: null,

    addingProduct: false,

    deleting: false,
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

const setLoadingCategories = (state,action) => {
    return {
        ...state,
        loadingCategories: action.payload
    }
}

const getCategoriesSuccess = (state,action) => {
    let categories = action?.payload?.length ? action.payload.map( cat => {
        return {
            id: cat?.id,
            label: cat?.name,
            value: cat?.name
        }
    }) : []
    return {
        ...state,
        loadingCategories: false,
        categories: [...state.categories,...categories]
    }
}

const setSelectedCategory = (state,action) => {
    return {
        ...state,
        selectedCategory: action.payload
    }
}

const getCategorySuccess = (state,action) => {
    return {
        ...state,
    }
}

const setLoadingProduct = (state,action) => {
    return {
        ...state,
        loadingProduct: action.payload
    }
}

const getProductSuccess = (state,action) => {
    return {
        ...state,
        loadingProduct: false,
        productData: action.payload
    }
}

const filterProducts = (state,action) => {
    let searchTerm = action.payload.search
    let category = action.payload.category?.toUpperCase() === "ALL" ? null : action.payload.category;
    let filtered = state.products.filter((product) => {
        if(category) 
        return product.name.toUpperCase().includes(searchTerm.toUpperCase())  && product.category?.toUpperCase() === category?.toUpperCase()
        else return product.name.toUpperCase().includes(searchTerm.toUpperCase())
    })

    return {
        ...state,
        filteredProducts: [...filtered]
    }
}

const setAddingProduct = (state,action) => {
    return {
        ...state,
        addingProduct: action.payload
    }
}

const addProductSuccess = (state,action) => {
    return {
        ...state,
        addingProduct: false
    }
}

const setDeleting = (state,action) => {
    return {
        ...state,
        deleting: action.payload
    }
}

const deleteProductSuccess = (state,action) => {
    return {
        ...state,
        deleting: false
    }
}

const resetProductData = (state,action) => {
    return {
        loading: false,
        products: [],
        filteredProducts: [],
    
        loadingCategories: false,
        categories: [{
            id: 0,
            label: "All",
            value: "All"
        }],
        selectedCategory: null,
    
        loadingProduct: false,
        productData: null,
    }
}


const reducer = (state = initialState,action) => {
    switch(action.type){
        case CONSTANTS.SET_LOADING: return setLoading(state,action);
        case CONSTANTS.SET_LOADING_CATEGORIES: return setLoadingCategories(state,action);
        case CONSTANTS.SET_LOADING_PRODUCT: return setLoadingProduct(state,action);
        case CONSTANTS.SET_SELECTED_CATEGORY: return setSelectedCategory(state,action)
        case CONSTANTS.SET_ADDING_PRODUCT: return setAddingProduct(state,action);
        case CONSTANTS.SET_DELETING: return setDeleting(state,action);

        case CONSTANTS.GET_PRODUCTS_SUCCESS: return getProductsSuccess(state,action);
        case CONSTANTS.GET_CATEGORIES_SUCCESS: return getCategoriesSuccess(state,action);
        case CONSTANTS.GET_PRODUCT_SUCCES: return getProductSuccess(state,action);
        case CONSTANTS.GET_CATEGORY_SUCCESS: return getCategorySuccess(state,action);
        case CONSTANTS.ADD_PRODUCT_SUCCESS: return addProductSuccess(state,action);
        case CONSTANTS.DELETE_PRODUCT_SUCCESS: return deleteProductSuccess(state,action);
        case CONSTANTS.RESET_PRODUCT_DATA: return resetProductData(state,action);
        case CONSTANTS.FILTER_PRODUCTS: return filterProducts(state,action);
        // case CONSTANTS.FILTER_BY_CATEGORY: return filterByCategory(state,action);
        default: return state;

    }
}

export default reducer;