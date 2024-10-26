import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
  error: null,
  pagePerDataRedux: 10,
  pageNumberRedux: 1,
  setCurrencyRedux: "usd",
  sortDescDataRedux: "market_cap_desc",
  singleCoinData: {},
  searchData: [],
};

export const curruncySlice = createSlice({
  name: "curruncy",
  initialState,
  reducers: {
    cryptoCurruncyDataInit: (state) => {
      state.loading = true;
    },
    cryptoCurruncyDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    cryptoCurruncyDataFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    pagePerDataSuccess: (state, action) => {
      // console.log(action.payload);
      state.pagePerDataRedux = action.payload;
    },
    pageNumberSuccess: (state, action) => {
      // console.log(action.payload);
      state.pageNumberRedux = action.payload;
    },
    setCurrencySuccess: (state, action) => {
      // console.log(action.payload);
      state.setCurrencyRedux = action.payload;
    },
    sortDescDataSuccess: (state, action) => {
      // console.log(action.payload);
      state.sortDescDataRedux = action.payload;
    },
    cryptoCurruncyDataByIdInit: (state) => {
      state.loading = true;
    },
    cryptoCurruncyDataByIdSuccess: (state, action) => {
      state.loading = false;
      state.singleCoinData = action.payload;
    },
    cryptoCurruncyDataByIdFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    searchCurruncyInit: (state) => {
      state.loading = true;
    },
    searchCurruncySuccess: (state, action) => {
      // console.log(action.payload.coins);
      state.loading = false;
      state.searchData = action.payload.coins;
    },
    searchCurruncyFail: (state, action) => {
      //  console.log(action.payload);
      state.error = action.payload;
    },
  },
});

export const {
  cryptoCurruncyDataInit,
  cryptoCurruncyDataSuccess,
  cryptoCurruncyDataFail,
  pagePerDataSuccess,
  pageNumberSuccess,
  setCurrencySuccess,
  sortDescDataSuccess,
  cryptoCurruncyDataByIdInit,
  cryptoCurruncyDataByIdSuccess,
  cryptoCurruncyDataByIdFail,
  searchCurruncyInit,
  searchCurruncySuccess,
  searchCurruncyFail,
} = curruncySlice.actions;

export default curruncySlice.reducer;
