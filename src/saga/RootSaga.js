import { all, call, takeLatest } from "redux-saga/effects";
import {
  fetchCryptoCoinData,
  fetchCryptoCoinDataById,
  fetchSearchCurrency,
} from "./CryptoDataSaga";
import {
  cryptoCurruncyDataByIdInit,
  cryptoCurruncyDataInit,
  searchCurruncyInit,
} from "../redux/CurruncyDataSlice";
import { TrendingDataInit } from "../redux/TrendingDataSlice";
import { fetchTrendingCoinsData } from "./TrendingDataSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(cryptoCurruncyDataInit.type, fetchCryptoCoinData),
    takeLatest(cryptoCurruncyDataByIdInit.type, fetchCryptoCoinDataById),
    takeLatest(TrendingDataInit.type, fetchTrendingCoinsData),
    takeLatest(searchCurruncyInit.type, fetchSearchCurrency),
  ]);
}
