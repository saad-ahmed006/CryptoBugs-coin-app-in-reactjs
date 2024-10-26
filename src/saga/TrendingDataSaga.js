import { call, put, select } from "redux-saga/effects";
import { API } from "../utils/api";
import {
    TrendingDataInit,
    TrendingDataSuccess,
    TrendingDataFail,
} from "../redux/TrendingDataSlice";

export function* fetchTrendingCoinsData() {
  try {
        const response = yield call(
      API.getData,'search/trending' );
    yield put(TrendingDataSuccess(response));
  } catch (error) {
    yield put(TrendingDataFail(error));
  }
}
