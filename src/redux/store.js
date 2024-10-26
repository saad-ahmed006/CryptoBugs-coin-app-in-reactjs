import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import CurruncyDataSlice from "./CurruncyDataSlice";
import TrendingDataSlice from "./TrendingDataSlice";
import SavedDataSlice from "./SavedDataSlice";
import rootSaga from "../saga/RootSaga";
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {CurruncyDataSlice,TrendingDataSlice,SavedDataSlice},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
