import { put, call, select, takeLatest } from "redux-saga/effects";
import * as services from "./service";
import CONSTANTS from "./constants";

function* getProducts(payload) {
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

export default function* actionWatcher() {
    yield takeLatest(CONSTANTS.GET_PRODUCTS, getProducts);
}
  