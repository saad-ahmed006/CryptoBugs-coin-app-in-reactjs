import { call, put, select } from "redux-saga/effects";
import { API } from "../utils/api";
import {
  cryptoCurruncyDataSuccess,
  cryptoCurruncyDataFail,
  cryptoCurruncyDataByIdSuccess,
  cryptoCurruncyDataByIdFail,
  searchCurruncySuccess,
  searchCurruncyFail,
} from "../redux/CurruncyDataSlice";
export function* fetchCryptoCoinData(action) {
  try {
    const {
      pagePerDataRedux,
      pageNumberRedux,
      setCurrencyRedux,
      sortDescDataRedux,
    } = yield select((state) => state.CurruncyDataSlice);

    // let convert_Type_pagePerDataRedux = parseInt(pagePerDataRedux);
    // console.log(convert_Type_pagePerDataRedux,pageNumberRedux,setCurrencyRedux,sortDescDataRedux);
    const response = yield call(
      API.getData,
      `coins/markets?vs_currency=${setCurrencyRedux}&order=${sortDescDataRedux}&per_page=${pagePerDataRedux}&page=${pageNumberRedux}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
    );
    
    yield put(cryptoCurruncyDataSuccess(response));
  } catch (error) {
    yield put(cryptoCurruncyDataFail(error));
  }
}
export function* fetchCryptoCoinDataById(action) {
  try {
    const response = yield call(
      API.getData,
      // `coins/${action.payload}?market_data=true`
      `coins/${action.payload}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
    );
    yield put(cryptoCurruncyDataByIdSuccess(response));
  } catch (error) {
    yield put(cryptoCurruncyDataByIdFail(error));
  }
}
export function* fetchSearchCurrency(action) {
  try {
    // let query = action.payload.length ? action.payload.toLowerCase() : null;
    // let query=action.payload;
    console.log(action.payload);
    // const response = yield call(API.getData, `search?query=${query}`);
    // // console.log(response);
    // yield put(searchCurruncySuccess(response));
  } catch (error) {
    // yield put(searchCurruncyFail(error));
    console.log(error);
  }
}

