import { put, call, select, takeLatest, take } from "redux-saga/effects";
import * as services from "./service";
import CONSTANTS from "./constants";

function* getProducts(payload) {
    yield put({
        type: CONSTANTS.SET_LOADING,
        payload: true,
      });
    const response = yield call(services.getProductsService, {
        ...payload,
    });
    switch (response && response.status) {
        case 200: {
        yield put({
            type: CONSTANTS.GET_PRODUCTS_SUCCESS,
            payload: response?.data,
        });
        break;
        }
        case 400: {
        yield put({
            type: CONSTANTS.SET_LOADING,
            payload: false,
        });
        }
        default:
        return;
    }
}


function* getCategories(payload) {
    yield put({
        type: CONSTANTS.SET_LOADING_CATEGORIES,
        payload: true,
      });
    const response = yield call(services.getCategoriesService, {
      ...payload,
    });
    switch (response && response.status) {
      case 200: {
        yield put({
          type: CONSTANTS.GET_CATEGORIES_SUCCESS,
          payload: response?.data,
        });
        break;
      }
      case 400: {
        yield put({
          type: CONSTANTS.SET_LOADING_CATEGORIES,
          payload: false,
        });
      }
      default:
        return;
    }
}

function* getProductData(payload) {
    yield put({
        type: CONSTANTS.SET_LOADING_PRODUCT,
        payload: true,
      });
    const response = yield call(services.getProductDataService, {
      ...payload,
    });
    switch (response && response.status) {
      case 200: {
        yield put({
          type: CONSTANTS.GET_PRODUCT_SUCCES,
          payload: response?.data,
        });
        break;
      }
      case 400: {
        yield put({
          type: CONSTANTS.SET_LOADING_PRODUCT,
          payload: false,
        });
      }
      default:
        return;
    }
}

function* getCategory(payload) {
  yield put({
      type: CONSTANTS.SET_LOADING_CATEGORIES,
      payload: true,
    });
  const response = yield call(services.getCategoryService, {
    ...payload,
  });
  switch (response && response.status) {
    case 200: {
      yield put({
        type: CONSTANTS.GET_CATEGORIES_SUCCESS,
        payload: response?.data,
      });
      break;
    }
    case 400: {
      yield put({
        type: CONSTANTS.SET_LOADING_CATEGORIES,
        payload: false,
      });
    }
    default:
      return;
  }
}

function* addProduct(payload) {
  yield put({
      type: CONSTANTS.SET_ADDING_PRODUCT,
      payload: true,
    });
  const response = yield call(services.addProductService, {
    ...payload,
  });
  switch (response && response.status) {
    case 201: {
      yield put({
        type: CONSTANTS.ADD_PRODUCT_SUCCESS,
        payload: response?.data,
      });
      payload.payload.navigate('/')
      break;
    }
    case 400: {
      yield put({
        type: CONSTANTS.SET_ADDING_PRODUCT,
        payload: false,
      });
    }
    default:
      return;
  }
}

function* deleteProduct(payload) {
  yield put({
      type: CONSTANTS.SET_DELETING,
      payload: true,
    });
  const response = yield call(services.deleteProductService, {
    ...payload,
  });
  switch (response && response.status) {
    case 200: {
      yield put({
        type: CONSTANTS.DELETE_PRODUCT_SUCCESS,
        payload: response?.data,
      });
      yield put({
        type: CONSTANTS.GET_PRODUCTS
      });
      payload?.payload?.closeModal()
      break;
    }
    case 400: {
      yield put({
        type: CONSTANTS.SET_DELETING,
        payload: false,
      });
    }
    default:
      return;
  }
}


export default function* actionWatcher() {
    yield takeLatest(CONSTANTS.GET_PRODUCTS, getProducts);
    yield takeLatest(CONSTANTS.GET_CATEGORIES,getCategories);
    yield takeLatest(CONSTANTS.GET_PRODUCT,getProductData)
    yield takeLatest(CONSTANTS.GET_CATEGORY,getCategory)
    yield takeLatest(CONSTANTS.ADD_PRODUCT,addProduct)
    yield takeLatest(CONSTANTS.DELETE_PRODUCT,deleteProduct)
}
