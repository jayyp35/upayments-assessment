import { all } from "redux-saga/effects";
import mainSaga from './store/saga'

export default function* rootSaga() {
    yield all([
      mainSaga()
    ]);
}