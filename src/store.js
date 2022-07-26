import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas';
import appReducer from './store/reducer'

// export const store = configureStore({
//   reducer: {
//     app: appReducer,
//   },
// });

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    app: appReducer
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
